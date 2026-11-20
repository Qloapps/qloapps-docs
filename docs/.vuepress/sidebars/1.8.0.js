// Sidebar for QloApps 1.8.0. Paths are relative to docs/1.8.0/ (prefix added in versions.js).
module.exports = [
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
                    ['database/db-query-class', 'Database DbQuery Class'],
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
                    ['module_development/frontoffice-controller', 'Display Content in Front office'],
                    ['module_development/admin-controller', 'Manage Module through Admin Controller'],
                    ['module_development/module-translations', 'Translations'],
                    ['module_development/cron-tasks', 'Register Cron Tasks'],
                    ['module_development/compatibility-1-8-0', 'Compatibility with 1.8.0'],
                ]
            },
            {
                title: 'Webservice API',
                path: '/webservice/',
                collapsable: true,
                children: [
                    ['webservice/enable-webservice', 'Enable Webservice'],
                    ['webservice/basic-topics', 'Basics | First Steps'],
                    ['webservice/qloapps-webservice-lib', 'QloApps Webservice Library'],
                    ['webservice/advanced-api-uses', 'Advanced API Uses'],
                ]
            },
            {
                title: 'Theme',
                path: '/theme/',
                collapsable: true,
                children: [
                    ['theme/', 'Introduction'],
                    ['theme/directory-structure', 'Directory Structure'],
                    ['theme/creating-a-theme', 'Creating a Theme'],
                    ['theme/designing-the-theme', 'Designing the Theme'],
                    ['theme/theme-modules', 'Theme Modules'],
                    ['theme/exporting-a-theme', 'Exporting a Theme'],
                    ['theme/installing-a-theme', 'Installing a Theme'],
                    ['theme/best-practices', 'Best Practices'],
                ]
            },
            {
                title: 'Testing',
                path: '/testing/',
                collapsable: true,
            },
            {
                title: 'Upgrade',
                path: '/upgrade/',
                collapsable: true,
            },
            {
                title: 'Contribute',
                path: '/contribute/',
                collapsable: true,
            },

        ]
