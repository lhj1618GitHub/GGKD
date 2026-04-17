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
                    matches: [
                        'TextView[text="签到"] < @View <4 View < View <4 View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'info.muge.appshare.MainActivity',
                    ],
                },
            ],
        },
    ],
}