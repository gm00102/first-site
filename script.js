window.onload = function() {
  const slides = document.querySelectorAll('.aboutImageAll'); // замените .slide на класс ваших слайдов
  slides.forEach(slide => {
      const bgImage = slide.style.background;
      const imgSrc = bgImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'); // получаем URL картинки
      const img = new Image();
      img.src = imgSrc; // загружаем картинку
  });
};


var aboutImage1 = document.querySelector(".aboutImage1");
var aboutImage2 = document.querySelector(".aboutImage2");
var aboutImage3 = document.querySelector(".aboutImage3");
var arrowLeft = document.querySelector(".arrowLeft");
var arrowRight = document.querySelector(".arrowRight");
var switches = document.querySelectorAll('.allSwitch');
var paragraphs = document.querySelector('.ourPluses p');
var ourPlusesText=[
  'Перевозка разной по сложности и назначению мебели',
  'Покос травы разной высоты и сложности',
  'Уборка снега снегоуборочной машиной',
]
var count = 1;
var currentImage;
var imageleft;

function updateParagraph(){
  paragraphs.classList.add("active")
  setTimeout(() => {
    paragraphs.classList.remove("active")
}, 500);
setTimeout(() => {
  paragraphs.textContent=ourPlusesText[count-1]
}, 250);

}

function updateSwitches() {
    switches.forEach((switchEl, index) => {
        if (index === (count - 1)) {
            switchEl.classList.add('active');
        } else {
            switchEl.classList.remove('active');
        }
    });
}
updateSwitches();

function leftSlide() {
    if (count == 1) {
        currentImage = aboutImage3;
        imageleft = aboutImage1;
        count += 2;
    } else if (count == 2) {
        currentImage = aboutImage1;
        imageleft = aboutImage2;
        count--;
    } else {
        currentImage = aboutImage2;
        imageleft = aboutImage3;
        count--;
    }
    imageleft.classList.add('centerToRight');
    currentImage.style.display = "block";
    currentImage.classList.add('leftToCenter');
    arrowLeft.style.pointerEvents = "none";
    arrowRight.style.pointerEvents = "none";
    setTimeout(() => {
        imageleft.style.display = "none";
        imageleft.classList.remove('centerToRight');
        currentImage.classList.remove('leftToCenter');
        arrowLeft.style.pointerEvents = "auto";
        arrowRight.style.pointerEvents = "auto";
    }, 500);
    updateSwitches();
    updateParagraph();
}

function rightSlide() {
    if (count == 1) {
        currentImage = aboutImage2;
        imageleft = aboutImage1;
        count++;
    } else if (count == 2) {
        currentImage = aboutImage3;
        imageleft = aboutImage2;
        count++;
    } else {
        currentImage = aboutImage1;
        imageleft = aboutImage3;
        count = 1;
    }

    imageleft.classList.add('centerToLeft');
    currentImage.style.display = "block";
    currentImage.classList.add('rightToCenter');
    arrowRight.style.pointerEvents = "none";
    arrowLeft.style.pointerEvents = "none";
    setTimeout(() => {
        imageleft.style.display = "none";
        imageleft.classList.remove('centerToLeft');
        currentImage.classList.remove('rightToCenter');
        arrowLeft.style.pointerEvents = "auto";
        arrowRight.style.pointerEvents = "auto";
    }, 500);
    updateSwitches();
    updateParagraph();
}




const textSlider = document.querySelector('.textSlider')
const rangeInput = document.querySelector('.classInputSlider');

