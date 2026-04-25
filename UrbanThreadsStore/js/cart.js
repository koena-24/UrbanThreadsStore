const cartContainer = document.getElementById("cartContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: R${item.price}</p>
            <button class="btn remove-btn">Remove</button>
        `;

        const removeBtn = div.querySelector(".remove-btn");

        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        });

        cartContainer.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    totalDiv.innerHTML = `Total: R${total}`;

    cartContainer.appendChild(totalDiv);
}

displayCart();