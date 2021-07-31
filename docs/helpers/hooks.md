# Hooks

In QloApps,hooks are associate your content and actions to some specific QloApps events. Hooks can be used to display content in front office or to trigger a custom function when a customer sign up


## Managing Hooks

There are two types of hooks in QloApps 
- **Display hooks** : These hooks are responsible to display something whether on the front-end or backend. 
- **Action hooks** : Any specific events or data operations that take place in QloApps will trigger this hook type of hook.

**Display Hooks** are used to insert content in a page.

Below are some hooks which can add content on the home page.

| Hook               | Description                                      |
| :----------------- | :----------------------------------------------- |
| displayHeader      | Displays the content in the page's header.       |
| displayTop         | Displays the content in the page's top.          |
| displayLeftColumn  | Displays the content in the page's left column.  |
| displayHome        | Displays the content in the page's central.      |
| displayRightColumn | Displays the content in the page's right column. |
| displayFooter      | Displays the content in the page's footer.       |

**Action Hooks** are used to execute some actions before/after any QloApps event.

Below are some hooks which can get and updated data in QloApps.

| Hook                       | Description                                       |
| :------------------------- | :------------------------------------------------ |
| actionValidateOrder        | Event called when order is validated and ordered. |
| actionCartSummary          | Event called when QloApps request cart summary.   |
| actionCustomerLogoutBefore | Event called before customer logout is processed. |
| actionProductSave          | Event called after a room type is save.           |

### Executing a Hook

You can manually call any hook in QloApps. 

#### How to call Hooks in a controller?
To call a hook in a controller, Call the `hookExec()` method with the name of the hook. 
`Module::hookExec('Hook_Name');`

See the below example:
```php
Hook::exec('displayTop');
```

#### How to call Hooks in a theme?
In a template file(.tpl), write the name of the hook with the hook function. You can also add the module's name that you want the hook executes.

See the below example:
```php
{hook h='displayRightColumn'}
```
For a Specific module
```php
{hook h='displayRightColumn' mod='moduleName'}
```

### Using a hook

#### How to use Hooks in a module?
Now when these hooks are executed we would want to perform our operations through a module.

The hook must be registered using the `registerHook()` method for a module to respond. Registration is done usually during the installation of a module.
```php
public function install()
{
    return parent::install() && $this->registerHook('displayHeader');
}
```

Create a non-static public method which name starts with "hook" keyword.

To add your code to a hook, you must create a non-static public method, starting with the "hook" keyword followed by the name of the hook to use. Only one argument (array of contextual information) is received by this method.
```php

public function hookDisplayHeader($params)
{
    // write your code
}
```
### How to create your own hook?
To add a new QloApps hook, add a new record in the **ps_hook** table in the database.

You can do it by below query -
```php
INSERT INTO `ps_hook` (`name`, `title`, `description`) VALUES ('Hook_Name', 'your hook name', 'your hook description');
```

But and easy method is provided by the QloApps - 

```php
$this->registerHook('HookName');
```
If the hook name does not exist in the system the QloApps will create a new hook.

Now you will need to execute this hook at your desired time and other modules and register this hook and perform operation during your code execution.

## Hooks Lists

We have two naming schemes in QloApps hooks
- action hooks: Any specific events or data operations that take place in QloApps will trigger this hook type of hook.
- display hooks: These hooks are responsible to display something whether on the front-end or backend. 

### Front-office hooks

#### Home page and general site pages

| Hook Name          | Description                                                                                       | Anticipation in $param (Psuedocode)                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| displayTop         | Call this hook in the page's header                                                               | N/A                                                                                                                        |
| displayRightColumn | Call this hook when loading the right column.                                                     | ```array( cart' => (object) Cart object);``` <br>Note that the Cart object can also be retrieved from the current Context. |
| displayLeftColumn  | Call this hook when loading the left column.                                                      | N/A                                                                                                                        |
| displayHome        | Call this hook at the center of the homepage.                                                     | N/A                                                                                                                        |
| displayHeader      | Call this hook within the HTML `<head>` tags. Ideal location for adding JavaScript and CSS files. | N/A                                                                                                                        |
| displayFooter      | Call this hook in the page's footer.                                                              | N/A                                                                                                                        |

