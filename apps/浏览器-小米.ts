{
    id: 'com.android.browser',
    name: '浏览器',
    groups: [
        {
            key: 1,
            name: '弹窗广告-关闭[个性推荐开启提示]',
            matchTime: 5000,
            activityIds: [
                'com.android.browser.BrowserActivity',
            ],
            rules: [
                {
                    matches: [
                        '@ImageView[id!=null][clickable=true] -2 [text="个性推荐获得更丰富内容"]',
                    ],
                },
            ],
        },
        {
            key: 2,
            name: '内嵌广告-主页信息流广告',
            fastQuery: true,
            activityIds: [
                'com.android.browser.BrowserActivity',
                'com.android.browser.flow.view.FeedbackDialog',
            ],
            rules: [
                {
                    key: 0,
                    matches: [
                        '@[id!=null][desc="负反馈"][visibleToUser=true] -n * > * > [text="广告"]',
                    ],
                },
                {
                    key: 1,
                    preKeys: [
                        0,
                    ],
                    matches: [
                        '@FrameLayout > ViewGroup > [text="不感兴趣"]',
                    ],
                },
            ],
        },
        {
            key: 3,
            name: '内嵌广告-小说阅读页面广告',
            fastQuery: true,
            activityIds: [
                'com.duokan.shop.mibrowser.reading.SdkReaderActivity',
            ],
            rules: [
                {
                    key: 0,
                    matches: [
                        '[vid="reading__app_ad_view__close"][visibleToUser=true]',
                    ],
                    excludeMatches: [
                        '[vid="reading__close_ad_view__subtitle_tv"][visibleToUser=true]',
                    ],
                },
                {
                    preKeys: [
                        0,
                    ],
                    matches: [
                        '[vid="reading__close_ad_view__subtitle_tv"][visibleToUser=true]',
                    ],
                },
            ],
        },
    ],
}