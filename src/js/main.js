$(document).ready(function(){
	$(window).resize(function(){
		var $navigation = $('ul.nav.navbar-nav');
		var $windowWidth = $( window ).width();
		if ($windowWidth <= 768) {
			$navigation.removeClass('pull-right');

		} else{
			if(!$navigation.hasClass('pull-right')) {
				$navigation.addClass('pull-right');
			} //end inner if
		} // end outer if
	}); // end resize

	
}); // end ready