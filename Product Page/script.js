document.addEventListener('DOMContentLoaded', () => {
    const productContainerEl = document.getElementById("product-list")
    const closeCart = document.getElementById('close-cart')
    const openCart = document.getElementById('cart-open');
    const cartModel = document.getElementById('cart-model');
    const cartItems = document.getElementById('cart-items')
    const cartTotal = document.getElementById('cart-total');
    const itemsCount = document.getElementById('itemsCount');
    let cart = [];

    fetch("https://fakestoreapi.com/products?limit=8")
        .then(res => res.json())
        .then(data => {

            data.forEach(product => {

                const productCard = document.createElement('div')
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                <img src="${product.image}" alt="Product">
                <h3>${product.title}</h3>
                <p>${product.description.substring(0, 50)}</p>
                <p> $ ${product.price}</p>
                <button id ="addToCart" class = "${product.id}" >Add to Cart</button>
                `;

                productContainerEl.appendChild(productCard);


            });
            const addToCart = document.querySelectorAll('#addToCart')
            console.log(addToCart);

            addToCart.forEach(btn => {
                btn.addEventListener('click', () => {
                    let selectedItem = data[btn.getAttribute('class') - 1]
                    const id = selectedItem.id
                    const title = selectedItem.title
                    const price = selectedItem.price

                    cart.push({ id, title, price })
                    updateCart();
                })

            })

        })


    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0 ;
        cart.forEach((item, index) => {
            total += item.price
            let li = document.createElement('li')
            li.innerHTML = `${item.title} -${item.price.toFixed(2)} <button class = "remove-item" data-index = "${index}">X</button>`;
            cartItems.appendChild(li)
            
        })
        itemsCount.textContent = cart.length;
        cartTotal.textContent = total.toFixed(2);
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click',(e)=>{
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
            
            })
        });
    }
  

    // cart-model check button 
    closeCart.addEventListener('click', () => {
        cartModel.classList.add('hidden')
    })
    openCart.addEventListener('click', () => {
        cartModel.classList.remove('hidden');
    })
})
