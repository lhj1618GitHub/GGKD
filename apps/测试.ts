{
  key: 1,
  name: '功能类-自动上滑',
  desc: '检测到[继续]时，上滑',
  fastQuery: true,
 matchDelay: 1000, // 触发后延时
  actionCd: 1000, // 生效间隔
  activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
  rules: [
    {
      matches: '[text=\继续安装\]',
      action: 'swipe', // 添加滑动动作
      swipe: {        // 滑动参数
        from: '[500, 1500]', // 起始坐标 (屏幕中下部)
        to: '[500, 500]',    // 结束坐标 (屏幕中上部)
        duration: '500',      // 滑动持续时间 (毫秒)
      },
    },
  ],
}