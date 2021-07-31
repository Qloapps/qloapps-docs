# Database Query Class

To create a SQL queries you will need DBQuery class which is a query builder. For an example, 

```php
$sql = new DbQuery();
$sql->select('*');
$sql->from('cms', 'c');
$sql->innerJoin('cms_lang', 'l', 'c.id_cms = l.id_cms AND l.id_lang = '.(int)$id_lang);
$sql->where('c.active = 1');
$sql->orderBy('position');
return Db::getInstance()->executeS($sql);
```
Here is a list of some of the methods from this class

| Name of the method and parameter | Description |
| ----------- | ----------- |
|__toString() |	Create and get the query.|
|build() |	Create and get the query (return a string).|
|from(string $table, mixed $alias = null)	| Set table for FROM clause.|
|groupBy(string $fields) |	Add a GROUP BY restriction.|
|having(string $restriction)	| Add a restriction in the HAVING clause (each restriction will be separated by an AND statement).|
|innerJoin(string $table, string $alias = null, string $on = null)	| Add a INNER JOIN clause, E.g. $this->innerJoin('product p ON ...').|
|join(string $join)	| Add a JOIN clause, E.g. $this->join('RIGHT JOIN'._DB_PREFIX_.'product p ON ...');.|
|leftJoin(string $table, string $alias = null, string $on = null)	| Add a LEFT JOIN clause.|
|leftOuterJoin(string $table, string $alias = null, string $on = null) |Add a LEFT OUTER JOIN clause.|
|limit(string $limit, mixed $offset = 0)	| Limit results in query.|
|naturalJoin(string $table, string $alias = null)	| Add a NATURAL JOIN clause.|
|orderBy(string $fields)	| Add an ORDER B restriction.|
|select(string $fields)	| Add fields in query selection.|
|where(string $restriction) | Add a restriction in WHERE clause (each restriction will be separated by an AND statement).|