# Configuration

For the development, you need to make a few more changes for better coding, faster bugs recognition, and an overall better development experience.

### Disable the Cache and force Smarty Compilation
If you are developing a theme or a module that has an impact on the frontend then you want the changes you made to appear on the frontend directly so you should force the compilation and disable the cache.

For this just go to the **Advanced Parameters tab --> Performance** and you will find the option in the Smarty settings.

### Debug mode (Error Reporting)
While developing it is necessary that you know what errors are there in the system. And to see the errors you will need to turn on the development mode of the system. For this just go to your QloApps files on the path `hotelcommerce/config/defines.inc.php` and set `_PS_MODE_DEV_` to `true`.

```php
if (!defined('_PS_MODE_DEV_')) {
    define('_PS_MODE_DEV_', true);
}
```

### Configuration files in QloApps

There are three main configuration files in `/config` folder:

- config.inc.php
- defines.inc.php
- smarty.config.inc.php


**config.inc.php**

It is the main configuration file for QloApps. We recommend that you should not change anything in this file.

**defines.inc.php**

This file has QloApps constant values.

It contains the location of a considerable number of files and folders. If you have to change their location, remember to keep the first path close by, for example in a PHP comment, in the event that you have to return to it later on.

When in development/test mode, you must make sure that all the error messages are displayed.

Set `define('_PS_MODE_DEV_', false);` to `true`.

Despite what might be expected, when in production mode, you should hide error messages however much as could be expected!

Make sure that `define('_PS_MODE_DEV_', false);` is set to `false`.

**smarty.config.inc.php**

This file contains all the Smarty related settings.

The Smarty cache system ought to consistently be disabled, as it isn't viable with QloApps: keep `$smarty->caching = false;` as it is.

`$smarty->compile_check` should be left to `false` in development mode.

### Debugging Methods
To display the content of a variable, custom debug methods are available for developers:  `p($variable)`  and  `d($variable)`.

***The `p()` method***
```php
echo '<xmp style="text-align: left;">';
print_r($variable);
echo '</xmp><br />';
return $variable;
```

The main method is the `p()` method and `d()` works similarly, but it calls the die() method instead of returning the variable.

***The `d()` method***
```php
echo '<xmp style="text-align: left;">';
print_r($variable);
echo '</xmp><br />';
die('END');
```
These two methods allow you to check a given variable state within your code.

Also, the `ppp()` and `ddd()` methods, which are the aliases of `p()` and `d()` respectively work in the same way. They have been added because they are easier to search in a huge block of code.

These debug methods are not activated by default. To activate them, you must enable the Debug mode, by setting `_PS_MODE_DEV_` to `true`.
