import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([]);


import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    //非全局-仅单应用
    key: 0,
    name: '开屏广告',
    enable: true,
  },
  {
    key: 1,
    name: '弹窗广告',
    enable: false,
  },
  {
    key: 2,
    name: '内嵌广告',
    enable: false,
  },
  {
    key: 3,
    name: '自动化',
    enable: false,
  },
 {
    // 分类不明确
    key: 4,
    name: '其它',
    enable: false,
  },
]);
