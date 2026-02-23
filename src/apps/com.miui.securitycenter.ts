import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '小米安全管家',
  groups: [
    {
      key: 0,
      name: '自动化-自动继续安装',
      desc: 'USB安装应用,点击继续安装',
      fastQuery: true,
      activityIds: 'com.miui.permcenter.install.AdbInstallActivity',
      rules: [
        {
          matches: '[text="继续安装"]',
          snapshotUrls: 'https://i.gkd.li/i/13269875',
        },
      ],
    },
    {
      key: 1,
      name: '自动化-定位权限提示',
      desc: '关闭【允许联网及定位】后，每次打开手机管家都会出现',
      fastQuery: true,
      activityIds: [
        'com.miui.securityscan.MainActivity', // app版本v8
        'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity', // app版本v5
      ],
      rules: [
        {
          matches: [
            '[id="com.miui.securitycenter:id/title"][text="获取位置信息"]',
            '[text="不同意"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13474517',
            'https://i.gkd.li/i/13476592', // activityIds: 'com.miui.permcenter.permissions.SystemAppPermissionDialogActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '自动化-电量已低于20%',
      desc: '点击[知道了]',
      rules: [
        {
          fastQuery: true,
          matches: '@[text="知道了"] + [text="省电模式"]',
          snapshotUrls: 'https://i.gkd.li/i/14468423',
        },
      ],
    },
    {
      key: 3,
      name: '自动化-高敏感权限自动确定',
      desc: '勾选[我已知晓可能存在的风险]-10s后点击[确定]',
      fastQuery: true,
      activityIds: [
        'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        'com.miui.permcenter.privacymanager.DeviceManagerApplyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="我已知晓可能存在的风险，并自愿承担可能导致的后果"]',
            '@[vid="check_box"][checked=false]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/e9672ccd-8dd1-4060-bdbe-52bb355d404f',
          snapshotUrls: [
            'https://i.gkd.li/i/14965657',
            'https://i.gkd.li/i/15242826',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text="确定"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1f2a118a-db2a-448d-a95d-f10d746b72e3',
          snapshotUrls: [
            'https://i.gkd.li/i/14965656',
            'https://i.gkd.li/i/15242825',
          ],
        },
      ],
    },
  ],
});