#### Product page Or Room type page
| Hook Name                 | Description                                                                                               | Anticipation in $param (Psuedocode)                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| displayLeftColumnProduct  | Call this hook right before the "Print" link, under the picture.                                          | N/A                                                            |
| displayRightColumnProduct | Call this hook right after the block for the "Add to Cart" button.                                        | N/A                                                            |
| displayProductButtons     | Call this hook inside the block for the "Add to Cart" button, right after that button.                    | N/A                                                            |
| actionProductOutOfStock   | Call this hook inside the block for the "Add to Cart" button, right after the "Availability" information. | N/A                                                            |
| displayFooterProduct      | Call this hook right before the tabs.                                                                     | N/A                                                            |
| displayProductTab         | Call this hook in tabs list, such as "More info", "Data sheet", "Accessories", etc.                       | N/A                                                            |
| displayProductTabContent  | Call this hook when a tab is clicked.                                                                     | `array(` <br> `'product' => (object) Product object` <br> `);` |

#### Cart page
| Hook Name                     | Description                                                                                                                                         | Anticipation in $param (Psuedocode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actionCartSave                | Call this hook right after a cart creation or update.                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| displayShoppingCartFooter     | Called right below the cart items table.                                                                                                            | `array(` <br> `'delivery' => $delivery,` <br> `'delivery_state' => State::getNameById($delivery->id_state),`<br> `'invoice' => $invoice,` <br> `'invoice_state' => State::getNameById($invoice->id_state),` <br>`'formattedAddresses' => $formatted_addresses,` <br> `'products' => array_values($products),` <br> `'gift_products' => $gift_products,` <br>`'discounts' => $cart_rules,` <br> `'is_virtual_cart' => (int)$this->isVirtualCart(),` <br> `'total_discounts' => $total_discounts,` <br> `'total_discounts_tax_exc' => $total_discounts_tax_exc,`<br> `'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),`<br> `'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),`<br> `'total_shipping' => $total_shipping,`<br>`'total_shipping_tax_exc' => $total_shipping_tax_exc,`<br> `'total_products_wt' => $total_products_wt,`<br>`'total_products' => $total_products,`<br> `'total_price' => $base_total_tax_inc,`<br> `'total_tax' => $total_tax,`<br>`'total_price_without_tax' => $base_total_tax_exc,`<br> `'is_multi_address_delivery' => $this->isMultiAddressDelivery() || ((int)Tools::getValue('multi-shipping') == 1),`<br>`'free_ship' => $total_shipping ? 0 : 1,`<br>`'carrier' => new Carrier($this->id_carrier, $id_lang),`<br>); <br>Can be found in /classes/Cart.php |
| displayShoppingCart           | Called after the cart's table of items, right above the navigation buttons.                                                                         | `array(`<br> `'delivery' => $delivery,`<br> `'delivery_state' => State::getNameById($delivery->id_state),`<br> `'invoice' > $invoice,`<br> `'invoice_state' => State::getNameById($invoice->id_state),`<br> `'formattedAddresses' => formatted_addresses,`<br> `'products' => array_values($products),`<br> `'gift_products' => $gift_products,`<br> `'discounts' => $cart_rules,`<br> `'is_virtual_cart' => (int)$this->isVirtualCart(),`<br> `'total_discounts' => $total_discounts,`<br> `'total_discounts_tax_exc' => $total_discounts_tax_exc,`<br> `'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),`<br> `'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),`<br> `'total_shipping' => $total_shipping,`<br> `'total_shipping_tax_exc' => $total_shipping_tax_exc,`<br> `'total_products_wt' => $total_products_wt,`<br> `'total_products' => $total_products,`<br> `'total_price' => $base_total_tax_inc,`<br> `'total_tax' => $total_tax,`<br> `'total_price_without_tax' => $base_total_tax_exc,`<br> `'is_multi_address_delivery' => $this->isMultiAddressDelivery() || ((int)Tools::getValue('multi-shipping') == 1),`<br> `'free_ship' => $total_shipping ? 0 : 1,`<br> `'carrier' => new Carrier($this->id_carrier, $id_lang),`<br>); <br> Can be found in /classes/Cart.php     |
| displayCustomerAccountFormTop | Called within the client account creation form, right above the "Your personal information" block.                                                  | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| displayCustomerAccountForm    | Called within the client account creation form, right before the "Register" button.                                                                 | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| actionCustomerAccountAdd      | Called right after the client account creation.                                                                                                     | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| displayCustomerAccount        | Called on the client account homepage, after the list of available links. Ideal location to add a link to this list.                                | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| displayMyAccountBlock         | Called within the "My account" block, in the left column, below the list of available links. This is the ideal location to add a link to this list. | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| displayMyAccountBlockfooter   | Displays extra information inside the "My account" block.                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| actionAuthentication          | Called right after the client identification, only if the authentication is valid (e-mail address and password are both OK).                        | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| actionBeforeAuthentication    | Called right before authentication.                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Search page
| Hook Name    | Description                                                                                           | Anticipation in $param (Psuedocode)                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| actionSearch | Call after a search is performed. Ideal location to parse and/or handle the search query and results. | `array(` <br> `'expr' => (string) Search query,` <br> `'total' => (int) Amount of search results` <br> `);` |

