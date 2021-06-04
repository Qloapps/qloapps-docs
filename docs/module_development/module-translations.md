# Module Translations

While developing a module, You write your strings in the english language. But you are not creating your modules for english language audience only.

You must want your module is for every language (French, Dutch, Spanish etc) website provides for its employees and customers. So you have to translate them into every language available in your website.

If you do this task manually it is very tedious. But QloApps provides easy way to make your strings of the module translatable in every language.

Your translatable strings may reside in two types of files in QloApps module -
- PHP files
- Smarty files (.tpl)

### PHP files translations
In PHP files, use **$this->l('My Module String.')** method call.
This method is in the **Module** abstract class and available in all the modules of QloApps.

Below is the example of the module's main file myqlomodule.php
```php
$this->displayName = $this->l('My QloApps Module');
$this->description = $this->l('Write a description of the module.');
```

Mostly in all cases in php files you have to use **$this->l()** method.

But in some special cases this method will not work::

<ins>**CASE - 1**</ins> : In the **Front controller** of the module you have to use **$this->module->l()** for string translations.

```php
$this->module->l('My QloApps String to translate in front controller.', 'front_controller_file_name')
```

Lets understand it wih an exapmple.
Below we are translating string in the /cheque/controllers/front/validation.php file
```php
die($this->module->l('This payment method is not available.', 'validation'));
```

<ins>**CASE - 2**</ins> : In the **Classes** of the module you have to first create module's object and the call the **l()** method with the module's object.

If there is a class names **ModuleHelper** in the file **myqlomodule/classes/ModuleHelper.php**. Then we have to make string translatable in this class like below -
```php
$objModule = new MyQloModule();
$objModule->l('My QloApps String to translate in module classes.', 'ModuleHelper')
// ModuleHelper is file name of the class
```


### Smarty files (.tpl) Translations
In the .tpl files, use **{l s='My string' mod='modulename'}** function call which is replaced by smarty by the translation of the chosen language.

For example, If we have to make below line's strings translatable -
```php
<a href="{$moduleControllerLink}" title="Click Here">Click here to visit the link!</a>
```

Below is the translatable string code -
```php
<a href="{$moduleControllerLink}" title="{l s='Click Here' mod='myqlomodule'}">{l s='Click here to visit the link' mod='myqlomodule'}</a>
```

Some times there are complex codes to translate -

Lets take a look at the below code -
```php
This is
{if isset($module_name_var) && $module_name_var}
    {$module_name_var}
{else}
    Qlo Module
{/if}
```
In the above code **"This is Qlo Module"** string is translatable.
In the first method, you can make strings **"This is"** and **"Qlo Module"** translatable separately.
```php
{l s='This is' mod='myqlomodule'}
{if isset($module_name_var) && $module_name_var}
    {$module_name_var}
{else}
    {l s='Qlo Module' mod='myqlomodule'}
{/if}
```

In the second method, sprintf() markers can mark the variables as %s or %2$s.\
In the above example, %s must be replaced by the **Qlo module** if and only if variable **$module_name_var** is not there.
And we have to keep in our mind to make **"Qlo Module"** string translatable.

This can be achieved through below code -
- **{capture}** function in Smarty only collects the template output into a variable between the tags to use it later on. It does not display it.
- translated **"Qlo Module"** is Replaced with the variable if the **$module_name_var** is empty or absent, using a temporary variable (**$temp_mod_name**).

See the below code -
```php
{if !isset($module_name_var) || !$module_name_var}
  {capture name='temp_mod_name'}{l s='Qlo Module' mod='myqlomodule'}{/capture}
  {assign var='module_name_var' value=$smarty.capture.temp_mod_name}
{/if}
{l s='Hello %s' sprintf=$module_name_var mod='myqlomodule'}
```

- **mod** parameter is mandatory in module translations.\
QloApps translation system use it to know which translataions belogs to which module.\

- **single quotes** delimeter is used to delemit Translation Strings. If you want to use single quotes in a string then it should be escaped with backslash (\\).

```php
{l s='Learn to write \'Hello World\'.' mod='myqlomodule'}
```
So this is how strings in the template files are translated.


### Translate the strings in QloApps

Below are steps to translate strings in QloApps :
- Visit **Localization -> Translations** tab.
- Select **Installed modules translations** from the **Modify translations** drop-down.
- Select the language in which you want to translate the module.
- Click the **Modify** button to proceed.
- Now in the loaded page all the string from all the installed modules in QloApps will be displayed.
The fieldsets of the module will be closed which all the strings are already translated. Otherwise if at least one string is left for translations module's fieldset is expanded.
- Next step is ti find your module in the list to translate and fill the tranalations in the text fields.
- After filling all the translations, clink on **Save and Stay** or **Save** button. this way your translations will be saved.

- Module's translatios are saved in a file named using the languageCode.php format i.e. **/myqlomodule/traslations/fr.php**.
Below is the demo file how translatiosn files actually looks like -

```php
<?php
global $_MODULE;
$_MODULE = array();
$_MODULE['<{myqlomodule}QloApps>myqlomodule_2ddddc2a736e4128ce1cdfd22b041e7f'] = 'Mon module';
$_MODULE['<{myqlomodule}QloApps>myqlomodule_d6968577f69f08c93c209bd8b6b3d4d5'] = 'Description du module Qlo.';
$_MODULE['<{myqlomodule}QloApps>myqlomodule_533937acf0e84c92e787614bbb16a7a0'] = 'Êtes-vous certain de vouloir désinstaller ce module ? Vous perdrez tous vos réglages !';
$_MODULE['<{myqlomodule}QloApps>myqlomodule_0f40e8817b005044250943f57a21c5e7'] = 'Aucun nom fourni';
$_MODULE['<{myqlomodule}QloApps>myqlomodule_fe5d926454b6a8144efce13a44d019ba'] = 'Valeur de configuration non valide.';
$_MODULE['<{myqlomodule}QloApps>myqlomodule_c888438d14855d7d96a2724ee9c306bd'] = 'Réglages mis à jour';
```
**Note** : *The translation files created in the translations/ folder of the module must not be edited manually. You have to use QloApps translations page to translate the strings of the module again.*

When you have translated the module's string in the french language (or any other language) then on selecting that language in the fornt office or back office of the website the translated content in the french language (or any other language) will be shown.