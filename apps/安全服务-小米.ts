{
    id: 'com.miui.securitycenter',
    name: '安全服务',
    groups: [
        {
            key: 1,
            name: '自动化-应用信息页面',
            desc: '点击[确定]',
            fastQuery: true,
            matchTime: 3000,
            rules: [
                {
                    matches: [
                        '[text="确定"][visibleToUser=true]',
                    ],
                    activityIds: [
                        'com.miui.appmanager.ApplicationsDetailsActivity',
                    ],
                },
            ],
        },
        {
            key: 2,
            name: '自动化-允许打开应用',
            desc: '点击[允许]',
            fastQuery: true,
            matchTime: 3000,
            rules: [
                {
                    matches: [
                        '[childCount=0][text*="本次允许"][visibleToUser=true]',
                    ],
                    activityIds: [
                        'com.miui.securitycenter',
                        'com.miui.wakepath.ui.ConfirmStartActivity',
                    ],
                },
            ],
        },
        {
            key: 3,
            name: '自动化-高敏感权限自动确定',
            desc: '勾选[我已知晓..]后点击[确定]',
            fastQuery: true,
            activityIds: [
                'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
                'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity',
            ],
            rules: [
                {
                    key: 0,
                    matches: [
                        '@[vid="check_box"][checked=false]',
                    ],
                },
                {
                    key: 1,
                    preKeys: [
                        0,
                    ],
                    matches: [
                        '[text="确定"]',
                    ],
                },
            ],
        },
        {
            key: 4,
            name: '自动化-省电策略',
            desc: '禁止后台运行点[确定]',
            rules: [
                {
                    matches: [
                        '[id="android:id/button1"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'com.miui.powercenter.legacypowerrank.PowerDetailActivity',
                    ],
                },
            ],
        },
        {
            key: 5,
            name: '自动化-获取已安装的应用信息',
            desc: '[拒绝]',
            rules: [
                {
                    fastQuery: true,
                    matches: [
                        '[text*="获取已安装的应用信息"]',
                        '@Button < [vid="buttonPanel"]',
                    ],
                },
            ],
        },
    ],
}