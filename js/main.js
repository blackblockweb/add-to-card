
var card = document.querySelector(".card")
var product = document.querySelectorAll("#product li");
var cart = document.getElementById("cart");
var cart1 = document.getElementById("cart1");
var totalPrice = 0;
var btn1 = document.getElementById("btn1");
var total = document.getElementById("total");
var tilte = document.getElementById("tilte");


product.forEach(function (item) {
    item.addEventListener("click", function () {
        totalPrice += +(item.getAttribute("price"));
        cart1.innerHTML += item.textContent + " ";
        if (cart1.innerHTML != "") {
            btn1.style.display = "block";
        }
    });
});

btn1.addEventListener("click", function () {
    total.innerHTML = "Total Price: $" + totalPrice;
});
