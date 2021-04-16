// window preloder #####################
var lodingbar = document.getElementById('loding');

function myloder(){
 lodingbar.style.display = "none";
}

// end window preloder #####################


$(document).ready(function () {    
   // recent post owl carousel in post centent area
    // $('#blog-area .owl-carousel').owlCarousel({
    //     loop: true,
    //     dots: true,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: false,
    //     nav: false,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // })

  // start about area ####################################

//   our team area 

  // out tram area 
  $('#our-team .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })


// end about area ####################################

  //===== Service Hover =====//
  $('.service-caro .service-box-wrap').each(function () {
    $(".service-box-wrap").on('mouseenter', function () {
      $(this).parent().parent().parent().find(".service-box-wrap, .slick-slide").removeClass("hover");
      $(this).parent().parent().addClass("hover");
    });
  });

  $('.service-wrap ul li').each(function () {
    $(".service-box-wrap").on('mouseenter', function () {
      $(this).parent().parent().find(".service-box-wrap").removeClass("hover");
      $(this).addClass("hover");
    });
  });

  $('.seo-result-wrap div.row div').each(function () {
    $(".seo-result-box").on('mouseenter', function () {
      $(this).parent().parent().find(".seo-result-box").removeClass("hover");
      $(this).addClass("hover");
    });
  });


  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Services Carousel ===//
    $('.service-caro').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerPadding: '0',
      focusOnSelect: false,
      responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          centerMode: true,
          arrows: false,
        }
      }
      ]
    });
};

   //=== Blog Carousel ===//
   $('.blog-caro').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        arrows: false,
      }
    }
    ]
  });

// mobile slider area 

  $("#mobile-slider .owl-carousel").owlCarousel({
    // dots: true,
    // loop: false,
    // autoplay: false,
    // autoplayTimeout: 7000,
    items: 1,
    loop:true,
    nav:false,
  
    
});


//  top to bottum button 
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});


});

