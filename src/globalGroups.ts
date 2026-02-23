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
excludeSnapshotUrls:[],
}
]);
