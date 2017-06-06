$(document).ready(function(){
	$('html, body').animate({
			scrollTop: 0
	}, 500); // scroll to the top of the page after load



	$("nav ul li").on("click", function(){
		$("nav ul li").removeClass("active");
		$(this).addClass("active");
	});


	window.onscroll = function() {
		var bodyScroll = document.body.scrollTop;
		var elScroll = document.documentElement.scrollTop
		var $contentOffset = $('.content').offset().top;
		var $offOMnie = $('#o-mnie').offset().top;
		var $offUmiejetnosci = $('#umiejetnosci').offset().top;
		var $offPortfolio = $('#portfolio').offset().top;
		var $offKontakt = $('#kontakt').offset().top;

		//add chrinking class to nav after scroll
		if(bodyScroll > 50 || elScroll > 50) {
			$('nav').addClass('nav-small');
		} else {
			$('nav').removeClass('nav-small');
		}


		// scrollspy logic
		// for nav links
		if(bodyScroll > $contentOffset || elScroll >= $contentOffset) {
			console.log(elScroll);
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
		
		// nav scroll logic 
		// when nav links are clicked
		$('.link').click(function(event){
			event.preventDefault();
			var newClass = $(this).attr('id').slice(5);
			console.log(newClass);
			if(newClass == 'home') {
				$('html, body').animate({
				scrollTop: 0
			}, 500);
			} else {
				$('html, body').animate({
					scrollTop: $('#' + newClass).offset().top + 1
					}, 300);
			} //end if
			
		}); //end click
}); // end ready