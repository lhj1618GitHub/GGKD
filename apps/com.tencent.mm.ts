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
        {
            key: 2,
            name: '自动化-图片相关',
            desc: '发送/查看原图',
            matchTime: 5000,
            rules: [
                {
                    key: 1,
                    name: '自动选中-发送原图',
                    activityIds: [
                        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
                        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
                    ],
                    matches: '@ImageButton[desc="未选中,原图,复选框"] + [text="原图"]',
                },{
                      key: 2,
                        name: '选中原图',
                          fastQuery: true, 
                                   activityIds: 'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
                                             matches: '[vid="km5"][desc="未选中,原图,复选框"]',
                }
                }
                {
                    key: 2,
                    name: '自动查看原图',
                    activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
                    rules: 'Button[text^="查看原图"][clickable=true]',
                },
            ],
        },
        {
            key: 3,
            name: '自动化-订阅号',
            desc: '展开更早的消息/更多消息',
            matchTime: 5000,
            rules: [
                {
                    key: 1,
                    name: '展开更早的消息',
                    fastQuery: true,
                    activityIds: 'com.tencent.mm.plugin.brandservice.ui.timeline.BizTimeLineUI',
                    matches: '@[clickable=true] > [text="展开更早的消息"]',
                },
                {
                    key: 2,
                    matches: '[desc="展开更早的消息"]',
                },
                {
                    key: 3,
                    name: '更多消息',
                    activityIds: 'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
                    matches: '@ImageView[index=5][visibleToUser=true]',
                },
            ],
        },
        {
            key: 4,
            name: '自动化-付款后',
            desc: '点击-完成/返回商家',
            rules: [
                {
                    fastQuery: true,
                    activityIds: 'com.tencent.mm.framework.app.UIPageFragmentActivity',
                    matches: '[vid="kinda_button_impl_wrapper"][desc="完成" || desc="返回商家"]',
                },
            ],
        },
        {
            key: 5,
            name: '自动化-自动语音转文字',
            desc: '点击-语音转文字',
            activityIds: 'com.tencent.mm.ui.LauncherUI',
            fastQuery: true,
            rules: [
                {
                    key: 0,
                    matches: '@* > [text="转文字"]',
                },
            ],
        },
        {
            key: 6,
            name: '自动化-点击数字未读消息',
            desc: '头像有数字',
            rules: [
                {
                    matches: [
                        'TextView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.ui.LauncherUI',
                    ],
                },
            ],
        },
        {
            key: 7,
            name: '自动化-点击红点未读消息',
            desc: '头像右上角为红点',
            rules: [
                {
                    matches: [
                        'ImageView[childCount=0] - ImageView[childCount=0] < RelativeLayout[childCount=2] < LinearLayout < @LinearLayout[clickable=true][visibleToUser=true] <n ListView <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup < FrameLayout < FrameLayout < [id="android:id/content"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        '.ui.LauncherUI',
                    ],
                },
            ],
        },
        {
            key: 8,
            name: '自动化-操作确认',
            desc: '点击[清空/删除]',
            rules: [
                {
                    key: 1,
                    name: '确认[清空]聊天记录',
                    matches: [
                        '[vid="mm_alert_ok_btn"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'com.tencent.mm.chatroom.ui.ChatroomInfoUI',
                        'com.tencent.mm.ui.SingleChatInfoUI',
                    ],
                },
                {
                    key: 2,
                    name: '确认[删除]聊天列表',
                    matches: [
                        '[vid="mm_alert_ok_btn"]',
                    ],
                    fastQuery: true,
                    activityIds: [
                        'com.tencent.mm.ui.LauncherUI',
                    ],
                },
            ],
        },
    ],
}