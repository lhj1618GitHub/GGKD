{
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
  key: 1,
  name: '弹窗广告-宝箱相关',
  desc: '领取/结算',
  fastQuery: true,
  matchTime: 10000,
  activityIds: [
    'com.dragon.read.pages.main.MainFragmentActivity',
  ],
  rules: [
    {
      key: 0,
      name: '开启宝箱',
      position: {
        left: 'width * 0',
        top: 'width * 8',
      },
      matches: [
        '@ViewGroup[width=18][index=0][visibleToUser=true]',
      ],
    },
    {
      key: 1,
      name: '关闭宝箱结算',
      position: {
        left: 'width * -3.6',
        top: 'width * 8',
      },
      matches: [
        '@ViewGroup[desc="第?个"][visibleToUser=true]',
      ],
    },
  ],
},
{
      key: 2,
      name: '内嵌广告-剧集广告',
      desc: '广告预警时[返回]',
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds: 'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          position: {
            top: 'width * -6.8161',
            left: 'width * -1.0806',
          },
          matches: '[vid="an1"][text="2s后即将进入广告"]',
        },
      ],
    },
{
  key: 3,
  name: '弹窗广告-推送提醒',
  desc: '点[取消]',
  rules: [
    {
      matches: [
        '[vid="j3"][text="开启推送提醒"]',
        '[vid="cm_"]',
      ],
      fastQuery: true,
      activityIds: [
        'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
      ],
    },
  ],
},
  ],
}