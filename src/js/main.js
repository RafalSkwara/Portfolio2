$(document).ready(function(){
	// $('html, body').animate({
	// 		scrollTop: 0
	// }, 500); // scroll to the top of the page after load


	// make sure we know id screen is big or small.
	// It'll come in handy later
	// Adds and removes body class depending on screen width.
	function screenClass() {
	    if($(window).innerWidth() > 960) {
	        $('body').addClass('big-screen').removeClass('small-screen');
	        $('.nav-list').css('display','flex');
	    } else {
	        $('body').addClass('small-screen').removeClass('big-screen');
	        $('.nav-list').css('display','none');
	    }
	}

	// Fire.
	screenClass();

	// And recheck when window gets resized.
	$(window).resize(function(){
	    screenClass();
	});


	window.onscroll = function() {
		var bodyScroll = document.body.scrollTop;
		var elScroll = document.documentElement.scrollTop;
		var $contentOffset = $('.content').offset().top;
		var $offOMnie = $('#o-mnie').offset().top;
		var $offUmiejetnosci = $('#umiejetnosci').offset().top;
		var $offPortfolio = $('#portfolio').offset().top;
		var $offKontakt = $('#kontakt').offset().top;


		if($('body').hasClass('small-screen')){
			$('.nav-list').hide();
		}
		//add chrinking class to nav after scroll
		if(bodyScroll > 50 || elScroll > 50) {
			$('nav').addClass('nav-small');
		} else {
			$('nav').removeClass('nav-small');
		}


		// scrollspy logic
		// for nav links
		if(bodyScroll > $contentOffset || elScroll >= $contentOffset) {
			$("nav ul li").removeClass("active");

			if(elScroll > $offKontakt){
				$('#link-kontakt').parent('li').addClass("active");
			} else if (elScroll > $offPortfolio) {
				$('#link-portfolio').parent('li').addClass("active");
			} else if (elScroll > $offUmiejetnosci) {
				$('#link-umiejetnosci').parent('li').addClass("active");
			} else if (elScroll > $offOMnie) {
				$('#link-o-mnie').parent('li').addClass("active");
			}//end inner if else
		} else {
			$("nav ul li").removeClass("active");
			$('#link-home').parent('li').addClass("active");
		}//end outer if
	}; // end onscroll
		

		// let menu-toggle toggle the menu :)
		$('#menu-toggle').click(function(){
			$('.nav-list').toggle();
		});

		//click logic for nav items
		$('.link').click(function(e){
			e.preventDefault();
			var newClass = $(this).attr('id').slice(5);
			console.log(newClass);
			$('html, body').animate({scrollTop: $('#'+newClass).offset().top+1} ,500);
			if ($('body').hasClass('small-screen')){
				$('.nav-list').toggle();
			}
		});
		$('.arrow').click(function(){
			$('html, body').animate({scrollTop: $('#o-mnie').offset().top+1} ,500);
		})


		
		
}); // end ready