{
  "key": 1,
  "name": "功能类-自动上滑",
  "desc": "检测到[继续]时，上滑",
  "enable": false,
  "fastQuery": true,
  "matchTime": 4000,
  "activityIds": "com.miui.permcenter.install.AdbInstallActivity",
  "rules": [
    {
      "matches": "[text=\"继续安装\"]",
      "action": "swipe", // 添加滑动动作
      "swipe": {        // 滑动参数
        "from": [500, 1500], // 起始坐标 (屏幕中下部)
        "to": [500, 500],    // 结束坐标 (屏幕中上部)
        "duration": 300      // 滑动持续时间 (毫秒)
      }
    }
  ]
}
