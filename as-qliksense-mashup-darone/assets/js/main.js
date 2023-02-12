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

/**
 *	Jquery function to remove clement classes using wildcard
 *
 *	@param  string strName
 *	@return void
 *
 *	Eg. $(this).removeClassLike('nav-');
 *	- Removes all classes starting with 'nav-'
 */
$.fn.removeClassLike = function(strName){
    var arrClasses = this.attr('class');
    if( arrClasses ){
        arrClasses = arrClasses.replace(new RegExp('\\b' + strName + '\\S*\\s?', 'g'), '').trim();
        arrClasses ? this.attr('class', arrClasses) : this.removeAttr('class');
    }
    return this;
};

/** 
 *	Convert date format
 *	- This function results like PHP date() function.
 *	- https://www.php.net/manual/pt_BR/datetime.format.php
 *
 *	@param 	string  n (format)
 *	@return integer t (timestamp)
 */

function date(n, t){
    var e, r, u = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        o = /\\?(.?)/gi,
        i = function(n, t) { return r[n] ? r[n]() : t },
        c = function(n, t) { for (n = String(n); n.length < t;) n = "0" + n; return n };
    return r = {
        d: function() { return c(r.j(), 2) },
        D: function() { return r.l().slice(0, 3) },
        j: function() { return e.getDate() },
        l: function() { return u[r.w()] + "day" },
        N: function() { return r.w() || 7 },
		S: function() {
		    var n = r.j(),
		        t = n % 10;
		    return t <= 3 && 1 == parseInt(n % 100 / 10, 10) && (t = 0), ["st", "nd", "rd"][t - 1] || "th"
		},
		w: function() { return e.getDay() },
		z: function() {
		    var n = new Date(r.Y(), r.n() - 1, r.j()),
		        t = new Date(r.Y(), 0, 1);
		    return Math.round((n - t) / 864e5)
		},
		W: function() {
		    var n = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3),
		        t = new Date(n.getFullYear(), 0, 4);
		    return c(1 + Math.round((n - t) / 864e5 / 7), 2)
		},
		F: function() { return u[6 + r.n()] },
		m: function() { return c(r.n(), 2) },
		M: function() { return r.F().slice(0, 3) },
		n: function() { return e.getMonth() + 1 },
		t: function() { return new Date(r.Y(), r.n(), 0).getDate() },
		L: function() { var n = r.Y(); return n % 4 == 0 & n % 100 != 0 | n % 400 == 0 },
		o: function() {
		    var n = r.n(),
		        t = r.W();
		    return r.Y() + (12 === n && t < 9 ? 1 : 1 === n && t > 9 ? -1 : 0)
		},
		Y: function() { return e.getFullYear() },
		y: function() { return r.Y().toString().slice(-2) },
		a: function() { return e.getHours() > 11 ? "pm" : "am" },
		A: function() { return r.a().toUpperCase() },
		B: function() {
		    var n = 3600 * e.getUTCHours(),
		        t = 60 * e.getUTCMinutes(),
		        r = e.getUTCSeconds();
		    return c(Math.floor((n + t + r + 3600) / 86.4) % 1e3, 3)
		},
		g: function() { return r.G() % 12 || 12 },
		G: function() { return e.getHours() },
		h: function() { return c(r.g(), 2) },
		H: function() { return c(r.G(), 2) },
		i: function() { return c(e.getMinutes(), 2) },
		s: function() { return c(e.getSeconds(), 2) },
		u: function() { return c(1e3 * e.getMilliseconds(), 6) },
		e: function() { throw "Not supported (see source code of date() for timezone on how to add support)" },
		I: function() { return new Date(r.Y(), 0) - Date.UTC(r.Y(), 0) != new Date(r.Y(), 6) - Date.UTC(r.Y(), 6) ? 1 : 0 },
		O: function() {
		    var n = e.getTimezoneOffset(),
		        t = Math.abs(n);
		    return (n > 0 ? "-" : "+") + c(100 * Math.floor(t / 60) + t % 60, 4)
		},
		P: function() { var n = r.O(); return n.substr(0, 3) + ":" + n.substr(3, 2) },
		T: function() { return "UTC" }, 
		Z: function() { return 60 * -e.getTimezoneOffset() },
		c: function() { return "Y-m-d\\TH:i:sP".replace(o, i) },
		r: function() { return "D, d M Y H:i:s O".replace(o, i) },
		U: function() { return e / 1e3 | 0 }
    }, 
    this.date = function(n, t) {
        return this, e = void 0 === t ? new Date : t instanceof Date ? new Date(t) : new Date(1e3 * t), n.replace(o, i)
    }, this.date(n, t)
}

