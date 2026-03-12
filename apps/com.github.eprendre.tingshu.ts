{
    id:'com.github.eprendre.tingshu',
    name:'我的听书',
    groups:[
      {
        key: 4,
        name: '弹窗广告-播放页广告',
        desc:'播放页点[x]',
        fastQuery: true,
        matchTime: 8000,
        rules:[
            {
            matches:[
                '[visibleToUser=true][clickable=true][right>850][height=34][width=33||width=34]'
                    ],
            activityIds:[
                'com.github.eprendre.tingshu.ui.play.PlayerActivity'
                        ],
            },
             ],
      },
             ],
}