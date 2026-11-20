# Database Structure

In QloApps the database tables start with a prefix for example `PREFIX_orders`. You have the option to change the prefix of the tables on the installation step where you need to fill your database data and associate a database.

We utilize lowercase while naming, and isolated the words with an underscore character ("_"):

Here are few examples:
- `PREFIX_customer`
- `PREFIX_cart`
- `PREFIX_order`
- `PREFIX_module`
- `PREFIX_product`

Right when a table develops an association  between two elements, the names of the two substances are referred to in the table's name. For instance, `PREFIX_customer_group` joins customers to their assigned groups.

A few nuances to note about tables:

- Tables that contain translations must end with the `_lang` postfix. For example, `PREFIX_product_lang` has all the translations for the `PREFIX_product` table.

There is furthermore a few standard practices for data sections inside a table:

- Use the `id_lang` field to specify the language related with a record.

## Database content

Database substance is saved in XML records in `install-dev/data/xml/` as per default settings. Every element has one record (= table).

These records are utilized during the QloApps installation too.

## Structure and content upgrades

### Defining changes

As soon as QloApps is installed, the default structure and substance records we saw are not utilized any longer.

On the off chance that another release of QloApps must carry changes to the current database, an upgrade document must be made along with the `install-dev/data/db_structure.sql`  update. This SQL document will be put away in the `/install-dev/upgrade/sql/`.

Its name is the QloApps variant on which the change will be applied.

## Applying changes

Applying the changes to your database can be done:
- By reinstalling the website
- From a previous version of QloApps, by copying the new files and calling the PHP script `install-dev/upgrade/upgrade.php`

QloApps lists the upgrade files waiting to be applied, by selecting the names fitting between the configuration property ` PS_VERSION_DB` and the constant `_PS_INSTALL_VERSION_` defined in `install-dev/install_version.php`.

Tables are created with the `ENGINE_TYPE` (the storage engine selected during installation, InnoDB by default) and the `utf8` charset. QloApps 1.8.0 supports MySQL 5.7 and 8.0+ as well as MariaDB.

The tables of a module are created by the module itself on installation. For example, the `htl_*` tables of the Hotel Reservation System module are created in `modules/hotelreservationsystem/classes/HotelReservationSystemDb.php`, and the changes for existing installations are shipped in the module's `upgrade/upgrade-X.Y.Z.php` scripts.

