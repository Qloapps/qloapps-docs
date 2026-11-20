# Hooks

In QloApps, hooks associate your content and actions to some specific QloApps events. Hooks can be used to display content in front office or to trigger a custom function when a customer signs up.

## Managing Hooks

There are two types of hooks in QloApps:
- **Display hooks**: These hooks are responsible to display something whether on the front office or back office.
- **Action hooks**: Any specific events or data operations that take place in QloApps will trigger this hook type of hook.

**Display Hooks** are used to display content on a page.

Below are some hooks which can add content on the home page.

| Hook               | Description                                      |
|:-------------------|:-------------------------------------------------|
| displayHeader      | Displays the content in the page's header.       |
| displayTop         | Displays the content in the page's top.          |
| displayLeftColumn  | Displays the content in the page's left column.  |
| displayHome        | Displays the content on homepage.                |
| displayRightColumn | Displays the content in the page's right column. |
| displayFooter      | Displays the content in the page's footer.       |

**Action Hooks** are used to execute some actions before/after any QloApps event.

Below are some hooks which can get and update data in QloApps.

| Hook                       | Description                                       |
|:---------------------------|:--------------------------------------------------|
| actionValidateOrder        | Event called when order is validated.             |
| actionCartSummary          | Event called when QloApps requests cart summary.  |
| actionCustomerLogoutBefore | Event called before customer logout is processed. |
| actionProductSave          | Event called after a room type is saved.          |

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
In a template file, `.tpl`, write the name of the hook with the smarty `{hook}` function. You can also add the module's name that you want the hook executes.

