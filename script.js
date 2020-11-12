var behavior = new Swiper('.slide-behaivor', {
    autoplay: {
        delay: 3000
    },
    loop: true,
    loopAdditionalSlides: 6,

    speed: 1000,
    spaceBetween: 50,
});

var front = new Swiper('.slide-front', {
    autoplay: {
        delay: 3000
    },
    loop: true,
    loopAdditionalSlides: 6,
    speed: 1000,
    spaceBetween: 0,
    thumbs: {
        swiper: behavior
    }

});

var suraido = new Swiper('.slide', {
    autoplay: {
        delay: 2000
    },
    centeredSlides: true,
    slidesPerView: 2.76,
    loop: true,
    loopAdditionalSlides: 6,
    speed: 500,
    spaceBetween: 20,

    thumbs: {
        swiper: behavior
    }
});


var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullet',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + "小野") + '</span>';
        }
    },
});

//querySelectorは任意のhtml取得
var target1 = document.querySelector('.target1');
var target2 = document.querySelector('.target2');
var target3 = document.querySelector('.target3');
var target4 = document.querySelector('.target4');
//getElementsByClassName tabボタンの中身を入手
var tabBtn = Array.from(document.getElementsByClassName('tab-btn'));
var tabLight = Array.from(document.getElementsByClassName('tab-light'));
var radio1 = document.getElementById('news');
var radio2 = document.getElementById('press');
var radio3 = document.getElementById('en');
var radio4 = document.getElementById('mante');
var controller = document.getElementsByName('controller');

function tabStatusChg() {
    //tabBtnの最後の要素(border)にbar付けてやった
    tabBtn.forEach(element => {
        element.lastElementChild.setAttribute('class', 'bar');
    });
    for (let i = 0; i < controller.length; i++) {
        if (controller[i].checked) {
            //クリックされたラジオボタンのid取得
            const idTag = controller[i].id;
            //tabの後ろに取得したid名つける
            const id = 'tab-' + idTag;
            //tab-idの要素を取得
            const targetElm = document.getElementById(id);
            //tab-idの後ろの行にbarのアクティブをつけた
            targetElm.lastElementChild.setAttribute('class', 'bar active');

            //jQueryっぽく(da)
        }
    }
}

function light() {
    //tabBtnの最後の要素(border)にbar付けてやった
    tabLight.forEach(element => {
        element.lastElementChild.setAttribute('class', 'tab-light-hon');
    });
    for (let i = 0; i < controller.length; i++) {
        if (controller[i].checked) {
            //クリックされたラジオボタンのid取得
            const idTag = controller[i].id;
            //tabの後ろに取得したid名つける
            const id = 'light-' + idTag;
            //tab-idの要素を取得
            const targetElm = document.getElementById(id);
            //tab-idの後ろの行にbarのアクティブをつけた
            targetElm.lastElementChild.setAttribute('class', 'tab-light-hon-active');

            //jQueryっぽく(da)
            console.log(idTag)
        }
    }
}

window.onload = tabStatusChg();

//iはクリックされたもの
target1.addEventListener('click', () => {
    radio1.checked = true;
    tabStatusChg();
});
target2.addEventListener('click', () => {
    radio2.checked = true;
    tabStatusChg();
});
target3.addEventListener('click', () => {
    radio3.checked = true;
    tabStatusChg();
});
target4.addEventListener('click', () => {
    radio4.checked = true;
    tabStatusChg();
});

window.onload = light();

//iはクリックされたもの
target1.addEventListener('click', () => {
    radio1.checked = true;
    light();
});
target2.addEventListener('click', () => {
    radio2.checked = true;
    light();
});
target3.addEventListener('click', () => {
    radio3.checked = true;
    light();
});
target4.addEventListener('click', () => {
    radio4.checked = true;
    light();
});




$(function () {
    let tabtab = $(".tab-btn"); // tabのクラスを全て取得し、変数tabsに配列で定義
    $(".tab-btn").on("click", function () { // tabをクリックしたらイベント発火
        const index = tabtab.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
        $(".tab-content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
    })
});

var start_height = 0, standard_height = 0;
$(window).on('scroll', function () {
    standard_height = $(this).scrollTop();
    if (standard_height >= start_height) {
        $('.header-wrapper').addClass('active');
    } else {
        $('.header-wrapper').removeClass('active');
    }
    start_height = standard_height
});

var start_height = 0, standard_height = 0;
$(window).on('scroll', function () {
    standard_height = $(this).scrollTop();
    if (standard_height >= start_height) {
        $('.header-wrapper').addClass('active');
    } else {
        $('.header-wrapper').removeClass('active');
    }
    start_height = standard_height
});

const pos = $('.main4').offset();
console.log(pos);

$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    let main4top = $(".main4").offset().top;
    let main4_rtop = $(".main4-rimg").offset().top;
    let main4_ltop = $(".main4-limg").offset().top;

    let main10 = $(".main10").offset().top;
    let main11 = $(".main11").offset().top;
    let hot = main4top - 495;
    let hut = main4_rtop - 495;
    let set = main4_ltop - 495;
    let sad = main10 - 570;
    let cut = main11 - 505;
    var start_height = 0
    var standard_height = 0;

    if (scrollTop > hot) {
        $(".main4").addClass("is-in"); // スクロールが対象エリアに入った場合
    }

    if (scrollTop > hut) {
        $(".main4-rimg").addClass("is"); // スクロールが対象エリアに入った場合
    }

    if (scrollTop > set) {
        $(".main4-limg").addClass("is"); // スクロールが対象エリアに入った場合
    }

    if (scrollTop > sad) {
        $(".main10").addClass("is"); // スクロールが対象エリアに入った場合
    }

    if (scrollTop > cut) {
        $(".main11").addClass("is"); // スクロールが対象エリアに入った場合
    }
});