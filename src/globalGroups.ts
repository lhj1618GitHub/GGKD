import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
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
