# Module classes

Classes are used to manage Db connections, Object–relational mapping (ObjectModel), utility function that are used within a module.

During module installation we called `createModuleTables()` in module main class to create tables that will be used in module, nut instaed of creating function to create, delete table in main module class we will create a class which will handle all database queries.

Let's create `MyModuleDb.php` and place it in `/classes` folder in module. Include this class in module main file before class decleration.
```php
<?php
if (!defined('_PS_VERSION_')) {
  exit;
}

require_once dirname(__FILE__).'/classes/MyModuleDb.php';


class MyQloModule extends Module
{
}
```

Now lets define our `MyModuleDb.php` class

``` php
class MyModuleDb
{
    public function createModuleTables()
    {
        if ($sql = $this->getModuleSql()) {
            foreach ($sql as $query) {
                if ($query) {
                    if (!Db::getInstance()->execute(trim($query))) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public function getModuleSql()
    {
        return array (
            // add your table structure here
            'CREATE TABLE IF NOT EXISTS `'._DB_PREFIX_.'my_product_list` (
                `id` int(11) NOT NULL AUTO_INCREMENT,
                `id_product` int(11) NOT NULL DEFAULT '0',
                `id_customer` int(11) NOT NULL,
	            `active` tinyint(1) unsigned NOT NULL DEFAULT '0',
                `date_add` datetime NOT NULL,
                `date_upd` datetime NOT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE='._MYSQL_ENGINE_.' DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;',
        );
    }

    public function dropTables()
    {
        return Db::getInstance()->execute(
            'DROP TABLE IF EXISTS
            `'._DB_PREFIX_.'my_product_list`,'
        );
    }

}
```
In the above code, we have created a function `createModuleTables()` which gets the queries need to be executed from `getModuleSql()` function and uses [Database function](../database/db-class) to create table in QloApps database.

All thats left is to call this function during our module installation.
```php
public function install()
{
    $objMyModuleDb = new MyModuleDb();
    if (!parent::install() 
        || !$this->registerHook('actionFrontControllerSetMedia') 
        || !$this->registerHook('displayLeftColumn') 
        || !Configuration::updateValue('MYQLOMODULE_NAME', 'Module name in configuration table') 
        || !$objMyModuleDb->createModuleTables()  // MyModuleDb class create table function called from module installation.
    ) {
        return false;
    }
    return true;
}
```

After we have created tables for our module, we will need to be able to add, remove or access data saved in tables. To manage this you will need to create a ObjectModel class (object-relational model) for each tables.<br>
Create a new objectModel class `MyProductList` in module's classes folder. This class will also contain any function that will be used to access data from its table.<br>
For creating Object Model class Follow [The ObjectModel class](../database/object-model-class) guide.

