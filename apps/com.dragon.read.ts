{
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '弹窗广告-宝箱相关',
      desc: '领取/结算',
      fastQuery: true,
      matchTime: 8000,
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
      ],
      rules: [
        {
          key: 0,
          name: '开启宝箱',
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
          action: 'back',
          matches: [
            '[text="2s后即将进入广告"]',
            '[vid="an1"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.dragon.read.component.shortvideo.impl.ShortSeriesActivity',
          ],
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
    {
      key: 4,
      name: '弹窗广告-签到',
      desc: '立即领取/关闭结算/立即签到',
      matchTime: 5000,
      activityIds: [
        'com.dragon.read.pages.main.MainFragmentActivity',
      ],
      rules: [
        {
          key: 1,
          name: '七天签到-立即领取',
          matches: [
            '@ViewGroup[width=664][height=122]',
          ],
          actionMaximum: 1,
        },
        {
          key: 2,
          name: '关闭签到结算',
          position: {
            left: 'width * 0.5',
            top: 'width * 0.6',
          },
          matches: [
            '@ViewGroup[width=664][height=122]',
          ],
        },
        {
          key: 3,
          name: '今日签到可领-立即签到',
          position: {
            left: 'width * 1.5',
            top: 'width * 2.8',
          },
          matches: [
            '@ViewGroup[width=272][height=89]',
          ],
          actionMaximum: 1,
        },
        {
          key: 4,
          name: '关闭明日签到可领',
          position: {
            left: 'width * 1.6',
            top: 'width * 3.9',
          },
          matches: [
            '@ViewGroup[width=272][height=89]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '内嵌广告-翻卡',
      desc: '看广告翻卡领金币',
      matchTime: 5000,
      rules: [
        {
          key: 0,
          name: '开始翻卡',
          matches: [
            '@ViewGroup[childCount=4][visibleToUser=true][height=485]',
          ],
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
          ],
        },
        {
          key: 1,
          name: '领取成功-点x',
          matches: [
            '@ViewGroup[width=246][top=129][left=789]',
            '@ImageView[width=22][height=23][top=163][right=1000]',
          ],
          activityIds: [
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
          ],
        },
        {
          key: 2,
          name: '关-获得权益弹窗',
          position: {
            left: 'width * 0.5',
            top: 'width * 1.3',
          },
          matches: [
            '@ViewGroup[width=806][height=919]',
          ],
          activityIds: [
            'com.ss.android.excitingvideo.ExcitingVideoActivity',
          ],
        },
      ],
    },
  ],
}