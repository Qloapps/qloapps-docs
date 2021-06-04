# Views in QloApps
To generate the views of QloApps, we are using Smarty template engine:https://www.smarty.net/.

### Theme views
The views are contained in the files of .tpl and used in QloApps.
- View of the front office:These files belong to the allowed theme stored in the folder/themes/.
Example-With /themes/default-bootstrap/product.tpl default theme.
- View of the back office:These files belong to the allowed theme stored in the /admin-dev/themes/folder.
Example-the default theme of the back office: /admin-dev/themes/default/template/controllers/products/information.tpl

### Module views
For adopting parts of the template, modules may incorporate their own templates:
- The front office: /modules/backwire/views/templates/front/payment_execution.tpl
- The back office: /modules/blocklayered/views/templates/admin/view.tpl

To view files that are connected to a specific hook, there is a third template folder, called/hook/.

### Best practices
Generally a view name is the same as the code name that uses it. Example,404.php uses 404.tpl.

### Overriding
Because no inheritance exists, there is no way to overrule a view. To change a view, you must rewrite the template file in the same path
and place it in your theme/module's folder.

You can use the QloApps/override/folder for views tied to a helper.

For example- If you want to modify the way front office order template file:admin-dev/themes/default/template/controllers/orders/helpers/view/view.tpl

... you must copy the template file and its path to the override folder:
/override/controllers/admin/template/orders/helpers/view/view.tpl
...then edit the template as per your requirements.

Don not forget to delete the/cache/class_index.php file when adding an override file manually, so that QloApps can take your changes into accounnt.

For more details see the Overriding defalut behavious page(link to be posted in future).