#### Mobile theme hooks
The hooks discussed in this section are specific to QloApps default mobile theme.

The first four hooks in the list are in QloApps' internal hooks database, so the user can attach an action/interface to these hooks using the Modules > Positions page.
All the other hooks  do not exist in the internal hooks database  but are there in the mobile theme TPL files. Although the developer can still use them to attach content to a specific part of the code.

Here is the list
- displayMobileTopSiteMap	 
- displayMobileHeader	 
- displayMobileShoppingCartTop	 
- displayMobileAddToCartTop	 
- displayMobileShoppingCartTop	 
- displayMobileShoppingCartBottom	 
- displayMobileTopSiteMap	 
- displayMobileFooterChoice	 
- displayMobileShoppingCartTop	 
- displayMobileShoppingCartBottom	 
- displayMobileIndex	 
- mobileCustomerAccount	 
- displayMobileTop	 
- displayMobileAddToCartTop	 
- displayMobileShoppingCartTop	 
- displayMobileShoppingCartButton	 
- displayMobileShoppingCartBottom	 
- displayMobileShoppingCartTop	 
- displayMobileShoppingCartBottom

### Back office hooks

#### General Hooks
| Hook Name               | Description                                                                                           | Anticipation in $param (Psuedocode) |
| ----------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------- |
| displayBackOfficeFooter | Call this hook within the page footer, above the "Power By Webkul" line.                              | N/A                                 |
| displayBackOfficeHeader | Call this hook between the HEAD tags. This is the ideal location for adding JavaScript and CSS files. | N/A                                 |
| displayBackOfficeHome   | Call this hook at the center of the homepage.                                                         | N/A                                 |
| displayBackOfficeTop    | Call this hook within the header, above the tabs.                                                     | N/A                                 |

