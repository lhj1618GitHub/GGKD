# RawAppRule 应用规则 - 新手速查手册 - [官网-API](https://gkd.li/api/)

## 📌 基础信息
- **类型**: 应用规则（App类型规则）
- **继承**: RawRuleProps.RawAppRuleProps
- **用途**: 定义在特定应用中如何匹配界面元素并执行操作

---

## ⚙️ 核心属性速查表

### 1️⃣ 执行控制
| 属性               | 类型                            | 默认值    | 说明                                       |
| ------------------ | ------------------------------- | --------- | ------------------------------------------ |
| `action`           | `"click" \| "clickNode" \| ...` | `"click"` | 匹配后的操作（点击、长按、返回等）         |
| `actionCd`         | Integer                         | `1000`    | 冷却时间（毫秒），同一规则两次执行最小间隔 |
| `actionDelay`      | Integer                         | -         | 延迟执行：找到节点→等待→再次找到才执行     |
| `actionMaximum`    | Integer                         | -         | 最大执行次数，达到后规则休眠               |
| `actionCdKey`      | Integer                         | -         | 与指定key的规则共享CD                      |
| `actionMaximumKey` | Integer                         | -         | 与指定key的规则共享执行次数                |

### 2️⃣ 匹配时机
| 属性           | 类型                             | 默认值       | 说明                               |
| -------------- | -------------------------------- | ------------ | ---------------------------------- |
| `matchDelay`   | Integer                          | -            | 规则准备匹配时等待时间（毫秒）     |
| `matchTime`    | Integer                          | -            | 规则参与匹配的持续时间（毫秒）     |
| `forcedTime`   | Integer                          | -            | 强制主动查询屏幕节点的时间（毫秒） |
| `priorityTime` | Integer                          | -            | 优先级规则持续时间                 |
| `resetMatch`   | `"activity" \| "match" \| "app"` | `"activity"` | 如何重置休眠规则                   |

### 3️⃣ 匹配范围
| 属性                 | 类型     | 默认值  | 说明                        |
| -------------------- | -------- | ------- | --------------------------- |
| `activityIds`        | string[] | -       | 匹配的界面ID（Activity ID） |
| `excludeActivityIds` | string[] | -       | 排除的界面ID（优先级更高）  |
| `matchRoot`          | boolean  | `false` | 是否从根节点开始匹配        |

### 4️⃣ 选择器（Selector）
| 属性                | 类型     | 说明                       |
| ------------------- | -------- | -------------------------- |
| `matches`           | string[] | **所有**选择器都匹配才执行 |
| `anyMatches`        | string[] | **任一**选择器匹配就执行   |
| `excludeMatches`    | string[] | 任一匹配就**停止**规则     |
| `excludeAllMatches` | string[] | 全部匹配才**停止**规则     |
| `fastQuery`         | boolean  | `false`                    |

### 5️⃣ 版本控制
| 属性           | 类型           | 说明                           |
| -------------- | -------------- | ------------------------------ |
| `versionName`  | StringMatcher  | 应用版本名称匹配               |
| `versionCode`  | IntegerMatcher | 应用版本代码匹配               |
| `versionNames` | string[]       | **已弃用** - 用versionName代替 |
| `versionCodes` | Integer[]      | **已弃用** - 用versionCode代替 |

### 6️⃣ 其他
| 属性           | 类型      | 默认值 | 说明                             |
| -------------- | --------- | ------ | -------------------------------- |
| `order`        | Integer   | `0`    | 匹配顺序，越小越优先             |
| `key`          | Integer   | -      | 规则唯一标识（设置后不可改）     |
| `name`         | string    | -      | 规则名称                         |
| `preKeys`      | Integer[] | -      | 要求哪些规则刚执行过（顺序执行） |
| `position`     | Position  | -      | 自定义点击位置                   |
| `snapshotUrls` | string[]  | -      | 匹配界面快照链接                 |
| `exampleUrls`  | string[]  | -      | 规则运行示例（图片/GIF）         |

---

## 🎯 Action 类型详解
| 值                | 说明                           | 适用场景       |
| ----------------- | ------------------------------ | -------------- |
| `click`           | 默认点击（智能选择最佳方式）   | 大多数情况     |
| `clickNode`       | 点击无障碍节点（节点需可点击） | 精确点击       |
| `clickCenter`     | 点击节点中心坐标               | 节点不可点击时 |
| `longClick`       | 默认长按（智能选择）           | 需要长按操作   |
| `longClickNode`   | 长按无障碍节点                 | 精确长按       |
| `longClickCenter` | 长按节点中心坐标               | 节点不可长按时 |
| `back`            | 返回键操作                     | 关闭弹窗等     |
| `none`            | 仅匹配，不操作                 | 作为标记使用   |

---

## ⚠️ 注意事项

1. **`key`属性**：一旦设置就**不要更改**，否则会导致点击记录混乱
2. **版本匹配**：优先使用`versionName`/`versionCode`，弃用`versionNames`/`versionCodes`
3. **选择器优先级**：`matches` > `anyMatches`
4. **排除规则优先级**：`excludeActivityIds` > `activityIds`
5. **匹配中断**：普通规则匹配时，新事件到来会中断匹配重新开始
- 所有时间单位均为毫秒（ms）
---

## 🔧 调试与维护
- **快照链接**：添加`snapshotUrls`方便他人理解匹配界面
- **示例链接**：添加`exampleUrls`（GIF最佳）展示规则实际效果
- **匹配优化**：遇到性能问题可尝试`fastQuery: true`

---

