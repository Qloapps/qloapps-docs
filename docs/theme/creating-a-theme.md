# Creating a Theme
Let us now dive into the development process of a theme.

There are two methods to begin development of a theme. The basis of all the methods is to install a theme and modify it to get the required design.

Let us discuss both the methods in detail.


## By exporting an installed theme
QloApps allows creating a new theme based on an installed theme which can serve as a starting point for creating a new theme.

To create a new theme follow the following steps:

1. Go to **Preferences > Themes** page.
2. Click on **Add new theme** button at the top right of the page.
3. Scroll down to the **Create a new theme** section and click on **Create a new theme** button.
4. Fill the following details:
- **Name of the theme** (Required):  Give it a memorable name. It will be used as a label when listing themes. You may prefix it with a common word if you plan to make multiple themes.
- **Preview image for the theme** (Optional): This image shows front office design when this theme is intalled.
- **Default left column** (Optional): Choose default behavior for the left column on a new page added by you or a module.
- **Default right column** (Optional): Choose default behavior for the right column on a new page added by you or a module.
- **Number of products per page** (Optional): Set the number of room types to display at once when listing them, for example, on search results page.
- **Name of the theme's directory** (Required): It is recommended to derive directory name from the **Name of the theme** field set above. Just lowercase each letter and replace spaces with hyphens. For example, `My QloApps Theme` will have its directory as `my-qloapps-theme`.
- **Copy missing files from existing theme** (Optional): Select the theme to be used as the starting point for your theme. Files from the selected theme will be copied to your theme which you can later modify to create your theme. Select the default theme `hotel-reservation-theme` if you are creating a theme for the first time.
- **Responsive** (Optional): If you want to write separate template files for mobile view enable this option and create mobile templates in `/mobile` directory.

Click **Save**.

5. Your theme will be created and you will be notified for the same on the next page. Scroll down to the second section and confirm that your theme has been added to the list.


## By creating each file from scratch
This mehtod is not recommended.

You can also start with your theme by creating each directory and file from scratch. You must be well-versed with the directory structure and files.
1. Start by creating important pages like home page, search results page etc.
2. Keep adding required CSS and JS files as you move forward.
3. Keep in mind to follow correct directory structures for controller and module media files.
4. Do not forget to add `index.php` in all of your directories for security purposes.
