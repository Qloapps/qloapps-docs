# QloApps architecture

QloApps is built by following the traditional object-oriented PHP practices. It is based on a custom framework.

The custom framework is developed on [3-tier architecture.](https://en.wikipedia.org/wiki/Multitier_architecture#Three-tier_architecture)

- **Object/data**. The files in the `/classes` folder control the access of databases.

- **Data control**. Files in the root folder control user-generated content.

- **Design**. The `/themes` folder contains the entirety of the theme's files.

This is the same as the MVC architecture but it is simpler and more accessible.
