(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{388:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"views-in-qloapps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#views-in-qloapps"}},[e._v("#")]),e._v(" Views in QloApps")]),e._v(" "),o("p",[e._v("To generate the views of QloApps, we are using the Smarty template engine: "),o("a",{attrs:{href:"https://www.smarty.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.smarty.net/"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"theme-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#theme-views"}},[e._v("#")]),e._v(" Theme views")]),e._v(" "),o("p",[e._v("The views are stored as .tpl files.")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Front office")]),e._v(": These files belong to the allowed theme stored in the folder "),o("code",[e._v("/themes/")]),e._v(".\nFor example, for the default theme, "),o("code",[e._v("/themes/hotel-reservation-theme/product.tpl")]),e._v(".")]),e._v(" "),o("li",[o("strong",[e._v("Back office")]),e._v(": These files belong to the allowed theme stored in folder "),o("code",[e._v("/admin/themes/")]),e._v(".\nFor example, for the default theme, "),o("code",[e._v("/admin/themes/default/template/controllers/products/information.tpl")]),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"module-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#module-views"}},[e._v("#")]),e._v(" Module views")]),e._v(" "),o("p",[e._v("For adopting parts of the template, modules may incorporate their own templates:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("The front office")]),e._v(": "),o("code",[e._v("/modules/backwire/views/templates/front/payment_execution.tpl")])]),e._v(" "),o("li",[o("strong",[e._v("The back office")]),e._v(": "),o("code",[e._v("/modules/blocklayered/views/templates/admin/view.tpl")])])]),e._v(" "),o("p",[e._v("The view files that are connected to a specific hook are stored in a third template folder called "),o("code",[e._v("/hook/")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"best-practices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best practices")]),e._v(" "),o("p",[e._v("Generally, a view name is the same as the code name that uses it. For example, "),o("code",[e._v("ProductController")]),e._v(" uses "),o("code",[e._v("product.tpl")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"overriding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overriding"}},[e._v("#")]),e._v(" Overriding")]),e._v(" "),o("p",[e._v("Because no inheritance exists, there is no way to overrule a view. To change a view, you must rewrite the template file in the same path\nand place it in your theme/module's folder.")]),e._v(" "),o("p",[e._v("You can use the "),o("code",[e._v("QloApps/override/folder")]),e._v(" for views tied to a helper.")]),e._v(" "),o("p",[e._v("For example, if you want to modify the way front office order template file : "),o("code",[e._v("admin/themes/default/template/controllers/orders/helpers/view/view.tpl")])]),e._v(" "),o("ul",[o("li",[e._v("you must copy the template file and its path to the override folder : "),o("code",[e._v("/override/controllers/admin/template/orders/helpers/view/view.tpl")])]),e._v(" "),o("li",[e._v("then edit the template as per your requirements.")])]),e._v(" "),o("p",[e._v("Do not forget to delete the "),o("code",[e._v("/cache/class_index.php")]),e._v(" file when adding an override file manually, so that QloApps can take your changes into account.")])])}),[],!1,null,null,null);t.default=a.exports}}]);