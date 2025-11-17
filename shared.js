const productData = {
    mobiles: [
        {
            id: 1,
            name: "Samsung X2",
            price: 64999,
            image: "./assets/products-mobile.webp",
            description: "Experience blazing-fast 5G, AMOLED display, and 108MP triple camera.",
            specs: [
                "Display: 6.7-inch AMOLED, 120Hz",
                "Processor: Snapdragon 8 Gen 2",
                "Camera: 108MP Triple Camera",
                "Battery: 5000mAh, 65W Fast Charging",
                "Storage: 256GB ROM, 12GB RAM",
                "OS: Android 14"
            ],
            extraImages: [
                "./assets/products-mobile1.webp",
                "./assets/products-mobile2.webp",
            ],
            reviews: [
                {
                    user: "John Doe",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Priya Sharma",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]
        },
        {
            id: 2,
            name: "Samsung Z Pro",
            price: 58999,
            image: "./assets/products-mobile3.webp",
            description: "Lightweight, powerful smartphone with 120Hz display and AI imaging.",
            specs: [
                "Display: 6.5 OLED, HDR10+",
                "Processor: Dimensity 8200",
                "Camera: 64MP Quad AI Camera",
                "Battery: 4800mAh, 60W Fast Charging",
                "Storage: 128GB ROM, 8GB RAM",
                "OS: Android 13"
            ],
            extraImages: [
                "./assets/products-mobile5.webp",
                "./assets/products-mobile6.webp"
            ],
            reviews: [
                {
                    user: "Alex Martin",
                    rating: 5,
                    comment: "Fantastic product! Build quality and speed are top-notch."
                },
                {
                    user: "Sana Iqbal",
                    rating: 4,
                    comment: "Good value for money. Design is sleek and modern."
                }
            ]

        },
        {
            id: 3,
            name: "OPPO Reno K13",
            price: 42999,
            image: "./assets/products-mobile7.webp",
            description: "Crystal-clear display with premium AI camera performance.",
            specs: [
                "Display: 6.4-inch OLED",
                "Processor: Snapdragon 778G",
                "Camera: 64MP AI Triple Camera",
                "Battery: 4500mAh, 50W Fast Charging",
                "Storage: 128GB ROM, 8GB RAM",
                "OS: Android 13"
            ],
            extraImages: [
                "./assets/products-mobile8.webp",
                "./assets/products-mobile9.webp"
            ],
            reviews: [
                {
                    user: "Rahul Verma",
                    rating: 5,
                    comment: "Best purchase I made this year. Totally worth it!"
                },
                {
                    user: "Emily Rose",
                    rating: 3,
                    comment: "Decent product but expected a bit more from the display quality."
                }
            ]

        },
        {
            id: 4,
            name: "Samsung Galaxy S23",
            price: 74999,
            image: "./assets/mobile-samsumg-1.webp",
            description: "Flagship experience with Snapdragon 8 Gen 2 and stunning Dynamic AMOLED.",
            specs: [
                "Display: 6.1-inch Dynamic AMOLED",
                "Processor: Snapdragon 8 Gen 2",
                "Camera: 50MP Triple Camera",
                "Battery: 3900mAh",
                "Storage: 256GB",
                "OS: Android 14"
            ],
            extraImages: [
                "./assets/mobile-samsumg-2.webp",
                "./assets/mobile-samsumg-3.webp"
            ],
            reviews: [
                {
                    user: "John",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Gayathri Priya",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]

        },
        {
            id: 5,
            name: "iPhone 14 Pro",
            price: 119999,
            image: "./assets/mobile-iphone.webp",
            description: "Experience the power of A16 Bionic and the next-gen Dynamic Island.",
            specs: [
                "Display: 6.1-inch OLED Super Retina",
                "Processor: A16 Bionic",
                "Camera: 48MP Pro Camera",
                "Battery: 3200mAh",
                "Storage: 128GB",
                "OS: iOS 17"
            ],
            extraImages: [
                "./assets/mobile-iphone2.webp",
                "./assets/mobile-iphone3.webp"
            ],
            reviews: [
                {
                    user: "Rahul Verma",
                    rating: 5,
                    comment: "Best purchase I made this year. Totally worth it!"
                },
                {
                    user: "Emily Rose",
                    rating: 3,
                    comment: "Decent product but expected a bit more from the display quality."
                }
            ]

        }
    ],

    laptops: [
        {
            id: 6,
            name: "Laptop Pro X",
            price: 89999,
            image: "./assets/laptopx1.webp",
            description: "Sleek, fast laptop for professionals with i7 processor.",
            specs: [
                "Display: 15.6-inch QHD",
                "Processor: Intel i7 12th Gen",
                "RAM: 16GB DDR5",
                "Storage: 512GB SSD",
                "Battery: 10 hours",
                "OS: Windows 11 Pro"
            ],
            extraImages: [
                "./assets/laptopx2.webp",
                "./assets/laptopx3.webp"
            ],
            reviews: [
                {
                    user: "John Doe",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Priya Sharma",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]
        },
        {
            id: 7,
            name: "UltraBook Air",
            price: 79999,
            image: "./assets/laptop-ultrabook1.webp",
            description: "Ultra-lightweight premium laptop powered by M2 chip.",
            specs: [
                "Display: 13.3-inch Retina",
                "Processor: Apple M2",
                "RAM: 8GB",
                "Storage: 256GB SSD",
                "Battery: 18 hours",
                "OS: macOS Ventura"
            ],
            extraImages: [
                "./assets/laptop-ultrabook2.webp",
                "./assets/laptop-ultrabook3.webp"
            ],
            reviews: [
                {
                    user: "John Doe",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Priya Sharma",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]

        },
        {
            id: 8,
            name: "ASUS ZenBook 14",
            price: 67999,
            image: "./assets/laptop-asus1.webp",
            description: "Portable, powerful, and designed for creators.",
            specs: [
                "Display: 14-inch OLED",
                "Processor: Ryzen 7 5800U",
                "RAM: 16GB",
                "Storage: 1TB SSD",
                "Battery: 14 hours",
                "OS: Windows 11"
            ],
            extraImages: [
                "./assets/laptop-asus2.webp",
                "./assets/laptop-asus3.webp"
            ],
            reviews: [
                {
                    user: "John Doe",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Priya Sharma",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]

        },
        {
            id: 9,
            name: "HP Pavilion Plus",
            price: 55999,
            image: "./assets/laptop-hp1.webp",
            description: "Reliable everyday laptop with smooth multitasking.",
            specs: [
                "Display: 14-inch IPS",
                "Processor: Intel i5 11th Gen",
                "RAM: 8GB",
                "Storage: 512GB SSD",
                "Battery: 9 hours",
                "OS: Windows 11"
            ],
            extraImages: [
                "./assets/laptop-asus2.webp",
                "./assets/laptop-asus3.webp"
            ],
            reviews: [
                {
                    user: "Rahul Verma",
                    rating: 5,
                    comment: "Best purchase I made this year. Totally worth it!"
                },
                {
                    user: "Emily Rose",
                    rating: 3,
                    comment: "Decent product but expected a bit more from the display quality."
                }
            ]

        },
        {
            id: 10,
            name: "Dell XPS 13",
            price: 99999,
            image: "./assets/laptop-dell1.webp",
            description: "Compact powerhouse with InfinityEdge display.",
            specs: [
                "Display: 13.4-inch Full HD",
                "Processor: Intel i7 11th Gen",
                "RAM: 16GB",
                "Storage: 512GB SSD",
                "Battery: 12 hours",
                "OS: Windows 11"
            ],
            extraImages: [
                "./assets/laptop-dell2.webp",
                "./assets/laptop-dell3.webp"
            ],
            reviews: [
                {
                    user: "Alex Martin",
                    rating: 5,
                    comment: "Fantastic product! Build quality and speed are top-notch."
                },
                {
                    user: "Sana Iqbal",
                    rating: 4,
                    comment: "Good value for money. Design is sleek and modern."
                }
            ]

        }
    ],

    headphones: [
        {
            id: 11,
            name: "Noise Cancelling Headphones",
            price: 12499,
            image: "./assets/headphones-noise1.webp",
            description: "Deep bass, ANC, and premium comfort.",
            specs: [
                "Driver: 40mm",
                "Battery: 30 hours",
                "Bluetooth: 5.2",
                "Weight: 250g",
                "Charging: Type-C"
            ],
            extraImages: [
                "./assets/headphones-noise2.webp",
                "./assets/headphones-noise3.webp"
            ],
            reviews: [
                {
                    user: "Michael Lee",
                    rating: 5,
                    comment: "Sound quality is incredible! Deep bass and clear vocals."
                },
                {
                    user: "Kavya R",
                    rating: 4,
                    comment: "Really good for the price. Noise cancellation works well."
                }
            ]

        },
        {
            id: 12,
            name: "Wireless Earbuds",
            price: 4999,
            image: "./assets/headphones-wireless1.webp",
            description: "Compact earbuds with rich audio and long battery.",
            specs: [
                "Battery: 24 hours",
                "Bluetooth: 5.3",
                "Water Resistance: IPX5",
                "Charging: USB-C"
            ],
            extraImages: [
                "./assets/headphones-wireless2.webp",
                "./assets/headphones-wireless3.webp"
            ],
            reviews: [
                {
                    user: "Arjun Mehta",
                    rating: 4,
                    comment: "Very useful product, works exactly as expected."
                },
                {
                    user: "Sophia Daniel",
                    rating: 5,
                    comment: "High quality and durable. Totally satisfied!"
                }
            ]

        },
        {
            id: 13,
            name: "Sony WH-1000XM4",
            price: 29999,
            image: "./assets/headphones-sony1.webp",
            description: "Industry-leading noise cancellation.",
            specs: [
                "Battery: 32 hours",
                "Bluetooth: 5.2",
                "Noise Cancellation: Premium ANC",
                "Charging: USB-C"
            ],
            extraImages: [
                "./assets/headphones-sony3.webp",
                "./assets/headphones-sony2.webp"
            ],
            reviews: [
                {
                    user: "Michael Lee",
                    rating: 5,
                    comment: "Sound quality is incredible! Deep bass and clear vocals."
                },
                {
                    user: "Kavya R",
                    rating: 4,
                    comment: "Really good for the price. Noise cancellation works well."
                }
            ]

        },
        {
            id: 14,
            name: "Boat Rockerz 551",
            price: 2999,
            image: "./assets/headphones-boat.webp",
            description: "Powerful bass with long-lasting comfort.",
            specs: [
                "Battery: 40 hours",
                "Driver: 50mm Bass Boost",
                "Bluetooth: 5.0",
                "Charging: Type-C"
            ],
            extraImages: [
                "./assets/headphones-boat2.webp",
                "./assets/headphones-boat3.webp"
            ],
            reviews: [
                {
                    user: "Doe",
                    rating: 5,
                    comment: "Amazing quality! The performance is outstanding and worth the price."
                },
                {
                    user: "Priya",
                    rating: 4,
                    comment: "Very satisfied with the product. The battery backup could be better."
                }
            ]

        },
        {
            id: 15,
            name: "Nothing Ear (2)",
            price: 12999,
            image: "./assets/headphones-nothing3.webp",
            description: "Transparent design with studio-grade sound.",
            specs: [
                "Battery: 36 hours",
                "Bluetooth: 5.3",
                "ANC: Active Noise Cancellation",
                "Charging: Wireless + USB-C"
            ],
            extraImages: [
                "./assets/headphones-nothing2.webp",
                "./assets/headphones-nothing1.webp"
            ],
            reviews: [
                {
                    user: "Arjun Mehta",
                    rating: 4,
                    comment: "Very useful product, works exactly as expected."
                },
                {
                    user: "Sophia Daniel",
                    rating: 5,
                    comment: "High quality and durable. Totally satisfied!"
                }
            ]

        }
    ],

    others: [
        {
            id: 16,
            name: "Smart Watch Series 8",
            price: 28999,
            image: "./assets/others-smartwatch1.webp",
            description: "Fitness tracking with AMOLED display.",
            specs: [
                "Display: 1.9-inch AMOLED",
                "Battery: 3 days",
                "Waterproof: 50m",
                "Sensors: ECG, SPO2"
            ],
            extraImages: [
                "./assets/others-smartwatch2.webp",
                "./assets/others-smartwatch3.webp"
            ],
            reviews: [
                {
                    user: "Arjun Mehta",
                    rating: 4,
                    comment: "Very useful product, works exactly as expected."
                },
                {
                    user: "Sophia Daniel",
                    rating: 5,
                    comment: "High quality and durable. Totally satisfied!"
                }
            ]

        },
        {
            id: 17,
            name: "Gaming Mouse RGB",
            price: 2499,
            image: "./assets/others-mouse1.webp",
            description: "RGB gaming mouse with fast response.",
            specs: [
                "DPI: 16000",
                "Buttons: 7 programmable",
                "Lighting: RGB",
                "Connection: USB"
            ],
            extraImages: [
                "./assets/others-mouse2.webp",
                "./assets/others-mouse3.webp"
            ],
            reviews: [
                {
                    user: "Neha Kapoor",
                    rating: 5,
                    comment: "Exceptional performance! The design is sleek and the device runs very smoothly."
                },
                {
                    user: "Daniel Cruz",
                    rating: 4,
                    comment: "Great product overall, but shipping arrived a day late."
                }
            ]

        },
        {
            id: 18,
            name: "Mechanical Keyboard",
            price: 4999,
            image: "./assets/others-keyboard1.webp",
            description: "Blue-switch mechanical keyboard for fast typing.",
            specs: [
                "Switches: Blue Clicky",
                "Backlight: RGB",
                "Connection: USB",
                "Frame: Aluminum"
            ],
            extraImages: [
                "./assets/others-keyboard2.webp",
                "./assets/others-keyboard3.webp"
            ],
            reviews: [
                {
                    user: "Vikram Singh",
                    rating: 3,
                    comment: "Average experience. The product is good but could have better finishing."
                },
                {
                    user: "Rachel Green",
                    rating: 5,
                    comment: "Fantastic! Works perfectly and feels premium. Totally recommend it."
                }
            ]

        },
        {
            id: 19,
            name: "Mini Bluetooth Speaker",
            price: 1999,
            image: "./assets/others-speaker1.webp",
            description: "Portable speaker with strong bass and long battery.",
            specs: [
                "Battery: 12 hours",
                "Bluetooth: 5.1",
                "Water Resistance: IPX7",
                "Charging: USB-C"
            ],
            extraImages: [
                "./assets/others-speaker2.webp",
                "./assets/others-speaker3.webp"
            ],
            reviews: [
                {
                    user: "Harish M",
                    rating: 4,
                    comment: "Good build quality and impressive battery life. Worth the money."
                },
                {
                    user: "Emily Carter",
                    rating: 5,
                    comment: "Exceeded my expectations! Absolutely love the features and speed."
                }
            ]

        },
        {
            id: 20,
            name: "Wireless Charger",
            price: 2499,
            image: "./assets/others-charger1.webp",
            description: "Fast 15W wireless charging pad.",
            specs: [
                "Power: 15W Fast Charge",
                "Compatibility: iOS & Android",
                "Protection: Overheat & Short Circuit",
                "Connector: USB-C"
            ],
            extraImages: [
                "./assets/others-charger2.webp",
                "./assets/others-charger3.webp"
            ],
            reviews: [
                {
                    user: "Hari M",
                    rating: 5,
                    comment: "Good build quality and impressive battery life. Worth the money."
                },
                {
                    user: "Nisha",
                    rating: 5,
                    comment: "Exceeded my expectations! Absolutely love the features and speed."
                }
            ]

        },
        {
            id: 21,
            name: "USB-C Hub 7-in-1",
            price: 3499,
            image: "./assets/others-usb1.webp",
            description: "Expand your laptop ports instantly.",
            specs: [
                "Ports: HDMI, USB 3.0, SD Card, Ethernet",
                "Power: PD 100W",
                "Material: Aluminum Body",
                "Compatibility: Windows & Mac"
            ],
            extraImages: [
                "./assets/others-usb2.webp",
                "./assets/others-usb3.webp"
            ],
            reviews: [
                {
                    user: "Gayathri Priya",
                    rating: 4,
                    comment: "Good build quality and impressive battery life. Worth the money."
                },
                {
                    user: "K",
                    rating: 5,
                    comment: "Exceeded my expectations! Absolutely love the features and speed."
                }
            ]

        }
    ]
};


function loadProducts() {
    const categoryTabs = document.getElementById("category-tabs");
    const productContainer = document.getElementById("product-container");
    if (!categoryTabs || !productContainer) return;

    const categories = Object.keys(productData);

    categoryTabs.innerHTML = categories.map((cat, i) =>
        `<button 
            class="tab-btn ${i === 0 ? "active" : ""}"  
            data-category="${cat}"
            onclick="showCategory('${cat}')"
        >
            ${capitalize(cat)}
        </button>`
    ).join("");

    productContainer.innerHTML = categories.map((cat, i) =>
        `<div class="category-content ${i === 0 ? "active" : ""}" id="${cat}">
            <div class="product-grid">
                ${productData[cat].map(item => `
                    <div class="product-card" onclick="viewProduct(${item.id})" data-aos='fade-up'>
                        <div class="product-image-container">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <h3>${item.name}</h3>
                        <p class="product-price">₹${item.price.toLocaleString()}</p>
                    </div>
                `).join("")}
            </div>
        </div>`
    ).join("");

    selectTabFromURL();
}

function showCategory(category) {
    const contents = document.querySelectorAll(".category-content");
    const tabs = document.querySelectorAll(".tab-btn");

    contents.forEach(c => c.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    document.getElementById(category).classList.add("active");

    document.querySelector(`.tab-btn[data-category="${category}"]`)
        .classList.add("active");
}

function selectTabFromURL() {
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category");

    if (selectedCategory && productData[selectedCategory]) {
        showCategory(selectedCategory);
    }
}

function viewProduct(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const no_product = "No Product To Show here, please select a valid Product";

    const detailsEl = document.getElementById("product-details");
    if (!productId) {
        if (detailsEl) {
            detailsEl.textContent = no_product;
        }
        console.log("No ID");
        return;
    }


    const allProducts = Object.values(productData).flat();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("product-img").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `₹${product.price.toLocaleString()}`;
    document.getElementById("product-desc").textContent = product.description;

    const img2 = document.getElementById("product-img-2");
    const img3 = document.getElementById("product-img-3");

    if (product.extraImages && product.extraImages.length >= 2) {
        img2.src = product.extraImages[0];
        img3.src = product.extraImages[1];
    }

    document.querySelectorAll('.extra-images img').forEach(img => {
        img.addEventListener('click', () => {
            document.getElementById("product-img").src = img.src;
        });
    });

    const specsList = document.getElementById("product-specs-list");
    if (product.specs && specsList) {
        specsList.innerHTML = product.specs.map(s => `<li>${s}</li>`).join("");
    }
    const reviewList = document.getElementById("product-customer-review");

    if (product.reviews && product.reviews.length > 0) {
        reviewList.innerHTML = product.reviews.map(r => `
    <li class="review-item">
      <div class="review-user">
            <span class="material-icons">  person </span>  
        <div>
          <h4>${r.user}</h4>
          <div class="review-rating">${'⭐'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
        </div>
      </div>
      <p class="review-comment">"${r.comment}"</p>
    </li>
  `).join("");
    } else {
        reviewList.innerHTML = "<p>No reviews yet for this product.</p>";
    }

}

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let quantity = 1;

function addToCart() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const allProducts = Object.values(productData).flat();
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.quantity += quantity;
    else cart.push({ ...product, quantity });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showToast(`${product.name} added to cart!`,"success");
}

function loadCart() {
    const cartContainer = document.getElementById("cart-items");
    const summary = document.getElementById("cart-summary");
    if (!cartContainer) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty!</p><a href='product.html'>Purchase Now!</a";
        summary.innerHTML = "";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price.toLocaleString()}</p>
        <p>Qty: ${item.quantity}</p>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>`;
    });

    summary.innerHTML = `
    <p><strong>Total:</strong> ₹${total.toLocaleString()}</p>
    <button class="checkout-btn" onclick="checkout()">Proceed to Checkout</button>`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

function checkout() {
    showToast("Thank you for shopping with Minimal Retail!","success");
    localStorage.removeItem("cart");
    window.location.href = "404page.html";
}

function increaseQty() {
    quantity++;
    document.getElementById("quantity").textContent = quantity;
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
}

function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (countEl) countEl.textContent = cart.length;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    loadProductDetails();
    loadCart();
    updateCartCount();
});

function openFS(img) {
    if (img.requestFullscreen) {
        img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
    }
}

function openFullImage(src) {
    const modal = document.getElementById("imgModal");
    const fullImg = document.getElementById("fullImg");

    fullImg.src = src;
    modal.style.display = "block";
}

document.querySelector(".close-btn").addEventListener("click", function () {
    document.getElementById("imgModal").style.display = "none";
});

function showToast(message, type = "default") {
    const toast = document.getElementById("toast");

     toast.textContent = message;

     if (type === "success") toast.style.background = "#28a745";
    else if (type === "error") toast.style.background = "#dc3545";
    else if (type === "info") toast.style.background = "#007bff";
    else toast.style.background = "#333";

     toast.classList.add("show");

     setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

