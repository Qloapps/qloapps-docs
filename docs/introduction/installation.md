# QloApps Installation


### Download QloApps Software

Downloading QloApps is very simple. Just visit our [QloApps Official Website](https://qloapps.com/) and click on Download button to download the latest release version.

### QloApps Installation through GUI

You can also check out the installation blog for the detailed installation process here: [https://qloapps.com/install-qloapps/](https://qloapps.com/install-qloapps/)

### QloApps Installation through Command Line Interface (CLI)

QloApps allows its installation using Command Line Interface (CLI) as well. This method of installation has been provided for advanced users who may want to automate installation process using scripts. QloApps provides `install/index_cli.php` script which is responsible for installation in CLI mode.

This mode requires you to call the PHP interpreter on this file along with the available arguments.

To list all the available options and their default values run the following command from inside `install\` folder:

```bash
php index_cli.php
```

The following options are available:

| Argument        | Description                                                          | Default value                | Allowed values                                                                         |
|-----------------|----------------------------------------------------------------------|------------------------------|----------------------------------------------------------------------------------------|
| `step`          | Installation steps to execute                                        | all                          | all, database, fixtures, theme, modules, addons_modules                                |
| `language`      | Language ISO code to install                                         | en                           | 2 letters ISO 639-1 code (ISO 639-1) with available translation files in /translations |
| `all_languages` | Installs all available languages                                     | 0                            | 0, 1                                                                                   |
| `timezone`      | Set timezone of instance                                             | Europe/Paris                 | Valid timezone (TZ Database)                                                           |
| `base_uri`      | Base URI (appended after domain name, for example: `sites/booking/`) | /                            | Any URI                                                                                |
| `domain`        | Domain name for the website (without http/s)                         | localhost                    | Any domain name or IP address                                                          |
| `db_server`     | Database server hostname                                             | localhost                    | Any valid MySQL valid server name or IP address                                        |
| `db_user`       | Database server user                                                 | root                         | Any valid MySQL user name                                                              |
| `db_password`   | Database server password                                             | ""                           | The valid password for db_user                                                         |
| `db_name`       | Database name                                                        | qloapps                      | string                                                                                 |
| `db_clear`      | Drop existing tables                                                 | 1                            | 0, 1                                                                                   |
| `db_create`     | Create the database if not exists                                    | 0                            | 0, 1                                                                                   |
| `prefix`        | Prefix of table names                                                | qlo_                         | string                                                                                 |
| `engine`        | Engine for MySQL                                                     | InnoDB                       | InnoDB, MyISAM                                                                         |
| `name`          | Name of the website                                                  | QloApps                      | string                                                                                 |
| `country`       | Country of the website                                               | fr                           | 2 letters Alpha-2 code of ISO-3166 list(ISO-3166)                                      |
| `firstname`     | Admin user firstname                                                 | John                         | string                                                                                 |
| `lastname`      | Admin user lastname                                                  | Doe                          | string                                                                                 |
| `password`      | Admin user password                                                  | Correct Horse Battery Staple | string                                                                                 |
| `email`         | Admin user email                                                     | pub@qloapps.com              | string                                                                                 |
| `license`       | Show QloApps license after installation                              | 0                            | 0, 1                                                                                   |
| `newsletter`    | Get news from QloApps                                                | 1                            | 0, 1                                                                                   |
| `send_email`    | Send an email to the administrator after installation                | 1                            | 0, 1                                                                                   |


**Note**:
- Most of the available options can be left to their default values because they can be changed from back office after installation.
- Use double quotes ("") when providing values for string type options containing spaces. For example, `--name="QloApps Booking Engine"`.

Following options are recommended to be provided to start the installation:

- `domain`: The domain name where your website will be available.
- `db_server`: The database server address.
- `db_name`: The name of the database you want to use. **We strongly recommend that you change the default `qloapps` value**.
- `db_user`: The username for the database you want to use.
- `db_password`: The password for the database username above.
- `prefix`: **We strongly recommend that you change the default `qlo_` value.**
- `email`: Your email to login to the back office.
- `password`: The password to login to the back office.

##### Example minimal command:

```bash
php index_cli.php \
    --domain=example.com \
    --db_server=sql.example.com \
    --db_name=booking \
    --db_user=root \
    --db_password=123456789 \
    --prefix=qlo_ \
    --email=me@example.com \
    --password=mystrongpassword
```

##### Example most flexible command:

```bash
php index_cli.php \
    --step=all \
    --language=en \
    --timezone=Asia/Kolkata \
    --domain=example.com \
    --base_uri=booking/ \
    --db_server=localhost \
    --db_name=booking \
    --db_user=root \
    --db_password=123456789 \
    --prefix=qlo_ \
    --db_clear=1 \
    --db_create=1 \
    --email=me@example.com \
    --password=mystrongpassword \
    --name="QloApps Booking Engine" \
    --country=in \
    --firstname=John \
    --lastname=Doe \
    --newsletter=1 \
    --send_email=1
```

Wait for the command to execute. You will see the following message on successful installation:

```bash
-- Installation successful! --
```
