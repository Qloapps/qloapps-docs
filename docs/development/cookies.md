# Cookies

Below are some points regarding QloApps Cookies -

- To save all the session information encrypted cookies are used by QloApps. Cookies are saved for visitors/customers as well as for employees/administrators.

- For read and write operations of the cookies "Cookie" class at path "/classes/Cookie.php" is used.

- Within QloApps code you can access cookies using the below lines of code -

```php
$this->context->cookie;
```

- To get all the data of the cookie you can get it by cookie's name using belo code -

```php
$this->context->cookie->variable;
```

- In case you want to use cookie from non QloApps codes the you have to include some files and you can access cookies using belo code -

```php
// include belo files
include_once('QloApps_path/config/config.inc.php');
include_once('QloApps_path/config/settings.inc.php');
include_once('QloApps_path/classes/Cookie.php');

$cookie = new Cookie('ps'); 

// For employee's cookie Use "psAdmin".
$cookie = new Cookie('psAdmin');
```

Below is the list of cookies stored for visitor/customer -

| Token | Description     |
|    :---   |   :---   |
| `ajax_blockcart_display` | Whether the cart block is "expanded" or "collapsed".|
|  `checkedTOS` | Whether the "Terms of service" checkbox has been ticked (1 if it has and 0 if it hasn't) |
| `checksum` | The Blowfish checksum used to determine whether the cookie has been modified by a third party. The customer will be logged out and the cookie deleted if the checksum doesn't match. |
| `customer_firstname` | The first name of the customer.|
| `customer_lastname` | The last name of the customer.|
| `date_add` | The date and time the cookie was created (in YYYY-MM-DD HH:MM:SS format).|
| `email` | The email address that the customer used to log in.|
| `id_cart` | The ID of the current cart displayed in the cart block.|
| `id_connections` | The connection ID of the visitor's current session.|
| `id_currency` | The ID of the selected currency.|
| `id_customer` | The customer ID of the visitor when logged in.|
| `id_guest` | The guest ID of the visitor when not logged in.|
| `id_lang` | The ID of the selected language.|
| `id_wishlist` | The ID of the current wishlist displayed in the wishlist block.|
| `last_visited_category` | The ID of the last visited category of product listings.|
| `logged` | Whether the customer is logged in |
| `passwd` | The MD5 hash of the _COOKIE_KEY_ in config/settings.inc.php and the password the customer used to log in|
| `viewed` | The IDs of recently viewed products as a comma-separated list.|


Below is the list of cookies stored for an employee/administrator

| Token | Description     |
|    :---  |  :---  |
| `date_add` | The date and time the cookie was created (in YYYY-MM-DD HH:MM:SS format).|
| `id_lang` | The ID of the selected language.|
| `id_employee` | The ID of the employee.|
| `lastname` | The last name of the employee.|
| `firstname` | The first name of the employee.|
| `email` | The email address the employee used to log in.|
| `profile` | The ID of the profile that determines which tabs the employee can access.|
| `passwd` | The MD5 hash of the _COOKIE_KEY_ in config/settings.inc.php and the password the employee used to log in.|
| `checksum` | The Blowfish checksum used to determine whether the cookie has been modified by a third party. If the checksum doesn't match, the customer will be logged out and the cookie is deleted .|





<style>
	th {
	  font-size: 16px;}
	td {
	  font-size: 14px;}
	  td > code {
	  font-size: 15px!important;}
</style>