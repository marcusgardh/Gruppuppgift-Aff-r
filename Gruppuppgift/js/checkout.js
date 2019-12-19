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


  let $radios = $('input[name="theshipping"]');
  $radios.change(function() {
    let $checked = $radios.filter(function() {
      return $(this).prop('checked');
    });
    // Output the value of the checked radio
    calculateTotalPrice($checked.val());
});

});

// Visa varukorgen som hämtas från LocalStorage
function displayCheckOut(){
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  $("#checkOutBag").empty();

  for (let i = 0; i < cart.length; i++) {
  
    let img = $("<img>").addClass("img-fluid w-25 imgcheck mr-4").attr("src", cart[i].image);
    let text = $("<h6>").addClass("py-2").html(cart[i].title);
    let minus = $("<i>").addClass("fas fa-minus mt-2 quant").click(function() {
      removeFromCart(cart[i].id); 
    });
    let quantity = $("<span>").addClass("px-2 mt-2").html(cart[i].quantity);
    let plus = $("<i>").addClass("fas fa-plus mt-2 quant").click(function() {
      addToCart(cart[i].id);
    });
    let deleteIt = $("<i>").addClass("fas fa-times d-flex quant pt-2 pb-3").click(function() {
            deleteItem(cart[i].id);
    });

    
    let price = $("<p>").addClass("pt-4").html(cart[i].price * cart[i].quantity + " kr");
    
    $("#checkOutBag").append(($("<div>").addClass("d-flex mb-1 pl-3 pb-1 w-100 img-fluid border-bottom").append(img).append($("<div>").addClass("w-100 d-flex justify-content-between ml-3").append(text).append($("<div>").addClass("justify-content-end mr-4").append(deleteIt).append(minus).append(quantity).append(plus).append(price)))));

  }

  // Välj fraktmetod. Utifrån radioknapparnas value bestäms fraktpriset
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

//Minska antalet produkter i varukorgen med 1 av det specifika id:t
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

//Ta bort varan ur varukorgen oavsett kvantitet
function deleteItem(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === x ) {
        cart.splice(i,1);
    }
}

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCheckOut();
}

//Öka antalet produkter i varukorgen med 1 av det specifika id:t
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
// Räkna ut totalpris på beställningen inkl frakt, skriv ut pris, frakt och pris+frakt
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

// När order lagts, töm innehållet på sidan
function orderComplete(firstName, mail) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  
  $("#maincontent").empty();
  //Slumpa ordernummer
  let orderNumber = Math.floor(Math.random() * 1001);

  $("#maincontent").append($("<h3>").addClass("mt-5 pt-3").html("Tack för din order " + firstName + ", ditt ordernummer är #" + orderNumber));
  $("#maincontent").append($("<h3>").html("Ditt kvitto har skickats till " + mail));
  $("#maincontent").append($("<a>").attr("href", "../index.html").html("Tillbaka till start"));
}
