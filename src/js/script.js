
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    //メニュー
    $('.js-hamburger').on('click', function () {
        if ($('.hamburger').hasClass('active')) {
            $('.hamburger').removeClass('active');
            $('.menu-sp').fadeOut();
        } else {
            $('.hamburger').addClass('active');
            $('.menu-sp').fadeIn();
        }
    });
    /*画面幅がブレークポイントに達した時スマホメニューが開いてたら閉じる*/
    $(window).resize(function () {
        // 画面幅が変更されたときに実行させたい処理内容
        const width = $(window).width();
        if (width >= 768 && $('.hamburger').hasClass('active')) {
            $('.hamburger').removeClass('active');
            $('.menu-sp').fadeOut();
        }
    });

    //FVスライダー
    const fv_swiper = new Swiper(".js-fv-swiper", {
        loop: true,
        autoplay: { // 自動再生
            speed: 3000,
            disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
        },
    });

    //キャンペーンページのスライダー
    const swiper = new Swiper(".js-swiper", {
        loop: true, //繰り返しをする
        slidesPerView: 1.2635, // スライド数
        spaceBetween: "6.65%", // スライド間の余白
        // 前後の矢印
        navigation: {
            nextEl: ".js-swiper-button-prev",
            prevEl: ".js-swiper-button-next",
        },
        breakpoints: {
            768: {
                slidesPerView: 3.485,  //769 は２枚
                spaceBetween: "3%", // スライド間の余白
            },
        }
    });

    //任意のHTMLセレクタ取得
    var pageTopBtn = document.querySelector('.js-page-top');
    //aタグ使用のボタンクリックでスムーズに移動
    pageTopBtn.addEventListener('click', function (event) {
        event.preventDefault();// aタグのときにもスムーズに動くように
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    //スクロールされたら
    window.addEventListener('scroll', function () {
        // window.pageYOffset 現在の位置を取得
        if (window.pageYOffset > 100) {
            pageTopBtn.classList.add('show')
        } else {
            pageTopBtn.classList.remove('show')
        }
    });

    //要素の取得とスピードの設定
    var box = $('.img-effect'),
        speed = 700;

    //.colorboxの付いた全ての要素に対して下記の処理を行う
    box.each(function () {
        $(this).append('<div class="color"></div>')
        var color = $(this).find($('.color')),
            image = $(this).find('img');
        var counter = 0;

        image.css('opacity', '0');
        color.css('width', '0%');
        //inviewを使って背景色が画面に現れたら処理をする
        color.on('inview', function () {
            if (counter == 0) {
                $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                    image.css('opacity', '1');
                    $(this).css({ 'left': '0', 'right': 'auto' });
                    $(this).animate({ 'width': '0%' }, speed);
                })
                counter = 1;
            }
        });
    });
});
