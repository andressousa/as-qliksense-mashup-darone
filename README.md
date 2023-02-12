# Welcome to DAR One
## Premium Version

This is a Dashboard, Analysis and Report (DAR) mashup extension for Qlik Sense. It was made to help you to upgrade you visualization. We work to turn it easy to customize with options like colors, borders, translation, icons, and more. **We hope it's useful!**. [[Whatch demo video]](https://www.youtube.com/watch?v=RQtZpG5WbXw)

[![Dashboard](https://github.com/qlik-mashup/qlik-mashup/blob/main/darone/print.png)](https://www.youtube.com/watch?v=RQtZpG5WbXw)

## Summary
- [Features](https://github.com/qlik-mashup/qlik-mashup-darone#features)
- [Installation](https://github.com/qlik-mashup/qlik-mashup-darone#installation)
	- [Dependencies](https://github.com/qlik-mashup/qlik-mashup-darone#dependencies)
- [Configurations](https://github.com/qlik-mashup/qlik-mashup-darone#configurations-premium-version)
	- [Language](https://github.com/qlik-mashup/qlik-mashup-darone#language)
	- [Shortcut](https://github.com/qlik-mashup/qlik-mashup-darone#shortcut)
	- [Icons](https://github.com/qlik-mashup/qlik-mashup-darone#icons)
	- [Theme](https://github.com/qlik-mashup/qlik-mashup-darone#theme)
	- [Theme Color Preview](https://github.com/qlik-mashup/qlik-mashup-darone#theme-color-preview)

# Features
|Item                		|Free Version					|Premium Version (coming soon)
|---------------------------|-------------------------------|----------------------------|
|**Support**           		|No            					|E-mail
|**Source Code**      		|Minified						|Commented
|**Mashup Template**   		|No            					|Yes
|**Shortcuts**         		|No           					|Yes
|**Help Menu**        		|No           					|Yes, Config file
|**About Menu**        		|No           					|Yes, Config file
|**Internationalization**   |Yes, Manually 					|Yes, Config file
|**Icons Config**      		|Yes, Manually  				|Yes, Config file
|**Sidebar Closed**    		|Yes, Manually 					|Yes, Config file
|**Sidebar Flat**      		|Yes, Manually 					|Yes, Config file
|**Visible Selections Bar** |Yes, Manually 					|Yes, Config file
|**Hide Bookmarks**  		|Yes, Manually					|Yes, Config file
|**Create Bookmark**  		|No								|Yes, Config file
|**Hide Actions**      		|Yes, Manually 					|Yes, Config file
|**Hide Preloader** 		|Yes, Manually 					|Yes, Config file
|**Export CSV**  			|Yes, Manually					|Yes, Config file
|**Export Image**  			|No								|Yes, Config file
|**Export PDF**  			|No								|Yes, Config file
|**Maximize Chart**  		|Yes, Manually					|Yes, Config file
|**Fixed Theme**      		|Yes, Manually 					|Yes, Config file
|**Qlik Sense Theme**  		|Yes, Manually 					|Yes, Config file
|**Color Themes**      		|Yes, Manually (light, dark) 	|Yes, Config file (light, dark, primary, secondary, success, info, warning, danger, white, indigo, navy, orange, cyan, teal, gray, pink, lightblue, gray-dark, purple, red, yellow, lime, fuchsia, maroon, green, olive, blue)

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)
	      
# Installation
To install this extension, follow the instructions:

 1. Download and extract the lastest version from **build** folder;
 2. Setup options on **assets/config** folder - Premium Version (see options below);
 3. To install, follow oficial [Qlik Help Instructions](https://help.qlik.com/en-US/sense-developer/May2021/Subsystems/Extensions/Content/Sense_Extensions/Howtos/deploy-extensions.htm).

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

## Dependencies

Some extra libraries are used in the project. You may need some knowledge to evolve or modify this extension.

 - [jQuery v3.6.0](https://blog.jquery.com/2021/03/02/jquery-3-6-0-released/);
 - [Bootstrap v4.6.1](https://getbootstrap.com/docs/4.6/getting-started/introduction/);
 - [Font Awesome Free 5.15.4](https://fontawesome.com/v5/search?m=free).

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

# Configurations (Premium Version)

## Language

Qlik Sense is available in the following languages: German, English, Spanish, French, Italian, Japanese, Korean, Dutch, Polish, Russian, Swedish, Turkish, Brazilian Portuguese, Simplified Chinese and Traditional Chinese.

You can create new or change all texts through **assets/config/language.js**.

 - **Logo Title**;
 - **Browser tittle** `<title>`;
 - **Menu**;
 - **Dashboard** left menu button;
 - **Analysis** left menu button;
 - **Report** left menu button;
 - **Help** left menu button;
 - **About** left menu button;
 - **Expand** top menu button;
 - **Language** top menu button;
 - **Bookmarks** top menu button;
 - **No Bookmarks** submenu;
 - **Add Bookmark** top menu button;
 - **Add Bookmark name** label;
 - **Add Bookmark description** label;
 - **Add Bookmark button** label;
 - **Selections Bar** top menu button;
 - **Filter** top menu button;
 - **Filter 1** filter tab;
 - **Filter 2** filter tab;
 - **Filter 3** filter tab;
 - **Backward** action button;
 - **Forward** action button;
 - **Lock** action button;
 - **Unlock** action button;
 - **Clear All** action button;
 - **Close Chart** close expanded chart;
 - **Export Chart** export expanded chart;
 - **App Name** footer placeholder;
	 - Will be replaced with App Name when an app were associated.
 - **Reload Time** footer placeholder;
	 - Will be replaced with Last Reload Time when an app were associated.
 - **Date Format** for reload time ([see PHP date time format](https://www.php.net/manual/pt_BR/datetime.format.php));
 - **Load objects** error message;
	 - Shown when some object didn't load properly.
 - **Export data** error message;
	 - Shown when some data didn't export properly.

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

## Shortcut

You can change all shortcuts through **assets/config/shortcut.js**.

 - **Toggle left menu** `Shift+M`;
	 - Open/Close left menu.
 - **Dashboard tab** `Shift+D`;
	 - Show dashboard tab.
 - **Analysis tab** `Shift+A`;
	 - Show analysis tab.
 - **Report tab** `Shift+R`;
	 - Show report tab.
 - **Help tab** `Shift+H`;
	 - Show help modal.
 - **About tab** `Shift+I`;
	 - Show help modal.
 - **Expand** `Shift+E`;
	 - Maximize/Minimize window.
 - **Language** `Shift+T`;
	 - Maximize/Minimize window.
 - **Bookmarks** `Shift+B`;
	 - Open bookmarks list menu.
 - **New Bookmarks** `Shift+N`;
	 - Create bookmark.
 - **Toggle Selections Bar** `Shift+S`;
	 - Open/Close selections bar.
 - **Toggle Filter Bar** `Shift+F`;
	 - Open/Close right filter bar.
 - **Backward** `Shift+◀`;
	 - Backward selections.
 - **Forward** `Shift+▶`;
	 - Forward selections.
 - **Lock** `Shift+L`;
	 - Lock selections.
 - **Unlock** `Shift+U`;
	 - Unlock selections.
 - **Clear All** `Shift+C`;
	 - Clear selections.
 - **Close Expanded Chart** `Escape`
	 - Close expanded chart.
 - **Export Expanded Chart** `Shift+▼`
	 - Export expanded chart.

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

## Icons

You can change all icons through **assets/config/icons.js**.
Visit [Font Awesome Free 5.15.4](https://fontawesome.com/v5/search?m=free) icons page, search the desired icon and copy its css class.

 - **Menu**;
 - **Dashboard**;
 - **Analysis**;
 - **Report**;
 - **Help**;
 - **About**;
 - **Expand window (open)**;
 - **Expand window (close)**;
 - **Language**;
 - **Bookmark**;
 - **New Bookmark**;
 - **Selections Bar (open)**;
 - **Selections Bar (close)**;
 - **Filter Bar (open)**;
 - **Filter Bar (close)**;
 - **Backward**;
 - **Forward**;
 - **Lock**;
 - **Unock**;
 - **Clear All**;
 - **Expand Chart (open)**;
 - **Expand Chart (close)**;
 - **Export CSV**;
 - **Export Image**;
 - **Export PDF**;

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

## Theme

You can change all these options through **assets/config/options.js**.

 - **Enable closed sidebar** `true|false`;
	 - Enable to keep left sidebar closed on window load.
 - **Enable sidebar flat** `true|false`;
	 - Enable to remove rounded corners on left and right sidebars.
 - **Enable visible selections** `true|false`;
	 - Enable to always show Qlik Sense selections bar.
 - **Disable bookmark list** `true|false`;
	 - Hide bookmarks from top menu.
 - **Enable create bookmark** `true|false`;
	 - Enable to show create bookmark button to create new bookmark. This functionality 
 - **Disable action buttons** `true|false`;
	 - Hide show actions buttons. *Backward|Forward|Lock|Unlock|Clear All*.
 - **Disable card export** `true|false`;
	 - Hide export button on all charts. You can disable this button indivially on each chart by removing its `.card-export` html class.
 - **Disable card expand** `true|false`;
	 - Hide expand button on all charts. You can disable this button indivially on each chart by removing its `.card-export` html class.
 - **Disable preloader** `true|false`;
	 - Disable loading during objects load.
 - **Enable fixed theme** `true|false`;
	 - Keep left menu, top menu and right menu fixed on window scroll.
 - **Qlik theme** `sense|card|breeze|horizon`;
	 - Change Qlik Sense theme. For more information, [see Qlik Help for Custom Themes](https://help.qlik.com/en-US/sense-developer/May2021/Subsystems/Extensions/Content/Sense_Extensions/custom-themes-introduction.htm). Depends on the security rule be enabled on server too.
 - **Enable dark theme** `true|false`;
	 - Change all color theme to dark theme. You must have a different Qlik Sense Theme to contrast with.
- **Theme colors** `primary|secondary|success|info|warning|danger|dark|light|white|indigo|navy|orange|cyan|teal|gray|pink|lightblue|gray-dark|purple|red|yellow|lime|fuchsia|maroon|green|olive|blue`;
	 - Change left sidebar color.
 
[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)

 ## Theme Color Preview
![Navbar Colors](https://github.com/qlik-mashup/qlik-mashup/blob/main/darone/navbar-colors.png)
![Light Colors](https://github.com/qlik-mashup/qlik-mashup/blob/main/darone/sidebar-light-theme.png)
![Dark Colors](https://github.com/qlik-mashup/qlik-mashup/blob/main/darone/sidebar-dark-theme.png)

[Back to Top](https://github.com/qlik-mashup/qlik-mashup-darone#welcome-to-dar-one)
