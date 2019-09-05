var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
var header = function(){
    var windowWidth = $(window).width();   
    var headerHeight = $('header').height(); 
    if(windowWidth>575) {
        $('main').css({
            'padding-top' : headerHeight
        });
    } else {
        $('main').css({
            'padding-top' : 0
        });
    }  
}
$(function(){
    var theme = getUrlParameter('theme');   
    if((theme>0)&&(theme<7)) {
        $('#theme').attr('href', 'assets/css/template-'+theme+'.min.css');
        $('.logo').attr('src','assets/img/template-1/logo-'+theme+'.png')
    } else {
        $('#theme').attr('href', 'assets/css/template-1.min.css');
        $('.logo').attr('src','assets/img/template-1/logo-.png')
    }
    if($('.swal-qoute').length!=0){
        $('.swal-qoute').click(function(){
            swal({
                title: "Sent!",             
                text: "Enquiry sent successfully.",
                icon: "success",
                button: "Okay",
            });
        })
    }
    header();
    $('#menu_area a').click(function(e){        
        e.preventDefault();
        header(); 
        var id = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 110
        }, 500);
    })
    if($('a[href="#"]').length!=0){
        $('a[href="#"]').each(function(){
            $(this).attr('href','javascript:void(0)')
        })
    }    
    if($('.owl-carousel.owl-carousel-slider-products').length!=0){
        $('.owl-carousel.owl-carousel-slider-products').owlCarousel({
            items: 5,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            responsive : {                    
                0 : {
                    items: 1,
                },                    
                420 : {
                    items: 2,
                },                    
                590 : {
                    items: 3,
                },                    
                830 : {
                    items: 4,
                },                    
                1300 : {
                    items: 5
                }
            }
        });
    }  

    if($('.owl-carousel.deal-of-day-slider-products').length!=0){
        $('.owl-carousel.deal-of-day-slider-products').owlCarousel({
            items: 5,
            dots: false,
            margin: 15,
            nav: true,
            stagePadding: 10,
            navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            responsive : {                    
                0 : {
                    items: 1,
                },                    
                620 : {
                    items: 2,
                },                    
                768 : {
                    items: 2,
                },                    
                991 : {
                    items: 3,
                },                    
                1300 : {
                    items: 4
                }
            }
        });
    }  
    $('.op-card').each(function(){
        $(this).mouseenter(function(){
            $(this).carousel('dispose');
            $(this).carousel({
                interval: 400
              })
        });
        $(this).mouseleave(function(){
            $(this).carousel('pause');           
        })
    });
    $('.play-video').click(function(){
        var s = $(this).data('src');
        var h = '<video controls class="modal-video"><source src="'+s+'" type="video/mp4"></source></video>';
        $('.modal-video-body').html(h);
        $('#modalvideo').modal('show');
    });    
    $('#modalvideo').on('hide.bs.modal', function (e) {
        $('.modal-video').remove()
      });
    $('.xbtn-fvrt').click(function(){
          $(this).toggleClass('active')
    });             
    $('[data-tt]').each(function(){
        var t = $(this).attr('title');
        var h = '<span data-tt-inner>'+t+'</span>';
        $(this).removeAttr('title');
        $(this).append(h)
    });
    $('.x-file input[type="file"]').change(function(e){
        var defaultHtml = $(this).parents('.x-file').find('span').html();
        $(this).parents('.x-file').find('span').attr('data-dtitle', defaultHtml)
        var fileName = e.target.files[0].name;
        $(this).parents('.x-file').find('span').html(fileName)        
    });  
});
$(window).resize(function() { 
    header();           
});



(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)
