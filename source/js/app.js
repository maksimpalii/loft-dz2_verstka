//'use strict';
var parallaxContainer = document.querySelector('#parallax');


if (parallaxContainer !== null) {
    var layer = parallaxContainer.lastElementChild;
    window.addEventListener('mousemove', function (e) {
        var pageX = e.pageX,
            pageY = e.pageY,
            initialX = (window.innerWidth / 2) - pageX,
            initialY = (window.innerHeight / 2) - pageY,
            positionX = initialX * 0.01,
            positionY = initialY * 0.01,
            layerStyle = layer.style,
            transformString = 'translate3d(' + positionX + 'px,' + positionY + 'px, 0)';

        layerStyle.transform = transformString;
    });
}


var parallax = (function () {
    var bg = document.querySelector('.section-profile__bg');
    var stars = document.querySelector('.profile-container__bgicons');
    var info = document.querySelector('.profile-container__info');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString2 = 'translate3d(0,' + strafe + ', 0)';

            var style = block.style;

            style.transform = transformString2;
            style.webkitTransform = transformString2;
            style.msTransform = transformString2;
        },
        init: function (wScroll) {
            this.move(bg, wScroll, 45);
            this.move(stars, wScroll, 20);
            this.move(info, wScroll, 3);
        }
    }
}());

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
}

var container = document.querySelector('.menu-blog-nav');
if (container !== null) {

    var blogmenu = document.querySelector('.section-blog__menu');
    var menuState = false;

    container.addEventListener('click', function () {
        if (!menuState) {
            blogmenu.classList.add('active');
            menuState = true;
        }
        else {
            blogmenu.classList.remove('active');
            menuState = false;
        }
    });
}

var button = document.querySelector('.button_authorization');
var signbox = document.querySelector('.flipper');
var outbox = document.querySelector('.flip-out');
button.addEventListener('click', function () {
    this.style.display = 'none';
    signbox.classList.add('flipped');

});
outbox.addEventListener('click', function () {
    button.style.display = 'block';
    signbox.classList.remove('flipped');

});


