$(function(){
         //사이트맵 팝업네비
      var open_popnav=1;
      $('.site_map').click(function(){
        if(open_popnav == 1){
            $('.pop_nav').stop().slideDown(); 
            $(this).addClass('on');
            open_popnav=2
        }else {
            $('.pop_nav').stop().slideUp(); 
            $(this).removeClass('on');
            open_popnav=1
        }
       }); 
       
    
    //패밀리사이트
    var open=1;
    $('.ui-btn').click(function(){
      if(open == 1){
        $('.family-site-list').slideDown(); 
        $(this).addClass('on');
        open=2
    }else {
        $('.family-site-list').slideUp(); 
        $(this).removeClass('on');
        open=1
    }
    })

     //배너 슬라이드
     //  $('#slide .container').prepend($('#slide .container .slideitem3')); 
   var slide = setInterval(function(){ 
        $('.banner_site  a:first-child').animate({ 
            'margin-left':(-150)+'px' },600,function(){ 
                $('.banner_site .container').append($('.banner_site  a:first-child')); 
                $('.banner_site  a:last-child').css('margin-left','0px'); 
                });
         },2400); 

    //맨위로 스크롤링
    $('.ui-btn2').click(function(event){
        event.preventDefault();
        $("html,body").stop().animate({scrollTop:0});
    })

    if ($(document).scrollTop() >= $('#section1').offset().top) {
        $('.ui-btn2').fadeIn();
    }else {
        $('.ui-btn2').fadeOut();
    }
    $(window).scroll(function(){
        //만약 scrollTop의 위치가 300보다 크면 
        
        if ($(document).scrollTop() >= $('#section1').offset().top) {
            $('.ui-btn2').fadeIn();
        }else {
            $('.ui-btn2').fadeOut();
        }
      })
 
})