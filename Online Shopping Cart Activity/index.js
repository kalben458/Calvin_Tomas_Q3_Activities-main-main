// Online Shopping Cart Activity

// Phase 1: Products & Cart

//1
let products = [
    { name: "Laptop", price: 35000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Accessories" },
    { name: "Mouse", price: 500, category: "Accessories" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "USB Cable", price: 150, category: "Accessories" },
    { name: "Smart Watch", price: 5000, category: "Electronics" }
];

//2
products.sort(function(a, b) {
    return a.price - b.price;
});

//3
console.log("--- Initial Product List (Sorted by Price) ---");
products.forEach(function(product, index) {
    console.log(index + ": " + product.name + " - \u20B1" + product.price + " (" + product.category + ")");
});

// Step 4: Create empty cart array:
let cart = [];

//5
function addToCart(productName) {
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            cart.push(products[i]);
            console.log(productName + " added to cart!");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Product not found!");
    }
}

//6
console.log("\n--- Step 6: Initial Test Add ---");
addToCart("Laptop");
addToCart("Mouse");
addToCart("Phone");
console.log("Current cart (Laptop, Mouse, Phone):", cart);

// ---

// Phase 2

//7
function removeLastItem() {
    if (cart.length > 0) {
        let removed = cart.pop();
        console.log(removed.name + " removed from cart (pop)");
    } else {
        console.log("Cart is empty!");
    }
}

//8
function removeFirstItem() {
    if (cart.length > 0) {
        let removed = cart.shift();
        console.log(removed.name + " removed from cart (shift)");
    } else {
        console.log("Cart is empty!");
    }
}

//9
function showCart() {
    console.log("=== CART (" + cart.length + " items) ===");
    cart.forEach(function(item, index) {
        console.log(index + ": " + item.name + " - \u20B1" + item.price);
    });
}

// 10
function getTotalPrice() {
    return cart.reduce(function(sum, item) {
        return sum + item.price;
    }, 0);
}

console.log("\n--- Step 10: Reduce Test ---");
console.log("Total price (3 items): \u20B1" + getTotalPrice());


//10
removeLastItem(); // Removes Phone
showCart();
console.log("Total price (after removing one): \u20B1" + getTotalPrice());


//Phase 3

//11
function getElectronics() {
    return cart.filter(function(item) {
        return item.category === "Electronics";
    });
}

console.log("\n--- Step 11: Filter Test ---");
console.log("Electronics in cart:", getElectronics());




//12
function applyDiscount(cartItems, discountPercent) {
    return cartItems.map(function(item) {
        return {
            name: item.name,
            originalPrice: item.price,
            discountedPrice: item.price * (1 - discountPercent / 100)
        };
    });
}




let discountedCart = applyDiscount(cart, 10);
console.log("\n--- Step 12: Map Test ---");
console.log("Cart with 10% discount applied to each item:", discountedCart);



//13
function checkout() {
    let total = getTotalPrice();
    console.log("Original total: \u20B1" + total);

    if (total > 20000) {
        let discounted = applyDiscount(cart, 10);
        let discountedTotal = discounted.reduce(function(sum, item) {
            return sum + item.discountedPrice;
        }, 0);
        console.log("Discount applied! New total: \u20B1" + discountedTotal.toFixed(2));
    } else {
        console.log("Total: \u20B1" + total);
    }
}

console.log("\n--- Step 13: Checkout Test ---");
checkout();


//14
function removeItemByName(productName) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            cart.splice(i, 1);
            console.log(productName + " removed!");
            return;
        }
    }
    console.log("Item not found in cart!");
}



console.log("\n--- Step 14: Splice Test ---");
addToCart("Headphones");
removeItemByName("Mouse");
showCart();

console.log("\n====================================");
console.log("      last     ");
console.log("====================================");

//15
cart = []; 

addToCart("Laptop");
addToCart("Smart Watch");
addToCart("USB Cable");
addToCart("Headphones");

showCart();
checkout();

removeItemByName("USB Cable");
showCart();