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

        if(form.checkValidity() === true) {
          let firstName = $("#inputFirstName").val();
          let mail = $("#inputEmail").val();
          orderComplete(firstName, mail);
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

  // $("#order").click(function() {
  //   alert("Hej");
  // });

  let $radios = $('input[name="theshipping"]');
  $radios.change(function() {
    let $checked = $radios.filter(function() {
      return $(this).prop('checked');
    });
    // Output the value of the checked radio
    calculateTotalPrice($checked.val());
});

});

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
    let price = $("<p>").addClass("pt-2").html(cart[i].price * cart[i].quantity + " kr");
    
    $("#checkOutBag").append(($("<div>").addClass("product col-6 col-md-2").append(img).append(text).append(minus).append(quantity).append(plus).append(price)));

  }

  let $radios = $('input[name="theshipping"]');
  let $checked = $radios.filter(function() {
      return $(this).prop('checked');
    });
    // Output the value of the checked radio
    calculateTotalPrice($checked.val());
  $radios.change(function() {
    let $checked = $radios.filter(function() {
      return $(this).prop('checked');
    });
    // Output the value of the checked radio
    calculateTotalPrice($checked.val());
  });

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

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
    
  $("#totalprice").html("<b>Pris: </b>" + totalPrice + " kr");

  console.log(totalPrice);

  $("#shippingprice").html("<b>Frakt: </b>" + shipping + " kr");

  let allPrice = parseInt(totalPrice) + parseInt(shipping);

  $("#allprice").html("<b>Totalt: </b>" + allPrice + " kr");
}

function orderComplete(firstName, mail) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  
  $("#maincontent").empty();

  let orderNumber = Math.floor(Math.random() * 1001);

  $("#maincontent").append($("<h3>").addClass("mt-5 pt-3").html("Tack för din order " + firstName + ", ditt ordernummer är #" + orderNumber));
  $("#maincontent").append($("<h3>").html("Ditt kvitto har skickats till " + mail));
  $("#maincontent").append($("<a>").attr("href", "../index.html").html("Tillbaka till start"));
}
