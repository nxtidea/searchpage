# searchpage

Self-use aggregated search page.

## Features

- Using only the lightweight petite-vue framework, all files that need to be loaded do not exceed 100KB.
- Data is separated from functionality, all data is kept in the sitelist.js file.
- Simple CSS, but includes auto-theme switching and responsive layout.
- No need to set up a service, just open the page locally and use it.

## Instructions

1. Download this warehouse and put the warehouse folder where you think it is appropriate.
1. Create a file named `sitelist.js` under the folder, and the content can be copied from `sitelist-example.js`.
2. Open the `index.html` file to get started.
3. By modifying the `sitelist.js` file, you can add or modify sites and adjust them according to your needs.
4. When there is an update, put your own `sitelist.js` in the new folder and delete the old folder.

## Data file format

The data file is mainly in json format, and the js file is used to save it to avoid being blocked by the same-origin policy when it is used purely locally.

- Each object in group_data represents a group, and its attributes include:
     - Group name: name
     - Site list: sites
- Each object in sites represents a site, and its properties include:
     - site name: name
     - Search string: search
     - (Can be empty) When the search box is empty, click to jump to the website: home
     - (Can be empty) The help displayed on the button when the mouse hovers over it: description
- for the home attribute, if left blank, will automatically try to extract from the search string