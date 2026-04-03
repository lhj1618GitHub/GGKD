# GKD选择器结构指南（快速对照版）

## 一、结构关系速查表

### 基础关系符号
| 符号   | 含义         | 示例       | 说明                |
| ------ | ------------ | ---------- | ------------------- |
| `<`    | 直接父子关系 | `A < B`    | A是B的直接子节点    |
| `<<n`  | 祖先关系     | `A <<n B`  | B是A的祖先节点      |
| `-N`   | 前兄弟节点   | `A -1 B`   | B是A前面的第1个兄弟 |
| `+N`   | 后兄弟节点   | `A +1 B`   | B是A后面的第1个兄弟 |
| `>`    | 子节点选择   | `A > B`    | B是A的子节点        |
| `>(N)` | 第N个子节点  | `A >(2) B` | B是A的第2个子节点   |

## 二、常见UI结构模式

### 1. 弹窗结构
```
FrameLayout (弹窗容器)
├── LinearLayout (内容区)
│   ├── TextView[text="标题"]
│   └── Button[text="确定"]  ← 目标按钮
└── ImageView[clickable=true]  ← 关闭按钮
```

**对应选择器：**
```javascript
// 关闭按钮
'@ImageView[clickable=true] < FrameLayout[childCount=2]'

// 确定按钮
'@Button[text="确定"] <<n FrameLayout[childCount>1]'
```

### 2. 列表项结构
```
RecyclerView
└── LinearLayout[0] (第1项)
    ├── ImageView[0] (图标)
    ├── TextView[0] (标题)
    └── Button[0] (操作)  ← 目标
```

**对应选择器：**
```javascript
// 匹配列表中的操作按钮
'@Button[clickable=true] <<n LinearLayout[childCount=3]'
```

### 3. 广告卡片结构
```
FrameLayout (广告容器)
├── RelativeLayout
│   ├── TextView[text*="广告"]
│   └── ImageView[clickable=true]  ← 关闭按钮
└── ImageView (广告图片)
```

**对应选择器：**
```javascript
// 广告关闭按钮
'@ImageView[clickable=true][width<90] <<n FrameLayout > TextView[text*="广告"]'
```

## 三、结构稳定性等级

### ✅ 高稳定性结构（推荐）
```javascript
// 1. 固定层级的父子关系
'A < B < C'  // 明确的三层结构

// 2. 容器+内容的组合
'@ImageView[clickable=true] < FrameLayout[childCount=1]'

// 3. 基于数量的结构验证
'<<n FrameLayout[childCount>3]'  // 容器有多个子元素
```

### ⚠️ 中稳定性结构（谨慎使用）
```javascript
// 1. 依赖兄弟顺序
'A -2 B'  // 前第2个兄弟，顺序可能变

// 2. 固定子节点位置
'A >(3) B'  // 第3个子节点，位置可能变
```

### ❌ 低稳定性结构（避免使用）
```javascript
// 1. 绝对索引
'RecyclerView > View[0]'  // 列表第1项，内容会变

// 2. 复杂的位置计算
'A -3 B +1 C'  // 过于复杂，易失效
```

## 四、实用结构模式库

### 模式1：关闭按钮在角落
```javascript
// 小关闭按钮在容器的角上
'@ImageView[clickable=true][width<90][height<90] < FrameLayout[childCount>2]'
```

### 模式2：按钮在弹窗底部
```javascript
// 弹窗底部的操作按钮
'@Button[text="确定"] <<n FrameLayout > LinearLayout[childCount=2] > LinearLayout[1]'
```

### 模式3：图标+文字的组合
```javascript
// 图标在前，文字在后
'@ImageView[clickable=true] + TextView[text*="下载"]'
```

### 模式4：多层嵌套验证
```javascript
// 确保在正确的容器内
'@Button[clickable=true] <<n FrameLayout[id="dialog"] <<n FrameLayout[visibleToUser=true]'
```

## 五、结构调试技巧

### 查看结构层级
```javascript
// 在GKD调试模式中查看：
1. 目标元素的完整路径
2. 兄弟节点的数量
3. 容器的childCount值
```

### 简化复杂结构
```javascript
// ❌ 过于复杂
'A < B < C < D >(2) E'

// ✅ 简化后
'A <<n D > E[text="目标"]'
```

## 六、实战案例解析

### 案例：抖音广告关闭
```javascript
{
  matches: '@ImageView[clickable=true][width<90] -2 TextView[text*="广告"] <<n FrameLayout',
  // 结构：关闭按钮 ←前2个兄弟是"广告"文字←在FrameLayout内
}
```

### 案例：微信授权弹窗
```javascript
{
  matches: [
    'TextView[text*="微信登录"]',  // 弹窗标题
    '@Button[text="允许"] <<n FrameLayout[childCount=3]'  // 在特定结构内
  ]
}
```

## 七、快速参考卡片

### 选择器结构优先级
1. **功能定位**：`[clickable=true]` + `[visibleToUser=true]`
2. **容器验证**：`<<n [childCount>N]` 或 `< [childCount=N]`
3. **内容辅助**：兄弟节点的 `[text*="关键词"]`
4. **位置辅助**：`-N` 或 `+N`（最后考虑）

### 结构匹配四步法
```javascript
// 第一步：目标元素自身
'@Button[clickable=true][text="确定"]'

// 第二步：直接容器
'< LinearLayout[childCount=2]'

// 第三步：祖先容器验证
'<<n FrameLayout[childCount>1]'

// 第四步：上下文验证（可选）
'<<n FrameLayout > TextView[text*="提示"]'
```

### 避免的结构陷阱
- ❌ 不要依赖 `[index=N]`（列表顺序会变）
- ❌ 不要依赖 `[left=N][top=N]`（坐标会变）
- ❌ 不要过度嵌套（超过3层易失效）
- ✅ 优先使用 `childCount` 验证
- ✅ 优先使用 `<<n` 而非多级 `<`

---

**结构设计口诀**：
> 先定功能，再找容器，  
> 验证结构，辅助内容，  
> 少用位置，多用关系，  
> 三层以内，稳定第一。