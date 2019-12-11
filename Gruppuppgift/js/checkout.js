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

  $(document).ready(function() {

    displayCheckOut();

    
})

function displayCheckOut(){
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    $("#checkOutBag").empty();
    for (let i = 0; i < cart.length; i++) {
        $("#checkOutBag").append($("<h6>").addClass("py-2").html(cart[i].title));
        $("#checkOutBag").append($("<p>").html(" x " + cart[i].quantity));
        $("#checkOutBag").append($("<p>").html(cart[i].price * cart[i].quantity + " kr"));
        let imageDiv = $("<div>").classList("imgDiv");
        let image = $("<img>").addClass("img-fluid").attr("src", cart[i].image);
        $("#checkOutBag").append($("<i>").addClass("far fa-trash-alt").click(function() {
            removeFromCart(cart[i].id);
        }));
      
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