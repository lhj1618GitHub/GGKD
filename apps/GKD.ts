{
    id: 'li.songe.gkd',
    name: 'GKD',
    groups: [
        {
            key: 1,
            name: '自动化-跳转链接',
            desc: '[打开]',
            matchTime: 5000,
            rules: [
                {
                    key: 1,
                    name: 'http服务',
                    matches: [
                        '@TextView[text="查看链接"]',
                        '@TextView[text="打开"]',
                    ],
                    activityIds: [
                        'li.songe.gkd.MainActivity',
                    ],
                },
            ],
        },
    ],
}