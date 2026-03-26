//红果免费短剧
{
  key: 1,
  name: '弹窗广告-宝箱相关',
  desc: '领取/结算',
  matchTime: 10000,
  rules: [
    {
      key: 0,
      name: '开启宝箱',
      position: {
        left: 'width * 0.5000',
        top: 'width * 0.6000',
      },
      matches: [
        'ViewGroup[width=18][height=220][index=1]',
        '@ViewGroup[width=332][height=222]',
      ],
      fastQuery: true,
      activityIds: [
        '.pages.main.MainFragmentActivity',
      ],
    },
    {
      key: 1,
      name: '关闭宝箱结算',
      position: {
        left: 'width * -5.0000',
        top: 'width * 13.5000',
      },
      matches: [
        '@ViewGroup[width=24][height=58][index=7]',
      ],
      fastQuery: true,
      activityIds: [
        '.pages.main.MainFragmentActivity',
      ],
    },
  ],
}