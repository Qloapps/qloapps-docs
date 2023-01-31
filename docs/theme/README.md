# Introduction

As discussed in the [Architecture](../architecture/) section, QloApps is built on MVC (Model-View-Controller) architecture which allows the separation of individual components from each other and to work on them independently without affecting others.

In this section we are going to discuss the View component of the architecture and how we can modify it to suit our needs.

The View component is also called the Design layer. It is responsible for design and look of the website.


## What is a Theme?

The collection of all the files which manage the View component is called a Theme.

A theme is the interface through which an end user interacts with websites through clicks, scrolls, buttons etc. Since a theme decides the overall user experience on our website it is important to have a good theme installed.


## How does a theme work?

Here are a few important points about a theme:
- All themes are located in `/themes` folder.
- Each theme is located in a subfolder of its own inside the folder above.
- For example, the default QloApps theme is located in `/themes/hotel-reservation-system` folder.
- Each theme has its own set of following files:
    - Template files (`.tpl`)
    - Image files (`.gif`, `.jpg`, `.png` etc.)
    - CSS files (`.css`)
    - JavaScript files (`.js`).
