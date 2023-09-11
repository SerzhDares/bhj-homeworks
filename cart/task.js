const decProduct = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const incProduct = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const quanProduct = Array.from(document.querySelectorAll('.product__quantity-value'));
const addButtons = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart__products');
const ids = Array.from(document.querySelectorAll('.product'));
const imgs = Array.from(document.querySelectorAll('img'));

decProduct.forEach((item,index) => {
    item.addEventListener('click', () => {
        if(quanProduct[index].textContent > 1) {
            quanProduct[index].textContent--;
        }
    })
})

incProduct.forEach((item,index) => {
    item.addEventListener('click', () => {
        quanProduct[index].textContent++;
    })
})

addButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        cart.insertAdjacentHTML('afterbegin', '<div class="cart__product" data-id=""><img class="cart__product-image" src="image.png"><div class="cart__product-count">20</div></div>');
        document.querySelector('.cart__product-count').textContent = quanProduct[index].textContent;
        document.querySelector('.cart__product').setAttribute('data-id', ids[index].getAttribute('data-id'));
        document.querySelector('.cart__product-image').setAttribute('src', imgs[index].getAttribute('src'));
        const cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        // cartProducts.forEach(prod => {
        //     if(prod.getAttribute('data-id') == ids[index].getAttribute('data-id')) {
        //         document.querySelector('.cart__product-count').textContent += quanProduct[index].textContent;
        //     }
        // })
    })
})

