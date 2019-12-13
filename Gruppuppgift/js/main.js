let products = [];

$(document).ready(function() {
    createProducts();

    displayProducts();

    displayCart();
})

function Product() {
    this.id,
    this.title,
    this.image,
    this.price,
    this.description
}

function createProducts() {
    let product1 = new Product();
    product1.id = 1;
    product1.title = "Soothe Your Soul";
    product1.image = "images/product_1.jpg";
    product1.price = 199;
    product1.description = "Vacker tavla med ett abstrakt motiv i stilfulla färgtoner av vitt, grått, svart och guld. Illustrationen är gjord av Elisabeth Fredriksson som är känd för sina färgrika och eleganta illustrationer.";
    products.push(product1);

    let product2 = new Product();
    product2.id = 2;
    product2.title = "Deep Teal Stone";
    product2.image = "images/product_2.jpeg";
    product2.price = 179;
    product2.description = "Grafiskt och elegant print med motiv av ett grönblått mönster och eleganta guldiga linjer. Postern passar lika bra för sig själv som i kombination med andra posters i en trendig tavelvägg.";
    products.push(product2);

    let product3 = new Product();
    product3.id = 3;
    product3.title = "Corridor";
    product3.image = "images/product_3.jpg";
    product3.price = 179;
    product3.description = "Stilren svartvit poster av en lång korridor i vacker arkitektur där solljusets strålar skapar skuggmönster i marken.";
    products.push(product3);

    let product4 = new Product();
    product4.id = 4;
    product4.title = "Elephant";
    product4.image = "images/product_4.jpg";
    product4.price = 199;
    product4.description = "En fotokonst poster med motiv av en vacker och ståtlig elefant. Bilden går i svartvita toner med otroliga detaljer, vilket ger en känsla av att du nästan står där själv och möter det storslagna djuret.";
    products.push(product4);

    let product5 = new Product();
    product5.id = 5;
    product5.title = "Boat in the Lake";
    product5.image = "images/product_5.jpeg";
    product5.price = 199;
    product5.description = "En vacker naturposter med motiv av en vattenfylld dal som omringas av kantiga berg. Närmst synfältet syns en trätrappa som leder ner i vattnet och bort i horisonten. Tätt intill trätrappan ligger en träbåt vilket ger ett intressant liv till den kraftfulla naturbilden.";
    products.push(product5);

    let product6 = new Product();
    product6.id = 6;
    product6.title = "Blossom";
    product6.image = "images/product_6.jpg";
    product6.price = 179;
    product6.description = "Vacker natur poster med bild på en blommande ros. Blossom passar perfekt att kombinera med andra botaniska motiv och den gör sig väldigt bra i en tavelvägg.";
    products.push(product6);

    let product7 = new Product();
    product7.id = 7;
    product7.title = "Waterfall";
    product7.image = "images/product_7.jpg";
    product7.price = 199;
    product7.description = "Stilren naturposter med ett hisnande vackert fotografi av ett vattenfall. Tavlans mörka gröna toner gör att den ger en lugnande effekt och är enkel att kombinera med andra naturmotiv och citat.";
    products.push(product7);

    let product8 = new Product();
    product8.id = 8;
    product8.title = "Pink Wall";
    product8.image = "images/product_8.jpg";
    product8.price = 179;
    product8.description = "Vacker poster med ett fotografiskt motiv av en rosa vägg med ett vackert hålmönster i marockansk stil. Det ihåliga mönstret skapar en vacker och hänförande dynamik.";
    products.push(product8);
}

function displayProducts() {

    let container = $("#productcontainer");
    // let container = document.getElementById("productcontainer");

    for (let i = 0; i < products.length; i++) {
        
        let product = $("<div>").addClass("col-6 col-md-3 productdiv text-center");
        container.append(product);

        let imageDiv = $("<div>");
        let image = $("<img>").addClass("img-fluid productimage").attr("src", products[i].image).click(function() {
            window.location.href = "html/product.html?id=" + products[i].id;
        });
        
        product.append(imageDiv);
        imageDiv.append(image);

        let title = $("<h5>").addClass("pt-1").html(products[i].title);
        product.append(title);

        let price = $("<p>").html(products[i].price + " kr");
        product.append(price);
    }

    $( "#toCheckOut" ).click(function() {
        window.location = "html/checkout.html";
      });
    
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let cartQuantity = 0;

    for (let i = 0; i < cart.length; i++) {
        cartQuantity += cart[i].quantity;
    }

    $("#cart").empty();
    $("#badge").empty();

    for (let i = 0; i < cart.length; i++) {
        
        $("#cart").append($("<h6>").html(cart[i].title));
        let price = $("<p>").html(cart[i].price * cart[i].quantity + " kr");
        $("#cart").append($("<i>").addClass("fas fa-minus").click(function() {
            removeFromCart(cart[i].id);
        }));
        $("#cart").append($("<span>").addClass("px-2").html (cart[i].quantity));
        $("#cart").append($("<i>").addClass("fas fa-plus").click(function() {
            addToCart(cart[i].id - 1);
        }));

        $("#badge").html(cartQuantity);
    }

    calculateTotalPrice();

}

function addToCart(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === x ) {
                cart[i].quantity++;
  
                
            }
        }
        
    localStorage.setItem("cart", JSON.stringify(cart));
  
    displayCart();
  }

function removeFromCart(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === x ) {
            cart[i].quantity--;

            if (cart[i].quantity === 0) {
                cart.splice(i, 1);
            }
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function calculateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let totalPrice = 0;
  
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
  
    if (totalPrice > 0) {
      
      $("#cart").append($("<span>").html("<b>Totalt: </b>" + totalPrice + " kr"));
    }
  
    else {
      $("#cart").append($("<span>").html("<b>Totalt: </b> 0 kr"));
    }
    console.log(totalPrice);
  
  }