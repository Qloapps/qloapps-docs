# Introduction To Modules
As you know, extensibility is an important aspect for any platform. Module provides you a way to add new features or modify QloApps core functionalities.
Using modules, Develelopers have opportunities to showcase their ideas and creativity by creating modules for QloApps. They can add as much functionalities for QloApps system.

There are some actions which can be performed with modules -
- Display your contents at different places.
- Perform many actions at the time of many events (update, create, delete, import, export etc.).
- Interactions between the QloApps website and external services.
- Add / Modify functionalities to QloApps without editing core files.

So you should always stay away from QloApps core files when creating a module, even though it seems necessary in some situations.

Modules are small programs which uses functionalities of QloApps to add/modify more functionalities and make QloApps easier and more customizable.

## Technical Aspects of Module
Below are some technical aspects of modules.

- A module always have a main PHP file and can contain many other needed PHP files.
- It consist of template(.tpl) files and also assets i.e. CSS, JS, images etc to display the content to the admin (on backoffice) Or Customers (on front office).
- A module can interact with as many hooks to perform actions. Through hooks you can attach your code while code parsing.

*Hooks enable you to perform any actions(execute your code) on different events Or display some content at different places.*
