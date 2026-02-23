import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
//全局
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
  
//activityIds:活动id=应用id+界面id
  {
  key: 1,
  name: '内嵌广告-1',
  "desc": "功能描述",
  rules: [
    {
      key: 0,
      fastQuery: true,
      activityIds: '应用及界面id',
      matches: '[属性值]',
      snapshotUrls: '快照地址',
      [visibleToUser=true]"],
    },
    {
      key: 1,
      fastQuery: true,
      activityIds: '应用及界面id',
      matches: '[属性值]',
      snapshotUrls: '快照地址',
      [visibleToUser=true]"],
    },
  ],
}
]);
