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
            'info.muge.appshare.MainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '自动化-签到',
      desc: '[签到]',
      rules: [
        {
          key: 0,
          name: '签到',
          anyMatches: [
            'TextView[text="签到"] < @View <4 View < View <4 View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
            '[desc="头像"] +3 @View[clickable=true] > [text="签到"]',
          ],
          fastQuery: true,
          activityIds: [
            'info.muge.appshare.MainActivity',
          ],
        },
        {
          key: 1,
          name: '签到确认',
          preKeys: [
            0,
          ],
          fastQuery: true,
          activityIds: [
            '.view.main.MainActivity',
            '.MainActivity',
          ],
          anyMatches: [
            '[text="确定"]',
            '@[clickable=true] > [childCount=0][text="我知道了"]',
            '[vid="tvClose"][text="我知道了"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
}
