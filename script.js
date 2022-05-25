const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


var mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
  // я выполнюсь только если ширина экрана 500 или больше
  window.onload = function () {
  var block=document.getElementsByClassName('block');
  var btn=document.getElementById('button');
  for (let i=10;i<block.length;i++) {
      block[i].style.display = "none";
  }

  var countD = 10;
  btn.addEventListener("click", function() {
      var box=document.getElementsByClassName('block');
      countD += 10;
      if (countD <= block.length){
          for(let i=0;i<countD;i++){
              block[i].style.display = "block";
          }
      }

  })
}
}


