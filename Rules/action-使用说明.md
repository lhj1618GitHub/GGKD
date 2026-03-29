# [GKD-api-完整说明](https://gkd.li/api/)

## 常用值

- `action: 'back',`：使用返回键
- `action: 'click',`： 默认点击

   -为默认值, 如果目标节点是 clickable 的, 则使用 `clickNode`, 反之使用 `clickCenter`;并且当 `clickNode` 事件没有被应用接收时, 则使用 `clickCenter`;
  
- `action: 'longClick',`：长按

   -长按时间为 500 毫秒；如果目标节点是 longClickable 的, 则使用 `longClickNode`, 反之使用 `longClickCenter`；并且当 `longClickNode` 事件没有被应用接收时, 则使用 `longClickCenter`；
  
- `action: 'none',`：什么都不做；仅作为匹配标记使用;
