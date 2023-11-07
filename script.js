let cart = [];

function addToCart(productId) {
    cart.push(productId);

    // Update the cart display
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    for (const productId of cart) {
        const listItem = document.createElement("li");
        listItem.innerText = `Product ${productId}`;
        cartList.appendChild(listItem);
    }
}