# Introduction To Modules
As you know, extensibility is an important aspect of any platform. The module provides you a way to add new features or modify QloApps core functionalities. Using modules, Developers have opportunities to showcase their ideas and creativity by creating modules for QloApps. They can add as many functionalities for the QloApps system.

Here are some actions which can be performed with modules -
- Display your contents at different places.
- Perform many actions at the time of many events (update, create, delete, import, export, etc.).
- Interactions between the QloApps website and external services.
- Add / Modify functionalities to QloApps without editing core files.

So you should always stay away from QloApps core files when creating a module, even though it seems necessary in some situations.

Modules are small programs that use the functionalities of QloApps to add/modify more functionalities and make QloApps easier and more customizable.

## Technical Aspects of Module
Below are some technical aspects of modules.

- A module always has the main PHP file and can contain many other needed PHP files.
- It consists of template(.tpl) files and also assets i.e. CSS, JS, images, etc to display the content to the admin (on back-office) Or Customers (on the front office).
- A module can interact with as many hooks to perform actions. Through hooks, you can attach your code while code parsing.

*Hooks enable you to perform any actions(execute your code) on different events Or display some content at different places.*

## Operating Fundamentals for Modules
When it comes to scalability and extendibility module development is the best method for any system growth. Developing modules are also very beneficial for the developers as it let you use your thoughts and talent to explore the best of your creativity. 

Modules can be very versatile in terms of displaying content (blocks, text, etc.), performing tasks (batch update, import, export, etc.), interfacing with other tools, and much more.

Modules should be flexible in terms of configuration. Simple, the more configurable a module is the more it is flexible and covers a wider spectrum of user needs. 

The best part is that you can add any functionality to any QloApps system without altering its core files. Hence, making your QloApps more independent for updates as it will not require to have the transpose of all core changes

We suggest you refrain from making any change in the core file while creating a module, sometime it will be tough but there is always a way out.
