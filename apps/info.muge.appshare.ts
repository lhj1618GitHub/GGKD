{
    id: 'info.muge.appshare',
    name: 'AppShare',
    groups: [
        {
            key: 1,
            name: '内嵌广告-卡片广告',
            desc: '点击关闭',
            fastQuery: true,
            matchTime: 5000,
            rules: [
                {
                    matches: [
                        'FrameLayout[childCount=5] > @FrameLayout[childCount=1][visibleToUser=true][width<50 && height<50] > ImageView[childCount=0] <<n [vid="adContainer" || vid="adView" || vid="cardAd"]',
                    ],
                    activityIds: [
                        'info.muge.appshare.view.app.detail.AppDetailActivity',
                        'info.muge.appshare.view.app.detail.v4.AppDetailV4Activity',
                        'info.muge.appshare.view.search.v4.SearchActivity',
                    ],
                },
            ],
        },
        {
            key: 2,
            name: '弹窗广告-自动展示的广告',
            desc: '广告展示率低于20%时出现的广告',
            matchTime: 5000,
            rules: [
                {
                    key: 0,
                    matches: [
                        'View[vid="v_jump"][clickable=true]',
                    ],
                    fastQuery: true,
                },
                {
                    key: 1,
                    matches: [
                        '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^="立即" || text$="详情" || text^="了解" || text="去逛逛" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'info.muge.appshare.view.main.MainActivity',
                    ],
                },
                {
                    key: 2,
                    matches: [
                        '[text="反馈"] <n * > @View[childCount=1][index=0 || index=1] > Image[text=""]',
                    ],
                    activityIds: [
                        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
                    ],
                },
                {
                    key: 3,
                    matches: [
                        '@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^="立即" || text$="详情" || text^="了解" || text="去微信看看" || text$="应用" || text="进入小程序" || text="领取优惠" || text="跳转微信"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.view.main.MainActivity',
                    ],
                },
            ],
        },
        {
            key: 3,
            name: '弹窗广告-公告',
            desc: '点击[收到]',
            fastQuery: true,
            actionMaximum: 1,
            matchTime: 10000,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[text="收到"][clickable=true]',
                    ],
                    activityIds: [
                        'info.muge.appshare.view.main.MainActivity',
                    ],
                },
            ],
        },
    ],
}