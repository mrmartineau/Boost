// Create a closure to maintain scope of the '$' and remain compatible with other frameworks.
(function($) {

	//same as $(document).ready();
	$(function() {

		///
		// TABS: from Skeleton framework
		///

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
		$('body').on('click', 'ul.tabs > li > a', function(e) {
		//Get Location of tab's content
		var contentLocation = $(this).attr('href');

		//Let go if not a hashed one
		if(contentLocation.charAt(0)=="#") {

			e.preventDefault();

			//Make Tab Active
			$(this).parent().siblings().children('a').removeClass('active');
			$(this).addClass('active');

			//Show Tab Content & add active class
			$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

		}

		///
		// Fancybox: fancybox.net
		///

		//	$("a.lightbox").fancybox({
		//		//closeBtn : false,
		//		loop : true,
		//		//closeClick: true,
		//		openEffect : 'fade',
		//		closeEffect : 'fade',
		//		nextEffect : 'fade',
		//		prevEffect : 'fade',
		//		nextSpeed : 'fast',
		//		prevSpeed : 'fast',
		//		helpers: {
		//			overlay: {
		//				opacity: 0.15,
		//				css: {
		//					cursor: 'pointer',
		//					'background-color': '#000000'
		//				}
		//			}
		//		}
		//	});




	});//End Doc Ready


	$(window).bind("load", function() {



	});

})(jQuery);