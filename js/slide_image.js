$(function(){
    

    $('.slides > li').each(function(){ //0단계: 슬라이드 별로 수행함
        if($(window).width() < 769){
        //1단계 : 윈도우창크기가 769미만 = 768 이하 (<=768) 이면 pc를 모바일로 바꿈
        var img = $(this).find('img');
        //2단계: find ==> 선택자를 찾는 명령 img 태그를 검색함
        var img_pc = img.attr('src');
        
        //3단계: 이미지의 src 주소를 PC변수에 기억함
        var img_mo = img_pc.replace('_pc','_mo')
        //4단계 relapce(a,b) ==> a를 b로 대체. PC를 모바일로 바꾸어서 모바일 변수에         기억함
        img.attr('src',img_mo);
        //5단계: 현재 이미지 태그(2단계)의 주소를 모바일 주소(4단계)로 바꿈
        }else{
        //1단계 : 윈도우창크기가 769미만 아닐때 = 769이상이면 모바일을 pc로 바꿈
        var img = $(this).find('img');
        //2단계 find ==> 선택자를 찾는 명령 img 태그를 검색함
        var img_mo = img.attr('src');
        //3단계: 이미지의 src 주소를 모바일 변수에 기억함
        var img_pc = img_mo.replace('_mo','_pc');
        //4단계: relapce(a,b) ==> a를 b로 대체. 모바일을 PC로 바꾸어서 PC 변수에     기억함
        img.attr('src',img_pc);
        //5단계: 현재 이미지 태그(2단계)의 주소를 PC 주소(4단계)로 바꿈
        }
        })
        
       $(window).resize(function(){
        // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
        $('.slides > li').each(function(){
        if($(window).width() < 769){
        var img = $(this).find('img');
        var img_pc = img.attr('src');
        var img_mo = img_pc.replace('_pc','_mo')
        img.attr('src',img_mo);
        }else{
        var img = $(this).find('img');
        var img_mo = img.attr('src');
        var img_pc = img_mo.replace('_mo','_pc');
        img.attr('src',img_pc);
        }
        })
       })




})