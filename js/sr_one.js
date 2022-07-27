
// qna
$(function(){
    $("#main_m8 > .m8_qna > div > div:nth-of-type(1) > img").click(function(){
        $(this).parent().siblings().slideToggle(); // 클릭한 img의 부모의 형제를 찾아서 슬라이드 토글.
    });
 });


 //slide
 $(function(){
    $(".m6_btn1 > button:nth-of-type(1)").click(function(){
        $(".inner > div").animate({left: 0},"fast");
    });
    $(".m6_btn1 > button:nth-of-type(2)").click(function(){
        $(".inner > div").animate({left: -320},"fast");
    });
    $(".m6_btn1 > button:nth-of-type(3)").click(function(){
        $(".inner > div").animate({left: -640},"fast");
    });
    $(".m6_btn1 > button:nth-of-type(4)").click(function(){
        $(".inner > div").animate({left: -920},"fast");
    });
 });