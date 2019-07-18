module.exports = {
  base: '/utils/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'utils',
      description: '📦 一个工具函数集合'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    repo: 'zoux/utils',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次编辑时间',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [{
          text: '指南',
          link: '/guide/'
        }],
        sidebar: {
          '/guide/': [
            '/guide/'
          ]
        }
      }
    }
  },
  evergreen: true
}
