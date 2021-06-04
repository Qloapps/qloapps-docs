# Accessing Database with Db Class
Linking to the database

```php
<?php
/**
 * @var \Db $db
 */
$db = \Db::getInstance();nce();
```
The primary call to this technique introduces the link to the database and return similar link to all the following calls. $db in this model will be reused in all the following models.

## Db class methods

### Execute a raw SQL request (SELECT only)

```php
<?php
$request = 'SELECT `id_table` FROM `' . _DB_PREFIX_ . 'some_table` ...';

/** @var array $result */
$result = $db->executeS($request);
```
This method deals with raw SQL requests so the _DB_PREFIX_ must be used.

Returns an affiliated array containing the first line of the query. This function directly includes "LIMIT 1" to the query.

### Execute a SELECT request with only one column and one row

```php
<?php
$request = "SELECT `count('sales')` FROM `' . _DB_PREFIX_ . 'some_table` ...";

/** @var string|false $salesCount */
$salesCount = $db->getValue($request);
```
This method deals with raw SQL requests so the _DB_PREFIX_ must be used.

This technique is helpful when you need just one value to recover from the database. It forestalls to loop in a few arrays so as to get the primary value of the principal column.

### Execute a raw SQL request (UPDATE, INSERT…)

```php
<?php
$request = "INSERT INTO `' . _DB_PREFIX_ . 'some_table` (`id_table`) VALUES (10)";

/** @var array|false */
$db->execute($request);
```
This will return an array when the request was properly executed otherwise false.

### Insert a row in the database
```php
<?php
/** @var bool $result */
$result = $db->insert('db_table', array(
    'id_lang' => (int) $lang,
    'value' => pSQL($value),
    'date_upd' => date('Y-m-d H:i:s'),
));
```
_DB_PREFIX_ will be added to the table name as a prefix automatically.

The outcome is boolean saying if the request was appropriately executed or not.

### Update a row in the database

```php
<?php
/** @var bool $result */
$result = $db->update('db_table', array(
    'value' => pSQL($value),
    'date_upd' => date('Y-m-d H:i:s'),
), 'id_table = 10', 1, true);
```
_DB_PREFIX_ will be added to the table name as a prefix automatically.

The outcome is boolean saying if the request was appropriately executed or not.