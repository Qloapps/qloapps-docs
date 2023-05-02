(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{384:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"coding-standards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding-standards"}},[t._v("#")]),t._v(" Coding Standards")]),t._v(" "),s("p",[t._v("We know how much consistency is important, especially if we are writing open-source code. This is because the source code is used by a lot of people and everyone keeps an eye on it. Hence, these people find bugs and take corrective actions to fix them.")]),t._v(" "),s("p",[t._v("Because of these reasons, when you are writing a theme, a plugin, or a key patch, you must follow the listed guidelines when you are writing something for QloApps. They are the ones that the developers of QloApps stick to and when you follow them then there is a guarantee that you can easily integrate your code with QloApps.")]),t._v(" "),s("p",[t._v("In brief, to keep the code easy to read and maintain it is important to have code consistency.")]),t._v(" "),s("p",[s("strong",[t._v("The standards, conventions, and guidelines for QloApps development are as follows:")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("PHP code")]),t._v(": QloApps retains the "),s("a",{attrs:{href:"https://www.php-fig.org/psr/psr-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR-1"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.php-fig.org/psr/psr-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR-2"),s("OutboundLink")],1),t._v(", along with "),s("a",{attrs:{href:"https://symfony.com/doc/current/contributing/code/standards.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("some good details from Symfony"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("JavaScript code")]),t._v(": In QloApps we follow the "),s("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb JavaScript Style Guide"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("HTML and CSS code")]),t._v(": "),s("a",{attrs:{href:"https://codeguide.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("coding standards of Mark Otto"),s("OutboundLink")],1),t._v(" are followed by QloApps. The "),s("a",{attrs:{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap framework"),s("OutboundLink")],1),t._v(" is created by Mark.")]),t._v(" "),s("li",[s("strong",[t._v("Twig / Smarty code")]),t._v(": Same standards as with HTML and CSS.")]),t._v(" "),s("li",[s("strong",[t._v("Commits & Pull-requests conventions")]),t._v(": We select the best practices to be formalized.")])]),t._v(" "),s("h2",{attrs:{id:"sql-guidelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-guidelines"}},[t._v("#")]),t._v(" SQL Guidelines")]),t._v(" "),s("p",[t._v("For table names:")]),t._v(" "),s("ol",[s("li",[t._v("Table names should begin with the "),s("code",[t._v("_DB_PREFIX_")]),t._v(" prefix.")]),t._v(" "),s("li",[t._v("Table names should have the exact name as the object they reflect. : For class "),s("code",[t._v("Cart")]),t._v(" table name is "),s("code",[t._v("prefix_cart")]),t._v(", where "),s("code",[t._v("prefix")]),t._v(" is replaced by the actual prefix, "),s("code",[t._v("qlo_")]),t._v(", by default.")]),t._v(" "),s("li",[t._v("Table names have to be singular: "),s("code",[t._v("prefix_customer")]),t._v(".")]),t._v(" "),s("li",[t._v("Save the data for languages in a table that is named exactly the same as the object's table, and with the "),s("code",[t._v("_lang")]),t._v(" suffix. For example, "),s("code",[t._v("prefix_product_lang")]),t._v(".")])]),t._v(" "),s("p",[t._v("For SQL queries:")]),t._v(" "),s("ol",[s("li",[t._v("Write keywords in uppercase.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("firstname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v('Always use Back quotes ("`") around SQL field names and table names.')])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("  \n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Name Table aliases by taking the first letter of each word, and must be lowercase.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" p\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NATURAL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("product_lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" pl\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("Whenever there is a conflict between table aliases, the second character is also used in the name.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id_product"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("firstname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("cart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" ca"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'._DB_PREFIX_.'")]),t._v("customer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Create a new line for each clause.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("   $query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT pl.`name`\n   FROM `'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_DB_PREFIX_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'product_lang` pl\n   WHERE pl.`id_product` = 17'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("It is forbidden to make a JOIN in a WHERE clause.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);