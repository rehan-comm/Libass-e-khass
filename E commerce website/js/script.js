
let cartCount = 0;
let cartItems = [];
let totalAmount = 0;

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const price = parseInt(this.getAttribute('data-price'));
        cartCount++;
        cartItems.push({
            name: this.previousElementSibling.previousElementSibling.textContent,
            price: price,
            Image: this.previousElementSibling.previousElementSibling.previousElementSibling.src
        });
        totalAmount += price;

        document.querySelector('.cart-count').textContent = cartCount;
    });
});

// Cart Icon Click Event
document.querySelector('.ri-shopping-bag-2-fill').addEventListener('click', () => {
    let cartPage = window.open('', '_blank');
    cartPage.document.write(`
        <html>
        <head>
        <title>Cart Page - Libass-e-Khass</title>
        <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
        rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            body {
                background-color: aliceblue;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }

            h1 {
                text-align: center;
                margin-top: 20px;
                font-size: 30px;
                margin-top: 20px;
                font-weight: bold;
            }

            table {
                width: 90%;
                margin: 20px auto;
                border-collapse: collapse;
            }

            th, td {
                padding: 10px;
                text-align: left;
                border: 1px solid #ddd;
            }

            td img {
                width: 60px;
                height: 60px;
                border: 2px solid black;
            }

            .total {
                font-size: 20px;
                font-weight: bold;
                margin-top: 20px;
                text-align: right;
                margin-right: 10%;
            }

        
            .total-amount {
               text-align: right;
    margin-top: 10px;
    margin-right: 5%;
    height: 70px;
    margin-left: 601px;
    width: 257px;
    text-align: center;

            }

            .coupon-code {
            border-bottom: 2px solid black;
            text-align: right;
            margin-top: 10px;
            margin-right: 5%;
            height: 70px;
            margin-left: 601px;
            width: 257px;
            text-align: center;
            }

.coupon-code p{
font-size: 20px;
               margin-top: 0px;
}

            .total-amount p{
               font-size: 20px;
               margin-top: 20px;
            }


            @media (max-width: 768px) {
                table {
                    width: 100%;
                }

                .total {
                    font-size: 18px;
                    margin-right: 5%;
                }

                button {
                    width: 100%;
                }

                .coupon-code, .total-amount {
                    margin-right: 2%;
                    font-size: 16px;
                }
            }

            @media (max-width: 480px) {
                th, td {
                    padding: 8px;
                }

                td img {
                    width: 50px;
                    height: 50px;
                }

                .total {
                    font-size: 18px;
                    margin-right: 2%;
                }

                button {
                    padding: 12px;
                }
            }

                    .checkout-btn {
                width: 90%;
                padding: 10px;
                margin-left: 45px;
                background-color: black;
                color: white;
                border: none;
                cursor: pointer;
                transition: background-color 0.3s ease;
                font-size: 18px;
            }

            .checkout-btn:hover {
                background-color: darkgray;
            }

        </style>
        </head>
        <body>
            <h1>Your Cart</h1>
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${cartItems.map(item => `
                        <tr>
                            <td><img src="${item.Image}" alt="${item.name}"></td>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="coupon-code">
            <br>
                <p>Coupon Code: 40</p>
            </div>
            <div class="total-amount">
                <p>Total Amount: ₹ ${totalAmount + 40}</p>
            </div>
            <button class="checkout-btn" onclick="openPaymentPage()">Checkout</button>
            <script>
                function openPaymentPage() {
                    window.open('checkout.html', '_blank');
                }
            </script>
        </body>
        </html>
    `);
});

let currentIndex = 0;
const totalItems = document.querySelectorAll('.slider-item').length;
const sliderWrapper = document.getElementById('sliderWrapper');

// Next Button
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < totalItems - 4) {  // Ensure 4 items visible at a time
        currentIndex++;
        sliderWrapper.style.transform = `translateX(-${(currentIndex * 220)}px)`;  // Move by 220px (200px for image + 20px for space)
    }
});

// Prev Button
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        sliderWrapper.style.transform = `translateX(-${(currentIndex * 220)}px)`;  // Move back
    }
});

const toggleMenu = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

toggleMenu.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
