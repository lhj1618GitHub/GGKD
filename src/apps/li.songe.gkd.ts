import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'li.lhj1618.gkd',
  name: 'GKD',
  groups: [
{key:0,
name:'开屏广告',
desc:'跳过/跳过广告/关闭',
actionMaximum: 1,
matchTime: 4000,
resetMatch: 'app',
excludeMatches:'()',
anyMatches:['[text*="跳过" || text*="跳过广告"|| text*="关闭"][text.length<10][visibleToUser=true]'],
snapshotUrls:[],
excludeSnapshotUrls:[]
},
    
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
