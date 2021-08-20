# Accessing Database with Db Class
Linking to the database

```php
/**
 * @var \Db $db
 */
$db = Db::getInstance();
```
The primary call to this technique introduces the link to the database and returns a similar link to all the following calls. `$db` in this model will be reused in all the following models.

## Db class methods

### Execute a raw SQL request (SELECT only)

```php
$request = 'SELECT `id_table` FROM `' . _DB_PREFIX_ . 'some_table` ...';

/** @var array $result */
$result = $db->executeS($request);
```
This method deals with raw SQL requests so the `_DB_PREFIX_` must be used.

Returns an affiliated array containing all the matching rows for the query.

### Execute a SELECT request with only one row

```php
$request = 'SELECT `first_name`, `last_name` FROM `' . _DB_PREFIX_ . 'some_table` ...';

/** @var array $customer */
$customer = $db->getRow($request);
```
This method deals with raw SQL requests so the `_DB_PREFIX_` must be used.

Returns an affiliated array containing the first row matching the resultant query. This function directly includes "LIMIT 1" to the query.

### Execute a SELECT request with only a single value

```php
$request = 'SELECT `count('sales')` FROM `' . _DB_PREFIX_ . 'some_table` ...';

/** @var string|false $salesCount */
$salesCount = $db->getValue($request);
```
This method deals with raw SQL requests so the `_DB_PREFIX_` must be used.

This technique is helpful when you need just one value to recover from the database. It forestalls to loop in a few arrays so as to get the primary value of the principal column.

### Execute a raw SQL request (UPDATE, INSERT…)

```php
$request = "INSERT INTO `' . _DB_PREFIX_ . 'some_table` (`id_table`) VALUES (10)";

/** @var bool */
$db->execute($request);
```
This will return a boolean whether a query is executed successfully or not. This function should not be used for select queries. 

### Insert a row in the database
```php
/** @var bool $result */
$result = $db->insert('db_table', array(
    'id_lang' => (int) $lang,
    'value' => pSQL($value),
    'date_upd' => date('Y-m-d H:i:s'),
));
```
`_DB_PREFIX_` will be added to the table name as a prefix automatically.

This will return a boolean saying if the request was appropriately executed or not.

### Update a row in the database

```php
/** @var bool $result */
$result = $db->update('db_table', array(
    'value' => pSQL($value),
    'date_upd' => date('Y-m-d H:i:s'),
), 'id_table = 10', 1, true);
```
`_DB_PREFIX_` will be added to the table name as a prefix automatically.

This will return a boolean saying if the request was appropriately executed or not.