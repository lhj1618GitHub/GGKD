import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'li.lhj1618.gkd',
  name: 'GKD',
  groups: [   
{
  key: 1,
  name: '弹窗广告',
  desc: '点击[文字]',
  fastQuery: true,
  actionMaximum: 1,
  matchTime: 10000,
  resetMatch: 'app',
  rules: [
    {
      key: 1,
      fastQuery: true,
      activityIds: '应用及界面id',
      matches: '[属性值]',
      snapshotUrls: '快照地址',
         ]
}
        ]
});
