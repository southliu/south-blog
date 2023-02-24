import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'South博客',
  description: '个人博客',
  themeConfig: {
    siteTitle: 'South博客',
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Config', link: '/getting-started' },
      { text: '关于自己', link: '/about' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/southliu' }
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Guide', link: '/' },
          { text: 'Config', link: '/getting-started' },
          { text: '关于自己', link: '/about' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    algolia: {
      appId: 'F3AJZXISDY',
      apiKey: 'bba6573a8fd02dd425483bc466bf9a31 ',
      indexName: 'south',locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  },
})