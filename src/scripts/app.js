import { format } from "url";

const autorizBtn = document.querySelector("#btn-autoriz");
const hamburger = document.querySelector('.hamburger');
const heroMenu = document.querySelector('.hero__menu');
const fullMenu = document.querySelector('.full-menu');
const msgInput = document.querySelectorAll('.msg__input');

function flip() {
    $('.card').toggleClass('flipped');
}

if (autorizBtn) {
    autorizBtn.addEventListener('click', function (event) {
        event.preventDefault();
        flip();    
    });
}

if (heroMenu) {
    heroMenu.addEventListener('click', function() {
        hamburger.classList.toggle("active");
        fullMenu.classList.toggle("active");   
    })
}

// Параллакс
var parallaxContainer = document.getElementById('parallax'),
  layers = parallaxContainer.children;

var moveLayers = function (e) {
  var initialX = (window.innerWidth / 2) - e.pageX;
  var initialY = (window.innerHeight / 2) - e.pageY;

  [].slice.call(layers).forEach(function(layer, index) {
    var 
      divider = index / 100,
      positionX = initialX * divider,
      positionY = initialY * divider,
      bottomPosition = (window.innerHeight / 2) * divider,
      transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
      image = layer.firstElementChild;

    layer.style.transform = transformString;
    image.style.bottom = '-' + bottomPosition + 'px';
  });

};

window.addEventListener('mousemove', moveLayers);

//blur

var blur = (function(){
    var wrapper = document.querySelector('.msg'),
        form = document.querySelector('.msg__blur');
    return {
        set: function() {
            var imgWidth = document.querySelector('.reviews').offsetWidth,
                posLeft = -wrapper.offsetLeft,
                posTop = -wrapper.offsetTop,
                blurCSS = form.style;
                console.log('imgWidth ',imgWidth);
                console.log('posLeft', posLeft);
                console.log('posTop', posTop);
                console.log(blurCSS);

            blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
            blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
            console.log('size ',blurCSS.backgroundSize);
            console.log('pos ',blurCSS.backgroundPosition);
        }
    }
}());

blur.set();

window.onresize = function () {
    blur.set();
}

//валидность
// const msgBtnSend = document.querySelector('.msg__btn--send');

// function validate() { 
//     const msgInput = document.querySelectorAll('.msg__input');       
//     for (var i = 0; i < msgInput.length; i++) {
//         if(!msgInput[i].getAttribute('required')) {
//             msgInput[i].style.border = "1px solid red";
//         }  else {
//             msgInput[i].style.border = "1px solid green";
//         } 
//     }
// }

// msgBtnSend.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log('клик');
//     validate();
// })

// Прелоадер
$(document).ready(function () {
    var preloader    = $('#preloader'), // селектор прелоадера
        imagesCount  = $('img').length, // количество изображений
        dBody        = $('body'), //обращаемся к body
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = 5, // количество картинок
        loadedImg    = 0; // счетчик загрузки картинок



});

console.log('загрузка');
