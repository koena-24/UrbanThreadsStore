import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productsContainer = document.getElementById("productsContainer");

async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {
        const product = doc.data();

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h4>R${product.price}</h4>
            <button class="btn add-cart">Add to Cart</button>
        `;

        const button = card.querySelector(".add-cart");

        button.addEventListener("click", () => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert("Added to cart!");
        });

        productsContainer.appendChild(card);
    });
}

loadProducts();