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

<<<<<<< HEAD
  $("input").on( "click", function() {
    calculateTotalPrice($( "input:checked" ).val());
  });
  
=======
  $( ".theShipping" ).on( "click", function() {
    $( "#allprice" ).html( $( "input:checked" ).val() + " kr");
})

>>>>>>> a7c053a435ac9f348625bd306b8eb4fdf071367f
})

console

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

function calculateTotalPrice(shipping) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  let totalPrice = 0;
  let shippingPrice = 0;
  shippingPrice = shippingPrice += shipping;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  } 

  console.log(shippingPrice);

  if (totalPrice > 0) {
    totalPrice = totalPrice += shippingPrice;
    $("#totalprice").html("<b>Totalt: </b>" + totalPrice + " kr");
  }

  else {
    $("#totalprice").html("<b>Pris: </b> 0 kr");
  }
  console.log(totalPrice);

}

  $("#formSubmit").click(function(){
    $("#pay-ship").toggle();
  });

function orderComplete() {
  $("#orderarea").empty();
  $("body").append($("<h3>").html("Tack för din beställning"));
}

let allPrice = parseInt(totalPrice) + parseInt(shipping);
