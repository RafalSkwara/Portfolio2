$(document).ready(function(){function s(){$(window).innerWidth()>960?($("body").addClass("big-screen").removeClass("small-screen"),$(".nav-list").css("display","flex")):($("body").addClass("small-screen").removeClass("big-screen"),$(".nav-list").css("display","none"))}$("html, body").animate({scrollTop:0},500),s(),$(window).resize(function(){s()}),window.onscroll=function(){var s=document.body.scrollTop,a=document.documentElement.scrollTop,n=$(".content").offset().top,e=$("#o-mnie").offset().top,l=$("#umiejetnosci").offset().top,t=$("#portfolio").offset().top,p=$("#kontakt").offset().top;$("body").hasClass("small-screen")&&$(".nav-list").hide(),s>50||a>50?$("nav").addClass("nav-small"):$("nav").removeClass("nav-small"),s>n||a>=n?($("nav ul li").removeClass("active"),a>p?$("#link-kontakt").parent("li").addClass("active"):a>t?$("#link-portfolio").parent("li").addClass("active"):a>l?$("#link-umiejetnosci").parent("li").addClass("active"):a>e&&$("#link-o-mnie").parent("li").addClass("active")):($("nav ul li").removeClass("active"),$("#link-home").parent("li").addClass("active"))},$("#menu-toggle").click(function(){$(".nav-list").toggle()}),$(".link").click(function(s){s.preventDefault();var a=$(this).attr("id").slice(5);console.log(a),$("html, body").animate({scrollTop:$("#"+a).offset().top+1},500),$("body").hasClass("small-screen")&&$(".nav-list").toggle()}),$(".arrow").click(function(){$("html, body").animate({scrollTop:$("#o-mnie").offset().top+1},500)}),$(function(){$(".text").typed({strings:["var <span class='violet'>developer</span> =  <span class='white'>{^400 </span>\n <span class='violet'>firstName</span><span class='white'>:</span> <span class='green'>'Rafał'</span><span class='white'>,</span> \n <span class='violet'>lastName</span><span class='white'>:</span> <span class='green'>'Skwara'</span><span class='white'>,</span> \n <span class='violet'>skills</span><span class='white'>:</span> \n   <span class='violet'>HTML5</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>CSS3</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>JavaScript</span><span class='white'>:</span><span class='green'> 'basic'</span><span class='white'>,</span> \n   <span class='violet'>jQuery</span><span class='white'>:</span> true<span class='white'>,</span> \n <span class='violet'>tools</span><span class='white'>:</span> \n   <span class='violet'>git</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>gulp</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>sass</span><span class='white'>:</span> true<span class='white'>,</span> \n   <span class='violet'>pugJade</span><span class='white'>:</span> true \n <span class='white'>}</span>  ","hire(developer)<span class='white'>;</span>^1000"],typeSpeed:2,showCursor:!0,cursorChar:"|",loop:!0,loopCount:null,backSpeed:30})}),$(document).scrollTop(0)});