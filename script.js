/*var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    spacebetween: 0,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
    }
});*/

var behavior = new Swiper('.slide-behaivor', {
    autoplay: {
        delay: 3000
    },
    loop: true,
    loopAdditionalSlides: 6,
    speed: 1000,
});

var front = new Swiper('.slide-front', {
    autoplay: {
        delay: 3000
    },
    loop: true,
    loopAdditionalSlides: 6,
    speed: 700,
    spaceBetween: 20,
    thumbs: {
        swiper: behavior
    }

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




$(function() {
    let tabtab = $(".tab-btn"); // tabのクラスを全て取得し、変数tabsに配列で定義
    $(".tab-btn").on("click", function() { // tabをクリックしたらイベント発火
      const index = tabtab.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
      $(".tab-content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
    })
});

var start_height = 0, standard_height = 0;
$(window).on('scroll',function(){
    standard_height = $(this).scrollTop();
    if (standard_height >= start_height) {
        $('.header-wrapper').addClass('active');
    } else {
        $('.header-wrapper').removeClass('active');
    }
    start_height = standard_height
});