/** 
 *	Returns the largest number from a list 
 *
 *	@param  array  arrNumbers (number list)
 *	@return number
 */
function maxValue(arrNumbers) {
	var numMax = 0;
	Object.keys(arrNumbers).forEach( function(key){
		if( arrNumbers[key] > numMax ){
			numMax = arrNumbers[key];
		}
	});
	return numMax;
};

/**
 *	Show toast,
 *	- Dependency: assets/js/jquery.toast.min.js
 *
 *	@param  string  strText
 *	@param  integer intTime
 *	@return void
 */
function showToast(strText, intTime){
	$.Toast( 
		strText, 
		{
			'duration': intTime, 	//duration in miliseconds
			'class': 'info', 		//class for css style
			'align': 'center' 		//center|left|right
		}
	);
}

/**
 *	Get object id from HTML Object
 *
 *	Tested Object types
 *	- pie chart | scatter plot
 *
 *	@param  object objCard (DOM)
 *	@return string
 */
function getExportObjectId(objCard){
	var objID = objCard.attr('data-id') || false;

	if( ! objID && objCard.find('.qv-object').length ){
		objID = objCard.find('.qv-object').attr('aria-labelledby').split('_')[0];

		if( ! objID ){ return false; }
		objCard.attr( 'data-id', objID );
	}
	return objID;
}


//###################################################
//#####                                        ######
//#####       LAYOUT SETUP                     ######
//#####                                        ######
//###################################################


/** 
 *	Test if navbar fixed layout is active
 *
 *	@param  none
 *	@return boolean
 */
function isNavbarFixed(){
	return $('body').is('.layout-navbar-fixed, .layout-sm-navbar-fixed, .layout-md-navbar-fixed, .layout-lg-navbar-fixed, .layout-xl-navbar-fixed');
};

/** 
 *	Test if is footer fixed layout is active
 *
 *	@param  none
 *	@return boolean
 */
function isFooterFixed(){
	return $('body').is('layout-footer-fixed, .layout-sm-footer-fixed, .layout-md-footer-fixed, .layout-lg-footer-fixed, .layout-xl-footer-fixed') ||
		   $('.main-footer').css('position') === 'fixed';
};

/**
 *	Adjust layout height with all existent elements
 *
 *	@param  string strExtra
 *	@return void
 */
function fixLayoutHeight( strExtra ){
	strExtra = strExtra === 'control_sidebar';
	var arrHeights = {
		window: $(window).height(),
		header: $('.main-header').length > 0 && !$('body').hasClass('layout-navbar-fixed') ? $('.main-header').outerHeight() : 0,
		footer: $('.main-footer').length > 0 ? $('.main-footer').outerHeight() : 0,
		sidebar: $('.main-sidebar .sidebar').length > 0 ? $('.main-sidebar .sidebar').height() : 0,
		controlSidebar: $('body').is('.control-sidebar-slide-open, .control-sidebar-open') || strExtra ? $('.control-sidebar-content').outerHeight() : 0
	};
	var numMax = maxValue( arrHeights );
	var numOffset = 0;

	if( numMax === arrHeights.controlSidebar ){
		$('.content-wrapper').css('min-height', numMax + numOffset );
	}else if( numMax === arrHeights.window ){
		$('.content-wrapper').css('min-height', numMax + numOffset - arrHeights.header - arrHeights.footer );
	}else{
		$('.content-wrapper').css('min-height', numMax + numOffset - arrHeights.header );
	}
	if( isFooterFixed() ){
		$('.content-wrapper').css('min-height', parseFloat($('.content-wrapper').css('min-height')) + arrHeights.footer );
	}
	if( ! $('body').hasClass('layout-fixed') ){ return;	}
	if( typeof $.fn.overlayScrollbars !== 'undefined') {
		$('.main-sidebar .sidebar').overlayScrollbars({
			className: 'os-theme-light',
			sizeAutoCapable: true,
			scrollbars: {
				autoHide: 'l',
				clickScrolling: true
			}
		});
	}else{
		$('.main-sidebar .sidebar').css('overflow-y', 'auto');
	}
};

