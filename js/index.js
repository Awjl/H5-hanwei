$(function () {
    $('#dowebok').fullpage({
        controlArrows: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 1) {

            } else if (index == 2) {
                $(".section2_title").animate({ top: "0.7rem",opacity:"1" },1000);
                $(".section2_text").delay(1000).animate({ top: "1.52rem",opacity:"1" },800);
                $(".section2_list").delay(1800).animate({width: "100%"},1500);
            } else if (index == 3) {
                $(".bg_title").animate({ top: "1.16rem",opacity:"1" },1000);
                $(".section3_text").delay(800).animate({ top: "2.85rem",opacity:"1" },1000);
                $(".section3_omve").delay(1800).animate({ bottom: "1.95rem",opacity:"1" },1000);
            } else if (index == 4) {
                $(".bg_title").animate({ top: "1.16rem",opacity:"1" },1000);
                $(".section3_text").delay(800).animate({ top: "2.85rem",opacity:"1" },1000);
                $(".section4_img").delay(1800).animate({ width: "100%",opacity:"1"},1000);
                $(".section4_move").delay(1800).animate({ bottom: "1.61rem",opacity:"1" },1000);
            } else if (index == 5) {
                $(".section5_title").animate({ top: "0.76rem",width:"100%" },1000);
                $(".section5_list").delay(1000).animate({opacity:"1" },3000);
                $(".section5_move").delay(1500).animate({ bottom: "1.61rem",opacity:"1" },1000);

            } else if (index == 6) {
                $(".section6_title img").animate({ height: "1.06rem"},1000);
                $(".section6_list1").delay(1000).animate({ height: "4.73rem"},2000);
                $(".section6_title2 img").delay(3000).animate({ height: "2.36rem"},1000);
                $(".section6_list2").delay(4000).animate({ height: "3.55rem"},2000);
            } else if (index == 7) {
                $(".section7_title").animate({top:"1.59rem" ,opacity: "1"},1000);
                $(".section7_list .item").delay(1000).animate({marginTop:"0rem" ,opacity: "1"},2000);
                $(".section7_move").delay(3000).animate({opacity: "1"},1500);
            } else if (index == 8) {
                $(".section8_title").animate({top:"0.93rem" ,opacity: "1"},1500);
                $(".section8 .map").delay(1500).animate({opacity: "1"},1500);
                $(".section8_call").delay(3000).animate({top:"7.79rem",opacity: "1"},1500);
                $(".erwei").delay(4500).animate({opacity: "1"},1500);
                $(".banquan").delay(6000).animate({bottom: "0.2rem",opacity:"1"},1500);
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 1) {

            } else if (index == 2) {
                $(".section2_title").animate({ top: "0.3rem",opacity:"0" });
                $(".section2_text").animate({ top: "1rem",opacity:"0" });
                $(".section2_list").animate({width: "0%"});
            } else if (index == 3) {
                $(".bg_title").animate({ top: "0.5rem",opacity:"0" });
                $(".section3_text").animate({ top: "2rem",opacity:"0" });
                $(".section3_omve").animate({ bottom: "1rem",opacity:"0" });
            } else if (index == 4) {
                $(".bg_title").animate({ top: "0.5rem",opacity:"0" });
                $(".section3_text").animate({ top: "2rem",opacity:"0" });
                $(".section4_img").animate({ width: "0%",opacity:"0"});
                $(".section4_move").animate({ bottom: "1rem",opacity:"0" });
            } else if (index == 5) {
                $(".section5_title").animate({ top: "0.3rem",width:"0%" });
                $(".section5_list").animate({opacity:"0" });
                $(".section5_move").animate({ bottom: "1rem",opacity:"0" });
            } else if (index == 6) {
                $(".section6_title img").animate({ height: "0rem"});
                $(".section6_list1").animate({ height: "0rem"});
                $(".section6_title2 img").animate({ height: "0rem"});
                $(".section6_list2").animate({ height: "0rem"});
            } else if (index == 7) {
                $(".section7_title").animate({top:"1rem" ,opacity: "0"});
                $(".section7_list .item").animate({marginTop:"-0.71rem" ,opacity: "0"});
                $(".section7_move").animate({opacity: "0"});
            } else if (index == 8) {
                $(".section8_title").animate({top:"0.5rem" ,opacity: "0"});
                $(".section8 .map").animate({opacity: "0"});
                $(".section8_call").animate({top:"7.79rem",opacity: "0"});
                $(".erwei").animate({opacity: "0"});
                $(".banquan").animate({bottom: "0",opacity:"0"}); 
            }

        }
    });
    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);

});
// 导航栏
$(".nav_icon").click(function () {
    $(".nav_icon").css("width", "0rem");
    $(".nav").css("width", "2.4rem");
})
$(".nav").click(function () {
    $(".nav_icon").css("width", "1.1rem");
    $(".nav").css("width", "0rem");
})
// 切换产品案例
var _index = 0;
$('#right').click(function () {
    _index++;
    if (_index >= $("#list li").length) {
        _index = 0;
    }
    $("#list li").eq(_index).addClass("on").siblings().removeClass("on");
})
$('#left').click(function () {
    _index = _index - 1;
    if (_index <= 0) {
        _index = $("#list li").length-1;
    }
    $("#list li").eq(_index).addClass("on").siblings().removeClass("on");
})
