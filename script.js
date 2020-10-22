var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    spacebetween: 0,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    }
});

$(function () {
    /*クリックイベント*/
    $('.tab-btn').on('click', function () {
        /* 一旦.tab_itemから.is-active-itemを外す */
        $('.tab-content').removeClass("tab-active");
        /* クリックした.tab_btnに対応する.tab_itemに.is-active-itemをつける */
        $($(this).attr("href")).addClass("tab-active");
    });
});
