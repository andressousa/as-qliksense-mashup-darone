/*!
*
* The MIT License (MIT)
* Copyright (c) 2023
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @version v1.0.0
* @link https://github.com/andressousa/as-qliksense-mashup-darone
* @author André Sousa
* @license MIT
*/

// Layout options
const arrOptions = {

	//Enable shortcuts
	// - true | false
	shortcut: true,

	//Enable about
	// - true | false
	about: true,

	//Enable closed sidebar
	// - true | false
	sidebar_closed: false,

	//Enable sidebar flat buttons
	// - true | false
	sidebar_flat: false,

	//Keep selections bar always visible
	// - must enable devhub checkbox
	// - true | false
	selections: false,

	//Enable to show bookmarks
	// - true | false
	bookmarks: true,

	//Enable to create bookmark
	// - Must enable to show bookmarks
	// - true | false
	new_bookmark: true,

	//Enable acion buttons
	// - true | false
	actions: true,

	//Enable card export button
	// - true | false
	card_export: true,

	//Enable card maximize button
	// - true | false
	card_maximize: true,

	//Enable preloader progressbar
	// Hide preloader before all qlik objets loaded
	// - true | false
	preloader: true,

	//Enable fixed menus
	// - true | false
	fixed: false,

	//Qlik Sense theme ID
	// - These are default Qlik Sense themes.
	//   If you have another theme,
	//	 you may check its ID.
	//
	// - Classic: 	sense
	// - Standard: 	card
	// - Breeze: 	breeze
	// - Horizon: 	horizon
	qlik_theme: 'sense',

	//Enable language menus
	// - true | false
	translate: true,

	//Intenationalization
	// - These are default Qlik Sense languages.
	//
	// - German: 	de
	// - English: 	en
	// - Spanish: 	es
	// - French: 	fr
	// - Italian: 	it
	// - Japanese: 	ja
	// - Korean: 	ko
	// - Dutch: 	nl
	// - Polish: 	pl
	// - Russian: 	ru
	// - Swedish: 	sv
	// - Turkish:  	tr
	// - Brazilian Portuguese: 	pt
	// - Simplified Chinese: 	zh-CN
	// - Traditional Chinese: 	zh-TW
	qlik_lang: 'en',

	//Enable dark theme
	// - true | false
	theme_dark: false,

	// Colors
	//	primary 	secondary 	success 	info 
	//	warning 	danger 		dark 		light 
	//	white		indigo		navy		orange
	//	cyan		teal		gray 		pink
	//	lightblue	gray-dark	purple		red
	//	yellow 		lime 		fuchsia 	maroon
	//	green 		olive		blue							
	theme_color: 'gray',
};