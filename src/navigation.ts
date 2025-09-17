import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/',
    },
    {
      text: '产品',
      links: [
        {
          text: '全线列表',
          href: getPermalink('/products/products'),
        },
        {
          text: '透明前置过滤器',
          href: getPermalink('/products/products#prefilter'),
        },
        {
          text: '超滤净水器',
          href: getPermalink('/products/products#ultrafiltration'),
        },
        {
          text: '无电反渗透净水器',
          href: getPermalink('/products/products#RO-system'),
        },
        {
          text: '无电软水机',
          href: getPermalink('/products/products#softerner'),
        },
        {
          text: '滤芯耗材',
          href: getPermalink('/products/products#cartridges'),
        },
      ],
    },
    {
      text: '服务支持',
      links: [
        {
          text: '资源中心',
          href: getPermalink('/support/resources'),
        },
        // {
        //   text: '博客列表',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: '商业场景',
        //   href: getPermalink('/support/commercial'),
        // },
        {
          text: '成为代理商',
          href: getPermalink('/support/become-agent'),
        },
        {
          text: '成为供应商',
          href: getPermalink('/support/become-supplier'),
        },
        // {
        //   text: '成为合伙人',
        //   href: getPermalink('/support/become-partner'),
        // },
      ],
    },
    {
      text: '关于',
      links: [
        {
          text: '澳可富',
          href: getPermalink('/about/about'),
        },
        // {
        //   text: '社会责任',
        //   href: getPermalink('/about/responsibility'),
        // },
        {
          text: '新闻报道',
          href: getBlogPermalink(),
        },
        // {
        //   text: '招聘信息',
        //   href: getPermalink('/about/career'),
        // },
        {
          text: '联系我们',
          href: getPermalink('/about/contact'),
        },
      ],
    },
  ],
  actions: [{ text: '中文 / EN', href: 'https://en.oakfullwater.com', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '产品',
      links: [
        {
          text: '全线列表',
          href: getPermalink('/products/products'),
        },
        {
          text: '透明前置过滤器',
          href: getPermalink('/products/products#prefilter'),
        },
        {
          text: '超滤净水器',
          href: getPermalink('/products/products#ultrafiltration'),
        },
        {
          text: '无电反渗透净水器',
          href: getPermalink('/products/products#RO-system'),
        },
        {
          text: '无电软水机',
          href: getPermalink('/products/products#softerner'),
        },
        {
          text: '滤芯耗材',
          href: getPermalink('/products/products#cartridges'),
        },
      ],
    },
    {
      title: '服务支持',
      links: [
        {
          text: '资源中心',
          href: getPermalink('/support/resources'),
        },
        // {
        //   text: '博客列表',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: '商业场景',
        //   href: getPermalink('/support/commercial'),
        // },
        {
          text: '成为代理商',
          href: getPermalink('/support/become-agent'),
        },
        {
          text: '成为供应商',
          href: getPermalink('/support/become-supplier'),
        },
        // {
        //   text: '成为合伙人',
        //   href: getPermalink('/support/become-partner'),
        // },
      ],
    },
    {
      title: '关于',
      links: [
        {
          text: '澳可富',
          href: getPermalink('/about/about'),
        },
        // {
        //   text: '社会责任',
        //   href: getPermalink('/about/responsibility'),
        // },
        {
          text: '新闻报道',
          href: getBlogPermalink(),
        },
        // {
        //   text: '招聘信息',
        //   href: getPermalink('/about/career'),
        // },
        {
          text: '联系我们',
          href: getPermalink('/about/contact'),
        },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    // { text: '联系我们' },
    // { text: 'sales@oakfull.cn' },
    // { text: '0532-89975888' },
    // { text: '山东省青岛市黄岛区棋盘山路3号' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/OakfullWater' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/oakfull/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61570145790746' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/yaohengkai/oakfull.cn_en' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/src/assets/favicons/apple-touch-icon.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600  dark:text-muted" href="https://oakfull.cn/"> Oakfull</a> · All rights reserved.
  `,
};
