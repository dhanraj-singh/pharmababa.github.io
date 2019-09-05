$(function() {
    if($('a[href="#"]').length!=0) {
        $('a[href="#"]').each(function() {
            $(this).attr('href', 'javascript:void(0)')
        });   
    }    
    if($('#filterOpen').length!=0) {
    $('#filterOpen').click(function(){
        $('#filterPanel').addClass('on');
        $('html,body').addClass('oh')
    });    
}
if($('#filterClose').length!=0) {
    $('#filterClose').click(function(){
        $('#filterPanel').removeClass('on');
        $('html,body').removeClass('oh')
    }); 
}
if($('.view-toggle').length!=0) {
    $('.view-toggle a').click(function(e){
        e.preventDefault();
        $('.view-toggle').find('a').removeClass('active');
        $(this).addClass('active');
        var v = $(this).attr('href');
        v = v.substring(1, v.length)
        $('#productView').removeAttr('data-view').attr('data-view', v)
    });
    $('.view-toggle').each(function(){        
        var v = $('.view-toggle').find('a.active').attr('href');
        v = v.substring(1, v.length)
        $('#productView').removeAttr('data-view').attr('data-view', v)
    });
}
    if($('[data-tt]').length!=0){   
        $('[data-tt]').each(function() {
            var title = $(this).attr('title');
            $(this).removeAttr('title');
            $(this).append('<span class="data-tt-tooltip">' + title + '</span>')
        });
    }
    if($('.banner-slider').length!=0){
        $('.banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            draggable: false,

        });
    }
    if($('.product-slider-1').length!=0){
    $('.product-slider-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,               
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    }
    if($('.related-led-slider').length!=0){
        $('.related-led-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            draggable: true,
            dots: false,
            arrows: false,
            infinite: true,
            speed: 700,
            autoplay: true, 
            autoplaySpeed: 700,              
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        })
    }
    var sliderChange = function(name) {                
        $('.'+name).on('afterChange', function(event, slick, currentSlide){          
        var start = $(this).find('.slick-slide').first();
        var end = $(this).find('.slick-slide').last();
        if(end.hasClass('slick-active')) 
            {
                $('.next-product[data-slider="'+name+'"]').addClass('disable')
            } else {
                $('.next-product[data-slider="'+name+'"]').removeClass('disable')
            }
        if(start.hasClass('slick-active')) 
            {
                $('.prev-product[data-slider="'+name+'"]').addClass('disable')
            } else {
                $('.prev-product[data-slider="'+name+'"]').removeClass('disable')
            }
    });
    }
    sliderChange('product-slider-1');
    sliderChange('product-slider-2');
    sliderChange('product-slider-3');
    sliderChange('tps-slider');
    if($('.product-slider-2').length!=0){
    $('.product-slider-2').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}
if($('.product-slider-3').length!=0){
    $('.product-slider-3').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}
if($('.product-count-down .inner-pcd-box.s').length!=0){
    $('.product-count-down .inner-pcd-box.s').each(function() {
        var y = $(this);
        var t = $(this).text();
        setInterval(function() {
            if (t != 0) {
                t--;
                if (t < 10) {
                    y.text('0' + t);
                } else {
                    y.text(t);
                }

            }
        }, 1000);
    });
}
if($('.testimonial-slider-init').length!=0){
    $('.testimonial-slider-init').slick({
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: false,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}
if($('.client-slider').length!=0){
    $('.client-slider').slick({
        slidesToShow: 6,
        pauseOnHover: false,
        slidesToScroll: 1,
        draggable: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: 'linear',
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });   
}
if($('.prev-product').length!=0){
    $('.prev-product').click(function() {
        var slide = $(this).data('slider');
        $('.' + slide).slick('slickPrev');
    });
}
    $('.next-product').click(function() {
        var slide = $(this).data('slider');
        $('.' + slide).slick('slickNext');
    });
    $('.email-aside-toggle').click(function() {
        $('.email-aside').toggleClass('on')
    });
    $('.date input').each(function() {
        $(this).datepicker();
    });   
    $('.go-to-top span').click(function(){
            $('html, body').animate({
                    scrollTop: 0
            }, 1000);
    }); 
    $('.product-details-tabs a').click(function(e){
            e.preventDefault();
            var href = $(this).attr('href');
            var id = href.substring(1, href.length);    
            $('.product-details-tabs a').removeClass('active');
            $('.product-details-tabs a[href="#'+id+'"]').addClass('active');
            $('.product-details-tabs-content').hide();
            $('.product-details-tabs-content[id="'+id+'"]').fadeIn('100');
    });
    $('.product-details-tabs a.active').each(function(){    
            var href = $(this).attr('href');
            var id = href.substring(1, href.length);    
            $('.product-details-tabs a').removeClass('active');
            $('.product-details-tabs a[href="#'+id+'"]').addClass('active');
            $('.product-details-tabs-content').hide();
            $('.product-details-tabs-content[id="'+id+'"]').fadeIn('100');
    });
   

    if ($('#share_news').length > 0) { 
      $("#share_social").hide();
        $('#share_news').on('click', function(event) {   
            $('#share_social').delay(75).slideToggle('show');
        });
    }

    if($('.product-btns').length!=0) {
        $('.product-btns a').each(function() {    
           $(this).click(function(e) {    
           e.preventDefault();
           var dataid = $(this).attr('href');               
              $('html, body').animate({
                    scrollTop: $(dataid).offset().top - 153
              }, 10);
           $('.product-btns a').removeClass('active');
           $(this).addClass('active');
        });
     });
     }

    if ($('#pb-steps').length > 0) { 
        $('#step1').on('click', function(event) { 
            $('#pb-steps').find('.active_step').removeClass('active_step');
            $(this).addClass('active_step');
        });
        $('#step2').on('click', function(event) {   
            $(this).addClass('active_step');
            $('#step1').addClass('active_step');
            $('#step3').removeClass('active_step');
        });
        $('#step3').on('click', function(event) {   
            $('#step1, #step2, #step3 ').addClass('active_step');
        });
    }
    
    $('.product-details-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.product-details-thumb-slider',
        cssEase: 'linear',
        fade: true,
        draggable: false
    });
    $('.product-details-thumb-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.product-details-slider',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        draggable: false
    });
    $('.pb-rating').each(function(){
        var rating = parseFloat($(this).data('rating'));
        var total =  parseFloat($(this).data('total'));
        var width =  parseFloat($(this).data('width'));
        var w = ((rating/total)*100);
        $(this).css({'width':width, 'height': (width/5.62)}).attr('title',rating+'/'+total).append('<i style="width: '+w+'%"></i>');
    });
    // $('.pb-modal-open').click(function(){
    //     $('body').addClass('oh');      
    //     var modal = $(this).data('modal');
    //     $('#'+modal).addClass('on')        
    // });
    $('.pb-modal-open').each(function(){
        $(this).click(function(){
            $('body').addClass('oh');      
            var modal = $(this).data('modal');
            $('#'+modal).addClass('on');
            $('html,body').addClass('oh')        
        });   
    });
    $('.plc-wish').click(function(){
        $(this).toggleClass('active')
    });   
    $('.product-details-slider img:not(.isVideo)').imagezoomsl({
        magnifiersize: [300,200],
        zoomrange: [3,3]        
    });
    $('.pb-btn-social-toggle').click(function(){
        $(this).parents('.pb-share').toggleClass('on')
    });
    $('.pb-enquiry-file input[type="file"]').change(function(e){
        var defaultHtml = $(this).parents('.pb-enquiry-file').find('span').html();
        $(this).parents('.pb-enquiry-file').find('span').attr('data-dtitle', defaultHtml)
        var fileName = e.target.files[0].name;
        $(this).parents('.pb-enquiry-file').find('span').html(fileName)        
    });    
     $('.category-input').click(function(){                   
        if($('.category-dropdown').hasClass('on')) {
           closeCat()
        } else {
           openCat()
        }                
     });   
     var cdi = 0;
     $('.category-dropdown label.pb-checkbox').each(function(){
        cdi++;
        $(this).find('input').attr('data-cdi', 'cdi_'+cdi)
     })
     $('.category-input').keyup(function(){
        var v = $(this).val().toLowerCase();;      
           $(".category-dropdown label").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(v) > -1)
              $('.category-dropdown').addClass('on');
              $('.category-form-group').addClass('on')
           });          
     });
     $('.category-dropdown input[type="checkbox"]').change(function(){         
        copyInputs();
     });
     $(document).on('change','.selected-category-list input[type="checkbox"]',function(){
        var cdi_remove = $(this).data('cdi');
        if($(this).prop('checked')!=true) { 
           $(this).parents('li').remove();
           $('.category-dropdown input[data-cdi="'+cdi_remove+'"]').prop('checked', false)
        }      
     });
     $('.category-dropdown .category-dropdown-ul>li>label>input').change(function(){         
        if($(this).prop('checked')==true) { 
           $(this).parents('li').find('input').prop('checked', true);
           copyInputs();
        } 
     });
     $('.reset-filter').click(function(){
         $('#filterPanel').find('input').prop('checked', false);
         copyInputs();
     });    
    $(document).on('click','.add-enquiry-row',function(e){
        e.preventDefault();      
        var h = '<div class="enquiry-fields-row">\
                    <div class="enquiry-fields-col"><label>Product Name *</label><input type="text" class="form-control pb-form-control"></div>\
                    <div class="enquiry-fields-col"><label>Product Specification</label><input type="text" class="form-control pb-form-control"></div>\
                    <div class="enquiry-fields-col"><label>Category *</label><select class="form-control pb-form-control"><option>-- Select --</option></select></div>\
                    <div class="enquiry-fields-col"><label>Estimate Qty. *</label><input type="text" class="form-control pb-form-control"></div>\
                    <div class="enquiry-fields-col"><label>Unit *</label><input type="text" class="form-control pb-form-control"></div>\
                    <div class="enquiry-fields-col"><label>Supplier</label><select class="form-control pb-form-control"><option>-- Select --</option></select></div>\
                    <div class="enquiry-fields-col"><label>Business Type</label><select class="form-control pb-form-control"><option>-- Select --</option></select></div>\
                    <div class="enquiry-fields-col"><label>&nbsp;</label><a href="#" class="pb-btn pb-btn-danger pb-btn-block remove-enquiry-row"><i class="fa fa-close"></i> </a></div>\
                </div>';
        $('.enquiry-fields').append(h)
    });
    $(document).on('click','.remove-enquiry-row',function(e){
        e.preventDefault();
        $(this).parents('.enquiry-fields-row').remove();
    });
    $('.looking-supplier input').change(function(){
        var v = $('input[name="supplier"]:checked').val();        
        $('.input-toggle').attr('data-input', v).find('input').prop('disabled', false)
    });
    $('.pdf-btn').click(function(e){
        e.preventDefault();
        var pdf = $(this).attr('href');
        $('#pdf-container iframe').attr('src', 'assets/plugins/pdf/web/viewer.html?file=../../../../'+pdf);
        $('#pdf-container').slideDown('100')
    });
    $(document).ready(function(){
        $('.lightgallery').find('img').each(function(){
            var s = $(this).attr('src');
            $(this).parent('a').attr('href',s)
        })
        $('.lightgallery').lightGallery();
    });
 
    $('.year-generator').each(function(){
        var mn = $(this).data('min');
        var mx = $(this).data('max');      
        for(var i=mn; i<=mx; i++) {
            $(this).append('<option value="'+i+'">'+i+'</option>');
        }
    });
    $('.country-dd').each(function(){
        var countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Korea", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
        var t = $(this);
        $.each(countries,function(i,v){
            $(t).append('<option value="'+v+'">'+v+'</option>')
        })
    });
    // $('.promo-carousel').grouploop({
    //     forward: false,
    //     velocity: 1,
    // });
    var owl = $(".owl-carousel.owl-carousel-news");
    owl.owlCarousel({
        autoWidth: true,
        dots: false,        
        autoplay: true,
        loop: true,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY<0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });   
    if($('.owl-carousel.owl-carousel-fvrt').length!=0){
        $(".owl-carousel.owl-carousel-fvrt").each(function(){
            $(this).owlCarousel({
                items: 1,
                dots: false,
                nav: true,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
            });
            
        })    
    }    
    
    $(document).on('click','.seller-video span',function(){
        var s = $(this).data('src');      
         $('html,body').addClass('oh')     
         $('#modalmediashow').addClass('on');
         $('#modalVideo').html('<video controls><source src="'+s+'" type="video/mp4"></video>')
     });
     $(document).on('focus','.mpb-input input', function(){
         $(this).parents('.mpb-input').addClass('focused')         
     })
     $(document).on('click','.mpb-select select', function(){
         $(this).parents('.mpb-select').addClass('focused')         
     })
     $(document).on('blur','.mpb-select select', function(){
        if(($(this).val().trim()=='') || ($(this).val()==undefined) || ($(this).val()=='0')){
            $(this).parents('.mpb-select').removeClass('focused')
        }      
     })
     $(document).on('blur','.mpb-input input', function(){      
         if($(this).val().trim()==''){
             $(this).parents('.mpb-input').removeClass('focused')
         }
     });
     $(document).on('click','[data-login="open"]', function(e){
         e.preventDefault();
         $('html').addClass('login-popup-enabled')
     });
     $(document).on('click','[data-login="close"]', function(){
         closeLogin();
     });
     $('.sdc-col>ul>li').mouseenter(function(){
        $('.opened').removeClass('opened')
        $(this).find('ul').addClass('opened')
        var h = $(this).find('ul').height();
        $('.sdc-col').css({'min-height': h})
     })
     $('.search-dropdown-content').mouseleave(function(){
        $('.opened').removeClass('opened');
        $('.sdc-col').css({'min-height': 'unset'})     
     });       
});
var openCat = function(){
    $('.category-dropdown').addClass('on');
    $('.category-form-group').addClass('on')
 }  
 var closeLogin = function() {
    $('html').removeClass('login-popup-enabled')
 } 
 var closeCat = function(){
    $('.category-dropdown').removeClass('on');
    $('.category-form-group').removeClass('on')
 }
 var copyInputs = function(){
    $('.selected-category-list').html('');
    $('.category-dropdown input[type="checkbox"]').each(function(){
       if($(this).prop('checked')==true) {
          var b = $(this).parents('.pb-checkbox');
          var h = '<li><label class="pb-checkbox">'+b.html()+'</label></li>';
          console.log(h)
          $('.selected-category-list').append(h).find('input').prop('checked',true);
       }         
    });
 }
