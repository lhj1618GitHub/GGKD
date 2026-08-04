[GKD-API官网](https://gkd.li/api/)，创建一个快速查找的索引：

## 📚 GKD API 快速入门参考手册

### 一、核心接口概览

| 接口                | 用途说明               |
| ------------------- | ---------------------- |
| **RawSubscription** | 订阅配置根节点         |
| **RawApp**          | 单个应用配置           |
| **RawGlobalGroup**  | 全局规则组             |
| **RawCategory**     | 应用分类               |
| **RawAppRule**      | **应用规则（最常用）** |
| **RawAppGroup**     | 应用规则组             |
| **RawGlobalRule**   | 全局规则               |
| **RawGlobalApp**    | 全局应用配置           |

---

### 二、RawAppRule（应用规则）快速参考

#### 🔧 基础属性
| 属性        | 类型              | 默认值 | 说明                         |
| ----------- | ----------------- | ------ | ---------------------------- |
| **key**     | `Integer`         | -      | 规则唯一标识，设置后不可更改 |
| **name**    | `string`          | -      | 规则名称                     |
| **order**   | `Integer`         | `0`    | 匹配顺序，数字越小越优先     |
| **preKeys** | `IArray<Integer>` | -      | 要求前序规则执行后才能触发   |

#### 🎯 匹配控制
| 属性                   | 类型             | 默认值 | 说明                                   |
| ---------------------- | ---------------- | ------ | -------------------------------------- |
| **matches**            | `IArray<string>` | -      | **主要选择器**，全部匹配则点击最后一个 |
| **anyMatches**         | `IArray<string>` | -      | 任一匹配则点击该节点                   |
| **excludeMatches**     | `IArray<string>` | -      | 任一匹配则停止规则                     |
| **excludeAllMatches**  | `IArray<string>` | -      | 全部匹配则停止规则                     |
| **activityIds**        | `IArray<string>` | -      | 界面ID匹配（startWith）                |
| **excludeActivityIds** | `IArray<string>` | -      | 排除界面ID                             |

#### ⏱️ 时间控制
| 属性            | 类型      | 默认值 | 说明                 |
| --------------- | --------- | ------ | -------------------- |
| **actionCd**    | `Integer` | `1000` | 冷却时间（毫秒）     |
| **actionDelay** | `Integer` | -      | 延迟执行时间（毫秒） |
| **matchDelay**  | `Integer` | -      | 匹配延迟时间（毫秒） |
| **matchTime**   | `Integer` | -      | 规则匹配时间（毫秒） |
| **forcedTime**  | `Integer` | -      | 强制查询时间（毫秒） |

#### 🔄 执行控制
| 属性              | 类型       | 默认值       | 说明                                             |
| ----------------- | ---------- | ------------ | ------------------------------------------------ |
| **action**        | 枚举值     | `click`      | 执行动作：`click`, `back`, `longClick`, `none`等 |
| **position**      | `Position` | -            | 自定义点击位置                                   |
| **actionMaximum** | `Integer`  | -            | 最大执行次数                                     |
| **resetMatch**    | 枚举       | `'activity'` | 重置方式：`activity`, `match`, `app`             |

#### ⚡ 性能优化
| 属性                      | 类型      | 默认值  | 说明               |
| ------------------------- | --------- | ------- | ------------------ |
| **fastQuery**             | `boolean` | `false` | 启用快速查询优化   |
| **matchRoot**             | `boolean` | `false` | 从根节点开始匹配   |
| **priorityTime**          | `Integer` | -       | 优先级时间（毫秒） |
| **priorityActionMaximum** | `Integer` | `1`     | 优先级执行次数     |

#### 📊 版本控制
| 属性             | 类型              | 说明         |
| ---------------- | ----------------- | ------------ |
| **versionName**  | `StringMatcher`   | 版本名称匹配 |
| **versionCode**  | `IntegerMatcher`  | 版本代码匹配 |
| **versionNames** | `IArray<string>`  | ⚠️ 已弃用     |
| **versionCodes** | `IArray<Integer>` | ⚠️ 已弃用     |

#### 🖼️ 可视化
| 属性                    | 类型             | 说明                |
| ----------------------- | ---------------- | ------------------- |
| **snapshotUrls**        | `IArray<string>` | 匹配界面快照        |
| **excludeSnapshotUrls** | `IArray<string>` | 排除界面快照        |
| **exampleUrls**         | `IArray<string>` | 运行示例（支持gif） |

#### 🔗 关联规则
| 属性                 | 类型      | 说明              |
| -------------------- | --------- | ----------------- |
| **actionCdKey**      | `Integer` | 共享CD的规则key   |
| **actionMaximumKey** | `Integer` | 共享次数的规则key |

---

### 三、常用配置示例

#### 1. 基础点击规则
```json
{
  "key": 1,
  "name": "关闭广告",
  "matches": ["[text='关闭']"],
  "action": "click"
}
```

#### 2. 带条件限制的规则
```json
{
  "key": 2,
  "name": "跳过广告",
  "activityIds": [".MainActivity"],
  "matches": ["[text*='跳过']"],
  "action": "click",
  "actionMaximum": 1,
  "resetMatch": "app"
}
```

#### 3. 复杂选择器规则
```json
{
  "key": 3,
  "name": "青少年模式",
  "matches": [
    "[text='我知道了']",
    "[text='同意']"
  ],
  "actionDelay": 500,
  "actionCd": 2000
}
```

---

### 四、核心概念速查

#### **动作类型（action）**
- `click`：智能点击（默认）
- `clickNode`：节点点击事件
- `clickCenter`：坐标点击事件
- `back`：返回键
- `longClick`：长按
- `none`：仅匹配不操作

#### **重置类型（resetMatch）**
- `activity`：界面刷新时重置
- `match`：匹配状态变化时重置
- `app`：重新进入应用时重置

#### **选择器语法**
```javascript
// 基础选择器
"[text='确定']"                                // 文本等于
"[text*='跳过']"                               // 文本包含
"[id='com.xxx:id/close']"                     // ID匹配
"[desc='关闭按钮']"                            // 描述匹配
"[childCount=3]"                              // 子节点数
"[index=parent.childCount.minus(1)]"          // 末尾子节点

// 组合选择器
"A > B"                      // 直接子节点
"A B"                        // 后代节点
"A + B"                      // 相邻兄弟
"[clickable=true] - [text='关闭']"  // 兄弟节点
```

---

### 五、最佳实践提示

1. **key的重要性**：设置后永远不要更改，否则点击记录会错乱
2. **匹配顺序**：使用 `order` 控制规则优先级
3. **版本控制**：优先使用 `versionName` 和 `versionCode`，弃用旧字段
4. **性能优化**：对于复杂页面开启 `fastQuery` 和 `matchRoot`
5. **防止误触**：合理使用 `preKeys` 和 `actionMaximum`

这个快速参考包含了最常用的 API 属性和用法，你可以按需查找。需要更详细的说明时，可以查看对应属性的完整文档。
