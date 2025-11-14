const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-items");
const closeBtn = document.querySelector(".btn-close");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

document.addEventListener("click", function (e) {
  const clickedInsideMenu = menu.contains(e.target);
  const clickedHamburger = hamburger.contains(e.target);

  if (!clickedInsideMenu && !clickedHamburger && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});


function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  countEl.textContent = cart.length > 0 ? cart.length : '';
  console.log("Cart count updated:", cart.length);
}

function updateCartCount1() {
  const countEl = document.getElementById("cart-count1");
  if (!countEl) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  countEl.textContent = cart.length > 0 ? cart.length : '';
  console.log("Cart count updated:", cart.length);
}

window.addEventListener("DOMContentLoaded", updateCartCount);
window.addEventListener("DOMContentLoaded", updateCartCount1);
