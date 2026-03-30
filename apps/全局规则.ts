{
    key: 0,
    name: '开屏广告-全局',
    desc: '关闭打开应用时的开屏广告',
    fastQuery: true,
    matchTime: 5000,
    actionMaximum: 1,
    resetMatch: 'app',
    rules: [
        {
            anyMatches: [
                '[text*="跳过" || text="关闭"][text.length<10][visibleToUser=true][clickable=true]',
            ],
        },
    ],
}