/**
 *	Adjust right menu height
 *
 *	@param  none
 *	@return void
 */
function fixMenuRightHeight(){
	if( ! $('body').hasClass('layout-fixed') ){
		$('.control-sidebar .control-sidebar-content').attr('style', '');
		return;
	}

	var arrHeights = {
		window: $(window).height(),
		header: $('.main-header').outerHeight(),
		footer: $('.main-footer').outerHeight()
	};
	var numSidebarHeight = arrHeights.window - arrHeights.header;

	if( isFooterFixed() && $('.main-footer').css('position') === 'fixed' ){
		numSidebarHeight = arrHeights.window - arrHeights.header - arrHeights.footer;
	}

	$('.control-sidebar').css('height', numSidebarHeight);

	if( typeof $.fn.overlayScrollbars !== 'undefined' ){
		$('.control-sidebar').overlayScrollbars({
			className: 'os-theme-light',
			sizeAutoCapable: true,
			scrollbars: {
				autoHide: 'l',
				clickScrolling: true
			}
		});
	}
};

/**
 *	Adjust right menu height on scroll
 *
 *	@param  none
 *	@return void
 */
function fixMenuRightHeightScroll(){
	if( ! $('body').hasClass('layout-fixed') ){ return; }

	var arrHeights = {
		scroll: $(document).height(),
		window: $(window).height(),
		header: $('.main-header').outerHeight(),
		footer: $('.main-footer').outerHeight()
	};
	var arrPositions = {
		bottom: Math.abs( arrHeights.window + $(window).scrollTop() - arrHeights.scroll),
		top: $(window).scrollTop()
	};
	var boolNavbarFixed = isNavbarFixed() && $('.main-header').css('position') === 'fixed';
	var boolFooterFixed = isFooterFixed() && $('.main-footer').css('position') === 'fixed';
	var intTop = arrHeights.header - arrPositions.top;

	if( arrPositions.top === 0 && arrPositions.bottom === 0 ){
		$('.control-sidebar').css({
			bottom: arrHeights.footer,
			top: arrHeights.header
		});
		$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', arrHeights.window - arrHeights.header + arrHeights.footer );
	}else if( arrPositions.bottom <= arrHeights.footer ){
		if( boolFooterFixed === false ){
			$('.control-sidebar').css('bottom', arrHeights.footer - arrPositions.bottom).css('top', intTop >= 0 ? intTop : 0);
			$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', arrHeights.window - arrHeights.footer - arrPositions.bottom);
		}else{
			$('.control-sidebar').css('bottom', arrHeights.footer);
		}
	}else if( arrPositions.top <= arrHeights.header ){
		if( boolNavbarFixed === false ){
			$('.control-sidebar').css('top', intTop );
			$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', arrHeights.window - intTop);
		} else {
			$('.control-sidebar').css('top', arrHeights.header);
		}
	}else if( boolNavbarFixed === false ){
		$('.control-sidebar').css('top', 0);
		$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', heights.window);
	}else{
		$('.control-sidebar').css('top', arrHeights.header);
	}

	if( boolFooterFixed && boolNavbarFixed ){
		$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', '100%');
		$('.control-sidebar').css('height', '');
	}else if( boolFooterFixed || boolNavbarFixed ){
		$('.control-sidebar, .control-sidebar .control-sidebar-content').css('height', '100%');
		$('.control-sidebar').css('height', '');
	}
};

/**
 *	Layout triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	fixLayoutHeight();
	fixMenuRightHeight();
	fixMenuRightHeightScroll();

	$('.main-sidebar').on('mouseenter mouseleave', function(){
		$('body').hasClass('sidebar-collapse') ? fixLayoutHeight() : false;
	});
	$('[data-widget="pushmenu"]').on('collapsed.lte.pushmenu shown.lte.pushmenu', function(){
		setTimeout( fixLayoutHeight, 300 );
	});
	$('[data-widget="control-sidebar"]').on('collapsed.lte.controlsidebar', function(){
		fixLayoutHeight();
	}).on('expanded.lte.controlsidebar', function(){
		fixLayoutHeight('control_sidebar');
	});

	$('.card-object').each(function(){

		//disable expand button
		! $(this).hasClass('card-expand') ? $(this).find('[data-widget="maximize"]').remove() : false;

		//disable export button
		! $(this).hasClass('card-export') ? $(this).find('.btn-export').remove() : false;

		//test if card has header
		$(this).find('.card-header').length > 0 ? $(this).addClass('with-header') : false;

		//test if card has footer
		$(this).find('.card-footer').length > 0 ? $(this).addClass('with-footer') : false
	});
});

/**
 *	Layout triggers
 *
 *	@param  none
 *	@return void
 */
