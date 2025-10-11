import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  base: '/docs/',

  title: 'QwQNT',
  description: 'QwQNT 社区驱动文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '框架介绍', link: '/framework/' },
      { text: '开发指南', link: '/development/' },
    ],

    sidebar: [
      {
        text: '框架介绍',
        link: '/framework/',
        items: [
          { text: '获取框架', link: '/framework/get-framework' },
          { text: '开源策略', link: '/framework/open-source' },
          { text: '反馈问题', link: '/framework/feedback' },
          { text: 'LiteLoaderQQNT 兼容', link: '/framework/adapt-liteloaderqqnt' },
          { text: '活动存档', link: '/framework/event-achievement' },
        ],
      },
      {
        text: '开发指南',
        link: '/development/',
        items: [
          { text: '开发规范', link: '/development/development-standards' },
          { text: '从头开始', link: '/development/start' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwqnt-community/' },
    ],
  },
});
