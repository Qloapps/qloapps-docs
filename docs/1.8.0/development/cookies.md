# Cookies

To save all the session information QloApps uses encrypted cookies (encrypted with the `PhpEncryption` class using the `_NEW_COOKIE_KEY_` constant defined in `config/settings.inc.php`). Cookies are saved for visitors/customers as well as for employees/administrators.

`Cookie` class is used for all the read and write operations.

Within QloApps code you can access cookies through cookie object in context object:

```php
$this->context->cookie;
```

- To get all the data of the cookie you can get it by cookie's name using the below code:

```php
$this->context->cookie->variable;
```

- In case you want to use a cookie from non QloApps codes you have to include some files and you can access cookies using the below code -

```php
// include belo files
include_once('QloApps_path/config/config.inc.php');
include_once('QloApps_path/config/settings.inc.php');
include_once('QloApps_path/classes/Cookie.php');

$cookie = new Cookie('ps');

// For employee's cookie Use "psAdmin".
$cookie = new Cookie('psAdmin');
```

Below is the list of cookies stored for visitors/customers -

| Token                    | Description                                                                                                                                                                          |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ajax_blockcart_display` | Whether the cart block is "expanded" or "collapsed".                                                                                                                                 |
| `checkedTOS`             | Whether the "Terms of service" checkbox has been ticked (1 if it has and 0 if it hasn't)                                                                                             |
| `checksum`               | The CRC32 checksum used to determine whether the cookie has been modified by a third party. The customer will be logged out and the cookie deleted if the checksum doesn't match. |
| `customer_firstname`     | The first name of the customer.                                                                                                                                                      |
| `customer_lastname`      | The last name of the customer.                                                                                                                                                       |
| `date_add`               | The date and time the cookie was created (in YYYY-MM-DD HH:MM:SS format).                                                                                                            |
| `email`                  | The email address that the customer used to log in.                                                                                                                                  |
| `id_cart`                | The ID of the current cart displayed in the cart block.                                                                                                                              |
| `id_connections`         | The connection ID of the visitor's current session.                                                                                                                                  |
| `id_currency`            | The ID of the selected currency.                                                                                                                                                     |
| `id_customer`            | The customer ID of the visitor when logged in.                                                                                                                                       |
| `id_guest`               | The guest ID of the visitor when not logged in.                                                                                                                                      |
| `id_lang`                | The ID of the selected language.                                                                                                                                                     |
| `id_wishlist`            | The ID of the current wishlist displayed in the wishlist block.                                                                                                                      |
| `last_visited_category`  | The ID of the last visited category of product listings.                                                                                                                             |
| `logged`                 | Whether the customer is logged in                                                                                                                                                    |
| `passwd`                 | The password hash of the customer, as stored in the customer table. Since QloApps 1.8.0 new passwords are hashed with bcrypt (legacy MD5 hashes of the _COOKIE_KEY_ and the password are still accepted and are used until the password is rehashed). If it no longer matches the customer's stored hash, the customer is logged out.                                                                             |
| `viewed`                 | The IDs of recently viewed products as a comma-separated list.                                                                                                                       |


Below is the list of cookies stored for an employee/administrator

| Token         | Description                                                                                                                                                                               |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `date_add`    | The date and time the cookie was created (in YYYY-MM-DD HH:MM:SS format).                                                                                                                 |
| `id_lang`     | The ID of the selected language.                                                                                                                                                          |
| `id_employee` | The ID of the employee.                                                                                                                                                                   |
| `lastname`    | The last name of the employee.                                                                                                                                                            |
| `firstname`   | The first name of the employee.                                                                                                                                                           |
| `email`       | The email address the employee used to log in.                                                                                                                                            |
| `profile`     | The ID of the profile that determines which tabs the employee can access.                                                                                                                 |
| `passwd`      | The password hash of the employee, as stored in the employee table (bcrypt since QloApps 1.8.0; legacy MD5 hashes are still accepted).                                                                                 |
| `checksum`    | The CRC32 checksum used to determine whether the cookie has been modified by a third party. If the checksum doesn't match, the customer will be logged out and the cookie is deleted . |
