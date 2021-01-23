



jQuery(document).ready(function($) {

	'use strict';


	/************** Toggle *********************/
    // Cache selectors
    var lastId,
        topMenu = $(".menu-first"),
        topMenuHeight = 50,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          
          if($(this).hasClass('external')) {
            return;
          }
            
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }                   
    });



    $(window).scroll(function(){
         $('.main-header').toggleClass('scrolled', $(this).scrollTop() > 1);
     });



    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });


    $('.flexslider').flexslider({
      slideshow: true,
      slideshowSpeed: 3000,  
      animation: "fade",
      directionNav: false,
    });


    $('.toggle-menu').click(function(){
        $('.menu-first').toggleClass('show');
        // $('.menu-first').slideToggle();
    });

    $('.menu-first li a').click(function(){
      $('.menu-first').removeClass('show');
    });


    /************** LightBox *********************/
      $(function(){
        $('[data-rel="lightbox"]').lightbox();
      });


});

$(function(){
  //패럴랙스
  var wd = $(window);
  $('.paral').each(function(){
    var bg = $(this);
    wd.scroll(function(){
      var yPos = -(wd.scrollTop() / 3); 
        //배경이미지의 위치는 나눠지는 숫자로 조절
      var coords = '50%' + yPos + 'px';
      bg.css({backgroundPosition:coords});
    });
  }); //패럴렉스 end

    //accordian
       $('.accor > div > img').width($('.accor > div.on > img').width());
       $('.accor > div').click(function(){
        $('.accor > div').removeClass('on');
        $(this).addClass('on');       
       }) //accordian end
  
  //박스높이 계산하기
   var box_h2 = $('#section3 .sec3_2').height();  
   var accor_high = $('.accor > div.on img').height();
     $('#section3 .sec3_1').height(box_h2);
     $('.accor > div').height(accor_high);


  //tab   
    $('.tabs li').each(function(){     
      var a_href = $('.tabs li.on a').attr('href');
      $(a_href).show();
      $(this).click(function(event){    
        a_href = $(this).find(' > a').attr('href');      
        event.preventDefault();
        $('.panel').hide();
        $(a_href).fadeIn();
        $('.tabs li').removeClass('on');
        $(this).addClass('on');
        })  
      })//tab end

      //settime tab
    var push = 0;
    var slide = setInterval(function(){ 
       $(".tabs li").click(function(){clearInterval(slide);})

        var li_on = $('.tabs li').filter('.on');
        $('.tabs li').removeClass('on');
        if(!$(".tabs li").last().is(".on")){
          li_on = li_on.next()
          setgo(li_on);
        }
        if($(".tabs li").last().is(".on")){           
          //clearInterval(interval);
          setTimeout(function(){
            li_on = $(".tabs li").first();
            setgo(li_on);
          },2500)
        }     
      },2500);  //settime end
      function setgo(li_on){
        li_on.addClass('on');  
        a_href = li_on.find(' > a').attr('href');      
        $('.panel').hide();
        $(a_href).fadeIn();
        $('.tabs li').removeClass('on');
        li_on.addClass('on');
      }  
      
// 적응형 스크립트 
$(window).resize(function(){
  //  location.reload();
  //창크기가 바뀔 때 박스높이 계산하기
  var box_h2 = $('#section3 .sec3_2').height();  
  var accor_high = $('.accor > div.on img').height();

    $('#section3 .sec3_1').height(box_h2);
    $('.accor > div').height(accor_high);   
    $('.accor > div.on > img').css({width:'100%'})
    $('.accor > div > img').width($('.accor > div.on > img').width());
  })  //resize end


 }) //end