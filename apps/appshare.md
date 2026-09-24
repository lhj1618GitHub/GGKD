```json5
{
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 1,
      name: '内嵌广告-启动广告',
      desc: '[跳过]',
      matchTime: 5000,
      rules: [
        {
          matches: [
            '[vid="v_jump"]',
          ],
          fastQuery: true,
          activityIds: [
            '.MainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '自动化-签到',
      desc: '[签到]',
      matchTime: 3000,
      rules: [
        {
          key: 0,
          name: '签到',
          matches: '@*[clickable=true][visibleToUser=true] > [text="签到"] + Button',
          activityIds: [
            '.MainActivity',
          ],
        },
        {
          key: 1,
          name: '签到确认',
          preKeys: [
            0,
          ],
          fastQuery: true,
          anyMatches: [
            '[text="确定"]',
            '@[clickable=true] > [childCount=0][text="我知道了"]',
            '[text="我知道了"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
}
