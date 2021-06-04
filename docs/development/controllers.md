# **Controllers in QloApps**

- Controllers in QloApps
     - The FrontController class
          - Execution order of the controller's function
          - Existing front office controllers
     - Overriding a controller     

A Controller handles, and keeps up to date, the synchronisation events between the View and the Model in an MVC architecture. It collects all events for users and activates the actions to be taken.If an action seems to modify data, the Controller will "ask" the Model to adjust the data, and the Model will then inform the View that the data has been modified so that the View itself can be updated.

In reality, all QloApps controllers override the Controller class via another inheriting class:

- AdminController,
- ModuleAdminController,
- FrontController,
- ModuleFrontController,

You can find these in the folder /classes / controller.


## **The FrontController class**

Class' characteristics are mentioned below:

|Property| Description|
|:-------|:-----------|
|$template|Template name for page content.|
|$css_files|Array list of CSS files.|
|$js_files|Array list of JavaScript files.|
|$errors|Array of errors that have occurred.|
|$guestAllowed|Whether a signed-out customer can access the page..|
|$initialized|Whether the init() function has been called.|
|$iso|	The ISO code of the currently selected language.|
|$n|The number of items per page.|
|$orderBy|The field used to sort.|
|$orderWay|Whether to sort is ascending or descending ("ASC" or "DESC").|
|$p|Current number of the page.|
|$ajax|If the ajax parameter is detected in request, set this flag to true.|

### **Excecution order of the controleers's function**
1. _contruct(): Sets all the controller's member variables.
2. init(): Initializes the controller.
3. setMedia() or setMobileMedia(): Adds all JavaScript and CSS specifics to the page so that they can be combined, compressed and cached (see QloApps's CCC tool, in the back office "Performance" page, under the "Advanced preferences" menu).
4. postProcess(): Handles ajaxProcess.
5. initHeader(): Called before initContent().
6. initContent(): Initializes the content.
7. initFooter(): Called after initContent().
8. display() or displayAjax(): Displays the content.

### **Existing front office controller**
Below are the default controls, as well as the theme files used by them.

|Controller's Filename| Description|
|:--------------------|:-----------|
|AddressController.php|Used by address.php to edit a customer's address.|
|AddressesController.php|Used by addresses.php to get customer's addresses.|
|AttachmentController.php| |
|AuthController.php|Used by authentication.php for customer login.|
|BestSalesController.php|Used by best-sales.php to get best-sellers.|
|CartController.php|Used by cart.php to manage the customer's cart.|
|CategoryController|Used by category.php to get productcategories.|
|ChangeCurrencyController.php| |
|CmsController.php|Used by cms.php to get a CMS page.|
|CompareController.php|Used by products-comparison.php to compare products.|
|ContactController.php|Used by contact-form.php to send messages.|
|DiscountController.php|Used by discount.php to get a customer's vouchers.|
|GetFileController.php|	|
|GuestTrackingController.php|Used by guest-tracking.php to manage guest orders.|
|HistoryController.php|Used by history.php to get a customer's orders.|
|IdentityController.php|Used by identity.php for customer's personal info.|
|IndexController.php|Used by index.php to display the homepage.|
|ManufacturerController.php|Used by manufacturer.php to get manufacturers.|
|MyAccountController.php|Used by my-account.php to manage customer account.|
|NewProductsController.php|Used by new-products.php to get new products.|
|OrderConfirmationController.php|Used by order-confirmation.php for order confirmation.|
|OrderController.php|Used by order.php to manage the five-step checkout.|
|OrderDetailController.php|Used by order-detail.php to get a customer order.|
|OrderFollowController.php|Used by order-follow.php to get a customer's returns.|
|OrderOpcController.php|Used by order-opc.php to manage one-page checkout.|
|OrderReturnController.php|Used by order-return.php to get a merchandise return.|
|OrderSlipController.php|Used by order-slip.php to get a customer's credit slips.|
|PageNotFoundController.php|Used by 404.php to manage the "Page not found" page.|
|ParentOrderController.php|Manages shared order code.|
|PasswordController.php|Used by password.php to reset a lost password.|
|PdfInvoiceController.php| |	
|PdfOrderReturnController.php| |	 
|PdfOrderSlipController.php| |
|PricesDropController.php|Used by prices-drop.php to get discounted products.|
|ProductController.php|Used by product.php to get a product.|
|SearchController.php|Used by search.php to get search results.|
|SitemapController.php|Used by sitemap.php to get the sitemap.|
|StatisticsController.php|	| 
|StoresController.php|Used by stores.php to get store information|.
|SupplierController.php|Used by supplier.php to get suppliers.|

## **Overriding a controller**
You may adjust the behaviours of a controller, or add some new ones.

QloApps's controllers are all stored in the /controllers folder, and use the "Core" suffix.

For instance, when working with the Category controller:

   - File: /controllers/CategoryController.php
   - Class: CategoryControllerCore

For overriding a controller, First you have to build a new class without the "Core" suffix, and place its file in the /override/controllers folder.

For example, when the Category Controller is overridden:

   - File: /override/controllers//front/CategoryController.php
   - Class: /CategoryController