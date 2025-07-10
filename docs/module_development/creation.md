
# Start Creating a Module

To understand the module in QloApps let's create a module.
We take the name of the module as **myqlomodule**.
Let us do this step-by-step process.

- In the first step, create a module folder. The folder's name must be the same as the name of the module and in lowercase in the `/modules/` folder.

**Note**: The module name can only consist of alphanumeric, the hyphen (-) and the underscore (_) characters all in lowercase: `myqlomodule`.

- In the module folder, create module main PHP file with the same name as the module folder's name: `myqlomodule.php` This main file handles most of the processing of the module..

*To create a basic module the above steps are enough. More files and folders are added as per the requirements.*

**Let's walk through the module's main file's contents. PHP file code must be started with the below code:**

#### First check the QloApps version constant.
This constant is always present. It is not defined then exit the module and do not load the module.
**This prevents malicious users from loading this file directly.**

```php
<?php
if (!defined('_PS_VERSION_')) {
    exit;
}
```

#### Create the module's main class:
The main file has a class with a name the same as the module's folder name but in the CamelCase letters. This class will extend any class derived from the `Module` class. for example, `PaymentModule`, `ModuleGridEngine`, `ModuleGraph`, etc classes are extended for specific needs.

myqlomodule.php
```php
<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class MyQloModule extends Module
{
}
```

*So this is the minimum requirement to show your module in the module list. Now if you put your module in the `/modules` folder then in the back office modules list, this module will be seen in the listing on "Modules Catalog" page.*

#### Create constructor method of the class

In object-oriented programming, the constructor method  is called when an object is created of a class.
In QloApps this method is called first whenever a module is loaded.
So we can put most of the details of the module in this method.

```php
<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class MyQloModule extends Module
{
    public function __construct()
    {
        $this->name = 'myqlomodule';
        $this->version = '1.0.0';
        $this->author = 'Module Author Name';
        $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_);
        $this->bootstrap = true;
        $this->need_instance = 0;
        $this->tab = 'front_office_features';

        parent::__construct();

        $this->displayName = $this->l('Module display name.');
        $this->description = $this->l('Module description here.');

        $this->confirmUninstall = $this->l('Are you sure you want to uninstall this module?');
    }
}
```
Let us explain things used in the constructor method line by line.

| Line                                                                       | Description                                                                                          | Detail                                                                                                                                                                                     |
|:---------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| public function __construct()                                              | Creating constructor method in class                                                                 | This is how you have to create the constructor method on the module's main class.                                                                                                          |
| $this->name = 'myqlomodule';                                               | class instance ($this) attribute                                                                     | This is an internal identifier attribute. Its value must be same as module's folder name and in lowercase                                                                                  |
| $this->version = '1.0';                                                    | class instance ($this) attribute                                                                     | write the version of the module. Displayed in the modules list.                                                                                                                            |
| $this->author = 'Firstname Lastname';                                      | class instance ($this) attribute                                                                     | write the name of the author of the module. Displayed in the modules list.                                                                                                                 |
| $this->tab = 'front_office_features';                                      | class instance ($this) attribute                                                                     | Set the title of the section in which this module list in the back office module list. Displayed in the modules list.                                                                      |
| $this->need_instance = 0;                                                  | Handles module relationship and its environment                                                      | Set 1 if you want to load module's class on the "Modules" page in the back office. If set 0 then module will not be loaded and less resources are loaded at the time of module page load.  |
| $this->ps_versions_compliancy = array('min' => '1.5', 'max' => '1.6');     | Handles module relationship and its environment                                                      | Set the versions compatibility of the modules between QloApps versions. Module will give an error if it is not compatible with QloApps version.                                            |
| $this->bootstrap = true;                                                   | Handles module relationship and its environment                                                      | Set true if template files of the module are built with the Bootstrap tool in mind else set false.                                                                                         |
| parent::__construct();                                                     | Calls the parent class constructor method                                                            | Many actions are triggered from QloApps at this point. constuctor() method of parent class must called after the $this->name variable and before any use of translation method $this->l(). |
| $this->displayName = $this->l('Module display name');                      | Text strings used in the module. Text strings are encapsulated in the QloApps translation method l() | Name to display for the module. This name will be displayed in the module list in the back office.                                                                                         |
| $this->description = $this->l('Module description here.');                 | Text strings used in the module. Text strings are encapsulated in the QloApps translation method l() | Module's description string. This message will be displayed in the module list in the back office.                                                                                         |
| $this->confirmUninstall = $this->l('Are you sure you want to uninstall?'); | Text strings used in the module. Text strings are encapsulated in the QloApps translation method l() | This is used in installation code. This message is for confirmation pop up to ensure if admin really want to uninstall the module.                                                         |


Below are the tab list in QloApps back office:

