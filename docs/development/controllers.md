# **Controllers in QloApps**

A Controller handles and keeps up to date, synchronization events between the View and the Model in an MVC architecture. It is responsible for handling all events and performs actions to be taken. If an action is required to modify data, the Controller will "ask" the Model to adjust the data, and the Model will then inform the View that the data has been modified so that the View itself can be updated.

In reality, all QloApps controllers override the Controller class via another inheriting class:

- AdminController
- FrontController

You can find these in the folder **/classes/controller**.


## **The FrontController class**

Class' characteristics are mentioned below:

| Property      | Description                                                          |
|:--------------|:---------------------------------------------------------------------|
| $template     | Template name for page content.                                      |
| $css_files    | Array list of CSS files.                                             |
| $js_files     | Array list of JavaScript files.                                      |
| $errors       | Array of errors that have occurred.                                  |
| $guestAllowed | Whether a signed-out customer can access the page.                   |
| $initialized  | Whether the init() function has been called.                         |
| $iso          | The ISO code of the currently selected language.                     |
| $n            | The number of items per page.                                        |
| $orderBy      | The field used to sort.                                              |
| $orderWay     | Whether the sort is ascending or descending (**ASC** or **DESC**).   |
| $p            | Current number of the page.                                          |
| $ajax         | If the ajax parameter is detected in request, set this flag to true. |

### **Execution order of the controllers' functions**
1. `_contruct()`: Sets all the controller's member variables.
2. `init()`: Initializes the controller.
3. `setMedia()` or `setMobileMedia()`: Adds all JavaScript and CSS specifics to the page so that they can be combined, compressed and cached (see QloApps's CCC tool, in the back office "Performance" page, under the "Advanced preferences" menu).
4. `postProcess()`: Handles ajaxProcess.
5. `initHeader()`: Called before initContent().
6. `initContent()`: Initializes the content.
7. `initFooter()`: Called after initContent().
8. `display()` or `displayAjax()`: Displays the content for page for page or ajax request. For all ajax requests `displayAjax()` is used instead.

### **Existing front office controllers**
Below are the default controllers, as well as the theme files used by them.

| Controller's Filename           | Description                                |
|:--------------------------------|:-------------------------------------------|
| AddressController.php           | Used to edit a customer's address.         |
| AuthController.php              | Used for customer login.                   |
| CartController.php              | Used to manage the customer's cart.        |
| CategoryController              | Used to display search results page.       |
| CmsController.php               | Used to get a CMS page.                    |
| ContactController.php           | Used to send service messages.             |
| DiscountController.php          | Used to get a customer's vouchers.         |
| GuestTrackingController.php     | Used to manage guest orders.               |
| HistoryController.php           | Used to get a customer's orders.           |
| IdentityController.php          | Used to edit customer's personal info.     |
| IndexController.php             | Used to display the homepage.              |
| MyAccountController.php         | Used to manage customer account.           |
| OrderConfirmationController.php | Used for order confirmation.               |
| OrderDetailController.php       | Used to get a customer order.              |
| OrderFollowController.php       | Used to get a customer's returns.          |
| OrderOpcController.php          | Used to manage one-page checkout.          |
| OrderReturnController.php       | Used to manage booking cancellations.      |
| OrderSlipController.php         | Used to get a customer's credit slips.     |
| PageNotFoundController.php      | Used to display the "Page not found" page. |
| ParentOrderController.php       | Manages shared order code.                 |
| PasswordController.php          | Used to reset a lost password.             |
| PdfInvoiceController.php        | Used to generate invoice PDF files.        |
| PdfOrderSlipController.php      | Used to generate credit slip PDF files.    |
| ProductController.php           | Used to display a room type page.          |
| SearchController.php            | Used to display search results.            |
| SitemapController.php           | Used to display the sitemap.               |

## **The AdminController class**

Class' characteristics are mentioned below:

| Property         | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| $controller_name | Name of the controller.                                              |
| $css_files       | Array list of CSS files.                                             |
| $js_files        | Array list of JavaScript files.                                      |
| $errors          | Array of errors that have occurred.                                  |
| $token           | Admin tokens to verify request authenticity.                         |
| $table           | Table used by controller to access data .                            |
| $className       | Class name to with table object model.                               |
| $ajax            | If the ajax parameter is detected in request, set this flag to true. |

### **Execution order of the controllers' functions**
1. `_contruct()`: Sets all the controller's member variables.
2. `init()`: Initializes the controller.
3. `setMedia()` or `setMobileMedia()`: Adds all JavaScript and CSS specifics to the page so that they can be combined, compressed and cached (see QloApps's CCC tool, in the back office "Performance" page, under the "Advanced preferences" menu).
4. `postProcess()`: Handles ajaxProcess.
5. `initHeader()`: Called before initContent().
6. `initContent()`: Initializes the content.
7. `initFooter()`: Called after initContent().
8. `display()`: Displays the content for page for page.

## **Overriding a controller**
Thanks to object inheritance, you can adjust the behaviors  of a controller, or add some new ones.

QloApps controllers are all stored in the `/controllers` folder, and use the "Core" suffix.

For instance, when working with the Category controller:

   - File: `/controllers/CategoryController.php`
   - Class: `CategoryControllerCore`

For overriding a controller, first you have to build a new class without the "Core" suffix, and place its file in the `/override/controllers` folder.

For example, when the Category Controller is overridden:

   - File: `/override/controllers/front/CategoryController.php`
   - Class: `CategoryController extends CategoryControllerCore`

Now to override core class method, redefine the method in the parent class again in the child class.

```php
class CategoryController extends CategoryControllerCore
{
    public function initContent()
    {
        //your logic here
        if ($this->category->active) {
            $this->context->smarty->assign('category_active', true);
        }
        parent::initContent()
    }
}
```
**Classes** can be overridden same as controller.

**Module Override** To override a module class place the class in override folder as it as the exists in QloApps folder.