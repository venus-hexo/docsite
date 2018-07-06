// 全局的一些配置，包括页面顶部导航栏和页面底部的一些配置
export default {
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        text: 'HOME',
        link: '/',
      },
      {
        text: 'DOCS',
        link: '/docs/demo1.md',
      },
      {
        text: 'BLOG',
        link: '/blog',
      },
      {
        text: 'COMMUNITY',
        link: '/community',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/docs/demo1.md',
        },
        {
          text: 'Quick start',
          link: '/docs/demo2.md',
        },
        {
          text: 'Developer guide',
          link: '/docs/dir/demo3.md',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/blog',
        },
        {
          text: 'Community',
          link: '/community',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  'zh-cn': {
    pageMenu: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/docs/demo1.md',
      },
      {
        text: '博客',
        link: '/blog',
      },
      {
        text: '社区',
        link: '/community',
      }
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/docs/demo1.md',
        },
        {
          text: '快速开始',
          link: '/docs/demo2.md',
        },
        {
          text: '开发者指南',
          link: '/docs/dir/demo3.md',
        }
      ]
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/blog',
        },
        {
          text: '社区',
          link: '/community',
        }
      ]
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
};
