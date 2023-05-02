(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{394:function(t,a,e){"use strict";e.r(a);var s=e(26),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"qloapps-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qloapps-installation"}},[t._v("#")]),t._v(" QloApps Installation")]),t._v(" "),e("h3",{attrs:{id:"download-qloapps-software"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-qloapps-software"}},[t._v("#")]),t._v(" Download QloApps Software")]),t._v(" "),e("p",[t._v("Downloading QloApps is very simple. Just visit our "),e("a",{attrs:{href:"https://qloapps.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QloApps Official Website"),e("OutboundLink")],1),t._v(" and click on Download button to download the latest release version.")]),t._v(" "),e("h3",{attrs:{id:"qloapps-installation-through-gui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qloapps-installation-through-gui"}},[t._v("#")]),t._v(" QloApps Installation through GUI")]),t._v(" "),e("p",[t._v("You can also check out the installation blog for the detailed installation process here: "),e("a",{attrs:{href:"https://qloapps.com/install-qloapps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://qloapps.com/install-qloapps/"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"qloapps-installation-through-command-line-interface-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qloapps-installation-through-command-line-interface-cli"}},[t._v("#")]),t._v(" QloApps Installation through Command Line Interface (CLI)")]),t._v(" "),e("p",[t._v("QloApps allows its installation using Command Line Interface (CLI) as well. This method of installation has been provided for advanced users who may want to automate installation process using scripts. QloApps provides "),e("code",[t._v("install/index_cli.php")]),t._v(" script which is responsible for installation in CLI mode.")]),t._v(" "),e("p",[t._v("This mode requires you to call the PHP interpreter on this file along with the available arguments.")]),t._v(" "),e("p",[t._v("To list all the available options and their default values run the following command from inside "),e("code",[t._v("install\\")]),t._v(" folder:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php index_cli.php\n")])])]),e("p",[t._v("The following options are available:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Argument")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default value")]),t._v(" "),e("th",[t._v("Allowed values")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("step")])]),t._v(" "),e("td",[t._v("Installation steps to execute")]),t._v(" "),e("td",[t._v("all")]),t._v(" "),e("td",[t._v("all, database, fixtures, theme, modules, addons_modules")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("language")])]),t._v(" "),e("td",[t._v("Language ISO code to install")]),t._v(" "),e("td",[t._v("en")]),t._v(" "),e("td",[t._v("2 letters ISO 639-1 code (ISO 639-1) with available translation files in /translations")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("all_languages")])]),t._v(" "),e("td",[t._v("Installs all available languages")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0, 1")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("timezone")])]),t._v(" "),e("td",[t._v("Set timezone of instance")]),t._v(" "),e("td",[t._v("Europe/Paris")]),t._v(" "),e("td",[t._v("Valid timezone (TZ Database)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("base_uri")])]),t._v(" "),e("td",[t._v("Base URI (appended after domain name, for example: "),e("code",[t._v("sites/booking/")]),t._v(")")]),t._v(" "),e("td",[t._v("/")]),t._v(" "),e("td",[t._v("Any URI")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("domain")])]),t._v(" "),e("td",[t._v("Domain name for the website (without http/s)")]),t._v(" "),e("td",[t._v("localhost")]),t._v(" "),e("td",[t._v("Any domain name or IP address")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_server")])]),t._v(" "),e("td",[t._v("Database server hostname")]),t._v(" "),e("td",[t._v("localhost")]),t._v(" "),e("td",[t._v("Any valid MySQL valid server name or IP address")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_user")])]),t._v(" "),e("td",[t._v("Database server user")]),t._v(" "),e("td",[t._v("root")]),t._v(" "),e("td",[t._v("Any valid MySQL user name")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_password")])]),t._v(" "),e("td",[t._v("Database server password")]),t._v(" "),e("td",[t._v('""')]),t._v(" "),e("td",[t._v("The valid password for db_user")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_name")])]),t._v(" "),e("td",[t._v("Database name")]),t._v(" "),e("td",[t._v("qloapps")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_clear")])]),t._v(" "),e("td",[t._v("Drop existing tables")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0, 1")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("db_create")])]),t._v(" "),e("td",[t._v("Create the database if not exists")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0, 1")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("prefix")])]),t._v(" "),e("td",[t._v("Prefix of table names")]),t._v(" "),e("td",[t._v("qlo_")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("engine")])]),t._v(" "),e("td",[t._v("Engine for MySQL")]),t._v(" "),e("td",[t._v("InnoDB")]),t._v(" "),e("td",[t._v("InnoDB, MyISAM")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[t._v("Name of the website")]),t._v(" "),e("td",[t._v("QloApps")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("country")])]),t._v(" "),e("td",[t._v("Country of the website")]),t._v(" "),e("td",[t._v("fr")]),t._v(" "),e("td",[t._v("2 letters Alpha-2 code of ISO-3166 list(ISO-3166)")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("firstname")])]),t._v(" "),e("td",[t._v("Admin user firstname")]),t._v(" "),e("td",[t._v("John")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("lastname")])]),t._v(" "),e("td",[t._v("Admin user lastname")]),t._v(" "),e("td",[t._v("Doe")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("password")])]),t._v(" "),e("td",[t._v("Admin user password")]),t._v(" "),e("td",[t._v("Correct Horse Battery Staple")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("email")])]),t._v(" "),e("td",[t._v("Admin user email")]),t._v(" "),e("td",[t._v("pub@qloapps.com")]),t._v(" "),e("td",[t._v("string")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("license")])]),t._v(" "),e("td",[t._v("Show QloApps license after installation")]),t._v(" "),e("td",[t._v("0")]),t._v(" "),e("td",[t._v("0, 1")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("newsletter")])]),t._v(" "),e("td",[t._v("Get news from QloApps")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0, 1")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("send_email")])]),t._v(" "),e("td",[t._v("Send an email to the administrator after installation")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("0, 1")])])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("Most of the available options can be left to their default values because they can be changed from back office after installation.")]),t._v(" "),e("li",[t._v('Use double quotes ("") when providing values for string type options containing spaces. For example, '),e("code",[t._v('--name="QloApps Booking Engine"')]),t._v(".")])]),t._v(" "),e("p",[t._v("Following options are recommended to be provided to start the installation:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("domain")]),t._v(": The domain name where your website will be available.")]),t._v(" "),e("li",[e("code",[t._v("db_server")]),t._v(": The database server address.")]),t._v(" "),e("li",[e("code",[t._v("db_name")]),t._v(": The name of the database you want to use. "),e("strong",[t._v("We strongly recommend that you change the default "),e("code",[t._v("qloapps")]),t._v(" value")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("db_user")]),t._v(": The username for the database you want to use.")]),t._v(" "),e("li",[e("code",[t._v("db_password")]),t._v(": The password for the database username above.")]),t._v(" "),e("li",[e("code",[t._v("prefix")]),t._v(": "),e("strong",[t._v("We strongly recommend that you change the default "),e("code",[t._v("qlo_")]),t._v(" value.")])]),t._v(" "),e("li",[e("code",[t._v("email")]),t._v(": Your email to login to the back office.")]),t._v(" "),e("li",[e("code",[t._v("password")]),t._v(": The password to login to the back office.")])]),t._v(" "),e("h5",{attrs:{id:"example-minimal-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-minimal-command"}},[t._v("#")]),t._v(" Example minimal command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php index_cli.php "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sql.example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("booking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("qlo_ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("me@example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mystrongpassword\n")])])]),e("h5",{attrs:{id:"example-most-flexible-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-most-flexible-command"}},[t._v("#")]),t._v(" Example most flexible command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("php index_cli.php "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --step"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --language"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("en "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --timezone"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Asia/Kolkata "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --domain"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --base_uri"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("booking/ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("booking "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --prefix"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("qlo_ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_clear"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --db_create"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("me@example.com "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --password"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mystrongpassword "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"QloApps Booking Engine"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --country"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("in "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --firstname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("John "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --lastname"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Doe "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --newsletter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --send_email"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),e("p",[t._v("Wait for the command to execute. You will see the following message on successful installation:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("-- Installation successful"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" --\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);