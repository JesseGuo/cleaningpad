function scrollToProducts() {
    document.getElementById("productList").scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    document.getElementById("contact-us").scrollIntoView({ behavior: 'smooth' });
}


// Sample product data (can be retrieved from a database)
const products = [
    { id: 1, name: "Compatible with vileda Ultramax Spray Microfibre", price: 0.84, image: "./images/vileda.jpg", description: "Альтернативы прокладкам из микроволокнистых полов для распыления Vileda Ultramax" },
    { id: 2, name: "Compatible with Swiffer Wet Jet", price: 0.63, image: "./images/swiffer.jpg", description: "Совместимость с Swiffer Wetjet" },
    { id: 3, name: "Compatible with Sleeve VILEDA Spin & Clean 161822", price: 0.77, image: "./images/Sleeve VILEDA.jpg", description: "Compatible with Sleeve VILEDA Spin & Clean 161822" },
    { id: 4, name: "Compatible with Vileda Ultramat/UltraMax XL", price: 0.98, image: "./images/UltraMax XL.jpg", description: "Compatible with Vileda Ultramat/UltraMax XL" },
    { id: 5, name: "Compatible with Shark S7000AMZ S7001 T2 T21 U6002", price: 0.67, image: "./images/Shark S7000AMZ.jpg", description: "Compatible with Shark S7000AMZ S7001 T2 T21 U6002" },
    { id: 6, name: "Compatible with  Rowenta RY7xxx, RY8xxx Replacement", price: 1.95, image: "./images/Rowenta.jpg", description: "Compatible with Rowenta RY7xxx, RY8xxx Replacement" },
    { id: 6, name: "Compatible with  Promist MAX Spray Mop", price: 0.97, image: "./images/Promist MAX Spray Mop.jpg", description: "Compatible with  Promist MAX Spray Mop" },
    { id: 7, name: "Compatible with  Schenley steam mop", price: 0.5, image: "./images/schenley2.jpg", description: "Compatible with Schenley steam mop" },
    { id: 8, name: "Compatible with  Bissell SpinWave SmartSteam Scrubbing Steam Mop 3897A", price: 1, image: "./images/Bissell SpinWave SmartSteam Scrubbing Steam Mop 3897A .jpeg", description: "Bissell SpinWave SmartSteam Scrubbing Steam Mop 3897A " },
    { id: 9, name: "Compatible with  Leifheit Profi Floor Wiper ", price: 1.2, image: "./images/leifheit.jpg", description: "Leifheit Profi Floor Wiper, 42" },
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        `;
        productItem.addEventListener("click", () => openModal(product));
        productList.appendChild(productItem);
    });
}

// Function to open modal with product details
function openModal(product) {
    const modal = document.getElementById("productModal");
    const modalProduct = document.getElementById("modalProduct");
    modalProduct.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
    `;
    modal.style.display = "block";

    // Close modal when clicking on the close button
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = () => modal.style.display = "none";

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Call the displayProducts function when the page loads
window.onload = displayProducts;
