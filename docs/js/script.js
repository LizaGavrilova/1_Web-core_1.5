const imgLink = [
    "img/brand/acer.png", //1
    "img/brand/apple.png", //2
    "img/brand/bosch.png", //3
    "img/brand/hp.png", //4
    "img/brand/lenovo.png", //5
    "img/brand/samsung.png", //6
    "img/brand/sony.png", //7
    "img/brand/viewsonic.png", //8
    // Повтор
    "img/brand/acer.png", //9
    "img/brand/apple.png", //10
    "img/brand/bosch.png" //11
];

// Мобильная версия
var templateSwiper = document.querySelector('#brand-template_swiper-slide').content;

var containerSwiper = document.querySelector('.swiper-wrapper');
var itemsSwiper = containerSwiper.children;

for (let i = 0; i < imgLink.length; i++) {
    var newItemsSwiper = templateSwiper.cloneNode(true);
    newItemsSwiper.querySelector('.main__brand_logo').src = imgLink[i];
    containerSwiper.appendChild(newItemsSwiper);   
}

// Планшетная и компьютерная версия

//Определение размера экрана
const desktop = window.matchMedia("(min-width: 1120px)");
const tablet = window.matchMedia("(min-width: 768px)");

//Заполнение контейнера
var template = document.querySelector('#brand-template').content;
var container = document.querySelector('.main__brands-list');
var items = container.children;

var containerFillItems = function () {
    for (let i = 0; i < imgLink.length; i++) {
        var newItem = template.cloneNode(true);
        newItem.querySelector('.main__brand_logo').src = imgLink[i];
        container.appendChild(newItem);        
    };
};
containerFillItems();
let visibleItemsDesktop = 8;
let visibleItemsTablet = 6;

if (desktop.matches) {
    for (let i = visibleItemsDesktop; i < items.length; i++) {
        items[i].classList.add("hidden");  
        visibleItems = visibleItemsDesktop;    
    };
} else if (tablet.matches) {
    for (let i = visibleItemsTablet; i < items.length; i++) {
        items[i].classList.add("hidden");    
    };
};

// Активная кнопка показать, скрыть
var button = document.querySelector('.main__button');

button.addEventListener('click', function () {
    if (button.classList.contains('main__button_expand')) {
        button.querySelector('.button__text').textContent = 'Скрыть';
        button.querySelector('.button__icon').src = "img/back.svg";
        button.classList.remove('main__button_expand');
        button.classList.add('main__button_hide');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("hidden");
        };
    } else if (button.classList.contains('main__button_hide')) {
        button.querySelector('.button__text').textContent = 'Показать все';
        button.querySelector('.button__icon').src = "img/expand.svg";
        button.classList.remove('main__button_hide');
        button.classList.add('main__button_expand');
        if (desktop.matches) {
            for (let i = visibleItemsDesktop; i < items.length; i++) {
                items[i].classList.add("hidden");            
            };
        } else if (tablet.matches) {
            for (let i = visibleItemsTablet; i < items.length; i++) {
                items[i].classList.add("hidden");            
            };
        }; 
    };
});

//Измененеие ширины экрана
window.addEventListener("resize", function() {
    if (desktop.matches) {     
        if (button.classList.contains('main__button_expand')) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("hidden");
            };
            for (let i = visibleItemsDesktop; i < items.length; i++) {
                items[i].classList.add("hidden");
            };          
        } else if (desktop.matches && button.classList.contains('main__button_hide')) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("hidden");
            };            
        };
    } else if (tablet.matches) {
        if (button.classList.contains('main__button_expand')) {
            for (let i = visibleItemsTablet; i < items.length; i++) {
                items[i].classList.add("hidden");           
            };
        } else if (button.classList.contains('main__button_hide')) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove("hidden");
            };
        };
    };
});


