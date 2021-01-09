$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        fade:true,
        dots:true,
        autoplay : true,
        autoplaySpeed : 5000
      });
      $("#section4 .regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        autoplay : true,
        autoplaySpeed : 5000,
        responsive: [                   
          {  breakpoint: 1024,    
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                 }
            }
         ]  //반응형 포인트 지정
      });
      $("#section5 .regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1, 
        autoplay : true,
        autoplaySpeed : 5000,
        responsive: [                   
          {  breakpoint: 1024,    
                 settings: {
                   slidesToShow: 4,
                   slidesToScroll: 1
                 }
            },{ breakpoint: 768,
                settings: {slidesToShow: 3}
            }
    ]  //반응형 포인트 지정
      });    
})