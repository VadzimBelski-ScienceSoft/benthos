const path = require('path');
const {listNames} = require('./src/plugins/components');

module.exports = {
  title: 'Benthos',
  tagline: 'The stream processor for mundane tasks',
  url: 'https://benthos.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Jeffail',
  projectName: 'benthos',
  customFields: {
    components: {
      inputs: listNames("inputs"),
      processors: listNames("processors"),
      conditions: listNames("conditions"),
      outputs: listNames("outputs"),
      caches: listNames("caches"),
      rate_limits: listNames("rate_limits"),
      buffers: listNames("buffers"),
      metrics: listNames("metrics"),
      tracers: listNames("tracers"),
    },
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('./src/plugins/prism_themes/monokai'),
    },
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'img/logo_hero.svg',
    navbar: {
      title: 'Benthos',
      logo: {
        alt: 'Benthos Blobfish',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/about', label: 'Docs', position: 'left'},
        {to: 'cookbooks', label: 'Cookbooks', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'videos', label: 'Videos', position: 'left'},
        {to: 'https://lab.benthos.dev', label: 'Lab', position: 'right'},
        {to: 'https://github.com/Jeffail/benthos/releases/latest', label: 'Download', position: 'right'},
        {
          href: 'https://github.com/Jeffail/benthos',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/guides/getting_started',
            },
            {
              label: 'Videos',
              to: 'videos',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/jeffail-benthos/community',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Jeffail/benthos',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/jeffail',
            },
            {
              label: 'Mascot',
              to: 'blobfish',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ashley Jeffs.`,
    },
    googleAnalytics: {
      trackingID: 'UA-135959729-1',
    },
    algolia: {
      apiKey: '358e5d3135579871ceecd50c6cb7ce9e',
      indexName: 'benthos',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Jeffail/benthos/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './src/plugins/cookbooks'),
    path.resolve(__dirname, './src/plugins/redirects'),
  ],
};
