# Register cron tasks from a module

QloApps 1.8.0 bundles the **Cron Task Manager** module (`qlocrontaskmanager`). Instead of asking the merchant to create one server cron entry for each module, a module only describes its tasks and the Cron Task Manager runs them. The merchant creates a single server cron entry for the Cron Task Manager.

::: tip
The Cron Task Manager module must be installed and enabled for the tasks of your module to run. The version 1.0.0 of the module is compatible with QloApps 1.7.0 and 1.8.x.
:::

## How a task is registered

To register cron tasks, add the public method `hookRegisterCronTasks()` to the main class of your module. It must return an array of task definitions. This is not a real QloApps hook: the Cron Task Manager checks with `method_exists($module, 'hookRegisterCronTasks')` and calls the method directly.

```php
public function hookRegisterCronTasks()
{
    return array(
        array(
            'name' => 'generate_sitemap',
            'description' => $this->l('Regenerate the XML sitemaps'),
            'cron' => '0 0 * * 0',
            'callback' => 'cronGenerateSitemap',
        ),
    );
}

public function cronGenerateSitemap()
{
    if (!$this->createSitemap()) {
        throw new Exception('Unable to generate the sitemaps.');
    }
}
```
(This is how the bundled `qlositemap` module does it.)

Each task definition has four keys, all required:

| Key | Description |
|:----|:------------|
| `name` | Name of the task. It must be unique inside your module and must be a valid generic name (`Validate::isGenericName()`, at most 128 characters). |
| `description` | Description displayed in the Cron Task Manager (at most 255 characters, `Validate::isGenericName()`). |
| `cron` | A standard cron expression (for example `* * * * *` or `0 0 * * 0`), validated with the `dragonmantank/cron-expression` library. Maximum 64 characters. |
| `callback` | Name of a public method of your module main class which is called when the task is due. It takes no parameters. |

A task which fails the validation (invalid values, invalid cron expression, or a callback method which does not exist in the module) is skipped silently. If the callback throws an exception, the Cron Task Manager catches it and saves the error message in the task logs, so throw an exception to report a failure.

## When tasks are registered and removed

- **When your module is installed:** the Cron Task Manager is registered on the `actionModuleInstallAfter` hook, calls your `hookRegisterCronTasks()` method and saves the tasks (`QctmCronTask::registerTasksForModule()`).
- **When the Cron Task Manager is installed after your module:** it goes through all the installed modules and registers their tasks (`QctmCronTask::syncAllExistingModules()`).
- **When your module is uninstalled:** the Cron Task Manager is registered on the `actionModuleUninstallBefore` hook (new in QloApps 1.8.0, see [Hooks](../helpers/hooks.md)) and deletes the tasks of your module (`QctmCronTask::deleteByModule()`). The task logs are kept.
- A task which already exists (same module and `name`) is not registered again or overwritten, so changing the `cron` value in your code does not update an existing task. The merchant can manage the tasks from the Cron Task Manager page in the back office.
- Tasks of a disabled module are not run.

::: tip
In the QloApps 1.8.0 changelog, #1927 fixed the registration of the tasks of already installed modules when the Cron Task Manager is reinstalled, and #1818 downgraded the cron expression library (`dragonmantank/cron-expression` 3.5.0) bundled in the module.
:::

If your module needs to create its task later (for example when the merchant changes a setting) you can call the registration directly, after checking that the Cron Task Manager is enabled:

```php
if (Module::isEnabled('qlocrontaskmanager')) {
    (new QctmCronTask())->registerTasksForModule((int) $this->id, $this->hookRegisterCronTasks());
}
```
The bundled `qlositemap` and `qlogooglehotelconnector` modules use this approach (`qlositemap` also deletes its task, with `$cronTask->delete()`, when the merchant selects "never").

## Running the tasks (server cron entry)

The Cron Task Manager executes the due tasks when its file `modules/qlocrontaskmanager/cron.php` is requested with the secure token:

```
* * * * * curl -s "https://yourdomain.com/modules/qlocrontaskmanager/cron.php?token=<TOKEN>"
```
The token is stored in the configuration `QCTM_CRON_TASK_MANAGER_TOKEN`. The exact command with your token is displayed on the configuration page of the module, where the token can be regenerated (after regenerating it, the server cron entry must be updated). A request without the right token receives `403 Forbidden`.
