{
  key: 1,
  name: '弹窗广告-宝箱相关',
  desc: '领取/结算',
  fastQuery: true,
  matchTime: 10000,
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
      fastQuery: true,
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
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
        '@ViewGroup[desc="第?个"][width=66][visibleToUser=true]',
      ],
      fastQuery: true,
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
      ],
    },
  ],
}