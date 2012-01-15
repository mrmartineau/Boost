

// Automatically calls all functions in FORMALIZE.init
jQuery(document).ready(function() {

	$("input,textarea").focus(function() {
		$(this).grandparent().addClass('focused');
	}).blur(function() {
		$(this).grandparent().removeClass('focused');
	});
});