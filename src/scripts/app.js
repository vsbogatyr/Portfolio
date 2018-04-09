import { format } from "url";

const autorizBtn = document.querySelector("#btn-autoriz");
const hamburger = document.querySelector('.hamburger');
const heroMenu = document.querySelector('.hero__menu');
const fullMenu = document.querySelector('.full-menu');
const msgInput = document.querySelectorAll('.msg__input');

//прелоадер
// document.body.onload = function() {
//   setTimeout(function(){
//     var preloader = document.getElementById('page-preloader');
//     if(!preloader.classList.contains('done'))
//     {
//       preloader.classList.add('done');
//     }
    
//   }, 1000);
// }

var 
  images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  perc_display = document.getElementById('load_perc')

  for( var i = 0; i < images_total_count; i++)
  {
    const image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onload.onerror = image_loaded;
    image_clone.src = images[i].src;  
   }

  function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = (((100 / images_total_count)*images_loaded_count) << 0) + '%';

    if (images_loaded_count >= images_total_count) 
    {
      setTimeout(function(){
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done'))
        {
          preloader.classList.add('done');
        }        
      }, 1000);
    }
  }

//----------------------------------------------------------------
//скролл секции
if (document.querySelector('.down')) {
const section = document.querySelector('.section');
const down = document.querySelector('.down');

down.addEventListener('click', e => {
    console.log(window.innerHeight);
    $('body, html').animate({scrollTop: window.innerHeight}, 700);
})
}

if (document.querySelector('.up')) {
    const up = document.querySelector('.up');
    up.addEventListener('click', e => {        
        $('body, html').animate({scrollTop: 0}, 700);
    })
}

//-----------------------------------------------------------------
//флип
function flip() {
    $('.card').toggleClass('flipped');
}

if (autorizBtn) {
    autorizBtn.addEventListener('click', function (event) {
        event.preventDefault();
        flip();    
    });
}

//меню
if (heroMenu) {
    heroMenu.addEventListener('click', function() {
        hamburger.classList.toggle("active");
        fullMenu.classList.toggle("active");   
    })
}

//-------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------

//skills

const circles =  [...document.querySelectorAll('.circles')];
$(document).ready(function(){
    const sectionAboutTop = $('.about').offset().top;    
    $(window).scroll(function(){
        if( $(window).scrollTop() > sectionAboutTop ) {
            circles.forEach((item, i) => {
                item.classList.add('active')                
            })
        } else {
            circles.forEach((item, i) => {
                item.classList.remove('active')                
            })           
        }
    });
});


//----------------------------------------------------------------------------

//blur
if (document.querySelector('.msg')) {

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
// $(document).ready(function () {
//     var preloader    = $('#preloader'), // селектор прелоадера
//         imagesCount  = $('img').length, // количество изображений
//         dBody        = $('body'), //обращаемся к body
//         percent      = 100 / imagesCount, // количество % на одну картинку
//         progress     = 0, // точка отсчета
//         imgSum       = 5, // количество картинок
//         loadedImg    = 0; // счетчик загрузки картинок
// });


// Навигация в блоге

if (document.querySelector('.nav-blog')) {
console.log($(window).scrollTop());
var mql = window.matchMedia('all and (max-width: 480px)');


$(document).ready(function(){
    const HeaderTop = $('.nav-blog__list').offset().top;       
    $(window).scroll(function(){
    if (!mql.matches) {
        if( $(window).scrollTop() > HeaderTop ) {
            $('.nav-blog__list').css({position: 'fixed', top: '20px', width: '24%'});
        } else {
            $('.nav-blog__list').css({position: 'static', width: 'auto'});
        }
    }
    });
});

var elem = document.querySelector('.article-list');
var texts = document.querySelectorAll('.article-item');
var links = document.querySelectorAll('.nav-blog__item');
var navBlogLink = document.querySelectorAll('.nav-blog__link');
var textsOffset = [];

texts.forEach(function(text){
	textsOffset.push(text.offsetTop);	
})
console.log(textsOffset);

window.addEventListener('scroll', function(){
	textsOffset.forEach(function(offset, i){
  		if (window.pageYOffset >= offset) {
			links.forEach(function(el, i) {
				el.classList.remove('active');
			})
      	    links[i].classList.add('active');
        }
        if (window.pageYOffset >= offset) {
			navBlogLink.forEach(function(el, i) {
				el.classList.remove('active');
			})
            navBlogLink[i].classList.add('active');
        }  
  })
})

// navBlogLink.forEach(function(el, i){
//     navBlogLink[i].addEventListener('click', event=>{
//         event.preventDefault();
//         console.log('клик ', i);
//         const topArticle = texts[i].offsetTop;
//         console.log(topArticle);            
//     })		
// })

$(function(){
	$('a[data-target^="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top-70;
        $('body, html').animate({scrollTop: bl_top}, 700);
        if (mql.matches) {
        $('.nav-blog__list').css({display: 'none'});
        $(navBlog).css({width : '0%', position: 'fixed'});
        }
		return false;
	});
});

const openMenu = document.querySelector('.open-menu');
var navBlog = document.querySelector('.nav-blog');
var navBlogItem = document.querySelectorAll('.nav-blog__item')
openMenu.addEventListener('click', function(){
    $(navBlog).css({width : '88%', position: 'fixed'});
    $('.nav-blog__list').css({display: 'block', marginTop: '20px'});
});
}
//-----------------------------------------------------------------------

//слайдер

const slides = document.querySelectorAll('.my-work__slider-list .my-work__slider-item');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');
const sidebarItem = document.querySelectorAll('.sidebar__item');

let currentSlide = 0;

// осуществляет переход к слайду номер n (начиная с 0)
function goToSlide(n){
    slides[currentSlide].className = 'my-work__slider-item';
    currentSlide = (n+slides.length)%slides.length; // остаток от деления
    slides[currentSlide].className = 'my-work__slider-item showing';
    sidebarItem[currentSlide].classList.add('active');
    $(sidebarItem[currentSlide]).siblings().removeClass('active');
}

// навешивает обработчики событий на элементы next и previous
function setupListners(){
    next.onclick = function(){
        goToSlide(currentSlide+1);        
    }
    previous.onclick = function(){
        goToSlide(currentSlide-1);
    }
}

[...document.querySelectorAll('.sidebar__item')].forEach((item, i) => {
    item.addEventListener('click', (e) => goToSlide(i))
    console.log([...document.querySelectorAll('.sidebar__item')]);
})

// !document.querySelector('.msg__input-email').value.contains('@')
// (!var.contains('.') && !var... && var.length > 4)

// показывает кнопки для навигации
function showButtons(){
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }
}

// инициализация слайдера

    if (slides.length !== 0){ // если на странице есть нужный html код
        setupListners();
        showButtons();
    }

//------------------------------------------------------------------------------

//карта

if (document.querySelector('.map'))
{
    // initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(64.913499, 77.749960);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 15               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    // Добавляем маркер
    var image = '../img/icons/map_marker.png',
	    marker = new google.maps.Marker({
		position: new google.maps.LatLng(64.915253, 77.760163),              // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
		map: map,                            // Карта на которую нужно добавить маркер
        title: "Маркер", // (Необязательно) Текст выводимый в момент наведения на маркер
        icon: image
    });
    
    var styles = [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#61dac9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    map.setOptions({styles: styles});
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
}