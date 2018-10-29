// Sticky v1.0 by Daniel Raftery
// http://thrivingkings.com/sticky
//
// http://twitter.com/ThrivingKings

(function($) {

	// Using it without an object
	$.sticky = function(note, options, callback) {
		return $.fn.sticky(note, options, callback);
	};

	$.fn.sticky = function(note, options, callback) {
		// Default settings
		var position = 'bottom-right';
		// top-left, top-right, bottom-left, or bottom-right

		var settings = {
			'speed' : 'slow', // animations: fast, slow, or integer
			'duplicates' : false, // true or false
			'autoclose' : 8000 // integer or false
		};

		// Passing in the object instead of specifying a note
		if (!note) {
			note = this.html();
		}

		if (options) {
			$.extend(settings, options);
		}

		// Variables
		var display = true;
		var duplicate = 'no';

		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random() * 90000);

		// Handling duplicate notes and IDs
		$('.sticky-note').each(function() {
			if ($(this).html() == note && $(this).is(':visible')) {
				duplicate = 'no';
				if (!settings['duplicates']) {
					display = false;
				}
			}
			if ($(this).attr('id') == uniqID) {
				uniqID = Math.floor(Math.random() * 9000099);
			}
		});

		// Make sure the sticky queue exists
		if (!$('body').find('.sticky-queue').html()) {
			$('body').append('<div class="sticky-queue ' + position + '"></div>');
		}

		// Can it be displayed?
		if (display) {
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="http://i.imgur.com/xQYwykY.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');

			// Smoother animation

			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
		}

		// Listeners
		$('.sticky').ready(function() {
			// If 'autoclose' is enabled, set a timer to close the sticky
			if (settings['autoclose']) {
				$('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']);
			}
		});
		// Closing a sticky
		$('.sticky-close').click(function() {
			$('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']);
		});

		// Callback data
		var response = {
			'id' : uniqID,
			'duplicate' : duplicate,
			'displayed' : display,
			'position' : position
		}

		// Callback function?
		if (callback) {
			callback(response);
		} else {
			return (response);
		}

	}
})(jQuery);

function X00Random(X00Minimum, X00Maximum) {
  return Math.floor((Math.random() * X00Maximum) + X00Minimum);
}

$(document).ready(function() {
	$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/> '+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
    
	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/16/Canada-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 5000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Belgium-Flag-icon.png"/> '+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 7000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Chile-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 8000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Australia-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 9000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/United-States-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 11000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Mexico-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 13000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/flag-2/16/Argentina-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 15000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 16000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/United-States-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 18000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/United-States-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/United-States-Flag-icon.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 19000);

	var callnotification = function() {
		$.sticky('<b><img src="https://cdn3.iconfinder.com/data/icons/finalflags/16/France-Flag.png"/>'+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 21000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Belgium-Flag-icon.png"/> '+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 22000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/Netherlands-Flag-icon.png"/> '+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 24000);

	var callnotification = function() {
		$.sticky('<b><img src="http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/16/United-Kingdom-flag-icon.png"/> '+ ' '+X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + '.' + X00Random(1, 255) + ' Ha Hackeado '+X00Random(1, 10)+' dispositivos</b>');
	}
	setInterval(callnotification, 25000);

}); 