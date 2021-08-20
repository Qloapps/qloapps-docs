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
            { text: 'Guide', link: '/' },
            { text: 'Forum', link: 'https://forums.qloapps.com/' },
            { text: 'Extensions', link: 'https://qloapps.com/addons/' },
        ],
        sidebar: [
            {
                title: 'Introduction',
                path: '/introduction/',
                collapsable: true,
                children: [
                    ['introduction/', 'Introduction'],
                    ['introduction/requirements', 'Requirements'],
                    ['introduction/installation', 'Installation'],
                    ['introduction/configuration', 'Configuration'],
                ]
            },
            {
                title: 'Architecture',
                path: '/architecture/',
                collapsable: true,
                children: [
                    ['architecture/directory-structure', 'Directory Structure'],
                    ['architecture/technical', 'Technical'],
                ]
            },
            {
                title: 'Development',
                path: '/development/',
                collapsable: true,
                children: [
                    ['development/', 'Coding Standards'],
                    ['development/controllers', 'Controllers'],
                    ['development/cookies', 'Cookies'],
                    ['development/dispatcher', 'Dispatcher'],
                    ['development/views', 'Views'],
                ]
            },
            {
                title: 'Database',
                path: '/database/',
                collapsable: true,
                children: [
                    ['database/', 'Structure'],
                    ['database/schema', 'Schema'],
                    ['database/db-class', 'Database Class'],
                    ['database/db-query-class', 'Database Query Class'],
                    ['database/object-model-class', 'Object Model Class'],
                ]
            },
            {
                title: 'Helpers',
                path: '/helpers/',
                collapsable: true,
                children: [
                    ['helpers/email', 'Email'],
                    ['helpers/hooks', 'Hooks'],
                ]
            },
            {
                title: 'Module Development',
                path: '/module_development/',
                collapsable: true,
                children: [
                    ['module_development/creation', 'Creation'],
                    ['module_development/folder-structure', 'Folder Structure'],
                    ['module_development/classes', 'Module classes'],
                    ['module_development/configuration', 'Adding a Configuration page'],
                    ['module_development/Frontoffice-controller', 'Display Content in Front Office'],
                    ['module_development/admin-controller', 'Manage Module through Admin Controler'],
                    ['module_development/module-translations', 'Translations'],
                ]
            },
            {
                title: 'Webservice API',
                path: '/webservice/',
                collapsable: true,
                children: [
                    ['webservice/enable_webservices', 'Enable Webservice'],
                    ['webservice/basic-topics', 'Basics | First Steps'],
                    ['webservice/qloapps-webservice-lib', 'QloApps Webservice Library'],
                    ['webservice/advance-api-uses', 'Advance Api Uses'],
                ]
            },
            {
                title: 'Theme',
                path: '/theme/',
                collapsable: true,
            },
            {
                title: 'Testing',
                path: '/testing/',
                collapsable: true,
            },
            {
                title: 'Updation & Migration',
                path: '/updation_migration/',
                collapsable: true,
            },
            {
                title: 'Contribute',
                path: '/contribute/',
                collapsable: true,
            },

        ],
    },
    plugins: [
        ['@vuepress/back-to-top', 'code-copy'],
        ['container', {
            type: 'dir',
            before: '<pre class="dir-container"><code>',
            after: '</code></pre>'
          }],
    ]
};