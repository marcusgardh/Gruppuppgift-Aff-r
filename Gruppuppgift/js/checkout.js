//Bootstrap validation of the form

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function CartProduct() {
  this.title,
  this.image,
  this.price,
  this.id,
  this.quantity

}

$(document).ready(function() {

  displayCheckOut();
  
})

function displayCheckOut(){
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  $("#checkOutBag").empty();

  for (let i = 0; i < cart.length; i++) {
  
    let img = $("<img>").addClass("img-fluid").attr("src", cart[i].image);
    let text = $("<h6>").addClass("py-2").html(cart[i].title);
    let minus = $("<i>").addClass("fas fa-minus").click(function() {
      removeFromCart(cart[i].id); 
    });
    let quantity = $("<span>").addClass("px-2").html(cart[i].quantity);
    let plus = $("<i>").addClass("fas fa-plus").click(function() {
      addToCart(cart[i].id);

    });
    let price = $("<p>").html(cart[i].price * cart[i].quantity + " kr");
    
    $("#checkOutBag").append(($("<div>").addClass("product col-6 col-md-2").append(img).append(text).append(minus).append(quantity).append(plus).append(price)));

    calculateTotalPrice();

  }

}

function removeFromCart(x) {
let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
for (let i = 0; i < cart.length; i++) {
  if (cart[i].id === x) {
    cart[i].quantity--;

    if (cart[i].quantity === 0) {
      cart.splice(i, 1);
    }
  }
}

localStorage.setItem("cart", JSON.stringify(cart));
displayCheckOut();
}

function addToCart(x) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

      for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === x ) {
              cart[i].quantity++;

              
          }
      }
      
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCheckOut();
}

function calculateTotalPrice() {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }

  if (totalPrice > 0) {
    
    $("#totalprice").html("<b>Totalt: </b>" + totalPrice + " kr");
  }

  else {
    $("#totalprice").html("<b>Totalt: </b> 0 kr");
  }
  console.log(totalPrice);

}

  $("#formSubmit").click(function(){
    $("#pay-ship").toggle();
  });
