# Configuration

For the developement you need to make few more changes for better coding, faster bugs recognition and a overall better developement experience.

### Disable the Cache and force Smarty Compilation
If you are developeing a theme or a module that has an impact on the frontend then you want the changes that you made to appear on the frontend directly, you should force the compilation and disable the cache.

For this just go to *Advance Parameters tab --> Performance* and you will find the option in the Smarty settings.

### Display error messages
While developement it is necessary that you know what errors are there in the system. And to see the errors you will need to turn on the developement mode of the system, for that just go to your QloApps files on the path hotelcommerce/config/defines.inc.php

change _PS_MODE_DEV_ to true

```php
if (!defined('_PS_MODE_DEV_')) {
    define('_PS_MODE_DEV_', true);
}
```
### Debugging Methods
To display the content of a variable, custom debug methods available for developers:  `p($variable)`  and  `d($variable)`.

***The p() method***
```php
echo '<xmp style="text-align: left;">';
print_r($variable);
echo '</xmp><br />';
return $variable;
```

The main method is the p() method, and d() works in the similar manner, but it calls the `die()` method instead of returning the variable.

***The d() method***
```php
echo '<xmp style="text-align: left;">';
print_r($variable);
echo '</xmp><br />';
die('END');
```
These two methods allow you to check a given variable state within your code.

Also the ppp() and ddd() methods, which are the aliases of p() and d() respectively work in same way. And they are easier to search and find in a huge block of code.

These debug methods are not activated by default. To activate them, you must enable the Debug mode, by setting _PS_MODE_DEV_ to true.

### Configuration Files in QloApps

There are three main configuration files in /config folder:

- config.inc.php
- defines.inc.php
- smarty.config.inc.php


**config.inc.php**

It is the main configuration file for QloApps. We recommend that you should not change anything in there.

**defines.inc.php**

This file have QloApps constant values.

It likewise contains the location of the considerable number of files and folders. On the off chance that you have to change their location, remember to keep the first path close by, for example in a PHP comment, in the event that you have to return to it later on.

When in development/test mode, you must make sure that all the error messages are displayed.

Set `define('_PS_MODE_DEV_', false);` to true.

Despite what might be expected, when in production mode, you should hide error messages however much as could be expected!

Make sure that `define('_PS_MODE_DEV_', false);` is set to false.

**smarty.config.inc.php**

This file contains all the Smarty-related settings.

The Smarty cache system ought to consistently be disabled, as it isn't viable with QloApps: keep `$smarty->caching = false;` as it is.

`$smarty->compile_check` should be left to false in development mode.

`$smarty->debugging` gives access to Smarty debug information while showing a page. That setting is all the more handily changed in the "Performance" page of the advanced parameters menu: the "Debug console" choice empowers you to pick between never showing Smarty's debug information, continually showing it, or possibly showing it when you add?SMARTY_DEBUG to the URL of the page you need to test, which can be valuable.