$(window).resize( function(){
	fixLayoutHeight();
	fixMenuRightHeight();
	fixMenuRightHeightScroll();
});

/**
 *	Layout triggers
 *
 *	@param  none
 *	@return void
 */
$(window).scroll( function(){
	$('body').is('.control-sidebar-open, .control-sidebar-slide-open') ? fixMenuRightHeightScroll() : false;
});


//###################################################
//#####                                        ######
//#####       LEFT MENU                        ######
//#####                                        ######
//###################################################


/**
 *	Show left menu
 *
 *	@param  none
 *	@return void
 */
function showLeftMenu(){
	$('body').removeClass('sidebar-closed sidebar-collapse').addClass('sidebar-open sidebar-is-opening').delay(50).queue(function(){
		$('body').removeClass('sidebar-is-opening');
		$(this).dequeue();
	});
	$('.main-sidebar').trigger( $.Event("shown.lte.pushmenu") );
};

/**
 *	Hide left menu
 *
 *	@param  none
 *	@return void
 */
function hideLeftMenu(){
	$('body').removeClass('sidebar-open').addClass('sidebar-closed sidebar-collapse');
	$('.main-sidebar').trigger( $.Event("collapsed.lte.pushmenu") );
	setTimeout( function(){
		$('.main-sidebar').trigger( $.Event("collapsed-done.lte.pushmenu") );
	}, 300 );
};

/**
 *	Toggle left menu
 *
 *	@param  none
 *	@return void
 */
function toggleLeftMenu(){
	$('body').hasClass('sidebar-collapse') ? showLeftMenu() : hideLeftMenu();
};

/**
 *	Show left menu tab
 *
 *	@param  string strTarget
 *	@return void
 */
function showLeftMenuTab(strTarget){
	$('#mainTab a[href="'+strTarget+'"]').tab('show');
}

/**
 *	Left menu triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	$('#sidebar-overlay').on('click', hideLeftMenu );
	$('[data-widget="pushmenu"]').on('click', function(e){
		e.preventDefault();
		toggleLeftMenu();
	});
	$('.main-sidebar .sidebar a').on('focusin', function(){
		$('.main-sidebar').addClass('sidebar-focused');
	}).on('focusout mouseleave', function () {
		$('.main-sidebar').removeClass('sidebar-focused');
	});
    $('#mainTab a[data-toggle="tab"]').on('shown.bs.tab', function(){
  		$('.content-wrapper .tab-title').text( $('#mainTab a.active').find('p').text() );
  	});
  	$('.content-wrapper .tab-title').text( $('#mainTab a.active').find('p').text() );
	$(window).width() <= 992 || $('body').hasClass('sidebar-close') ? hideLeftMenu() : false;
});


//###################################################
//#####                                        ######
//#####       RIGHT MENU                       ######
//#####                                        ######
//###################################################


/**
 *	Show right menu
 *
 *	@param  none
 *	@return void
 */
function showRightMenu(){
	$('html').addClass('control-sidebar-animate');
	$('.control-sidebar').show().delay(10).queue(function(){
		$('body').addClass('control-sidebar-slide-open').delay(300).queue(function(){
			$('html').removeClass('control-sidebar-animate');
			$(this).dequeue();
		});
		$('[data-widget="control-sidebar"] i.show').hide();
		$('[data-widget="control-sidebar"] i.hide').show();
		$(this).dequeue();
	});
	$('.control-sidebar').trigger( $.Event("expanded.lte.controlsidebar") );
};

/**
 *	Hide right menu
 *
 *	@param  none
 *	@return void
 */
function hideRightMenu(){
	$('html').addClass('control-sidebar-animate');
	$('body').removeClass('control-sidebar-slide-open').delay(300).queue(function(){
		$('.control-sidebar').hide();
		$('html').removeClass('control-sidebar-animate');
		$('[data-widget="control-sidebar"] i.show').show();
		$('[data-widget="control-sidebar"] i.hide').hide();
		$(this).dequeue();
	});
	
	$('.control-sidebar').trigger( $.Event("collapsed.lte.controlsidebar") );
	setTimeout( function(){
		$('.control-sidebar').trigger( $.Event("collapsed-done.lte.controlsidebar") );
	}, 300 );
};

