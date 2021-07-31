# Dispatcher

The Dispatcher in QloApps manages redirection of URLs i.e. QloApps uses one file index.php only instead of using multiple files like cart.php, order.php, or product.php in the root folder.

The dispatcher handles all the requests in QloApps. It is responsible for loading and executing the controller. 

Further, friendly URLs or URL rewriting is also supported by the dispatcher.<br>
Friendly URL can be enable/disable from **Preferences -> SEO & URLs** page in the admin back office.
If friendly URL is disabled in QloApps looks like below in case of URL-rewriting is off -

::: tip Page links
http://qloapps.example.com/index.php?controller=category&id_category=4&id_lang=1

http://qloapps.example.com/index.php?controller=product&id_product=2&id_lang=2
:::

When you enable URL-rewriting in QloApps the URLs will look like below -

::: tip Friendly URL
http://qloapps.example.com/en/4-nainital

http://qloapps.example.com/fr/2-kings-hotels.html
:::


In QloApps there are many advantages of using dispatcher -

- To add a controller is easier.
- For better SEO, you can change your friendly URLs by using custom routes.
- There is only one single entry point into the software, which improves software's reliability and makes future developments easier.


Using Dispatcher loadRoutes() method (by overriding) new routes can be easily created.


Three abstract classes: Controller, FrontController and AdminController are used by the dispatcher. (FrontController and AdminController inheriting from the Controller).
