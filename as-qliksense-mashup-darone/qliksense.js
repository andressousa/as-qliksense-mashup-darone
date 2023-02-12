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

var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
var app;
require.config( {baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"} );
require(["js/qlik"], function( qlik ){

	function AppUi(app){
		this.app = app;

		/**
		 *	Getting app info
		 */
		app.getAppLayout(function (layout){

			//app title
			$('[data-text="app_name"]').text( layout.qTitle );

			//app last reload time
			const data   = new Date( layout.qLastReloadTime ).getTime() / 1000;
			const format = $('[data-text="date_format"]').text() ? $('[data-text="date_format"]').text() : 'Y-m-d H:m:s';
			$('[data-text="date_format"]').text( date( format, data ) );
		});

		/**
		 *	Getting bookmarks
		 */
		var loadBookmark = function(){
			app.getList( "BookmarkList", function(reply){
				var strHtml = "";
				reply.qBookmarkList.qItems.forEach( function(value){
					strHtml += value.qData.title ? '<a href="#" class="dropdown-item dropdown-bookmark" data-id="' + value.qInfo.qId + '">' + value.qData.title + '</a>' : '';
				});
				"" !== strHtml ? $('[data-widget="bookmarklist"]').html(strHtml) : false;

				//apply bookmark
				$('[data-widget="bookmarklist"]').find('.dropdown-bookmark').on('click', function(){
					var bookmarkId = $(this).attr('data-id');
					bookmarkId ? app.bookmark.apply( bookmarkId ) : false;
				});
			});
		};
		arrConfigs.bookmarks == true ? loadBookmark() : false;

		/**
		 *	Creating new bookmark
		 */
		$('#bookmarkCreate').on('click', function(){
		 	var strTitle = $('#bookmarkName').val() || false;
		 	var strDesc  = $('#bookmarkDesc').val() || false;

		 	if( strTitle ){
			 	app.bookmark.create( strTitle, strDesc ).then(function(){
				    app.doSave().then(function(){
				 		loadBookmark();
						$('#modalBookmark').modal('hide');
			 		});
				});
			 }
		});
		$('#modalBookmark').on('hide.bs.modal', function(){
		 	$('#bookmarkName').val('');
		});

		/**
		 *	Disable backward/forward buttons
		 *	when there is no selection
		 */
		app.getList( 'SelectionObject', function( reply ){
			$('[data-action="backward"]').toggleClass( 'disabled', reply.qSelectionObject.qBackCount < 1 );
			$('[data-action="forward"]').toggleClass( 'disabled', reply.qSelectionObject.qForwardCount < 1 );
			$('[data-action="lock"], [data-action="unlock"], [data-action="clearall"]').toggleClass( 'disabled', reply.qSelectionObject.qSelections < 1 );
		});

		/**
		 *	Action button
		 */
		$("[data-action]").on( 'click', function(){
			switch( $(this).attr('data-action') ){
				case 'backward': 	
					app.back();
				break;
				case 'forward':
					app.forward();
				break;
				case 'lock':
					app.lockAll();
				break;
				case 'unlock':
					app.unlockAll();
				break;
				case 'clearall':
					app.clearAll();
				break;
			}
		});

		/**
		 *	Export data
		 */
		 //csv
		$('.btn-export-csv').on( 'click', function(){
			var objID = getExportObjectId( $(this).closest('.card') );
			if( objID ){
				app.getObject( objID ).then(function( model ){ 
					var table = qlik.table(model);
					table.exportData( {download: true} );
				});
			}else{
				txtErrorMessage = arrTexts != false ? arrTexts.msg_error_export_objects : 'There is no data to export.';
				showToast( txtErrorMessage, 5000 );
			}
		});

		//image
		$('.btn-export-image').on( 'click', function(){
			var objID = getExportObjectId( $(this).closest('.card') );
			var settings = { download: true, format: 'png', height: Math.floor( $(this).closest('.card').outerHeight() ), width: Math.floor( $(this).closest('.card').outerWidth() ) };
			if( objID ){
				app.visualization.get(objID).then(function(vis){
					vis.exportImg(settings).then(function(url){
						window.open(url);
					});
				});
			}else{
				txtErrorMessage = arrTexts != false ? arrTexts.msg_error_export_objects : 'There is no data to export.';
				showToast( txtErrorMessage, 5000 );
			}
		});

		//pdf
		$('.btn-export-pdf').on( 'click', function(){
			var objID = getExportObjectId( $(this).closest('.card') );
			var settings = { download: true, documentSize: 'A4', aspectRatio: 2, orientation: "landscape" };
			if( objID ){
				app.visualization.get(objID).then(function(vis){
					vis.exportPdf(settings).then(function(url){
						window.open(url);
					});
				});
			}else{
				txtErrorMessage = arrTexts != false ? arrTexts.msg_error_export_objects : 'There is no data to export.';
				showToast( txtErrorMessage, 5000 );
			}
		});

	}

	/**
	 *	Apply Qlik Sense theme
	 */
	var strTheme = $('body').attr('data-theme') || 'sense';
	qlik.theme.apply( strTheme );

	/**
	 *	Apply Qlik Sense language
	 */
	var strLanguage = $('body').attr('data-lang') || 'en';
	qlik.setLanguage(strLanguage);

	/**
	 *	Redraw objects
	 */
    $('#mainTab a[data-toggle="tab"]').on('shown.bs.tab', function(){
		setTimeout(function(){
			qlik.resize();
		}, 50 );
    });
    $('.btn-maximize').on('click', function(){
		setTimeout(function(){
			qlik.resize();
		}, 200 );
    });
    $('.control-sidebar').on('expanded.lte.controlsidebar', function(){
		setTimeout(function(){
			qlik.resize();
		}, 200 );
    });
    $('.menu-open').on('click', function(){
    	if( ! $('body').is('.sidebar-closed, .sidebar-open') ){
			setTimeout(function(){
				qlik.resize();
			}, 200 );
		}
    });
	$('.carousel').on('slide.bs.carousel', function(){
		setTimeout(function(){
			qlik.resize();
		}, 100 );
    });

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Examples.qvf', config);

	//get objects -- inserted here --
	
	//create cubes and lists -- inserted here --

	if ( app ) { new AppUi( app ); }
});