#### Orders and order details
| Hook Name                   | Description                                                                        | Anticipation in $param (Psuedocode)                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actionValidateOrder         | Called during the new order creation process, right after it has been created.     | `array(` <br>  `'cart' => (object) Cart object,` <br> `'order' => (object) Order object,` <br> `'customer' => (object) Customer object,` <br> `'currency' => (object) Currency object,` <br> `'orderStatus' => (object) OrderState object` <br> `);`                                                                                                                  |
| actionPaymentConfirmation   | Called when an order's status becomes "Payment accepted".                          | `array(` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                                                                                |
| actionOrderStatusUpdate     | Called when an order's status is changed, right before it is actually changed.     | `array(` <br> `'newOrderStatus' => (object) OrderState object,` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                         |
| actionOrderStatusPostUpdate | Called when an order's status is changed, right after it is actually changed.      | `array(` <br> `'newOrderStatus' => (object) OrderState object,` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                         |
| actionProductCancel         | Called when an item is deleted from an order, right after the deletion.            | `array(` <br> `'order' => (object) Order object,` <br> `'id_order_detail' => (int) Order Detail ID` <br> `); `                                                                                                                                                                                                                                                        |
| displayInvoice              | Called when the order's details are displayed, above the Client Information block. | N/A                                                                                                                                                                                                                                                                                                                                                                   |
| displayAdminOrder           | Called when the order's details are displayed, below the Client Information block. | `array(` <br> `'id_order' = (int) Order ID` <br> `); `                                                                                                                                                                                                                                                                                                                |
| actionOrderSlipAdd          | Called during the creation of a credit note, right after it has been created.      | `array(` <br> `'order' => Order oject,` <br> `'productList' => array(` <br> `(int) product ID 1,` <br> `(int) product ID 2,` <br> `...,` <br> `(int) product ID n` <br> `),` <br> `'qtyList' => array(` <br> `(int) quantity 1,` <br> `(int) quantity 2,` <br> `...,` <br> `(int) quantity n ` <br> ` )` <br> `);` <br> The order of IDs and quantities is important! |

#### Products
| Hook Name                        | Description                                                                                                                                            | Anticipation in $param (Psuedocode)                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| actionProductSave                | Called when saving products.                                                                                                                           | `array(` <br> `'id_product' => (int) Product ID` <br> `); `                                                                                                              |
| actionUpdateQuantity             | Called during the validation of an order, the status of which being something other than "canceled" or "Payment error", for each of the order's items. | `array(` <br> `'id_product' => (int) Product ID,` <br> `'id_product_attribute' => (int) Product attribute ID,` <br> `'quantity' => (int) New product quantity` <br> `);` |
| actionProductAttributeUpdate     | When product declination is updated, right after said update the hook is called.                                                                       | `array(` <br> `'id_product_attribute' => (int) Product attribute ID` <br> `);`                                                                                           |
| actionProductAttributeDelete     | Called when a product declination is deleted.                                                                                                          | `array(` <br> `'product' => (object) ` <br> `Product object` <br> `);`                                                                                                   |
| actionWatermark                  | Called when an image is added to a product, right after said addition.                                                                                 | `array(` <br> `'id_image' => ` <br> `(int) Image ID,` <br> `'id_product' => (int) Product ID` <br> `);`                                                                  |
| displayAttributeForm             | Add fields to the form "attribute value".                                                                                                              | N/A                                                                                                                                                                      |
| displayAttributeGroupForm        | Add fields to the form "attribute group".                                                                                                              | N/A                                                                                                                                                                      |
| displayAttributeGroupPostProcess | Called when post-process in admin attribute group.                                                                                                     | N/A                                                                                                                                                                      |
| displayFeatureForm               | Add fields to the form "feature".                                                                                                                      | N/A                                                                                                                                                                      |
| displayFeaturePostProcess        | Called when post-process in admin feature.                                                                                                             | N/A                                                                                                                                                                      |
| displayFeatureValueForm          | Add fields to the form "feature value".                                                                                                                | N/A                                                                                                                                                                      |
| displayFeatureValuePostProcess   | Called when post-process in admin feature value.                                                                                                       | N/A                                                                                                                                                                      |

#### Statistics
| Hook Name                    | Description                                         | Anticipation in $param (Psuedocode) |
| ---------------------------- | --------------------------------------------------- | ----------------------------------- |
| displayAdminStatsGraphEngine | Called when a stats graph is displayed.             | N/A                                 |
| displayAdminStatsGridEngine  | Called when the grid of stats is displayed.         | N/A                                 |
| displayAdminStatsModules     | Called when the list of stats modules is displayed. | N/A                                 |

#### Clients
| Hook Name             | Description                                                                                                             | Anticipation in $param (Psuedocode) |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| displayAdminCustomers | Called when a client's details are displayed, right after the list of the clients groups the current client belongs to. | N/A                                 |

