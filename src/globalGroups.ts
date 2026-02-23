import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {key:0,
name:'开屏广告',
desc:'跳过/跳过广告/关闭',
fastQuery: true,
matchTime: 5000,
actionMaximum: 1,
resetMatch: 'app',
rules: [
    {
      key: 0,
      matches: '[text*="跳过" || text*="跳过广告"|| text*="关闭"][text.length<10][visibleToUser=true]',
    },
      ],
 }
]);
