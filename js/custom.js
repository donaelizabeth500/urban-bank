(function($) {
	"use strict";
	


/*--Navigation--*/

 $('.resToggle').click(function(){
 $('.navbar').toggleClass('activenav');
  
});
/*--Submenu Toggle--*/
$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
    $(".navbar ul li").hover(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').slideDown('fast');
    }, 
      //when the cursor away 
    function () {
        $('ul', this).slideUp('fast');
    });
  
}); 

/*--Active Page Css--*/	
 	 $('.navbar ul li a').each(function(){
            if ($(this).prop('href') === window.location.href) {
                $(this).addClass('activenavlink'); 
				$(this).parents('li').addClass('activenavlink');
            }
        });
/*--Fixed Navigation--*/
$(window).scroll(function(){
	//if (($(window).scrollTop() >=1)&&($(this).width() > 767)) {
    if ($(window).scrollTop() >=1) {
       $('header').addClass('fixed-header');	   
    }
    else {
       $('header').removeClass('fixed-header');
	    
    }
}); 

 /* --Back To Top--*/
 $(document).ready(function() {
		var offset = 50;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
 
		$('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
	});	

	  

		
	//Latest News	
		 $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                loop: true,
				autoplay: true,
                margin: 30,
				dots: false,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 2,
                    nav: true
                  },
                  1000: {
                    items:2,
                    nav: true,
                    loop: true,
                    margin: 30
                  }
                }
              });
            });
			
	//Counting Numbers		
			
			$('.count_num').each(function () {

	// Start the counting from a specified number - in this case, 0!
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
    	// Speed of counter in ms, default animation style
        duration: 5000,
        easing: 'swing',
        step: function (now) {
        	// Round up the number
            $(this).text(Math.ceil(now));
        }
    });
});	
	
	
/*--PopUp--*/

$(document).ready(function() {
	
			setTimeout(function(){ 
				loadPopup(); 
			}, 500); 
	
	$("div.close").click(function() {
		disablePopup();  
	});	
	/*$("body").click(function() {
		disablePopup();  
	});	*/
		var popupStatus = 0; 
	
	function loadPopup() { 
		if(popupStatus === 0) { 
			
			$("#Popup").fadeIn(500); 
			$("#backgroundPopup").css("opacity", "0.7"); 
			$("#backgroundPopup").fadeIn(1); 
			popupStatus = 1; 
		}	
	}
		function disablePopup() {
		if(popupStatus === 1) { 
			$("#Popup").fadeOut("normal");  
			$("#backgroundPopup").fadeOut("normal");  
			popupStatus = 0; 
		}
	}
		
	});


})(jQuery);


	