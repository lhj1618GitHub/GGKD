{
    id: 'com.tencent.mm',
    name: '微信',
    groups: [
        {
            key: 1,
            name: '自动化-微信红包自动领取',
            desc: '自动领取私聊红包,群聊红包',
            matchTime: 5000,
            rules: [
                {
                    name: '从红包结算界面返回',
                    preKeys: [
                        1,
                        2,
                    ],
                    activityIds: [
                        'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyBeforeDetailUI',
                        'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyDetailUI',
                    ],
                    matches: 'ImageView[desc="返回"]',
                },
                {
                    key: 1,
                    name: '点击红包-开',
                    activityIds: 'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNotHookReceiveUI',
                    matches: 'ImageButton[desc="开"] + Button[desc="开"]',
                },
                {
                    key: 2,
                    name: '点击别人发的红包',
                    activityIds: 'com.tencent.mm.ui.LauncherUI',
                    matches: 'LinearLayout[childCount=1] >5 LinearLayout[childCount=1] - ImageView < LinearLayout + View + RelativeLayout > TextView[text="微信红包"][id!=null]',
                },
            ],
        },
    ],
}