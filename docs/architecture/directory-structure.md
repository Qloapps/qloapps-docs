#  Directory Structure

Following is the directory structure of QloApps
```
├── Adapter
├── admin
├── cache
├── classes
├── config
├── controllers
│   ├── admin
│   └── front
├── Core
├── css
├── docs
├── download
├── img
├── install
├── js
├── localization
├── log
├── mails
├── modules
├── override
│   ├── classes
│   ├── controllers
│   └── modules
├── pdf
├── themes
├── tools
├── translations
├── upload
└── webservice
```

## Folder reference

### /Adapter
*Coming Soon*

### /admin

The admin directory contains the main endpoint to access the Back Office. When accessing this folder with your browser, you will be asked for your employee credentials.
This directory is named admin-dev when using QloApps from source code, and is renamed automatically when you install it from a ZIP package.

It contains the following subdirectories:

- /autoupgrade: scratch directory for the 1-click upgrade module
- /backups: contains database backups generated from the Back office
- /export: contains data export files
- /filemanager: sources for the Back office file manager
- /import: contains data import files
- /themes: contains the templates for two back office themes, default and new-theme



### /cache

Contains temporary cache files. No longer used by QloApps but kept for backwards compatibility

### /classes
Contains all the legacy classes, including:

- Object models
- Utility classes (like Db, Helper, Tools…)
- Base controllers (like FrontController, AdminController…)


### /config

Contains bootstrapping and configuration files. Unless asked, you should never edit them, as they are directly handled by QloApps’s installer and back office.

### /controllers
It Contains controllers – as in MVC (Model-View-Controller), the software architecture used by QloApps. Each file controls a specific part of QloApps.

- /admin: contains legacy controllers for the Back Office
- /front: contains controllers for the Front Office

### /Core
*Coming Soon*

### /css
*Coming Soon*

### /docs
*Coming Soon*

Contains documentation files, licenses, sample import files, and more.

### /download

Contains your virtual products, which can be downloaded by the customers who bought them. Files are stored with an md5 filename.

### /img

Contains all of QloApps’ default images, icons and picture files – which are not belongs to themes.

-  /admin: Back office images
- /c: Category pictures
- /cms: CMS pictures
- /co: Attributes (colors) pictures
- /flags: Country & language flags
- /genders: Gender (Shop Parameters > Customers > Client titles) pictures
- /jquery-ui: jQuery UI images
- /l: Language pictures
- /os: Order state pictures
- /s: Carrier pictures
- /t: Tab icons
- /tmp: Temporary pictures


### /install

Contains all the files related to QloApps’s installer. This directory is named install-dev when using QloApps from source code.

### /js

Contains JavaScript files that are not attached to themes. Most of them belong to the back office.

This is where you can find the jQuery framework


### /localization

Contains all of QloApps’s localization packs — that is, files that contain local information such as default currencies and languages, tax rules and tax rule groups, statesuse in each country.

The CLDR database is also located in this directory.


### /log
*Coming Soon*

### /mails

Contains all HTML and text templates for e-mails sent by QloApps. Every language has its own specific folder, where you can manually changes the content. QloApps contains a tool to edit your e-mails, located in the back office, in the Localization > Translation page.

### /modules
Contains all of QloApps’ modules, each in its own folder.

### /override
Contains class overrides

### /pdf

Contains all the template files (.tpl) related to PDF file generation (invoice, delivery slips, etc.). Change these files in order to change the look of the PDF files that QloApps generates.

### /themes

It contains all the themes that you have installed. Each theme will be in it own specific folder.

It also includes the core.js library.


### /tools
This  has development tools. This directory is not included in release package.
This directory contains the following subdirectories.
- /assets : Script that allows building all static assets from sources.
- /build : it is used to create release package
- /foreignkeyGenerator : Creates forign keys for all tables (for educational purposes only)
-/profiling : Profiling tools for legacy classes

### /translations

Contains zip packages that you downloaded for the translation packs.

### /upload
*Coming Soon*
### /webservice

Provides the Webservice API 's main Endpoint.
