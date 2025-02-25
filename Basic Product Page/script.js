document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list')
    const cartShow = document.getElementById('cart')
    const cartClose = document.getElementById('cart-close')
    const cartContainer = document.getElementById('cart-container')
    const cartItems = document.getElementById('cart-items')
    const cartTotal = document.getElementById('total');
    const inputSearch = document.getElementById('inputSearch');
    const searchBtn = document.getElementById('searchBtn');

let products = []
    let cart = []
    const url = 'https://fakestoreapi.com/products?limit=8';
    async function getdata() {
        try {
            let res = await fetch(url);
            const data = await res.json();

            data.forEach(product => {
                products.push(product.title.toLowerCase());
// console.log(typeof product);

                let productCard = document.createElement("div");
                productCard.classList.add("product")
                let productImage = document.createElement("div")
                productImage.classList.add("product-image")
                let productContent = document.createElement("div")
                productContent.classList.add("product-content")
                productImage.innerHTML = `
                <img src="${product.image}" alt="Product-Image">
                `;
                productContent.innerHTML = `
                <h4 class="product-title">${product.title.substring(0, 20)}<span> $ ${product.price}</span></h4>
                <p class="product-decscrition">${product.description.substring(0, 10)}</p>
                <button class="add-to-cart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Add to Cart</button>
                `;
                productCard.appendChild(productImage)
                productCard.appendChild(productContent)
                productContainer.appendChild(productCard)
            });

            
            document.querySelectorAll('.add-to-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id')
                    const title = e.target.getAttribute('data-title')
                    const price = e.target.getAttribute('data-price')
                    cart.push({ id, title, price })
                    updateCart();
                })

            })

        } catch (error) {
            console.log('Some Error Accured');
        }
    }
    // call to getdata funtion 
    getdata();

    // add product to cart
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += parseFloat(item.price)
            let li = document.createElement('li')
            li.innerHTML = `<p> ${item.title.substring(0, 20)} <button class="remove-item" data-index="${index}">X</button> </p> $ ${item.price} `;
            cartItems.appendChild(li)
        })
        cartTotal.textContent = total.toFixed(2);

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index')
                cart.splice(index, 1)
                updateCart();
            })
        })

    }
function SearchItem(searchItem){
    products.forEach(itemName =>{
        if(itemName.includes(searchItem)){
            console.log(itemName);
        }
    })
}


    // Search Product 
    searchBtn.addEventListener('click', () => {
        let searchItem = inputSearch.value.toLowerCase();
        SearchItem(searchItem);
    })


    // cart hide / show
    cartClose.addEventListener('click', () => {
        cartContainer.classList.add('hidden')

    })
    cartShow.addEventListener('click', () => {
        cartContainer.classList.remove('hidden')
    })



})