See the below example:
```php
{hook h='displayRightColumn'}
```
For a specific module:
```php
{hook h='displayRightColumn' mod='mymodule'}
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

To add your code to a hook, create a non-static public method with prefix `hook` followed by the name of the hook to use. Only one argument (array of contextual information) is received by this method. For example, following method is defined for the hook registered above `displayHeader`:

```php
public function hookDisplayHeader($params)
{
    // write your code
}
```
### How to create your own hook?
To add a new QloApps hook, add a new record in the **ps_hook** table in the database.

You can do it by below query:
```sql
INSERT INTO `ps_hook` (`name`, `title`, `description`) VALUES ('HookName', 'Your hook name', 'Your hook description');
```

But an easy method is provided by the QloApps:

```php
$this->registerHook('HookName');
```
If the hook name does not exist in the system the QloApps will create a new hook.

Now you will need to execute this hook at your desired time and other modules and register this hook and perform operation during your code execution.

## Hooks Lists

We have two naming schemes in QloApps hooks
- `action` hooks: Any specific events or data operations that take place in QloApps will trigger this hook type of hook.
- `display` hooks: These hooks are responsible to display something whether on the front office or back office.

### Front office hooks

#### Home page and general site pages

| Hook Name          | Description                                                                                       | Anticipation in $params (Pseudocode)                                                                                           |
|--------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| displayTop         | Call this hook in the page's header                                                               | N/A                                                                                                                            |
| displayRightColumn | Call this hook when loading the right column.                                                     | ```array(cart' => (object) Cart object);``` <br><br> Note that the Cart object can also be retrieved from the current Context. |
| displayLeftColumn  | Call this hook when loading the left column.                                                      | N/A                                                                                                                            |
| displayHome        | Call this hook at the center of the homepage.                                                     | N/A                                                                                                                            |
| displayHeader      | Call this hook within the HTML `<head>` tags. Ideal location for adding JavaScript and CSS files. | N/A                                                                                                                            |
| displayFooter      | Call this hook in the page's footer.                                                              | N/A                                                                                                                            |

#### Room type detail page
| Hook Name                 | Description                                                                                               | Anticipation in $params (Pseudocode)                           |
|---------------------------|-----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| displayLeftColumnProduct  | Call this hook right before the "Print" link, under the picture.                                          | N/A                                                            |
| displayRightColumnProduct | Call this hook right after the block for the "Add to Cart" button.                                        | N/A                                                            |
| displayProductButtons     | Call this hook inside the block for the "Add to Cart" button, right after that button.                    | N/A                                                            |
| actionProductOutOfStock   | Call this hook inside the block for the "Add to Cart" button, right after the "Availability" information. | N/A                                                            |
| displayFooterProduct      | Call this hook right before the tabs.                                                                     | N/A                                                            |
| displayProductTab         | Call this hook in tabs list, such as "More info", "Data sheet", "Accessories", etc.                       | N/A                                                            |
| displayProductTabContent  | Call this hook when a tab is clicked.                                                                     | `array(` <br> `'product' => (object) Product object` <br> `);` |

#### Cart page
| Hook Name                     | Description                                                                                                                                         | Anticipation in $params (Pseudocode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| actionCartSave                | Call this hook right after a cart creation or update.                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| displayShoppingCartFooter     | Called right below the cart items table.                                                                                                            | `array(` <br> `'delivery' => $delivery,` <br> `'delivery_state' => State::getNameById($delivery->id_state),`<br> `'invoice' => $invoice,` <br> `'invoice_state' => State::getNameById($invoice->id_state),` <br>`'formattedAddresses' => $formatted_addresses,` <br> `'products' => array_values($products),` <br> `'gift_products' => $gift_products,` <br>`'discounts' => $cart_rules,` <br> `'is_virtual_cart' => (int)$this->isVirtualCart(),` <br> `'total_discounts' => $total_discounts,` <br> `'total_discounts_tax_exc' => $total_discounts_tax_exc,`<br> `'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),`<br> `'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),`<br> `'total_shipping' => $total_shipping,`<br>`'total_shipping_tax_exc' => $total_shipping_tax_exc,`<br> `'total_products_wt' => $total_products_wt,`<br>`'total_products' => $total_products,`<br> `'total_price' => $base_total_tax_inc,`<br> `'total_tax' => $total_tax,`<br>`'total_price_without_tax' => $base_total_tax_exc,`<br> `'is_multi_address_delivery' => $this->isMultiAddressDelivery() |
| displayShoppingCart           | Called after the cart's table of items, right above the navigation buttons.                                                                         | `array(`<br> `'delivery' => $delivery,`<br> `'delivery_state' => State::getNameById($delivery->id_state),`<br> `'invoice' > $invoice,`<br> `'invoice_state' => State::getNameById($invoice->id_state),`<br> `'formattedAddresses' => formatted_addresses,`<br> `'products' => array_values($products),`<br> `'gift_products' => $gift_products,`<br> `'discounts' => $cart_rules,`<br> `'is_virtual_cart' => (int)$this->isVirtualCart(),`<br> `'total_discounts' => $total_discounts,`<br> `'total_discounts_tax_exc' => $total_discounts_tax_exc,`<br> `'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),`<br> `'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),`<br> `'total_shipping' => $total_shipping,`<br> `'total_shipping_tax_exc' => $total_shipping_tax_exc,`<br> `'total_products_wt' => $total_products_wt,`<br> `'total_products' => $total_products,`<br> `'total_price' => $base_total_tax_inc,`<br> `'total_tax' => $total_tax,`<br> `'total_price_without_tax' => $base_total_tax_exc,`<br> `'is_multi_address_delivery' => $this->isMultiAddressDelivery()        |
| displayCustomerAccountFormTop | Called within the client account creation form, right above the "Your personal information" block.                                                  | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| displayCustomerAccountForm    | Called within the client account creation form, right before the "Register" button.                                                                 | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| actionCustomerAccountAdd      | Called right after the client account creation.                                                                                                     | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| displayCustomerAccount        | Called on the client account homepage, after the list of available links. Ideal location to add a link to this list.                                | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| displayMyAccountBlock         | Called within the "My account" block, in the left column, below the list of available links. This is the ideal location to add a link to this list. | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| actionAuthentication          | Called right after the client identification, only if the authentication is valid (e-mail address and password are both OK).                        | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| actionBeforeAuthentication    | Called right before authentication.                                                                                                                 | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Search page
| Hook Name    | Description                                                                                           | Anticipation in $params (Pseudocode)                                                                        |
|--------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| actionSearch | Call after a search is performed. Ideal location to parse and/or handle the search query and results. | `array(` <br> `'expr' => (string) Search query,` <br> `'total' => (int) Amount of search results` <br> `);` |

### Back office hooks

#### General Hooks
| Hook Name               | Description                                                                                           | Anticipation in $params (Pseudocode) |
|-------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------|
| displayBackOfficeFooter | Call this hook within the page footer, above the "Powered By Webkul" line.                            | N/A                                  |
| displayBackOfficeHeader | Call this hook between the HEAD tags. This is the ideal location for adding JavaScript and CSS files. | N/A                                  |
| displayBackOfficeTop    | Call this hook within the header, above the tabs.                                                     | N/A                                  |

#### Orders and order details
| Hook Name                   | Description                                                                        | Anticipation in $params (Pseudocode)                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| actionValidateOrder         | Called during the new order creation process, right after it has been created.     | `array(` <br>  `'cart' => (object) Cart object,` <br> `'order' => (object) Order object,` <br> `'customer' => (object) Customer object,` <br> `'currency' => (object) Currency object,` <br> `'orderStatus' => (object) OrderState object` <br> `);`                                                                                                                  |
| actionPaymentConfirmation   | Called when an order's status becomes "Payment accepted".                          | `array(` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                                                                                |
| actionOrderStatusUpdate     | Called when an order's status is changed, right before it is actually changed.     | `array(` <br> `'newOrderStatus' => (object) OrderState object,` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                         |
| actionOrderStatusPostUpdate | Called when an order's status is changed, right after it is actually changed.      | `array(` <br> `'newOrderStatus' => (object) OrderState object,` <br> `'id_order' => (int) Order ID` <br> `);`                                                                                                                                                                                                                                                         |
| displayInvoice              | Called when the order's details are displayed, above the Client Information block. | N/A                                                                                                                                                                                                                                                                                                                                                                   |
| displayAdminOrder           | Called when the order's details are displayed, below the Client Information block. | `array(` <br> `'id_order' = (int) Order ID` <br> `); `                                                                                                                                                                                                                                                                                                                |
| actionOrderSlipAdd          | Called during the creation of a credit note, right after it has been created.      | `array(` <br> `'order' => Order oject,` <br> `'productList' => array(` <br> `(int) product ID 1,` <br> `(int) product ID 2,` <br> `...,` <br> `(int) product ID n` <br> `),` <br> `'qtyList' => array(` <br> `(int) quantity 1,` <br> `(int) quantity 2,` <br> `...,` <br> `(int) quantity n ` <br> ` )` <br> `);` <br> The order of IDs and quantities is important! |

#### Products
| Hook Name                        | Description                                                                                                                                            | Anticipation in $params (Pseudocode)                                                                                                                                     |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| actionProductSave                | Called when saving products.                                                                                                                           | `array(` <br> `'id_product' => (int) Product ID` <br> `); `                                                                                                              |
| actionUpdateQuantity             | Called during the validation of an order, the status of which being something other than "canceled" or "Payment error", for each of the order's items. | `array(` <br> `'id_product' => (int) Product ID,` <br> `'id_product_attribute' => (int) Product attribute ID,` <br> `'quantity' => (int) New product quantity` <br> `);` |
| actionProductAttributeUpdate     | When product declination is updated, right after said update the hook is called.                                                                       | `array(` <br> `'id_product_attribute' => (int) Product attribute ID` <br> `);`                                                                                           |
| actionProductAttributeDelete     | Called when a product declination is deleted.                                                                                                          | `array(` <br> `'product' => (object) ` <br> `Product object` <br> `);`                                                                                                   |
| actionWatermark                  | Called when an image is added to a product, right after said addition.                                                                                 | `array(` <br> `'id_image' => ` <br> `(int) Image ID,` <br> `'id_product' => (int) Product ID` <br> `);`                                                                  |
| displayAttributeForm             | Add fields to the form "attribute value".                                                                                                              | N/A                                                                                                                                                                      |
| displayAttributeGroupForm        | Add fields to the form "attribute group".                                                                                                              | N/A                                                                                                                                                                      |
| displayFeatureForm               | Add fields to the form "feature".                                                                                                                      | N/A                                                                                                                                                                      |
| displayFeaturePostProcess        | Called when post-process in admin feature.                                                                                                             | N/A                                                                                                                                                                      |
| displayFeatureValueForm          | Add fields to the form "feature value".                                                                                                                | N/A                                                                                                                                                                      |
| displayFeatureValuePostProcess   | Called when post-process in admin feature value.                                                                                                       | N/A                                                                                                                                                                      |

#### Statistics
| Hook Name                    | Description                                         | Anticipation in $params (Pseudocode) |
|------------------------------|-----------------------------------------------------|--------------------------------------|
| displayAdminStatsGraphEngine | Called when a stats graph is displayed.             | N/A                                  |
| displayAdminStatsGridEngine  | Called when the grid of stats is displayed.         | N/A                                  |
| displayAdminStatsModules     | Called when the list of stats modules is displayed. | N/A                                  |

#### Customer
| Hook Name             | Description                                                                                                                   | Anticipation in $params (Pseudocode) |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| displayAdminCustomers | Called when a customer's details are displayed, right after the list of the customers groups the current customer belongs to. | N/A                                  |

::: warning
The mobile theme hooks (`displayMobile*`), `displayMyAccountBlockfooter`, `displayBackOfficeHome`, `actionProductCancel` and `displayAttributeGroupPostProcess` are not executed anywhere in the QloApps 1.8.0 code (the default theme is the only theme shipped, and it has no mobile variant), so they were removed from the lists above. The dashboard hooks `displayDashboardBadgeListBefore` and `displayDashboardBadgeListAfter` are also not executed anymore.
:::

### Hooks added in QloApps 1.8.0

These hooks were not executed in QloApps 1.7.0. Hooks that are not in the installer's hook list are created automatically when a module registers them with `registerHook()`.

#### Core and general

| Hook Name | Where it is executed | Anticipation in $params (Pseudocode) |
|-----------|----------------------|---------------------------------------|
| actionModuleUninstallBefore | `Module::uninstall()` (`classes/module/Module.php`), before the module is uninstalled. | `array(` <br> `'object' => (object) Module instance` <br> `);` |
| actionMailAlterTransportBeforeSend | `Mail::Send()` and `Mail::sendMailTest()` (`classes/Mail.php`). Lets a module replace the mail transport. | `array(` <br> `'configuration' => (array) Mail configuration,` <br> `'transport' => (object) Symfony Mailer transport, passed by reference` <br> `);` |
| actionStatsTabsModifier | `AdminStatsTabController` (`controllers/admin/AdminStatsTabController.php`). Modify the tabs of the Statistics page. | `array(` <br> `'stats_tabs' => (array) Statistics tabs, passed by reference` <br> `);` |
| actionAdminProductPriceSqlModifier | `Product::priceCalculation()` (`classes/Product.php`), before the service product price query is run. | `array(` <br> `'id_product' => (int) Product ID,` <br> `'id_product_option' => (int) Product option ID,` <br> `'id_shop' => (int) Shop ID,` <br> `'sql' => (DbQuery) Query, passed by reference` <br> `);` |

#### Back office

| Hook Name | Where it is executed | Anticipation in $params (Pseudocode) |
|-----------|----------------------|---------------------------------------|
| actionAdminOrderValidateBefore | `AdminOrdersController` (`controllers/admin/AdminOrdersController.php`), before an order is created from the back office. Add to `errors` to stop the order. | `array(` <br> `'cart' => (object) Cart object,` <br> `'errors' => (array) Errors, passed by reference` <br> `);` |
| actionAdminOrderAddAfter | `AdminOrdersController`, right after an order is created from the back office. | `array(` <br> `'cart' => (object) Cart object,` <br> `'order' => (object) Order object` <br> `);` |
| actionAdminRoomStatusChangeAfter | `AdminOrdersController::changeRoomStatus()`, when the room status of a booking is changed from the order page. | `array(` <br> `'post_data' => (array) Submitted values,` <br> `'errors' => (array) Errors, passed by reference` <br> `);` |
| actionRoomBookingStatusUpdateBefore | `AdminOrdersController` (booking status change in the order page), before the status is applied. | `array(` <br> `'id_hotel_booking_detail' => (int) Booking ID,` <br> `'id_order' => (int) Order ID,` <br> `'id_room' => (int) Room ID,` <br> `...` <br> `);` <br> Additional keys depend on the action: `new_status`, `status_date` and `errors` (by reference), or `date_from`, `date_to`, `id_status_from`, `id_status_to`. |
| actionHotelRoomBookingUpdateAfter | `AdminOrdersController`, after the dates or room of a booking are changed. | `array(` <br> `'id_order' => (int) Order ID,` <br> `'id_room' => (int) Room ID,` <br> `'date_from' => (string) New check-in date,` <br> `'date_to' => (string) New check-out date` <br> `);` |
| actionBookingStatusBefore | `HotelBookingDetail` (`modules/hotelreservationsystem/classes/HotelBookingDetail.php`), before a booking status is changed. | `array(` <br> `'object' => (object) HotelBookingDetail object,` <br> `'id_status_from' => (int) Current status,` <br> `'id_status_to' => (int) New status` <br> `);` |
| actionBookingStatusAfter | `HotelBookingDetail`, after a booking status is changed and the history is saved. | Same as `actionBookingStatusBefore`. |
| actionAdminRoomStatusModifier | `HotelRoomInformation` (`modules/hotelreservationsystem/classes/HotelRoomInformation.php`), when the list of room statuses is built. | `array(` <br> `'status' => (array) Room statuses, passed by reference` <br> `);` |
| actionAdminRoomStatusTitle | `HotelRoomInformation::getRoomStatusTitle()`. | `array(` <br> `'status' => (array) Status titles, passed by reference,` <br> `'id_status' => (int) Status ID` <br> `);` |
| actionFeaturePriceRestrictionsSaveAfter | `HotelRoomTypeFeaturePricing` (`modules/hotelreservationsystem/classes/`), after the restrictions of an advanced price rule are saved. | `array(` <br> `'id_feature_price' => (int) Advanced price rule ID,` <br> `'restrictions' => (array) Restrictions,` <br> `'existing_feature_prices' => (array) Existing rules` <br> `);` |
| actionGuestRegCardInfoModifier | `HotelBookingDetail`, when the information printed on the guest registration card is built. | `array(` <br> `'guest_registration_info' => (array) Card information, passed by reference` <br> `);` |
| actionAdminProductTabNameModifier | `AdminProductsController` (`controllers/admin/AdminProductsController.php`). Executed with `$array_return = true`; modules return tab name overrides. | `array(` <br> `'id_product' => (int) Product ID` <br> `);` |
| actionChannelManagerAriPayloadModifier | `QcmcAri` (`modules/qlocmconnector/classes/QcmcAri.php`), before the availability/rates/inventory payload is sent to the channel manager. | `array(` <br> `'ariInfo' => (array) Payload, passed by reference,` <br> `'idHotel' => Property ID,` <br> `'idRoomType' => Room type ID,` <br> `'dateFrom' => Date from,` <br> `'dateTo' => Date to` <br> `);` |

Display hooks in back office templates (`admin-dev/themes/default/template/`). Parameters are passed as Smarty `{hook}` arguments and are available in `$params`.

| Hook Name | Where it is displayed | Parameters |
|-----------|-----------------------|------------|
| displayAdminKpiBefore | Before the KPI row of a list page (`helpers/kpi/row.tpl`). | N/A |
| displayAdminListRowActionsDeleteBefore | In a list row, before the "Delete" action (`helpers/list/list_content.tpl`). | `table`, `identifier`, `id`, `token` |
| displayAdminProductInformationAfter | At the end of the room type "Information" tab (`controllers/products/informations.tpl`). | `item` (Product object) |
| displayAdminProductPriceCalculationMethodAfter | After the price calculation method of a service product (`controllers/normal_products/prices.tpl`). | `product` (Product object) |
| displayAdminOrderCustomerPhoneAfter | After the customer phone in the order page (`controllers/orders/helpers/view/view.tpl`). | N/A |
| displayAdminOrderMessageBefore, displayAdminOrderPaymentSelectionAfter, displayAdminOrderFormFieldsAfter | Inside the "add new order" form (`controllers/orders/form.tpl`). | N/A |
| displayAdminCartDetailsPanelTitleAfter | In the title of the current cart panel (`controllers/orders/_current_cart_details_data.tpl`). | N/A |
| displayAdminCartDetailsDeleteActionAfter | After the delete action of a cart row (same template). | `data` |
| displayAdminOrderCartRoomOccupancyAfter | After the occupancy in a cart row (same template). | `data` |
| displayAdminOrderProductLineOccupancyAfter | After the occupancy in an order room line (`controllers/orders/_product_line.tpl`). | `data` |
| displayAdminOrderEditRoomTab, displayAdminOrderEditRoomTabContent | Add a tab / tab content to the "edit room booking" modal (`controllers/orders/modals/_edit_room_booking.tpl`). | `data` |
| displayAdminOrderSelectedServicesHeading, displayAdminOrderAvailableServicesHeading, displayAdminOrderViewServicesHeading | Extra column heading in the service products tables of the order page (`controllers/orders/modals/_extra_services_service_products_tab_content.tpl`). | N/A |
| displayAdminOrderSelectedServicesData, displayAdminOrderAvailableServicesData, displayAdminOrderViewServicesData | Extra column data in the same tables. | `id_service_product`, `id_htl_booking_detail`; Selected/View also pass `id_service_product_order_detail` and `room_type_id_product` |
| displayAdminRevenueReportManager | Revenue report manager page of `qlorevenuemanagementsystem` module; modules return their custom form. | N/A |

#### Front office

Executed in the templates of the default theme (`themes/hotel-reservation-theme/`) and in the invoice PDF template.

| Hook Name | Where it is displayed | Parameters |
|-----------|-----------------------|------------|
| displayCMSPageContentAfter | After the content of a CMS page (`cms.tpl`). | `page` (CMS object) |
| displayContactFormSubmitButtonAfter | After the submit button of the contact form (`contact-form.tpl`). | N/A |
| displayCustomerAccountFormBottom | Bottom of the new customer form on the checkout page (`order-opc-new-account.tpl`). | N/A |
| displayCheckoutGuestDetailsAfter | After the guest details on the checkout page (`order-opc.tpl`). | N/A |
| displayNoRoomAvailableBlockAfter | After the "no room available" block of the room type list (`_partials/room_type_list.tpl`). | N/A |
| displayServiceProductActionsAfter | After the actions of a service product row (`_partials/service-products-list-row.tpl`). | `id_service_product` |
| displayOrderConfirmationRoomTypeNameAfter | After the room type name on the order confirmation page (`order-confirmation.tpl`). | `id_product` |
| displayOrderConfirmationOccupancyAfter | After the occupancy on the order confirmation page. | `data`, `room` |
| displayOrderDetailOccupancyAfter | After the occupancy on the order detail page (`_partials/order-room-detail.tpl`). | `data`, `room`, `id_order` |
| displayOrderDetailServiceProductNameBlockAfter | After the service product name on the order detail page (`_partials/order-extra-services.tpl`). | `product_order_detail` |
| displayInvoiceServiceProductNameAfter | After the service product name in the invoice PDF (`pdf/invoice.additinal-services-tab.tpl`). | `id_service_product_order_detail` |
