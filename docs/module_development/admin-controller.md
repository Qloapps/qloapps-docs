# Admin Controller


## Create Admin Controller 
To create an admin controller we will first need to create an entry of that admin controller’s class in `_DB_PREFIX_.’tab` table. And generally, we make all these entries at the time of module installation.

There are two options to create and admin module controller : 
- Create a tab in back-office menu for the admin controller
- Create a hidden admin controller which can be opened through custom link.

For both these cases we will need to call `installTab()` function during module installation. we have created a `callInstallTab()` function which will handle all tab creation for multiple tabs.
``` php
public function install()
{
  if (!parent::install() 
    || !$this->registerHook('actionFrontControllerSetMedia') 
    || !$this->registerHook('displayLeftColumn') 
    || !Configuration::updateValue('MYQLOMODULE_NAME', 'Module name in configuration table') 
    || !$this->createModuleTables()
    || !$this->callInstallTab()
  ) {
    return false;
  }
  return true;
}

/**
 * call installTab for all required admin controllers
 */
public function callInstallTab()
{
    $this->installTab('class_name', 'tab_name');
    return true;
}

/**
 * Creates entry for admin tab in QloApps database from provided arguments
 */ 
public function installTab($className, $tabName, $tabParentName = false, $hiddenTab = false)
{
    $tab = new Tab();
    $tab->active = 1;
    $tab->class_name = $className;
    $tab->name = array();

    foreach (Language::getLanguages(true) as $lang) {
        $tab->name[$lang['id_lang']] = $tabName;
    }

    if($hiddenTab) {
        $tab->id_parent = -1;
    } elseif ($tabParentName) {
        $tab->id_parent = (int) Tab::getIdFromClassName($tabParentName);
    } else {
        $tab->id_parent = 0;
    }

    $tab->module = $this->name;

    return $tab->add();

}
```

### Create a tab in back-office menu for the admin controller

To create an admin controller with tab in back-office, we will need to specify the `$tab_parent_name` for that controller. We have two options for creating admin controller with tabs.

**Create new tab inside previously created tab**

Suppose we want to add our admin controller inside Orders tab, our `installTab()` function call would be as below

``` php 
public function callInstallTab()
{
    $this->installTab('AdminMyModule', 'Manage Products', 'AdminParentOrders');
    return true;
}
```

This will create a new tab inside Orders tab

![new tab](..//assets/images/module_development/admin-tab.png)



**Create a new menu in back-office menu**

To create a new menu for for your module, we will need to pass false as `$tabParentName` for root tab. 

``` php 
public function callInstallTab()
{
    $this->installTab('AdminParentMyModule', 'My module menu');
    $this->installTab('AdminMyModule', 'Manage Products', 'AdminParentMyModule');
    return true;
}

```

In the above example you can see that we have called an additional tab, this is because the parent tab will not be a controller. The controller `AdminMyModule` will be listed inside our parent tab.

![new menu](..//assets/images/module_development/admin-tab-menu.png)

  

### Create a hidden admin controller

To create a hidden admin controller we will need to pass $hiddenTab as true

``` php 
public function callInstallTab()
{
    $this->installTab('AdminMyModule', 'Manage Products', false, true);
    return true;
}
```

This will create a new entry in `_DB_PREFIX_.’tab` table but the tab will not be visible in back-office menu. To access this admin controller create a link to this module and redirect to module.<br>
`$adminLink = $this->context->link->getAdminLink('AdminMyModule');`

we can assign this to smarty and create a link or we can redirect to this module on a function call.
``` php
public function getContent()
{
    Tools::redirectAdmin($this->context->link->getAdminLink('AdminMyModule'));
}
```

In the above example instead of opening configuration page when config button is clicked the admin controller will be opened. 

