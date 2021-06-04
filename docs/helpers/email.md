# Send Emails in QloApps

For the mail related functionalities QloApps uses **The Mail core class extends ObjectModel**

For sending mails in QloApps use the **Mail::send()** method

Let's understand it with an exmaple below.
In the below example we are sending a mail from controller **modcontroller** from a module **mymodule**

```php
class mymoduleModcontrollerModuleFrontController extends ModuleFrontController
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
        );
    }
}
```
In QloApps, Emails configuration is used to decide if use **SMTP connection or php mail function** from **Advance Parameters -> E-mail**

### Custom mail template
- You can specify an email template path of your module in the **$template_path** parameter.
- In Module folder you have to create the subfolder **mails** and under **mails/** a sub folder with languages.
i.e. **\modules\module_name\mails\fr** for french.

- In the created language folder(fr), create two files: first with extension .html and second with extension .txt

- In second parameter, we send the name of the template.
Two files in mails subfolders(languages folders) will be created in the module
    1. **modules\my_module_name\mails\en\email_template_name.html**
    2. **modules\my_module_name\mails\en\email_template_name.txt**
**email_template_name** is template's name in the following example.

```php
class mymoduleModcontrollerModuleFrontController extends ModuleFrontController
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
            _PS_MODULE_DIR_.'my_module_name/mails' //path of the custom template
        );
    }
}
```
After installation of the module, the email template files of the modules are also placed under the folder of the active theme:
**...\themes\hotel-reservation-theme\modules\my_module_name\mails\en\ ...**