rangeInput.addEventListener('input', function(){
  textSlider.textContent=rangeInput.value;
});

  document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.querySelector('.classInputSlider');
    const serviceSelect = document.querySelector('select[name="vid-uslugi"]');
    const citySelect = document.querySelector('select[name="city"]');
    const priceText = document.querySelector('.priceText h3');
    // const priceSvg = document.querySelector('.priceSvg svg');
    const cost = document.querySelector('.cost');
    const cost2 = document.querySelector('.cost2');

    function updatePriceText() {
        if (serviceSelect.value !== "Выберите вариант" && citySelect.value !== "Выберите вариант") {
          var petrol;
          var service;
          
          if(serviceSelect.value == "Перевозка мебели"){
            service=1000;
            if(citySelect.value == "Егорьевск" ){
              petrol=2000;
            } 
            else if(citySelect.value == "Коломна" || citySelect.value == "Воскресенск"){
              petrol=3000;
            } else {petrol=3500}
          }
          if(serviceSelect.value == "Покос травы"|| serviceSelect.value == "Уборка снега"){
            if(citySelect.value == "Егорьевск" ){
              petrol=500;
            } 
            else if(citySelect.value == "Коломна" || citySelect.value == "Воскресенск"){
              petrol=800;
            } else {petrol=800};
            service=400;
          }
            rangeInput.addEventListener('input', function(){
              if (serviceSelect.value !== "Выберите вариант" && citySelect.value !== "Выберите вариант") {
              priceText.textContent ="Ваша цена: "+ (service*rangeInput.value+petrol) + "  рублей ";
              cost2.textContent="Цена примерная, точную цену можно узнать по телефону +7(xxx)xxx-xx-xx, либо написав нам в WhatsApp";
              }
            });
            priceText.textContent = "Ваша цена: "+ (service*rangeInput.value + petrol)+ "  рублей";
            cost2.textContent="Цена примерная, точную цену можно узнать по телефону +7(xxx)xxx-xx-xx, либо написав нам в WhatsApp";
            cost2.style.display='block';
        } else {
            priceText.textContent = "Выберите вид услуги и ваш город";
            cost2.style.display='none';
        }
    }

    serviceSelect.addEventListener('change', updatePriceText);
    citySelect.addEventListener('change', updatePriceText);

    // Инициализация отображения при загрузке страницы
    updatePriceText();
});


document.querySelector('.icon3').addEventListener('click', function() {
  window.open("https://wa.me/+79267826080", "_blank")
});
document.querySelector('.contactsWA').addEventListener('click', function() {
  window.open("https://wa.me/+79267826080", "_blank")
});
document.querySelector('.contactsWA2').addEventListener('click', function() {
  window.open("https://wa.me/+79267826080", "_blank")
});


document.querySelectorAll('.allQuestion').forEach(question => {
  const img = question.querySelector('.faqImg');
  const answer = question.querySelector('.answer');
  
  question.addEventListener('click', () => {
    // Найдем активную картинку (если есть)
    const currentActiveImg = document.querySelector('.faqImg.active');

    // Закрываем все ответы и деактивируем все вопросы
    document.querySelectorAll('.allQuestion').forEach(item => {
      const otherAnswer = item.querySelector('.answer');
      const otherImg = item.querySelector('.faqImg');

      if (item !== question) {
        // Закрываем другие ответы
        otherAnswer.style.maxHeight = null;
        item.classList.remove('active');
      }
    });

    // Обрабатываем предыдущую активную картинку
    if (currentActiveImg && currentActiveImg !== img) {
      currentActiveImg.classList.add('inactive');
      currentActiveImg.classList.remove('active');

      // Убираем класс 'inactive' через 500 мс только для предыдущей активной картинки
      setTimeout(() => {
        currentActiveImg.classList.remove('inactive');
      }, 500);
    }

    // Открываем текущий ответ
    if (!question.classList.contains('active')) {
      img.classList.add('active');
      question.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px"; // Плавно раскрываем ответ
    } else {
      // Если текущий вопрос активен, закрываем его
      answer.style.maxHeight = null;
      img.classList.remove('active');
      question.classList.remove('active');
    }
  });
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function toggleMenu(burger) {
  const mobileMenu = document.querySelector('.mobile-menu');

  // Переключаем класс для мобильного меню
  if (mobileMenu.classList.contains('open')) {
    // Если меню открыто, добавляем класс закрытия
    mobileMenu.classList.add('closing');
    document.body.style.overflow = '';
    // Убираем класс 'open' после завершения анимации (через 1 секунду)
    setTimeout(() => {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.remove('closing');
    }, 1000); // Время совпадает с длительностью анимации transform в CSS (1 секунда)
} else {
    // Открываем меню
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'
    
};
 

  
  
  burger.classList.toggle('open');
  // Меняем содержимое бургер-иконки
  burger.classList.contains('open') ? 
  setTimeout(() => {
    burger.innerHTML='&#10005;'
  },1000) : 
  setTimeout(() => {
    burger.innerHTML='&#9776;'
  },1000);
}
const links = document.querySelectorAll('.mobile-menu a');
const burger = document.querySelector('.burger'); // Получаем бургер

links.forEach(link => {
    link.addEventListener('click', () => {
      link.style.backgroundColor = '#D29115'; // Укажите нужный цвет
        toggleMenu(burger); // Вызываем toggleMenu при клике на ссылку
        setTimeout(() => {
          link.style.backgroundColor = ''; // Сбрасываем к исходному состоянию
      }, 1000); // 1000 миллисекунд = 1 секунда
    });
});