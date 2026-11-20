# Making a module compatible with 1.8.0

This page lists the changes of QloApps 1.8.0 which can break a module written for QloApps 1.7.0. Check your module against each item, then bump its version and `qloapps_versions_compliancy` (see [Start Creating a Module](./creation.md)).

## Module metadata

- Set `$this->qloapps_versions_compliancy = array('min' => '1.8.0.0', 'max' => _QLOAPPS_VERSION_);` in the constructor if the module can not work on 1.7.0 anymore. `_QLOAPPS_VERSION_` is `1.8.0.0` in 1.8.0. The module can not be installed when the QloApps version is outside the range (`Module::checkCompliancy()`).
- A `config.xml` file is not needed in the module source, QloApps generates it.
- If you change the module version, add an `upgrade/upgrade-X.Y.Z.php` script when the new version changes the database, hooks, admin tabs or configuration (see [Upgrade method of a module](./creation.md#upgrade-method-of-a-module)).

## PHP version

QloApps 1.8.0 requires PHP 8.2 to 8.5 (`composer.json`: `"php": ">=8.2 <8.6"`; it was `>=5.4 <8.0` in 1.7.0). Remove the code deprecated or removed in PHP 8.2+ from your module, for example `${var}` string interpolation, `utf8_encode()`/`utf8_decode()`, `create_function()`, `each()`, and creating dynamic properties in classes which are not derived from `ObjectModel`, `Module` or `Controller` (add `#[\AllowDynamicProperties]` to such classes).

`Tools::redirectAdmin()` and `Tools::display404Error()` now have the return type `never`. An override of these methods must declare `: never` too, and the code written after calling them is never executed.

## Folders renamed

The `admin` folder is `admin-dev` and the `install` folder is `install-dev` in the 1.8.0 source code. Do not hard-code these folder names (for example `_PS_ROOT_DIR_.'/admin'`, `/admin/ajax-tab.php` or `../../admin/` in a cron script). Use `_PS_ADMIN_DIR_`, `basename(_PS_ADMIN_DIR_)` or `$this->context->link->getAdminLink('AdminController')`.

## Back office

- The actions of `AdminController` which change data (delete, add, edit, status, position and bulk actions) check `$this->tabAccess['add'|'edit'|'delete'] !== 1` (strict integer comparison). Do the same in your own `process*()` and `ajaxProcess*()` methods, see [Admin Controller](./admin-controller.md).
- `AdminController::processFilter()` accepts only the filter fields whose names start with the list id (`<list_id>Filter_...`), `submitFilter...`, `<list_id>Orderby` and `<list_id>Orderway`.
- The `access` table has a new column `kpi`. A raw `INSERT INTO access` with six values fails; use `Tab::add()` or give the column names explicitly. KPIs of a controller are displayed (`renderKpis()`) only if `$this->tabAccess['kpi'] === 1`.
- `Tab::getTabs()` has a third parameter, `$include_kpi = false`.
- Module admin controllers which define `renderKpis()` must be in a file named `<ClassName>Controller.php` for the Access page to detect it.

## Front office

- When a front controller denies access (`viewAccess()` returns `false`, for example for an invalid token), the visitor is redirected to the "page not found" page instead of seeing the maintenance page, see [Front controller](./frontoffice-controller.md).
- The parameters of the cart controller (`controllers/front/CartController.php`) changed: `dateFrom`/`dateTo` are now `date_from`/`date_to`, and `occupancy` is sent as an array (`occupancy[0][adults]`, ...) instead of a JSON string. The `serviceProducts` JSON parameter is replaced by service product parameters. If your module adds rooms to the cart with its own request, update it.
- The jQuery UI key `effects.core` is removed from `Media::$jquery_ui_dependencies`; `ui.effect` is used instead. `addJqueryUI('effects.core')` and `addJqueryUI('effects.<name>')` no longer load a file.

## Security

- Passwords are hashed with bcrypt (`PasswordHashing` class). `customer.passwd`, `employee.passwd` and `referrer.passwd` are `varchar(60)`. `Customer::getByEmail()` and `Employee::getByEmail()` validate the plain password with `PasswordHashing::validateHash()` (an old MD5 hash is accepted and upgraded on the next login). Do not compare the password column with `Tools::encrypt($passwd)` in SQL.
- `Validate::isCleanHtml()` is stricter (inline `on...=` event attributes and similar are rejected), so HTML saved by your module through `isCleanHtml` fields may be refused.

## Removed or renamed

| 1.7.0 | 1.8.0 |
|:------|:------|
| Hotel features: `HotelFeatures`, `HotelBranchFeatures` classes | `HotelAmenities`, `HotelBranchAmenities`, `HotelRoomTypeAmenities` (module `hotelreservationsystem`) |
| Extra demands: `HotelRoomTypeGlobalDemand`, `HotelRoomTypeDemand`, `HotelBookingDemands`, ... classes, `Product::getWsExtraDemands()` | Removed, replaced by service products. |
| `HotelBedType`, `HotelRoomTypeBedType` classes | Removed |
| `HotelRoomInformation::STATUS_TEMPORARY_INACTIVE` | Removed |
| Table `order_detail_tax` | Removed, replaced by `order_tax_detail` (and the new tax tables like `tax_configuration`) |
| Module `qlochannelmanagerconnector` | `qlocmconnector` |
| Mail variables `{extra_demands_details_html}`, `{extra_demands_details_text}` | `{extra_services_details_html}`, `{extra_services_details_text}` |
| Hooks `displayDashboardBadgeListBefore`, `displayDashboardBadgeListAfter` | Not executed anymore |
| `actionMailAlterMessageBeforeSend` parameters: `message` | `template`, `message`, `template_vars` |

## Search your module

```bash
grep -rnE "Tools::encrypt\(|_PS_ROOT_DIR_.{0,6}admin|\.\./admin|/install/|create_function|utf8_(en|de)code|order_detail_tax|HotelFeatures|Demand|qlochannelmanagerconnector|effects\.core|INTO.*access" modules/yourmodule
```

See also the new hooks in [Hooks](../helpers/hooks.md) and [Register cron tasks from a module](./cron-tasks.md).
