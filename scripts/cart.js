// Обработчик для кнопок "Add to Cart"
const addToCartButtons = document.querySelectorAll('.product__button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target;
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Получаем текущие товары в корзине из localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Проверяем, есть ли уже этот товар в корзине
        const existingProductIndex = cart.findIndex(item => item.id === id);

        if (existingProductIndex >= 0) {
            // Если товар уже есть, увеличиваем его количество
            cart[existingProductIndex].quantity += 1;
        } else {
            // Если товара нет, добавляем его в корзину
            cart.push({
                id: id,
                name: name,
                price: price,
                quantity: 1
            });
        }

        // Сохраняем обновленный список товаров в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Обновляем корзину на странице
        updateCartDisplay();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Обновление корзины при загрузке страницы
    updateCartDisplay();
});

// Функция для обновления отображения корзины
function updateCartDisplay() {
    const cartItemsList = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Получаем товары из localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Если корзина пуста
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        totalPriceElement.textContent = '$0.00';
        return;
    }

    // Очищаем текущий список товаров
    cartItemsList.innerHTML = '';

    // Заполняем корзину товарами
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
            <button data-id="${item.id}" class="remove-btn">Remove</button>
        `;
        cartItemsList.appendChild(li);

        // Добавляем цену товара к общей сумме
        totalPrice += item.price * item.quantity;
    });

    // Обновляем отображение общей стоимости
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    // Обработчик для изменения количества товара
    cartItemsList.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity-input')) {
            const id = e.target.getAttribute('data-id');
            const quantity = parseInt(e.target.value);

            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const itemIndex = cart.findIndex(item => item.id === id);

            if (itemIndex >= 0) {
                cart[itemIndex].quantity = quantity;
                localStorage.setItem('cart', JSON.stringify(cart));
                // Обновляем корзину на странице
                updateCartDisplay();
            }
        }
    });

    // Обработчик для удаления товара
    cartItemsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            const id = e.target.getAttribute('data-id');
            const updatedCart = cart.filter(item => item.id !== id);

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            // Обновляем корзину на странице
            updateCartDisplay();
        }
    });
}