/**
 *	Toggle right menu
 *
 *	@param  none
 *	@return void
 */
function toggleRightMenu(){
	$('body').is('.control-sidebar-open, .control-sidebar-slide-open') ? hideRightMenu() : showRightMenu();
};

/**
 *	Right menu triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	$('[data-widget="control-sidebar"]').on('click', function(e){
		e.preventDefault();
		toggleRightMenu();
	});
});


//###################################################
//#####                                        ######
//#####       FULL SCREEN WINDOW               ######
//#####                                        ######
//###################################################


/**
 *	Maximize screen
 *
 *	@param  none
 *	@return void
 */
function maximizeScreen(){
	if( document.documentElement.requestFullscreen ){
		document.documentElement.requestFullscreen();
	}else if( document.documentElement.webkitRequestFullscreen ){
		document.documentElement.webkitRequestFullscreen();
	}else if( document.documentElement.msRequestFullscreen ){
		document.documentElement.msRequestFullscreen();
	}
};

/**
 *	Minimize screen
 *
 *	@param  none
 *	@return void
 */
function minimizeScreren(){
	if( document.exitFullscreen ){
		document.exitFullscreen();
	}else if( document.webkitExitFullscreen ){
		document.webkitExitFullscreen();
	}else if( document.msExitFullscreen ){
		document.msExitFullscreen();
	}
};

/**
 *	Toggle screen
 *
 *	@param  none
 *	@return void
 */
function toggleScreen(){
	document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? minimizeScreren() : maximizeScreen();
};

/**
 *	Full screen window triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	$('[data-widget="fullscreen"]').on('click', function(e){
		e.preventDefault();
		toggleScreen();
	});
});

/**
 *	Full screen window triggers
 *
 *	@param  none
 *	@return void
 */
$(window).resize( function(){
    if( window.matchMedia('(display-mode: fullscreen)').matches || window.document.fullscreenElement ){
       $('[data-widget="fullscreen"] i.show').hide();
       $('[data-widget="fullscreen"] i.hide').show();
    } else {
       $('[data-widget="fullscreen"] i.show').show();
       $('[data-widget="fullscreen"] i.hide').hide();
    }
});


//###################################################
//#####                                        ######
//#####       FULL SCREEN CARD                 ######
//#####                                        ######
//###################################################


/**
 *	Maximize card
 *
 *	@param  object objCard (DOM)
 *	@return void
 */
function maximizeCard(objCard){
	objCard.find('[data-widget="maximize"] i.show').hide();
	objCard.find('[data-widget="maximize"] i.hide').show();
	objCard.css({
		height: objCard.height(),
		width: objCard.width(),
		transition: 'all .15s'
	}).delay(150).queue( function(){
		$(this).addClass('maximized-card');
		$('html').addClass('maximized-card');
		if( $(this).hasClass('collapsed-card') ){
			$(this).addClass('was-collapsed');
		}
		$(this).dequeue().trigger( $.Event( "maximized.lte.cardwidget" ) );
	});
};

/**
 *	Minimize card
 *
 *	@param  none
 *	@return void
 */
function minimizeCard(){
	var objCard =  $('.maximized-card');
	if( objCard.length > 0 ){
		objCard.find('[data-widget="maximize"] i.hide').hide();
		objCard.find('[data-widget="maximize"] i.show').show();
		objCard.css('cssText', "height: " + objCard.css.height + " !important; width: " + objCard.css.width + " !important; transition: all .15s;").delay(10).queue(function(){
			$('html').removeClass('maximized-card');
			$(this).removeClass('maximized-card').css({
				height: 'inherit',
				width: 'inherit'
			});
			$(this).removeClass('was-collapsed').dequeue();
		});
		objCard.trigger( $.Event( "minimized.lte.cardwidget" ) );
	}
};

/**
 *	Toggle card size
 *
 *	@param  object objCard (DOM)
 *	@return void
 */
function toggleCard(objCard){
	objCard.hasClass('maximized-card') ? minimizeCard() : maximizeCard(objCard);
};

