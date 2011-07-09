if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
if (viewportmeta) {
viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
document.body.addEventListener('gesturestart', function() {
viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
}, false);
}
}

/* Declare a namespace for the site */
var Site = window.Site || {};

/* Create a closure to maintain scope of the '$'
   and remain compatible with other frameworks.	 */
(function($) {

	//same as $(document).ready();
	$(function() {

		// TABS from Skeleton (with my own ARIA sauce added)
		//	<ul class="group tabs">
		//		<li>
		//			<a href="#tab_1" class="active">Tab 1</a>
		//		</li>
		//		<li>
		//			<a href="#tab_2">Tab 2</a>
		//		</li>
		//	</ul>
		//	<ul class="tabs_content ui_list">
		//		<li id="tab_1" class="active">
		//			<h3>Tab 1 content</h3>
		//			<p>Pellentesque</p>
		//		</li>
		//		<li id="tab_2">
		//			<h3>Tab 2 content</h3>
		//			<p>Lorem ipsum</li>
		//	</ul>
		var tabs = $('ul.tabs');
		
		tabs.each(function (i) {
			//Get all tabs
			var tab = $(this).find('> li > a');
			tab.each(function (i) {
				var tabid = $(this).attr('href'),
					newTabid = tabid.slice(1);
				if (tabid.charAt(0) === '#') {
					$('#' + newTabid).each(function (i) {
						$(this).attr('aria-labelledby', newTabid + '_tab');
					});
		
					$(this).attr({
						role: 'tab',
						id: newTabid + '_tab'
					}).attr('aria-describedby', newTabid);
				}
		
			}).click(function (e) {
				var contentLocation = $(this).attr('href');
				if (contentLocation.charAt(0) === "#") {
					e.preventDefault();
					tab.removeClass('active');
					$(this).addClass('active');
					$(contentLocation).show()
						.attr('role', 'aria-selected')
						.addClass('active')
						.siblings()
						.attr('role', 'aria-hidden')
						.hide()
						.removeClass('active');
				}
			});
		}); //END TABS


	});//End Doc Ready


	$(window).bind("load", function() {



	});

})(jQuery);