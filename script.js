document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.toggle("show");
});
document.querySelector(".btn-close").addEventListener("click", function () {
    document.querySelector(".menu-items").classList.remove("show");
});


function updateCartCount() {
  const countEl = document.getElementById("cart-count");
  if (!countEl) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  countEl.textContent = cart.length > 0 ? cart.length : '';
  console.log("Cart count updated:", cart.length);
}

window.addEventListener("DOMContentLoaded", updateCartCount);