/**
 *	Export maximized card data
 *
 *	@param  object objCard (DOM)
 *	@return void
 */
function exportCard(objCard){
	if( objCard.length > 0 ){
		objCard.find('.btn-export').trigger('click');
	}
};

/**
 *	Full screen card triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
    $('[data-widget="maximize"]').on('click', function(e){
    	e.preventDefault();
    	toggleCard( $(this).closest('.card-expand') );
    });
});


//###################################################
//#####                                        ######
//#####       SELECTIONS BAR                   ######
//#####                                        ######
//###################################################


/**
 *	Move selections bar position
 *	- Qlik Sense automatically insert <div id="#SelectionsBar">
 *	  inside <body> tag. We need to move it and put inside main wrapper div.
 *
 *	@param  none
 *	@return void
 */
function moveSelectionsBar(){
	if( $('#CurrentSelections').length > 0 ){
		$(".content-wrapper .nav-selections").prepend( $( $('#CurrentSelections').detach() ) );
	}else{
		$('[data-widget="selectionsbar"]').parent().remove();
		$(".content-wrapper .nav-selections").remove();
	}
}

/**
 *	Show selections bar
 *
 *	@param  none
 *	@return void
 */
function showSelectionsBar(){
	$('.nav-selections').show().delay(10).queue(function(){
		$(this).addClass('nav-selections-open').delay(300).queue(function(){
			$(this).dequeue();
		});
		$(this).dequeue();
		$('[data-widget="selectionsbar"] i.show').hide();
		$('[data-widget="selectionsbar"] i.hide').show();
	});
	$('.nav-selections').trigger( $.Event("expanded.lte.navselections") );
}

/**
 *	Hide selections bar
 *
 *	@param  none
 *	@return void
 */
function hideSelectionsBar(){
	$('.nav-selections').removeClass('nav-selections-open').delay(300).queue(function(){
		$(this).hide().dequeue();
		$('[data-widget="selectionsbar"] i.show').show();
		$('[data-widget="selectionsbar"] i.hide').hide();
	});
	$('.nav-selections').trigger( $.Event("collapsed.lte.navselections") );
}

/**
 *	Toggle selections bar
 *
 *	@param  none
 *	@return void
 */
function toggleSelectionsBar(){
	$('.nav-selections').hasClass('nav-selections-open') ? hideSelectionsBar() : showSelectionsBar();
};

/**
 *	Selections bar triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	moveSelectionsBar();
	$('[data-widget="selectionsbar"]').on('click', function(e){
		e.preventDefault();
		toggleSelectionsBar();
	});
});


//###################################################
//#####                                        ######
//#####       HELPERS                          ######
//#####                                        ######
//###################################################


/**
 *	Show modal
 *
 *	@param  string strModal
 *	@return void
 */
function showModal(strModal){
	$(strModal).modal('show');
}

/**
 *	Show dropdown
 *
 *	@param  string strDropdown
 *	@return void
 */
function showDropdown(strDropdown){
	$(strDropdown).dropdown('toggle');
}

/**
 *	Trigger action button
 *
 *	@param  string strAction
 *	@return void
 */
function actvateActionButton(strAction){
	$(strAction).trigger('click');
}


//###################################################
//#####                                        ######
//#####       OPTIONS SETUP                    ######
//#####                                        ######
//###################################################


/**
 *	Options triggers
 *
 *	@param  none
 *	@return void
 */
