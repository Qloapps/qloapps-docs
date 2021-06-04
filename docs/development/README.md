# Database Structure

In QloApps the database tables start with a prefix for example PREFIX_orders. You have the option to change the prefix of the tables on the installation step where you need to fill your database data and associate a database.

We utilize lowercase while naming, and isolated the words with an underscore character ("_"):

Here are few examples:
- PREFIX_customer
- PREFIX_cart
- PREFIX_order
- PREFIX_module
- PREFIX_product

Right when a table develops the associations between two elements, the names of the two substances are referred to in the table's name. For instance, PREFIX_customer_group joins customers to their assigned groups.

A few nuances to note about tables:

- Tables that contain translations must end with the _lang postfix. For example, PREFIX_product_lang has all the translations for the PREFIX_product table.

- Tables that contain the records interfacing with a specific shop must end with the _shop addition. For instance, PREFIX_category_shop contains the circumstance of each class depending upon the store.

There is furthermore a few standard practices for data sections inside a table:

- Use the id_lang field to store the language related with a record.

- Use the id_shop field to store the store related with a record.

## Database content

Database substance is saved in XML records in introduce/information/xml/ as per defualt settings. Every element has one record (= table).

These records are utilized during the QloApps installation too.

## Structure and content upgrades

### Defining changes

As soon as QloApps is installed, the default structure and substance records we saw are not utilized any longer.

On the off chance that another release of QloApps must carry changes to the current database, an upgrade document must be made along with the ` db_structure.sql`  update. This SQL document will be put away in the ` /install/upgrade/sql/ `.

Its name is the QloApps variant on which the change will be applied.

## Applying changes

Applying the changes on your database can be done:
- by reinstalling the shop
- from a previous version of QloApps, by copying the new files and calling the PHP script ` install/upgrade/upgrade.php`

QloApps lists the upgrade files waiting to be applied, by selecting the names fitting between the configuration property ` PS_VERSION_DB` and the constant `_PS_INSTALL_VERSION_` defined in `install/install_version.php`.

In the first part of this article, we talked about entities being managed only by Doctrine. Applying the changes on the database is done with the following command:

```php
php bin/console prestashop:schema:update-without-foreign
```

