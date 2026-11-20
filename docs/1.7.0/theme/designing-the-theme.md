# Designing the Theme

Now that you have got the cloned theme installed and running you can now start modifying its source and see the changes live at the front office.

Let us see what files can be modified and what does its modification do:a

## The CSS files
The CSS files located in directory `/css` provide styles to the theme's pages. To change the design of a page you have to modify the CSS file applied on the page. There are three types of CSS files which you can modify:
1. The `global.css` file which provides common classes available throughout the website. It is loaded on every page of the front office.
2. The files used by corresponding controllers. For example, ProductController has its dedicated file `product.css` which is loaded only on the room type detail page.
3. The files used by modules and loaded using hooks. These files are used to provide styles only to the specific parts of a page.

#### Overriding of module CSS files
In some cases, it may be required to modify the styles provided by a core module. QloApps provides the concept of overriding a module CSS file for such cases. To override a certain CSS file you provide a corresponding CSS file in theme's `/css/modules/MODULE_NAME/` directory. Whenever a module requests for a certain CSS file to be loaded, QloApps first looks inside current theme's directory, and if found, loads it from there, otherwise loads it from the module's directory.

For example, to override the file `modules/wkroomsearchblock/views/css/wk-roomtype-search.css` used by module `wkroomsearchblock` you will create the file `my-qloapps-theme/css/modules/wkroomsearchblock/views/css/wk-roomtype-search.css`.


## The images
The images related to the theme are stored in `/img` folder. This folder should only be used to store images used by the theme, for example, icon files, resource files used by JavaScript plugins etc.
The default theme uses file `/img/jquery/uniform/sprite.png` to store UI element designs like radio button and checkbox.

## The template files
The template files, with extension `.tpl`, are located at the root of the theme directory and are used to generate HTML for a page. Template files allow logic to be applied when genrating HTML. The logic is available in the form of loops, conditions, template inclusions etc.
Each controller has its own template file named after the controller. For example, ProductController uses `/product.tpl` to display the HTML. The sub-template files used in a template are located inside `./_partials/` directory.

#### Overriding of module template files
In some cases, it may be required to modify the template provided by a core module. QloApps provides the concept of overriding a module template file for such cases. To override a certain template file you provide a corresponding template file in theme's `/modules/MODULE_NAME/` directory. Whenever a module requests for a certain template file to be loaded, QloApps first looks inside current theme's directory, and if found, loads it from there, otherwise loads it from the module's directory.

For example, to override the file `modules/wkroomsearchblock/views/templates/hook/landingPageSearch.tpl` used by module `wkroomsearchblock` you will create the file `my-qloapps-theme/modules/wkroomsearchblock/views/templates/hook/landingPageSearch.tpl`.

## The JS files
The JS files required by your theme's page are located in `/js` directory. To change the behavior of JS files on your page you have to modify the applicable JS file.

#### Overriding of module JS files
In some cases, it may be required to modify the behavior of a core module. QloApps provides the concept of overriding a module JS file for such cases. To override a certain JS file you provide a corresponding JS file in theme's `/js/modules/MODULE_NAME/` directory. Whenever a module requests for a certain JS file to be loaded, QloApps first looks inside current theme's directory, and if found, loads it from there, otherwise loads it from the module's directory.

For example, to override the file `modules/wkroomsearchblock/views/js/wk-roomtype-search.js` used by module `wkroomsearchblock` you will create the file `my-qloapps-theme/js/modules/wkroomsearchblock/views/js/wk-roomtype-search.js`.
