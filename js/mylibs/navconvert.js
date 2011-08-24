$(document).ready(function() {
	// Small screen nav conversion
	(function(win){
		var
		page		= $('body').attr('id'),
		$window		= $(win),
		$document	  = $(document),
			curr_page	= '',
			autoScroll	= false,
		// get the existing navigation
		$old_nav = $('#top nav > *'),
		// new var to reduce the number of times we have to find() the links
		$links	 = $old_nav.find('a'),
		// we don't need to create the markup yet
		$new_nav, $option, $optgroup
		// track what's showing
		showing	 = 'old',
		// predefine the trigger size
		trigger	 = 659,
		// we'll need a timer later
		timer		 = null;

		// don't execute this when on the reg page
		if ( page == 'register' ||
			 page == 'checkout' ||
			 page == 'thanks' ||
			 page == 'cancelled' )
		{
		  return;
		}

		// make sure the UL exists & it contains links
		if ( $old_nav.length &&
				 $links.length )
		{
			// now we can create the markup & assign event handlers
			$new_nav  = $('<select></select>');
			$option	  = $('<option>-- Navigation --</option>')
										.appendTo($new_nav);
			$optgroup = $('<optgroup></optgroup>');
			if ( window.location.toString().match(/\/events\/\d{4}\//) )
			{
			  $new_nav.append($optgroup.clone().attr('label','On This Page'));
			  $new_nav.append($optgroup.clone().attr('label','On This Site'));
			// event page
			  $links
						.each(function(){
							var $a = $(this);
							$option
								.clone()
								.attr( 'value', $a.attr('href') )
								.text( $a.text() )
								.appendTo( ( $a.parents('#main-nav').length > 0 ) ? $new_nav.find('optgroup[label$=Site]')
																				  : $new_nav.find('optgroup[label$=Page]') );
						});
			}
			else
			{
			  // other pages
			  $links
						.each(function(){
							var $a = $(this);
							$option
								.clone()
								.attr( 'value', $a.attr('href') )
								.text( $a.text() )
								.appendTo( $new_nav );
						});
			}
			$new_nav	=	$new_nav
										.wrap('<div id="mobile-nav"/>')
										.parent()
										.delegate('select', 'change', function(){
											var $this = $(this);
											if ( $this.val().indexOf('#') != -1 )
											{
												scrollToArticle( $this.val().replace(/(#)\/(.*)/,'$1$2') );
											}
											else
											{
												window.location = $this.val();
											}
										});
});