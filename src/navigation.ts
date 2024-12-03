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
          text: '全线产品列表',
          href: getPermalink('/products/products'),
        },
        {
          text: '前置过滤器',
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
          href: getPermalink('/support/resource'),
        },
        {
          text: '博客列表',
          href: getBlogPermalink(),
        },
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
        {
          text: '成为合伙人',
          href: getPermalink('/support/become-partner'),
        },
      ],
    },
    {
      text: '关于',
      links: [
        {
          text: '关于澳可富',
          href: getPermalink('/about/about'),
        },
        {
          text: '社会责任',
          href: getPermalink('/about/responsibility'),
        },
        {
          text: '新闻报道',
          href: getPermalink('/about/news'),
        },
        {
          text: '招聘信息',
          href: getPermalink('/about/career'),
        },
        {
          text: '联系我们',
          href: getPermalink('/about/contact'),
        },
      ],
    },
  ],
  actions: [{ text: '中文 / EN', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600  dark:text-muted" href="https://oakfull.cn/"> Oakfull</a> · All rights reserved.
  `,
};
