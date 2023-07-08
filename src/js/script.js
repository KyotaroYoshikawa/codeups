
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    const swiper = new Swiper(".js-swiper", {
        loop: true, //繰り返しをする
        slidesPerView: 1.2631, // スライド数
        spaceBetween: "24", // スライド間の余白
        // 前後の矢印
        navigation: {
            nextEl: ".js-swiper-button-prev",
            prevEl: ".js-swiper-button-next",
        },
        breakpoints: {
            768: {
                slidesPerView: 3.966,  //769 は２枚
                spaceBetween: "40", // スライド間の余白
            },
        }
    });

});
