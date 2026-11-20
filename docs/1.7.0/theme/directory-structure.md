# Directory Structure

It is important to know the directory structure and the role of each directory before starting with the theme development. Following is the directory structure of a theme:

::: dir
.
├── themes
│   ├── *theme-directory-name*
│   │   ├── cache
│   │   ├── css
│   │   ├── docs
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   ├── lang
│   │   ├── mobile
│   │   ├── modules
│   │   ├── pdf
│   │   ├── sass
│   │   ├── preview.jpg
│   │   ├── product.tpl
│   │   ├── category.tpl
│   │   ├── ...
│   │   │
:::

## Directory reference

Let us go through each directory one by one.

### /cache
This folder is used by smarty to store compiled template files.

### /css
This folder contains `.css` files used by the theme. It also contains the `.css` files used by modules under `/modules` subfolder.

### /docs
This folder contains the documentation file for the theme. It can be accessed after successfully installing a theme. Only `.txt` and `.pdf` files are allowed as a documentation file.

### /fonts
This folder contains the font files used by the theme.

### /img
This folder contains the images used by the theme. It is worth noting that this folder does not contain the images used for hotels or room types.

### /js
This folder contains `.js` files used by the theme. It also contains the `.js` files used by modules under `/modules` subfolder.

### /lang
This folder contains the translations used by the theme.

### /mobile
This folder contains the media files used by mobile version of the theme.

### /modules
This folder contains theme specific new modules and the overriden template files of default modules.

### /pdf
This folder contains the template files for generated PDFs.

### /sass
This folder contains the `.sass` files used by the theme. These files when compiled generate `.css` files in the `/css` directory.

### /preview.jpg
This image is used as a placeholder for the current theme when listing themes.

This is the screenshot of how the theme looks when installed.

This image can have any dimensions. The default theme has a size of 180x445 pixels.

### /...
The root directory of a theme contains template files.
