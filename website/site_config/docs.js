export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/docs/demo1.md',
          },
          {
            title: 'demo2',
            link: '/docs/demo2.md',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/docs/dir/demo3.md',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '大标题',
        children: [
          {
            title: '示例1',
            link: '/docs/demo1.md',
          },
          {
            title: '示例2',
            link: '/docs/demo2.md',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/docs/dir/demo3.md',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  }
};
