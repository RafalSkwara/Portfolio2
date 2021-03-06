$(document).ready(function(){
	//remove elements not needed on load
	$('.cv-download').hide();


	// make sure we know id screen is big or small.
	// It'll come in handy later
	// Adds and removes body class depending on screen width.
	function screenClass() {
	    if($(window).innerWidth() > 959) {
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
		var $offCv = $('.resume').offset().top;
		var $offHome = $('#home').offset().top;


		if($('body').hasClass('small-screen')){
			$('.nav-list').hide();
		}
		//add shrinking class to nav after scroll
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

		if(elScroll > 50 && elScroll < $offKontakt - 200) {
			$('.cv-download').fadeIn(200);
		} else {
			$('.cv-download').fadeOut(200);
		}

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


		

		$(function(){
		$(".text").typed({
			strings: ["let <span class='violet'>developer</span> =  <span class='white'>\u007B^400 </span>\n <span class='violet'>  firstName</span><span class='white'>:</span> <span class='green'>'Rafał'</span><span class='white'>,</span> \n <span class='violet'>  lastName</span><span class='white'>:</span> <span class='green'>'Skwara'</span><span class='white'>,</span> \n <span class='violet'>  skills</span><span class='white'>: {</span> \n   <span class='violet'>  HTML5</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  CSS3</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  JavaScript</span><span class='white'>:</span><span class='green'> 'good'</span><span class='white'>,</span> \n   <span class='violet'>  jQuery</span><span class='white'>:</span> true<span class='white'> \n   \u007D</span> \n <span class='violet'>  tools</span><span class='white'>: {</span> \n   <span class='violet'>  git</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  gulp</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  sass</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>  pugJade</span><span class='white'>:</span> true \n <span class='white'>  \u007D \n \u007D</span>  ", "hire(developer)<span class='white'>;</span>^1000"],
			typeSpeed: 2,
	    showCursor: true,
      cursorChar: "|",
      loop: true,
      loopCount: null,
      backSpeed: 30
		});
	});

}); // end ready