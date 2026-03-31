{
    id: 'com.tencent.mm',
    name: '微信',
    groups: [
        {
            key: 1,
            name: '自动化-图片相关',
            desc: '发送/查看原图',
            matchTime: 3000,
            rules: [
                {
                    key: 1,
                    name: '自动选中原图',
                    fastQuery: true, 
                    activityIds: 'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
                    matches: '[vid="km5"][desc="未选中,原图,复选框"]',
                },
                {
                    key: 2,
                    name: '自动查看原图',
                    activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
                    rules: 'Button[text^="查看原图"][clickable=true]',
                },
            ],
        },
        {
            key: 2,
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
            key: 3,
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
            key: 4,
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
            key: 5,
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
            key: 6,
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