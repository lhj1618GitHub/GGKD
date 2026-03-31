{
  id: 'com.phoenix.read',
  name: '红果免费短剧',
  groups: [
    {
      key: 1,
      name: '内嵌广告-剧集广告',
      desc: '广告预警时[返回]',
      rules: [
        {
          action: 'back',
          matches: [
            '[text*="2s后"]',
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
      key: 2,
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
      key: 3,
      name: '弹窗广告-其它弹窗',
      desc: '恭喜/获得/七天签到',
      matchTime: 5000,
      rules: [
        {
          key: 1,
          name: '恭喜获得金币',
          position: {
            left: 'width * 0.75',
            top: 'width * 3.2',
          },
          matches: [
            '@ViewGroup[height=113][top=1028][childCount=3]',
          ],
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
          ],
        },
        {
          key: 2,
          name: '看短剧赚金币',
          matches: [
            '[vid="title"][text="恭喜你获得"]',
            '[vid="ean"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
          ],
        },
        {
          key: 3,
          name: '获得预约礼包-x-立即领取',
          matches: [
            '@ViewGroup <7 FrameLayout < [vid="au5"]',
            '@ViewGroup <3 FrameLayout < [vid="au5"]',
          ],
          fastQuery: true,
        },
        {
          key: 4,
          name: '获得权益',
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
        {
          key: 5,
          name: '七天签到-看视频再得金币',
          position: {
            left: 'width * 0.5',
            top: 'width * 0.6',
          },
          matches: [
            '@ViewGroup[width=664][index=0][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 4,
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
      key: 5,
      name: '自动化-删除浏览历史',
      desc: '点[确认]',
      rules: [
        {
          matches: [
            '[text="确定删除浏览历史吗？"]',
            '[vid="clo"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.dragon.read.pages.main.MainFragmentActivity',
          ],
        },
      ],
    },
  ],
}