var closeMenu = function() {
    $('.email-aside').removeClass('on');
}
var closeModal = function() {
    $('body').removeClass('oh');    
    $('.pb-modal').removeClass('on');
    $('html,body').removeClass('oh')        
}
var closeShare = function(){
    $('.pb-share').removeClass('on')
}
var msg = function(x) {
    console.log(x)
}
$(document).on('click', '.close-modal', function() {
    closeModal();
});
$(document).on('click', function() {
    closeMenu();
    closeModal();
    closeShare();
    closeCat();
    closeFaq();
    closeLogin();
});
$(document).on('click', '#filterOpen,.email-aside,.pb-share,.pb-modal-open,[data-login="open"],.login-popup-box,.skip-bg-click,.pb-modal-content,.category-input,.category-form-group', function(e) {
    e.stopPropagation();
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".go-to-top").addClass("on");
    } else {
        $(".go-to-top").removeClass("on");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});
$('.tab-pills').each(function(){
    $(this).attr('data-h', $(this).height())
});  

$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".tab-pills").addClass("fix");        
    } else {
        $(".tab-pills").removeClass("fix");        
    }
});
function googleTranslateElementInit() {
     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
$(document).on('change','.goog-te-combo',function(){
    window.setInterval( function(){
        $('#lang').text($(".goog-te-combo").val())
    },10)
});
var closeFaq = function(){
    $('.faq-body').collapse('hide')
}


$('.wishlist').click(function(){
    $(this).toggleClass('active')
})
$('.product-box-desc span').each(function(){
    var maxLength = $(this).data('length');
    var l = $(this).text().length;
    if(l>maxLength) {
        var oldtxt = $(this).text();
        var newtxt = oldtxt.substring(0, maxLength);
        $(this).attr('data-old',oldtxt).text(newtxt+'...  ')
    }   
})

$('.alphabet-filter a').click(function(){
    if(!$(this).hasClass('active')){
        var x = $(this).text().toLowerCase();
        $('.alphabet-filter a').removeClass('active');
        $(this).addClass('active');           
        $(".sd_card").each(function() {
            var alphabets_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var flag = 0;
            $.each(alphabets_array, function(key, value){
                if(x == value){
                    flag = 1;
                }
                if(flag == 0){
                    delete alphabets_array[key];
                }
            });
            var card = $(this);
            var y = $(this).find('.sd_title a').text().toLowerCase().substring(0,1);
            card.hide();

            $.each(alphabets_array, function(key, value){
                if(value == y){
                    card.show();
                }
            });
        }); 
    }  else {
        $('.alphabet-filter a').removeClass('active');
        $(".seller-col").each(function() {
            var card = $(this);            
            card.show();
    });
    }         
 });


 if($('.registration-panel').length!=0){
    var mxtabs = $('.registration-panel ul li a').length;
    var activeReg = function(id) {
        var step = id.substring(5, id.length);
        if(step<=mxtabs) {
            $('.registration-step').removeClass('on');   
        $(id).addClass('on');
        $('.registration-panel ul li').removeClass('active') ;
        for(var i=0;i<=step;i++) {
                $('.registration-panel a[href="#step'+i+'"]').parents('li').addClass('active');
        }
        $('#submit').removeAttr('data-activestep').attr('data-activestep', step);
        $('#back').removeAttr('data-activestep').attr('data-activestep', step);
        }             
        if(step>1){
            $('#back').removeClass('hideBox').addClass('prevStep')
        } else {
            $('#back').removeClass('prevStep').addClass('hideBox')
        }     
        msg(step+'--'+mxtabs)   
        if(step==mxtabs) {
           $('.registration-panel').addClass('completed')
        } else {
           $('.registration-panel').removeClass('completed')
        }
        if(step==1) {
            $('.registration-panel ul').addClass('hideBox');
            $('.reg-div-banner').removeClass('col-lg-7').addClass('col-lg-8');
            $('.reg-div-box').removeClass('col-lg-5').addClass('col-lg-4');
            $('#regBoxTitle').removeClass('hideBox')
        } else {
            $('.registration-panel ul').removeClass('hideBox');
            $('.reg-div-banner').removeClass('col-lg-8').addClass('col-lg-7');
            $('.reg-div-box').removeClass('col-lg-4').addClass('col-lg-5');
            $('#regBoxTitle').addClass('hideBox')
        }
    }
    activeReg('#step1');
    $(document).on('click','.registration-panel a',function(e){
        e.preventDefault();        
    })
 }
 
 if($('.sign-up-page').length!=0) {    
    $(document).on('click','.sendOtp',function(e){
        $('#otpBox').removeClass('hideBox');   
        activeReg('#step1');  
        $(this).prop('disabled', true).removeClass('sendOtp').addClass('nextStep');            
    });
    $('#verfiyOtp').click(function(){
        var t = $(this);
        setTimeout(function(){
            $('#otpBox').addClass('verifiying').blur().find('.mpb-input').removeClass('has-alert');
            t.addClass('otp-verified').html('<i class="fa fa-circle-o-notch fa-spin"></i> Verifying...');             
        }) 
        setTimeout(function(){
            t.addClass('otp-verified').html('<i class="fa fa-check"></i> Verified');             
        }, 2000) 
        setTimeout(function(){
            $('#otpBox').removeClass('verifiying').addClass('hideBox');
            $('[name="email"]').prop('disabled', true);
            $('#passBox,#cpassBox').removeClass('hideBox');        
            $('#verfiyOtp').prop('disabled', true);
            $('#submit').prop('disabled', false);
        }, 3000)        
    });   
    $(document).on('click','.nextStep', function(){
        $(".next_or_register").html("Next");
            var userType = $('[name="userType"]:checked').val();           
            if(userType=='seller') {
                $('[href="#step2"]').parent('li').removeClass('hideBox');
                $('[href="#step3"]').parent('li').removeClass('hideBox');
                $('[href="#step4"]').parent('li').removeClass('hideBox');
                $('.registration-panel ul').removeClass('min-ul')
                var id = $(this).attr('data-activestep');                       
                id++;        
                activeReg('#step'+id);
                $("#catalogue-btn").show(); 
            } else if(userType=='buyer') {
                $('[href="#step2"]').parent('li').addClass('hideBox');
                $('[href="#step3"]').parent('li').addClass('hideBox');
                $('[href="#step4"]').parent('li').addClass('hideBox');
                $('.registration-panel ul').addClass('min-ul')
                activeReg('#step5');
                $("#catalogue-btn").hide(); 
            } else {
                $('[href="#step2"]').parent('li').removeClass('hideBox');
                $('[href="#step3"]').parent('li').removeClass('hideBox');
                $('[href="#step4"]').parent('li').removeClass('hideBox');
                $('.registration-panel ul').removeClass('min-ul')
                alert('Please Select User Type.');
            }     
                   
    })    
    $(document).on('click','.prevStep', function(){
            var id = $(this).attr('data-activestep');        
            id--;
            if(id == 1){
                $(".next_or_register").html("Register");
            }       
            activeReg('#step'+id)    
    });
    $(document).on('click','#modalmember .membership-choose-btn',function(){
        var v = $(this).data('val');
        $('[name="chooseMembership"]:checked').prop('checked', false);
        $('.'+v).prop('checked', true);
        closeModal()
        msg('a')
    })
      
}  
$(document).ready(function(){
    
if($('.fvrt-panel-header').length!=0) {
    $('.fvrt-panel-header li a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href');
        $('.fvrt-panel-header li a').removeClass('active');
        $('.fvrt-panel-body').removeClass('show');
        $(this).addClass('active');
        $(id).addClass('show');
        $(".owl-carousel-fvrt").trigger("refresh.owl.carousel");
    })
}

if($('.fvrt-card').length!=0) {
    $('.fvrt-card input').change(function(){
        var v = $(this).prop('checked');
        msg(v)
        if(v==true) {
            $(this).parents('.fvrt-card').addClass('checked')
        } else {
            $(this).parents('.fvrt-card').removeClass('checked')
        }
    })
}


if($('.deal-countdown').length!=0){
    $('.dc-box.s').each(function() {
        var y = $(this);
        var t = $(this).text();
        setInterval(function() {
            if (t != 0) {
                t--;
                if (t < 10) {
                    y.text('0' + t);
                } else {
                    y.text(t);
                }

            }
        }, 1000);
    });
}

$('.ad-preview').lightGallery();

$('.taxtoggle').click(function(){
    $(this).toggleClass('on');
    $('.tax-info').toggleClass('on')
})
if($('.panel-discount').length!=0){
    $('.panel-discount button').click(function(){
        var c = $(this).parents('.panel-discount');
        var v = c.find('input').val();
        if(v.length!=0) {
            if(v=='1') {
                c.removeClass('failed').addClass('success');
                $('.dis-row').addClass('on')
                $('.dis-app').addClass('on')
                $('.dis-app-2').removeClass('on')
            } else {
                c.removeClass('success').addClass('failed');
                $('.dis-row').removeClass('on')
                $('.dis-app').removeClass('on')
                $('.dis-app-2').addClass('on')
            }
        }               
    })
}

if($('.swal-footer-newsletter').length!=0){
    $('.swal-footer-newsletter').click(function(){
        swal({
            title: "Subscribed!", 
            text: "Pharmababa Newsletter Subscribed Successfully.",   
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-footer-newsletter-aside').length!=0){
    $('.swal-footer-newsletter-aside').click(function(){
        swal({
            title: "Subscribed!", 
            text: "Pharmababa Newsletter Subscribed Successfully.",   
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-send-enquiry-product-details').length!=0){
    $('.swal-send-enquiry-product-details').click(function(){
        swal({
            title: "Sent!", 
            text: "Your enquiry has been sent successfully.",   
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-subscribe-newsletter-news').length!=0){
    $('.swal-subscribe-newsletter-news').click(function(){
        swal({
            title: "Subscribed!", 
            text: "Pharmababa Newsletter Subscribed Successfully.",   
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-post-event').length!=0){
    $('.swal-post-event').click(function(){
        swal({
            title: "Posted!", 
            text: "Your event has been posted successfully.",   
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-contact-us').length!=0){
    $('.swal-contact-us').click(function(){
        swal({
            title: "Submitted!",             
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.swal-feedback').length!=0){
    $('.swal-feedback').click(function(){
        swal({
            title: "Sent!",             
            text: "Feedback sent successfully.",
            icon: "success",
            button: "Okay",
        });
    })
}
if($('.hiw-step a').length!=0){
    $('.hiw-step a').click(function(e){
        e.preventDefault();
        var panel = $(this).parents('.hiw-panel');
        var id = $(this).data('href');
        $(panel).find('.hiw-step a').removeClass('active');
        $(panel).find('.hiw-slide').removeClass('active');
        $(panel).find('a[data-href="'+id+'"]').addClass('active')
        $(panel).find('.hiw-slide[data-id="'+id+'"]').addClass('active')        
    })
}
if($('.hiw-btn').length!=0){
    $('.hiw-btn').click(function(e){
        e.preventDefault();
        var dataid = $(this).attr('href');               
        $('html, body').animate({
              scrollTop: $(dataid).offset().top - 50
        }, 10);
    })
}
})