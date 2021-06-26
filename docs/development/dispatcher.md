# Dispatcher

The Dispatcher in QloApps manages redirections of URL.

i.e. QloApps uses one file index.php only instead of using multiple files like cart.php, order.php or product.php in the root folder.

Dispacher handles all the requests in QloApps it is responsible for loading and executing contoller.
Further, Friendly URLs or URL rewriting is also supported by the Dispatcher. 
So URLs in QloApps looks like below in case of URL-rewriting is off -

::: tip Page links
http://qloapps.example.com/index.php?controller=category&id_category=4&id_lang=1

http://qloapps.example.com/index.php?controller=product&id_product=2&id_lang=2
:::

When you enable URL-rewriting in QloApps the Urls will look like below -

::: tip Friendly URL
http://qloapps.example.com/en/4-nainital

http://qloapps.example.com/fr/2-kings-hotels.html
:::

In QloApps there are many advantages of this -

- From menu Preferences -> SEO & URLs page in the back office's admin can change the URL of the controller.
- To add a controller is easier.
- For better SEO, you can change your friendly URLs by using custom routes.
- Dispatcher method loadRoutes() (by overriding) can be used to create new routes.
- Three abstract classes: Controller, FrontController and AdminController are used by the dispatcher. (FrontController and AdminController inheriting from the Controller).
- Through Dispatcher, a single entry point is there in QloApps software, It increases reliability of the software. Also, 
- There is only one single entry point into the software, which improves software's reliability, and make future developments easier.
