const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById('phone-icon').parentNode.addEventListener('click', function () {
  // Можно добавить всплывающее окно с номером или другие эффекты
  alert('Phone number: +1234567890');
});


// Получаем элемент кнопки
const searchButton = document.getElementById('search-icon');

// Добавляем обработчик события клика на кнопку
searchButton.addEventListener('click', function () {
  // Перенаправляем на начальную страницу (например, на главную)
  window.location.href = '/';  // Замените '/' на URL вашего домашнего или начального пути
});






// Получаем все изображения продуктов
const products = document.querySelectorAll('.product');

products.forEach((product, index) => {
  const image = product.querySelector('.product__image'); // Находим картинку внутри продукта

  // Смена изображения при наведении
  product.addEventListener('mouseenter', () => {
    if (index === 0) {
      image.src = 'img/product1.2.jpg'; // Меняем картинку для 1 продукта
    } else if (index === 1) {
      image.src = 'img/product2.1.jpg'; // Меняем картинку для 2 продукта
    } else if (index === 2) {
      image.src = 'img/product3.1.jpg'; // Меняем картинку для 3 продукта
    } else if (index === 3) {
      image.src = 'img/product4.1.jpg'; // Меняем картинку для 4 продукта
    } else if (index === 4) {
      image.src = 'img/product5.1.jpg'; // Меняем картинку для 5 продукта
    } else if (index === 5) {
      image.src = 'img/product6.1.jpg'; // Меняем картинку для 6 продукта
    }

  });

  // Восстановление исходного изображения при уходе мыши
  product.addEventListener('mouseleave', () => {
    if (index === 0) {
      image.src = 'img/product1.jpg'; // Восстанавливаем картинку для 1 продукта
    } else if (index === 1) {
      image.src = 'img/product2.jpg'; // Восстанавливаем картинку для 2 продукта
    } else if (index === 2) {
      image.src = 'img/product3.jpg'; // Восстанавливаем картинку для 3 продукта
    } else if (index === 3) {
      image.src = 'img/product4.jpg'; // Восстанавливаем картинку для 4 продукта
    } else if (index === 4) {
      image.src = 'img/product5.jpg'; // Восстанавливаем картинку для 5 продукта
    } else if (index === 5) {
      image.src = 'img/product6.jpg'; // Восстанавливаем картинку для 6 продукта
    }
  });
});















