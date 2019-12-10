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

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    for (let i = 0; i < cart.length; i++) {
        $("#checkOutBag").append($("<h6>").html(cart[i].title));
        $("#checkOutBag").append($("<p>").html(cart[i].price + " kr"));
        $("#checkOutBag").append($("<i>").addClass("far fa-trash-alt").click(function() {
            removeFromCart(i);
        }));
      
    }

})
