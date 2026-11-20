# Module File Structure

Before starting the development of a module you must know the file structure of the module.
Many files and folders are used in the modules for different purposes. Below are the files and folders of which a module can consists of:

::: dir
.
├── **modulename**
│   ├── classes
│   ├── controllers
│   │   ├── admin
│   │   └── front
│   ├── CHANGELOG.txt
│   ├── composer.json
│   ├── index.php
│   ├── LICENSE.md
│   ├── logo.png
│   ├── logo.gif
│   ├── **modulename.php**
│   ├── README.md
│   ├── override
│   ├── themes
│   │   └── theme_name
│   │       └── modules
│   ├── translations
│   ├── upgrade
│   ├── views
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   └── templates
│   │       ├── admin
│   │       ├── front
│   │       └── hook
:::

## Reference

### modulename.php

Module's main file. This file must have the same name as the module's root folder's name, `modulename`, here.

### config.xml

Configuration file for the cache. QloApps modules do not ship this file, it is not needed in the module's source folder (the modules bundled with QloApps 1.8.0 do not contain it in the repository and `/modules/*/config.xml` is git-ignored). It is generated automatically by QloApps in the module's folder, so never create it or commit it. The module's metadata (name, version, author, tab, etc.) is defined in the constructor of the main class, see [Start Creating a Module](./creation.md).

### index.php

Every folder of the module (and the module root) contains an `index.php` file which redirects the visitor away from the folder (the same file as used in the QloApps core folders). It prevents the directory listing of the folder on servers where it is enabled.

### README.md, CHANGELOG.txt and LICENSE.md

Optional documentation files. The bundled modules (for example `qlocrontaskmanager`) ship a `README.md`, a `CHANGELOG.txt` listing the changes of each module version, and a license file.

### composer.json and /vendor

Optional. If the module needs third-party PHP libraries, declare them in a module-level `composer.json` and ship the generated `vendor` folder with the module, then include `vendor/autoload.php` from the main file or from a classes file. For example, `qlocrontaskmanager` requires `dragonmantank/cron-expression` and includes `vendor/autoload.php` in `classes/QctmRequiredClasses.php`.

### logo.gif and logo.png

Image files to represent the module in the back office. Your module should have both the icon files

### /classes

This folder contains class which manage object models and utility functions

### /controllers

This folder contains the Controller files. You can use the same sub-folder paths as for the View files.

- `controllers/admin` : Subfolder for back office controller.
- `controllers/front` : Subfolder for front office controller.

### /override

All files for overriding QloApps core files. If you want to change QloApps core files then you must not change the files and use overriding for this purpose. For instance, `/modules/modulename/override/classes/Cart.php` extends the default CartCore class.

For a basic module, the first two are necessary:
- Main file
- The icon file.

### /translations

This folder contains module translation files used to display module content in multiple languages. For example fr.php, en.php, es.php etc.

### /upgrade

Subfolder for upgrade files. When a module has a new version to release the older version may need an upgrade of its data or files. It can be done using this folder. The files must be named `upgrade-X.Y.Z.php` (for example `upgrade-1.1.0.php`) and must define the function `upgrade_module_X_Y_Z($module)` (for example `upgrade_module_1_1_0($module)`) which returns `true` on success. See [Upgrade a module](./creation.md#upgrade-method-of-a-module).

### /views

This folder contains the view files. This directory contains template files (`.tpl`), JavaScript/jQuery files (`.js`), CSS files (`.css`) and images files that are used in the module.

- `views/templates`: Template files of the modules resides in the folder.
  - `views/templates/admin`: Subfolder for back office controller's template files.
  - `views/templates/front`: Subfolder for front controller's template files.
  - `views/templates/hook`: Subfolder for module's hooks template files
- `views/css`: Subfolder for all the CSS files used in the module.
- `views/js`: Subfolder all the JS files used in the module.
- `views/img`: Subfolder for all the images, icon files used in the module.

The module can work with the main file and the icon files. All the other files and folders can be used if necessary.

In case any library is to be used in the modules it can be put in a separate folder i.e. 'lib', 'libs', 'libraries', 'sdk', 'vendor', 'vendors'. You should select the name which is most appropriate for the folder.
