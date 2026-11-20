# Coding Standards

We know how much consistency is important, especially if we are writing open-source code. This is because the source code is used by a lot of people and everyone keeps an eye on it. Hence, these people find bugs and take corrective actions to fix them.

Because of these reasons, when you are writing a theme, a plugin, or a key patch, you must follow the listed guidelines when you are writing something for QloApps. They are the ones that the developers of QloApps stick to and when you follow them then there is a guarantee that you can easily integrate your code with QloApps.

In brief, to keep the code easy to read and maintain it is important to have code consistency.


**The standards, conventions, and guidelines for QloApps development are as follows:**

- **PHP code**: QloApps retains the [PSR-1](https://www.php-fig.org/psr/psr-1/) and [PSR-2](https://www.php-fig.org/psr/psr-2/), along with [some good details from Symfony](https://symfony.com/doc/current/contributing/code/standards.html).
- **JavaScript code**: In QloApps we follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).
- **HTML and CSS code**: [coding standards of Mark Otto](https://codeguide.co/) are followed by QloApps. The [Bootstrap framework](https://getbootstrap.com/) is created by Mark.
- **Twig / Smarty code**: Same standards as with HTML and CSS.
- **Commits & Pull-requests conventions**: We select the best practices to be formalized.

## SQL Guidelines

For table names:
 1. Table names should begin with the `_DB_PREFIX_` prefix.
 2. Table names should have the exact name as the object they reflect. : For class `Cart` table name is `prefix_cart`, where `prefix` is replaced by the actual prefix, `qlo_`, by default.
 3. Table names have to be singular: `prefix_customer`.
 4. Save the data for languages in a table that is named exactly the same as the object's table, and with the `_lang` suffix. For example, `prefix_product_lang`.

For SQL queries:
 1. Write keywords in uppercase.
 ```SQL
  SELECT `firstname`
  FROM `'._DB_PREFIX_.'customer`
  ```
 2. Always use Back quotes ("`") around SQL field names and table names.
 ```SQL
    SELECT p.`foo`, c.`bar`
    FROM `'._DB_PREFIX_.'product` p, `'._DB_PREFIX_.'customer`  
 ```
 3. Name Table aliases by taking the first letter of each word, and must be lowercase.
 ```SQL
    SELECT p.`id_product`, pl.`name`
    FROM `'._DB_PREFIX_.'product` p
    NATURAL JOIN `'._DB_PREFIX_.'product_lang` pl
 ```
 4. Whenever there is a conflict between table aliases, the second character is also used in the name.
 ```SQL
    SELECT ca.`id_product`, cu.`firstname`
    FROM `'._DB_PREFIX_.'cart` ca, `'._DB_PREFIX_.'customer`
 ```   
 5. Create a new line for each clause.
 ```SQL
    $query = 'SELECT pl.`name`
    FROM `'._DB_PREFIX_.'product_lang` pl
    WHERE pl.`id_product` = 17';
 ```   
 6. It is forbidden to make a JOIN in a WHERE clause.