// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart Function
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("addtocart")) {
    const card = e.target.closest(".cardclass");
    const name = card.querySelector("h3").textContent;
    const price = parseFloat(card.querySelector("p").textContent);
    const image = card.querySelector("img").src;

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
});

// Display Cart Function
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPrice.textContent = "Total: 0 PKR";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" width="80" height="80">
      <span>${item.name} (${item.quantity}) - ${item.price * item.quantity} PKR</span>
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartContainer.appendChild(div);
  });

  totalPrice.textContent = `Total: ${total} PKR`;
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

//  Form Submission
document.getElementById("checkout-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  alert(`Thank you ${name}! Your order of ${cart.length} items will be delivered to ${address}.`);
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
  this.reset();
});

// Load existing cart
displayCart();