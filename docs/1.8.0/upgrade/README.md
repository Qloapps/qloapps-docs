# Upgrade

With changing industry scenarios and community needs, QloApps keeps evolving and new versions are launched periodically. It is therefore important to keep upgrading for better security, stability, performance and new features.

You can upgrade your current installation of QloApps to the [latest available](https://github.com/webkul/hotelcommerce/releases) using our freely available upgrade module **[QloApps 1-Click Auto Upgrade](https://store.webkul.com/qloapps-1-click-upgrade.html)**.

The complete documentation of this module is available at [https://qloapps.com/qloapps-1-click-auto-upgrade](https://qloapps.com/qloapps-1-click-auto-upgrade/).

### Compatibility

- QloApps 1.8.0 requires **PHP 8.2 to 8.5** (`composer.json`). Upgrade PHP on your server before upgrading QloApps, and check that your modules and themes work with it.

- The upgrade module is not part of the QloApps core package since 1.8.0 (the `qloautoupgrade` stub module was removed from core, changelog #1567). Check the module documentation linked above for the minimum QloApps version it can upgrade from and for the versions it supports.

### Notes for developers (1.7.0 to 1.8.0)

Review your custom modules, themes and overrides against these changes:

- The `admin` and `install` folders are named `admin-dev` and `install-dev` in the source tree (changelog #1832). Do not hard-code `/admin/` paths; use `_PS_ADMIN_DIR_` or `Link::getAdminLink()`.

- The `passwd` columns of customers and employees (and referrers) are `varchar(60)` and passwords are hashed with bcrypt (`PasswordHashing` class). Old MD5 hashes are accepted and rehashed on the next login.

- The `access` table has a new `kpi` column. Raw SQL inserts into this table that do not name the columns must be updated.

- Modules must be compatible with PHP 8.2 to 8.5 (for example, dynamic properties and `${var}` string interpolation are deprecated since PHP 8.2).

See the [Module](../module_development/), [Theme](../theme/) and [Webservice](../webservice/) sections for the details that apply to each area.

::: danger
Please note the following before performing an upgrade:

- Create a manual backup of QloApps files and folders and its database.

- All customizations will be lost during upgrade.

- Read the upgrade module documentation thoroughly from the given link.
:::
