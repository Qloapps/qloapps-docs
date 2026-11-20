const { buildSidebars } = require('./versions')

module.exports = {
    base: '/',
    title: 'QloApps Documentation',
    description: 'QloApps Developer Documentation',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.ico"}],
    ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        repo: 'webkul/hotelcommerce',
        repoLabel: 'Contribute to QloApps',
        docsRepo: 'Qloapps/qloapps-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        smoothScroll: true,
        nav: [
            { text: 'Download', link: 'https://qloapps.com/download/' },
            { text: 'User Guide', link: 'https://docs.qloapps.com/' },
            { text: 'Forum', link: 'https://forums.qloapps.com/' },
            { text: 'Extensions', link: 'https://qloapps.com/addons/' },
        ],
        sidebar: buildSidebars(),
    },
    plugins: [
        [
            '@vuepress/medium-zoom',
            {
                background: '#000',
            }
        ],
        ['@vuepress/back-to-top', 'code-copy'],
        ['container', {
            type: 'dir',
            before: '<pre class="dir-container"><code>',
            after: '</code></pre>'
          }],
    ]
};