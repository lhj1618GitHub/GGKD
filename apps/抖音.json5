{
    id: 'com.ss.android.ugc.aweme',
    name: '抖音',
    groups: [
        {
            key: 1,
            name: '自动化-通知权限',
            desc: '点击[暂不]/[以后再说]/[禁止]',
            fastQuery: true,
            actionMaximum: 1,
            resetMatch: 'app',
            activityIds: [
                '.main.MainActivity',
                '.profile.ui.UserProfileActivity',
                '.detail.ui.DetailActivity',
            ],
            rules: [
                {
                    key: 1,
                    matches: [
                        '[text^="打开私信通知" || text="开启朋友的消息通知" || text="及时获得消息提醒" || text$="评论回复提醒"][visibleToUser=true]',
                        '[text="以后再说" || text="暂不开启" || text="禁止"][visibleToUser=true]',
                    ],
                },
            ],
        },
        {
            key: 2,
            name: '自动化-通讯录权限',
            desc: '点击[拒绝]',
            actionMaximum: 1,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[text*="通讯录"]',
                        '[text="拒绝"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.main.MainActivity',
                    ],
                },
            ],
        },
        {
            key: 3,
            name: '弹窗广告-个性化推荐弹窗',
            desc: '点击[稍后再说]',
            rules: [
                {
                    matches: [
                        '[text*="个性化推荐"][visibleToUser=true]',
                        '[text="稍后再说"][visibleToUser=true]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.main.MainActivity',
                    ],
                },
            ],
        },
        {
            key: 4,
            name: '弹窗广告-视频推荐广告',
            desc: '通过返回操作跳过广告',
            rules: [
                {
                    key: 0,
                    matches: [
                        'FlattenUIText[text="不感兴趣"][visibleToUser=true]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.main.MainActivity',
                    ],
                },
                {
                    key: 1,
                    action: 'back',
                    matches: [
                        '[desc^="已选中"] > [text="推荐"][visibleToUser=true]',
                        '([text$="广告"][vid="desc"][visibleToUser=true]) || (ImageView[childCount=0] + [text="应用" || text="购物" || text="游戏"][visibleToUser=true])',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.main.MainActivity',
                    ],
                },
            ],
        },
        {
            key: 5,
            name: '自动化-相机权限',
            desc: '点击[以后再说]',
            actionMaximum: 1,
            resetMatch: 'app',
            rules: [
                {
                    matches: [
                        '[text*="相机权限"]',
                        '[text="以后再说"][clickable=true]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.shortvideo.ui.scan.ScanNewActivity',
                    ],
                },
            ],
        },
    ],
}