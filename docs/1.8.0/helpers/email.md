# Send Emails from QloApps

For the mail related functionalities, QloApps uses The **Mail** core class which extends **ObjectModel**.

For sending mails in QloApps use the **Mail::Send()** method.

Let's understand it with an example below.
In the below example we are sending a mail from controller **modcontroller.php** from a module **mymodule**:

```php
class MyModuleModcontrollerModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        parent::initContent();

        Mail::Send(
            (int)(Configuration::get('PS_LANG_DEFAULT')), // Which language template to be sent
            'email_template_name', // email template file to be use
            'email_subject', // email subject
            array(
                '{name}' => 'John Doe',
                '{message}' => 'This is a test email' // in this array send data to the email template
            ),
            'email@receiver.com', // // email address of receiver
            'receiver_name', //receiver name
            'email@sender.com', // email address of sender
            'sender_name'  // name of the sender
        );
    }
}
```
In QloApps, emails configuration is used to decide if use **SMTP connection** or PHP **mail()** function from **Advance Parameters -> E-mail**.

### Custom mail template
- You can specify an email template path of your module in the **$template_path** parameter.
- In the module root folder you have to create the subfolder **mails** and under **mails/** a subfolder with languages.
i.e. **\modules\mymodule\mails\fr** for french.

- In the created language folder, `fr`, create two files: first with extension `.html` and second with extension `.txt`.

- In the second parameter, we send the name of the template.
Two files in emails subfolders (languages folders) will be created in the module:
    1. **modules\mymodule\mails\en\email_template_name.html**
    2. **modules\mymodule\mails\en\email_template_name.txt**
<br>
**email_template_name** is template's name in the following example.

```php
class MyModuleModcontrollerModuleFrontController extends ModuleFrontController
{
    public function initContent()
    {
        parent::initContent();

        Mail::Send(
            (int)(Configuration::get('PS_LANG_DEFAULT')), // Which language template to be sent
            'email_template_name', // email template file to be use
            ' email_subject', // email subject
            array(
                '{name}' => 'John Doe',
                '{message}' => 'This is a test email' // in this array send data to the email template
            ),
            'email@receiver.com', // // email address of receiver
            'receiver_name', //receiver name
            'email@sender.com', // email address of sender
            'sender_name'  // name of the sender
            NULL, //file attachment
            NULL, // SMTP mode
            _PS_MODULE_DIR_.'mymodule/mails' //path of the custom template
        );
    }
}
```
The mail templates of QloApps itself are in the **/mails/&lt;iso_code&gt;/** folder (for example `mails/en/order_conf.html`). A template is looked up in this order: `themes/<active-theme>/modules/<module_name>/mails/` (only when the template path is inside a module), then `themes/<active-theme>/mails/`, and finally the path passed in the **$template_path** parameter. So a theme can override the email templates of a module by placing them in the folder:
**...\themes\hotel-reservation-theme\modules\mymodule\mails\en\ ...**

::: tip
Since QloApps 1.8.0, order state emails include a new template, `no_show` (`mails/en/no_show.html` and `.txt`), used for the **No-show** order status. The `Mail::Send()` signature itself is unchanged from 1.7.0.
:::

### Hooks to alter the mail
Since QloApps 1.8.0, a module can alter how a mail is sent with these hooks, fired from `Mail::Send()` (`classes/Mail.php`):

- **actionMailAlterTransportBeforeSend** - parameters: `configuration` (array of mail configuration values) and `transport` (by reference, the Symfony Mailer transport selected from the SMTP/sendmail settings). A module can replace `transport` to send the mail using another provider (for example an email API). The same hook is also fired when the test email is sent from **Advanced Parameters -> E-mail**.
- **actionMailAlterMessageBeforeSend** - parameters: `template` (by reference), `message` (by reference, the Symfony Mailer `Email` object) and `template_vars` (by reference).

::: warning
Since QloApps 1.8.0 the extra services of a booking are sent to the templates with the `{extra_services_details_html}` / `{extra_services_details_text}` variables (the 1.7.0 `{extra_demands_*}` variables no longer exist). Update custom templates that use the old variable names.
:::
