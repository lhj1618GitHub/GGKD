import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lhj1618.shuoming',
  name: '说明',
  groups: [
{key:0,
name:'开屏广告',
desc:'跳过/跳过广告/关闭',
actionMaximum: 1,
matchTime: 4000,
resetMatch: 'app',
anyMatches:['[text*="跳过" || text*="跳过广告"|| text*="关闭"][text.length<10][visibleToUser=true]'],
snapshotUrls:[],
},
{
  key: 1,
  name: '弹窗广告',
  desc: '点击[我知道了]',
  fastQuery: true,
  actionMaximum: 1,
  resetMatch: 'app',
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
