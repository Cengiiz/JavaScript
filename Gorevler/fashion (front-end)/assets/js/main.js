function CC_noErrors() {
return true;
}
window.onerror = CC_noErrors;

$(document).ready(function(){
	$("#mobileMenu").click(function(){
		$(".moblieNav").toggleClass("activeMobileNav");
		if($(".moblieNav").hasClass("activeMobileNav")){
			$("#mobileMenu").html("X");
		}else{
			$("#mobileMenu").html('<i class="fas fa-bars"></i>');
		}
	});
	$(".searhBtn").click(function(){
		$(".searcCon").toggleClass("activeSearchArea");
	});
	$('#sliderCarousel').owlCarousel({
	    center: true,
	    items:1,
	    loop:false,
	    margin:10,
	    dots:false,
	    nav: true,
	    autoplay: false,
	    URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
	    responsive:{
	        0:{
	            items:2
	        }
	    }
	});
	$(".owl-next span").html('<i class="far fa-long-arrow-right"></i>');

	$(".mobileCategryFilterBtn").click(function(){
		$(".categoriesFilterBox").slideToggle();
	});
	for(let i = 0; i < $(".prductRemove label").length; i++){
		$($(".prductRemoveBtn")[i]).click(function(){
			$($(".productBox")[i]).fadeOut();
		});
	
	};
	$('#recentNewsOwl').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        }
	    }
	});
	$('#recennOwlRight').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        }
	    }
	});
});
document.addEventListener("DOMContentLoaded",function(){
	document.querySelector('.scroll').addEventListener('click', function (e) {
	    e.preventDefault();

	    document.querySelector(this.getAttribute('href')).scrollIntoView({
	        behavior: 'smooth'
	    });
	});
	$(".prductRemove label").click()
});
	


var slideLeft = {
    distance: '25%',
    origin: 'left',
    opacity: 0,
    reset: false
};
var slideRight = {
    distance: '25%',
    origin: 'right',
    opacity: 0,
    reset: false
};
var slideBottom = {
    distance: '25%',
    origin: 'bottom',
    opacity: 0,
    reset: false
};
if(window.innerWidth <= 800){
		var slideLeft = {
	    distance: '25%',
	    origin: 'bottom',
	    opacity: 0,
	    reset: false
	};
	var slideRight = {
	    distance: '25%',
	    origin: 'bottom',
	    opacity: 0,
	    reset: false
	};
}
ScrollReveal().reveal('.leftRe', slideLeft);
ScrollReveal().reveal('.rightRe', slideRight);
ScrollReveal().reveal('.bottomRe', slideBottom);

document.addEventListener("DOMContentLoaded",function(){
	window.addEventListener("scroll",function(){
		var header2 = document.querySelector(".header2");
		header2.classList.toggle("fixedHeader2", scrollY > 1);
	});
});


var productCountInput = document.querySelector(".prductCount input");


function increase(){
	productCountInput.value = eval(productCountInput.value) + 1;
}
function decrease(){
	productCountInput.value = eval(productCountInput.value) - 1;
	if(productCountInput.value <= 0){
		productCountInput.value = 0;
	}
}