var arrConfigs = [];
$(window).on('load', function(){
	arrConfigs = typeof arrOptions != "undefined" ? arrOptions : false;
	if( arrConfigs != false ){

		//shortcut
		if( arrConfigs.shortcut == false ){
			$('#navHelp').closest('.nav-item').remove();
			$('#modalHelp').remove();
		}

		//about
		if( arrConfigs.about == false ){
			$('#navAbout').closest('.nav-item').remove();
			$('#modalAbout').remove();
		}

		//sidebar closed
		if( arrConfigs.sidebar_closed == true ){
			$('body').addClass('sidebar-close');
			hideLeftMenu();
		}

		//sidebar flat
		arrConfigs.sidebar_flat == true ? $('.nav-sidebar, .control-sidebar').addClass('nav-flat') : false;

		//show fixed selections bar
		if( arrConfigs.selections == true ){
			$('#selections-bar').remove();
			$('.nav-selections').addClass('nav-selections-fixed');
			showSelectionsBar();
		}

		//remove bookmarks
		if( arrConfigs.bookmarks == false ){
			$('#dropdown-bookmark').closest('li').remove();
		}

		//enable to create bookmark
		if( arrConfigs.bookmarks == false || arrConfigs.new_bookmark == false ){
			$('#modalBookmark, #add-bookmark').remove();
		}

		//show action buttons
		if( arrConfigs.actions == false ){
			$('.content-header').find('.col-xl-6:not(:first)').remove();
			$('.content-header').find('.col-xl-6:first').addClass('col-12').removeClass('col-xl-6');
		}

		//enable export button
		arrConfigs.card_export == false ? $('.card-tools .btn-export').css('visibility', 'hidden') : false;

		//enable export button
		arrConfigs.card_maximize == false ? $('.card-tools .btn-maximize').css('visibility', 'hidden') : false;

		//qlik sense theme
		arrConfigs.qlik_theme == '' ? $('body').attr('data-theme', 'sense') : $('body').attr('data-theme', arrConfigs.qlik_theme );

		//qlik sense translate
		if( arrConfigs.translate == false ){
			//remove translate
			$('#dropdown-translate').closest('li').remove();
		}else{
			//get translate from url param
			const urlLang = new URLSearchParams( window.location.search );
			arrConfigs.qlik_lang = urlLang.get('lang') || arrConfigs.qlik_lang || 'en';
			$('body').attr( 'data-lang', arrConfigs.qlik_lang );
		}

		//preloader
		arrConfigs.preloader == false ? setTimeout( removePreloader ) : false;
	
		//fixed theme
		arrConfigs.fixed == true ? $('body').addClass('layout-navbar-fixed layout-fixed') : false;

		//theme options
		if( arrConfigs.theme_dark == true ){
			$('.preloader').addClass('bg-dark');
			$('.control-sidebar .btn').addClass('btn-dark');
		}else{
			$('.preloader').addClass('bg-light');
			$('.control-sidebar .btn').addClass('btn-light');
		}
 		if( ['light', 'white', 'orange', 'warning', 'yellow', 'lime'].includes( arrConfigs.theme_color ) ){
			$('.main-header').addClass('navbar-light');
 		}else{
			$('.main-header').addClass('navbar-dark');
 		}
		$('.main-header, .lds-facebook div').removeClassLike('bg-').addClass('bg-' + arrConfigs.theme_color);
		$('.main-sidebar').removeClassLike('sidebar-').addClass('sidebar-' + ( arrConfigs.theme_dark == true ? 'dark-' : 'light-' ) + arrConfigs.theme_color);
	}
});


//###################################################
//#####                                        ######
//#####       PRELOADER                        ######
//#####                                        ######
//###################################################


/**
 *	Finish preloader
 *	- used on first page load
 *
 *	@param  none
 *	@return void
 */
function finishPreloader(){
	$('body').addClass('loaded-objects').removeClass('hold-transition');
	$('#mainTabs .tab-pane:not(:first)').removeClass('active show');
	$('.control-sidebar .collapse:not(:first)').removeClass('show');
	$('.control-sidebar').removeAttr('style');
	$(".qvobject:visible:not(:empty)").closest('.card').addClass('card-loaded');
	$(".qvplaceholder, .qvobject:visible:empty").closest('.card').addClass('card-not-loaded');
	$('.preloader').fadeOut(500, removePreloader );
}

/**
 *	Count loaded qlik sense objects
 *
 *	@param  none
 *	@return integer
 */
function waitPreloader(){
	var intTotalObjects = $(".qvobject:visible").length;
	var intLoadedObjects = 0;

	//on error, hide loader and show message after 15 seconds
	var waitingCallback = setTimeout( function(){
		finishPreloader();
		clearInterval( countingObjects );
		var strErrorMessage = arrTexts != false ? arrTexts.msg_error_load_objects : 'Something went wrong and some objects were not loaded.';
		showToast( strErrorMessage, 500000 );
	}, 15000 );

	//wait until all objects are loaded
	var countingObjects = setInterval( function(){
		intLoadedObjects = $(".qvobject:visible:not(:empty)").length;
		if( intLoadedObjects == intTotalObjects ){
			finishPreloader();
			clearInterval( countingObjects );
			clearInterval( waitingCallback );
		}
	}, intTotalObjects * 120 );
}