| Tab name              | Section title           |
|:----------------------|:------------------------|
| administration        | Administration          |
| advertising_marketing | Advertising & Marketing |
| analytics_stats       | Analytics & Stats       |
| billing_invoicing     | Billing & Invoices      |
| checkout              | Checkout                |
| content_management    | Content Management      |
| dashboard             | Dashboard               |
| emailing              | E-mailing               |
| export                | Export                  |
| front_office_features | Front Office Features   |
| i18n_localization     | I18n & Localization     |
| market_place          | Market Place            |
| merchandizing         | Merchandizing           |
| migration_tools       | Migration Tools         |
| mobile                | Mobile                  |
| others                | Other Modules           |
| payments_gateways     | Payments & Gateways     |
| payment_security      | Payment Security        |
| pricing_promotion     | Pricing & Promotion     |
| quick_bulk_update     | Quick / Bulk update     |
| search_filter         | Search & Filter         |
| seo                   | SEO                     |
| slideshows            | Slideshows              |
| social_networks       | Social Networks         |

These parameters are minimum for the constructor method. You can add more necessary parameters later if needed. So this is all about constructor method in the main class.


You will see the module in the module list. You can install the module by clicking the install button of the module.
click the "Proceed with installation" to proceed with installation.

#### **install() method of class**
You may need to perform some actions in the process of installation. In this case you can change the default install method of Module class and override it in your module's main class.

To override the install method below is the minimum code required -

```php
public function install()
{
    if (!parent::install()) {
      return false;
    }

    return true;
}
```
So above is the minimum code you need to write for the install method.
We call the super class `install()` method. It returns true on successful installation and false if there is some problem occurred in the installation.

**Now we will perform our actions on installation process like creating our database tables or entering data in the configuration table in the install process**

Lets perform below tasks
- Register hooks which we will use in the module
- Create and save value in the `Configuration` table (`MYQLOMODULE_NAME`).
- Create database tables of the module

```php
public function install()
{
    if (!parent::install()
        || !$this->registerHook('actionFrontControllerSetMedia')
        || !$this->registerHook('displayLeftColumn')
        || !Configuration::updateValue('MYQLOMODULE_NAME', 'Module name in configuration table')
        || !$this->createModuleTables()
    ) {
        return false;
    }

    return true;
}
```
If any action fails then installation process stops with error message.


#### **uninstall() method of class**

To perform your actions while uninstalling the module, you can change the default `uninstall()` method of Module class and override it in our module's main class.

To override the `uninstall()` method below is the minimum code required:
```php
public function uninstall()
{
    if (!parent::uninstall()) {
      return false;
    }

    return true;
}
```

Now while uninstallation process, let's perform below tasks:
- Delete value in the `Configuration` table (`MYQLOMODULE_NAME`).
- Delete database tables of the module

```php
public function uninstall()
{
    if (!parent::install()
        || !Configuration::deleteByName('MYQLOMODULE_NAME')
        || !$this->dropModuleTables()
    ) {
      return false;
    }

    return true;
}
```
If any action fails then uninstall process stops with error message.

#### **Configuration Class**
This class is used to store settings in the **PREFIX_configuration** table. You can store data in the table without creating tables in your module.

#### **The Main methods of Configuration Class**

- **`Configuration::get('MY_QLO_VARIABLE')`**: Get a specific value through the name from "PREFIX_configuration" table.
- **`Configuration::getMultiple(array('FIRST_QLO_VARIABLE', 'SECOND_QLO_VARIABLE', 'THIRD_QLO_VARIABLE'))`**: Get the multiple values in the form of array.
- **`Configuration::updateValue('MY_QLO_VARIABLE', $customValue)`**: Update the value with the custom value in the "PREFIX_configuration" table.
- **`Configuration::deleteByName('MY_QLO_VARIABLE')`**: Deletes the row from "PREFIX_configuration" table which have name "MY_QLO_VARIABLE".

#### **Saving an array value. Store the array value by serializeing this first.**
```php
Configuration::updateValue('QLO_GLOBAL_SETTINGS', serialize(array('A', 'B', 'C')));
```

#### Get an array from the "PREFIX_configuration" table
```php
$arrayValue = unserialize(Configuration::get('QLO_GLOBAL_SETTINGS'));
```

#### Retrieving values from "PREFIX_configuration" table

There are many values you can get from "PREFIX_configuration" table. Below are some examples, How you can get the values:
- **`Configuration::get('PS_TIMEZONE')`** : Get the name of the default timezone.
- **`Configuration::get('PS_LANG_DEFAULT')`** : Get the ID of the default QloApps language.
- **`Configuration::get('PS_CURRENCY_DEFAULT')`** : Get the ID of the default QloApps Currency.

*So in many situations, you can use this "PREFIX_configuration" table with Configuration class.*
*Explore "PREFIX_configuration" table for many other settings.*


#### Icon Files
- There are two icon files in the module. It gives the finishing to any module development.
 - **logo.png**  : This file has size 32 x 32 pixels. This icon will be displayed besides the display name of the module in the back office module list.
 - **logo.gif**  : This file has size 16 x 16 pixels. This file used to represent the module in the back office.

You have to put this file in the root folder of the module. Modules's logo brings trust to your module for the users.

*Please make sure not to use the random logo for the module without the premission/authorization from any logo/service.*

#### config.xml file
- A configuration file **config.xml** is automatically generated during module installation automatically. Be careful while editing this file.


**In the `PREFIX_module` table, a row is added for the module during module installation. This table contains installed modules information.**

This is how you can create a basic module. Try to develop a basic module and install it on QloApps.
