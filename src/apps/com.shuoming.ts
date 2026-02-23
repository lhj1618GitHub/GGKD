import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lhj1618.shuoming',
  name: '说明',
  groups: [
{
  key: 1,
  name: '弹窗广告',
  desc: '点击[我知道了]',
  rules: [
    {
      key: 1,
      fastQuery: true,
      activityIds: 'com.lhj1618.shuoming.jiemianid',
      matches: '[desc="我知道了"][visibleToUser=true]',
      snapshotUrls: '',
         ]
}
  ]
});