/**
 *	Finish preloader
 *	- used on first page load
 *
 *	@param  none
 *	@return void
 */
function removePreloader(){
	$('.preloader').remove();
}

/**
 *	Preloader triggers
 *
 *	@param  none
 *	@return void
 */
$(window).on('load', function(){
	waitPreloader();
});


//###################################################
//#####                                        ######
//#####       SHORTCUTS SETUP                  ######
//#####                                        ######
//###################################################


/**
 *	Shortcuts triggers
 *
 *	@param  none
 *	@return void
 */
var arrShortcuts = [];
$(window).on('load', function(){

	arrShortcuts = typeof arrKeys != "undefined" ? arrKeys : false;

	if( arrShortcuts != false && arrConfigs.shortcut != false ){

		Object.keys(arrShortcuts).forEach(el => {
			$('[data-shortcut="'+ el +'"]').text( '[' + arrShortcuts[el] + ']' );
		});

		//shortcuts
		//$(window).initKeyboard({debug:1}) //development
		$(window).initKeyboard()
		.on( arrShortcuts.menu, toggleLeftMenu )
		.on( arrShortcuts.dashboard, function(){ showLeftMenuTab('#tabDashboard') })
		.on( arrShortcuts.analysis, function(){ showLeftMenuTab('#tabAnalysis') })
		.on( arrShortcuts.report, function(){ showLeftMenuTab('#tabReport') })
		.on( arrShortcuts.help, function(){ showModal('#modalHelp') })
		.on( arrShortcuts.about, function(){ showModal('#modalAbout') })
		.on( arrShortcuts.expand, toggleScreen )
		.on( arrShortcuts.bookmarks, function(){ showDropdown('#dropdown-bookmark') } )
		.on( arrShortcuts.translate, function(){ showDropdown('#dropdown-translate') } )
		.on( arrShortcuts.new_bookmark, function(){ showModal('#modalBookmark') } )
		.on( arrShortcuts.selections_bar, toggleSelectionsBar )
		.on( arrShortcuts.filter, toggleRightMenu )
		.on( arrShortcuts.backward, function(){ actvateActionButton('#action-backward') } )
		.on( arrShortcuts.forward, function(){ actvateActionButton('#action-forward') } )
		.on( arrShortcuts.lock, function(){ actvateActionButton('#action-lock') } )
		.on( arrShortcuts.unlock, function(){ actvateActionButton('#action-unlock') } )
		.on( arrShortcuts.clearall, function(){ actvateActionButton('#action-clearall') } )
		.on( arrShortcuts.close_chart, minimizeCard )
		.on( arrShortcuts.export_data, function(){ exportCard( $('body').find('.maximized-card') ) })
	}
});


//###################################################
//#####                                        ######
//#####       TEXT SETUP                       ######
//#####                                        ######
//###################################################


/**
 *	Texts triggers
 *
 *	@param  none
 *	@return void
 */
var arrTexts = [];
$(window).on('load', function(){

	arrTexts = typeof arrLabels != "undefined" ? arrLabels[arrConfigs.qlik_lang] : false;
	if( arrTexts != false ){
		Object.keys(arrTexts).forEach(el => {
			$('[data-text="'+ el +'"]').text( arrTexts[el] );
		});
	}

	//translate menu setup
	if( arrConfigs.translate != false ){
		var strMenuTranslate = '';
		Object.keys(arrLabels).forEach(el => {
			strMenuTranslate += '<a href="?lang=' + el + '" class="dropdown-item dropdown-language '+ ( arrConfigs.qlik_lang == el ? 'active' : '' ) +'" data-id="' + el + '">' + arrLabels[el].country + '</a>';
		});
		$('[data-widget="languagelist"]').html('').html( strMenuTranslate );
	}
});




//###################################################
//#####                                        ######
//#####       ICONS SETUP                      ######
//#####                                        ######
//###################################################


/**
 *	Icons triggers
 *
 *	@param  none
 *	@return void
 */
var arrIcons = [];
$(window).on('load', function(){
	arrIcons = typeof arrIcon != "undefined" ? arrIcon : false;
	if( arrIcons != false ){
		Object.keys(arrIcons).forEach(el => {
			$('[data-icon="'+ el +'"]').removeClassLike('fa').addClass( arrIcons[el] )
		});
	}
});