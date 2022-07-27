
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
        $(".m6_s_text > p:nth-of-type(2)").html("하루의 시작과 마무리를 오디오북과 함께" + "<br/>" + "지하철에서도, 잠들기 전에도 독서하세요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(2)").click(function(){
        $(".inner > div").animate({left: -320},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("귀로 듣다가 눈으로도 같이 보면" + "<br/>" + "더 내용이 잘 이해돼요");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(3)").click(function(){
        $(".inner > div").animate({left: -640},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("30분만에 책 요약" + "<br/>" + "핵심만 쏙 골라 읽어주는 오디오북");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
    $(".m6_btn1 > button:nth-of-type(4)").click(function(){
        $(".inner > div").animate({left: -920},"fast");
        $(".m6_s_text > p:nth-of-type(2)").html("이제훈부터 옥주현까지" + "<br/>" + "셀럽이 읽어주는 오디오북");
        $(".m6_btn1 > button").removeClass("active");
        $(this).addClass("active");
    });
 });