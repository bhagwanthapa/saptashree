$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});



$(function(){
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
            //On Complete, we reset all active dropdown classes and attributes
            //This fixes the visual bug associated with the open class being removed too fast
            $('.dropdown').removeClass('open');
            $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
        });
    });
});



// Add hover effect to menus
jQuery('ul.nav li.dropdown').hover(function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn();
  }, function() {
	jQuery(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut();
  });


  
  //Full page Search

  $(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
 
});


//Smooth Scrolling

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#carousel-example"]')
//   .not('[href="#recent-notices"]')
//   .not('[href="#upcoming-events"]')
// //   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       &&
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top-45
//         }, 800, function() {
//             // Code for focus
//
//         });
//       }
//     }
//   });

//
// //Sticky nav
//   // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};
//
// // Get the navbar
// var navbar = document.getElementById("navbar");
//
// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;
//
// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 37 ) {
        $('.navbar').addClass('sticky');
    }
    if ($(window).scrollTop() < 38) {
        $('.navbar').removeClass('sticky');
    }
});




$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});




