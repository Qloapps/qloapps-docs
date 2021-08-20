#  Directory Structure

Following is the directory structure of QloApps


::: dir
├── Adapter
├── admin
│   ├──autoupgrade
│   ├──backups
│   ├──export
│   ├──filemanager
│   ├──import
│   └── themes
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
│   └── jquery
├── localization
├── log
├── mails
├── modules
├── override
│   ├── classes
│   ├── controllers
│   │   ├── admin
│   │   └── front
│   └── modules
├── pdf
├── themes
├── tools
├── translations
├── upload
└── webservice
:::


## Folder reference

### /Adapter
Contains the default adapter classes providing an interface to interact with Db, entity, hooks used in QloApps, and much more. 

### /admin

The admin directory contains the main endpoint to access the Back Office. When accessing this folder with your browser, you will be asked for your employee credentials.
This directory is renamed automatically when you install it from a ZIP package and access it for the first time. 

It contains the following subdirectories:

- `/autoupgrade`: scratch directory for the 1-click upgrade module
- `/backups`: contains database backups generated from the back-office
- `/export`: contains data export files
- `/filemanager`: sources for the back-office file manager
- `/import`: contains data import files
- `/themes`: contains the templates for two back-office themes, default and new-theme


### /cache

Contains temporary cache files. No longer used by QloApps but kept for backward compatibility.

### /classes
Contains all the legacy classes, including:

- Object models
- Utility classes (like Db, Helper, Tools…)
- Base controllers (like FrontController, AdminController…)


### /config

Contains bootstrapping and configuration files. Unless asked, you should never edit them, as they are directly handled by QloApps’ installer and back office.

### /controllers
It Contains controllers – as in MVC (Model-View-Controller), the software architecture used by QloApps. Each file controls a specific part of QloApps.

- `/admin`: contains legacy controllers for the Back Office
- `/front`: contains controllers for the Front Office

### /Core
This folder contains a new architecture design to provide easier modularity to code and unit testing.  

### /css
This folder used to contain style sheets for jquery plugins, now those files are moved to the /js/jquery directory.

### /docs
Contains documentation files, licenses, sample import files, and more.

### /download

Contains files that can be downloaded by the customers. Files are stored with an md5 filename.

### /img

Contains all of QloApps’ default images, icons and, picture files – which do not belong to themes.

- `/admin`: Back office images
- `/c`: Category pictures
- `/cms`: CMS pictures
- `/co`: Attributes (colors) pictures
- `/flags`: Country & language flags
- `/genders`: Gender (Shop Parameters > Customers > Client titles) pictures
- `/jquery`-ui: jQuery UI images
- `/l`: Language pictures
- `/os`: Order state pictures
- `/s`: Carrier pictures
- `/t`: Tab icons
- `/tmp`: Temporary pictures


### /install

Contains all the files related to QloApps’ installer.

### /js

Contains JavaScript files that are not attached to themes. Most of them belong to the back office.

This is where you can find the jQuery framework.


### /localization

Contains all of QloApps localization packs — that is, files that contain local information such as default currencies and languages, tax rules and tax rule groups, states used in each country.

### /log
This directory contains exception logs generated in QloApps

### /mails

Contains all HTML and text templates for e-mails sent by QloApps. Every language has its specific folder, where you can manually change the content. QloApps contains a tool to edit your e-mails, located in the back office, in the Localization > translations page.

### /modules
Contains all of the QloApps modules, each in its folder.

### /override
This directory contains the overridden classes. The overriding is done through modules or manually to change the behavior of legacy classes without actually changing them.

### /pdf

Contains all the template files (.tpl) related to PDF file generation (invoice, delivery slips, etc.). Change these files to change the look of the PDF files that QloApps generates.

### /themes

It contains all the themes that you have installed. Each theme will be in its specific folder.


### /tools
This directory contains all the 3rd party library used in QloApps.

### /translations

Contains zip packages that you downloaded for the translation packs.

### /upload
This directory contains the files uploaded by the customer through the contact page or customizations.

### /webservice

Provides the Webservice API's main Endpoint.
