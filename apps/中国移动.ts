{
    id: 'com.greenpoint.android.mc10086.activity',
    name: '中国移动',
    groups: [
        {
            key: 1,
            name: '弹窗广告-首页',
            desc: '启动后首页弹窗',
            rules: [
                {
                    matches: [
                        '[vid="close_btn"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'com.mc10086.cmcc.view.tabs.AppTabFragment',
                    ],
                },
            ],
        },
        {
            key: 3,
            name: '自动化-剪贴板权限弹窗',
            desc: '点击不允许',
            fastQuery: true,
            actionMaximum: 1,
            matchTime: 5000,
            resetMatch: 'app',
            activityIds: [
                'com.mc10086.cmcc.view.tabs.AppTabFragment',
                'com.mc10086.cmcc.base.StartPageActivity',
            ],
            rules: [
                {
                    matches: [
                        '[text*="获取您的"] < LinearLayout +(2) LinearLayout >(2) [text="不允许"]',
                    ],
                },
            ],
        },
        {
            key: 5,
            name: '自动化-定位权限',
            actionMaximum: 1,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[text^="位置权限" || text$="定位权限"]',
                        '[text="取消"][clickable=true]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'com.mc10086.cmcc.view.tabs.AppTabFragment',
                    ],
                },
            ],
        },
    ],
}