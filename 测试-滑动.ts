
{
  id: 'com.example.auto.swipe',
  name: '自动上滑规则示例',
  rules: [
    {
      key: 1,
      name: '通用上滑-检测到特定按钮时触发',
      desc: '当屏幕出现[text=\继续\]按钮时执行上滑操作',
      enable: true,
      fastQuery: true,
      matchTime: 5000,
      resetMatch: 'activity',
      actionMaximum: 10,
      activityIds: [
        'com.ss.android.ugc.aweme.MainActivity',
        'com.miui.permcenter.install.AdbInstallActivity'
      ],
      rules: [
        {
          matches: '[text=\继续\ || text=\继续安装\ || text=\下一步\]',
          action: 'swipe',
          swipe: {
            from: '[540, 1600]',
            to: '[540, 800]',
            duration: 400,
          },
              ],
        },
      ],
    },
    {
      key: 2,
      name: '定时循环上滑-无条件触发',
      desc: '每隔3秒自动执行一次上滑操作',
      enable: false,
      fastQuery: true,
      matchTime: 1000,
      actionCd: 3000,
      actionMaximum: 100,
      priority: 10,
      rules: [
        {
          matches: '[id=\android:id/content\]',
          action: 'swipe',
          swipe: {
            from: '[500, 1500]',
            to: '[500, 600]',
            duration: 500,
          },
        },
      ],
    },
    {
      key: 3,
      name: '视频应用自动上滑',
      desc: '在视频播放界面自动上滑切换视频',
      enable: true,
      fastQuery: true,
      matchDelay: 2000,
      matchTime: 3000,
      actionCd: 1000,
      activityIds: [
        'com.ss.android.ugc.aweme.detail.VideoDetailActivity'
      ],
      rules: [
        {
          matches: '[id=\com.ss.android.ugc.aweme:id/a5_\]',
          action: 'swipe',
          swipe: {
            from: '[540, 1700]',
            to: '[540, 300]',
            duration: 300,
          },
        },
      ],
    },
  ],
}
