import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'South博客',
  description: '个人博客',
  locales: {
    docs: {
      label: '中文',
      lang: 'zh'
    }
  },
  themeConfig: {
    siteTitle: 'South博客',
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '临时页面', link: '/getting-started' },
      { text: '关于自己', link: '/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/southliu' }
    ],
    sidebar: [
      {
        text: '首页',
        collapsed: false,
        items: [
          { text: '首页', link: '/' },
          { text: '临时页面', link: '/getting-started' },
          { text: '关于自己', link: '/about' },
        ]
      }
    ],
    // 右侧边栏标题
    outline: 'deep',
    outlineTitle: '章节导航',
    // 上下篇文本提示文字
    docFooter: {
        prev: '← 上一篇',
        next: '下一篇 →'
    },
    // 上次更新时间提示文字
    lastUpdatedText: '上次更新时间',
    footer: {
      message: '',
      copyright: 'Copyright © 2023 Southliu'
    },
    // algolia: {
    //   appId: 'F3AJZXISDY',
    //   apiKey: 'aeed316acf949f54f8d94515fd3eccba',
    //   indexName: 'south',
    //   placeholder: '搜索文档',
    // }
  },
})