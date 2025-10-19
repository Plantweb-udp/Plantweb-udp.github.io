const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

document.getElementById("verMenu").addEventListener("click", () => {
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});

const cartBtn = document.getElementById("cart-btn");
const cartPanel = document.getElementById("cart-panel");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

let cart = [];

cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("open");
});

document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);

        const item = cart.find(i => i.name === name);
        if (item) item.qty++;
        else cart.push({ name, price, qty: 1 });

        updateCart();
    });
});

clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCart();
});

function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>$${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeItem(${index})">✖</button>
        `;
        cartItemsContainer.appendChild(div);
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById("formContacto").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("msgConfirmacion").classList.remove("hidden");
    e.target.reset();
});
