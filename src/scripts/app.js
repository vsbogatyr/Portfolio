import { format } from "url";

const autorizBtn = document.querySelector("#btn-autoriz");
const hamburger = document.querySelector('.hamburger');
const heroMenu = document.querySelector('.hero__menu');
const fullMenu = document.querySelector('.full-menu');

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
            blurCSS.backgroudPosition = posLeft + 'px' + ' ' + posTop + 'px';
            console.log('size ',blurCSS.backgroundSize);
            console.log('pos ',blurCSS.backgroudPosition);
        }
    }
}());

blur.set();

window.onresize = function () {
    blur.set();
}
