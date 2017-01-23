/*!
 * jQuery QR
 *
 * Written by sizeof(cat) <sizeofcat AT riseup DOT net>
 * Licensed under the MIT license
 * Version 2.0.0
 *
 */
(function ($) {
	$.fn.extend({
		catQR: function (parameters) {
			var default_settings = {
				base_url: 'http://chart.apis.google.com/chart?cht=qr&chs=',
				size: 230,
				create: false,
				number: null,
				email: null,
				subject: null,
				latitude: null,
				longitude: null,
				address: null,
				name: null,
				url: null,
				alt: 'QR code',
				note: null,
				encoding: 'UTF-8',
				type: 'text',
				text: 'Welcome to jQuery QR'
			};
			var settings = $.extend(default_settings, parameters);
			return this.each(function () {
				var url = settings.base_url + settings.size + 'x' + settings.size + '&choe=' + settings.encoding + '&chl=';
				switch (settings.type) {
					case 'contact':
						url = url + 'MECARD:N:' + settings.name + ';TEL:' + settings.number +';URL:' + settings.url +';EMAIL:' + settings.email + ';ADR:' + settings.address + ';NOTE:' + settings.note + ';';
						break;
					case 'wifi':
						url = url + 'WIFI:S:' + settings.ssid + ';T:' + settings.auth + ';P:' + settings.password +';';
						break;
					case 'location':
						url = url + 'geo:' + settings.latitude + ',' + settings.longitude;
						break;
					case 'call':
						url = url + 'tel:' + settings.number;
						break;
					case 'email':
						url = url + 'mailto:' + settings.email + ':' + settings.subject +':' + settings.text;
						break;
					case 'sms':
						url = url + 'smsto:' +  settings.number + ':' + settings.text;
						break;
					case 'url':
						url = url + settings.url;
						break;
					case 'text':
					default:
						url = url + settings.text;
						break;
				}
				if (settings.create) {
					$(this).append('<img src="' + url + '" alt="' + settings.alt + '" />');
				}
				else {
					$(this).attr('src', url);
				}
			});
		}
	});
})(jQuery);
