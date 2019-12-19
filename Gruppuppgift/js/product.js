$(".thumbnail").click(function() {
    imgsrc = $(this).attr('src');
    $(".displayimage").attr("src",imgsrc);
	
});

let products = [];
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

$(document).ready(function() {
    createProducts();

    let productId = getParameterByName("id");

    displayProduct(productId);

    displayCart();

})

// Klass för produkterna som de visas på produktsidan
function Product() {
    this.id,
    this.title,
    this.image,
    this.secondimage,
    this.price,
    this.description,
    this.size
}

//Klass för produkterna som de visas i varukorgen
function CartProduct() {
    this.title,
    this.image,
    this.price,
    this.id,
    this.quantity

}

// Skapa upp alla object (produkter) utifrån Product-klassen
function createProducts() {
    let product1 = new Product();
    product1.id = 1;
    product1.title = "Soothe Your Soul";
    product1.image = "../images/product_1.jpg";
    product1.secondImage = "../images/product_1.2.jpg";
    product1.price = 199;
    product1.description = "Vacker tavla med ett abstrakt motiv i stilfulla färgtoner av vitt, grått, svart och guld. Illustrationen är gjord av Elisabeth Fredriksson som är känd för sina färgrika och eleganta illustrationer.";
    product1.size = "50 x 70 cm"
    products.push(product1);

    let product2 = new Product();
    product2.id = 2;
    product2.title = "Deep Teal Stone";
    product2.image = "../images/product_2.jpeg";
    product2.secondImage = "../images/product_2.2.jpg";
    product2.price = 199;
    product2.description = "Grafiskt och elegant print med motiv av ett grönblått mönster och eleganta guldiga linjer. Postern passar lika bra för sig själv som i kombination med andra posters i en trendig tavelvägg.";
    product2.size = "50 x 70 cm"
    products.push(product2);

    let product3 = new Product();
    product3.id = 3;
    product3.title = "Corridor";
    product3.image = "../images/product_3.jpg";
    product3.secondImage = "../images/product_3.2.jpg";
    product3.price = 179;
    product3.description = "Stilren svartvit poster av en lång korridor i vacker arkitektur där solljusets strålar skapar skuggmönster i marken.";
    product3.size = "50 x 70 cm"
    products.push(product3);

    let product4 = new Product();
    product4.id = 4;
    product4.title = "Elephant";
    product4.image = "../images/product_4.jpg";
    product4.secondImage = "../images/product_4.2.jpg";
    product4.price = 199;
    product4.description = "En fotokonst poster med motiv av en vacker och ståtlig elefant. Bilden går i svartvita toner med otroliga detaljer, vilket ger en känsla av att du nästan står där själv och möter det storslagna djuret.";
    product4.size = "50 x 70 cm"
    products.push(product4);

    let product5 = new Product();
    product5.id = 5;
    product5.title = "Boat in the Lake";
    product5.image = "../images/product_5.jpeg";
    product5.secondImage = "../images/product_5.2.jpg";
    product5.price = 199;
    product5.description = "En vacker naturposter med motiv av en vattenfylld dal som omringas av kantiga berg. Närmst synfältet syns en trätrappa som leder ner i vattnet och bort i horisonten. Tätt intill trätrappan ligger en träbåt vilket ger ett intressant liv till den kraftfulla naturbilden.";
    product5.size = "50 x 70 cm"
    products.push(product5);

    let product6 = new Product();
    product6.id = 6;
    product6.title = "Blossom";
    product6.image = "../images/product_6.jpg";
    product6.secondImage = "../images/product_6.2.jpg";
    product6.price = 179;
    product6.description = "Vacker natur poster med bild på en blommande ros. Blossom passar perfekt att kombinera med andra botaniska motiv och den gör sig väldigt bra i en tavelvägg.";
    product6.size = "50 x 70 cm"
    products.push(product6);

    let product7 = new Product();
    product7.id = 7;
    product7.title = "Waterfall";
    product7.image = "../images/product_7.jpg";
    product7.secondImage = "../images/product_7.2.jpg";
    product7.price = 199;
    product7.description = "Stilren naturposter med ett hisnande vackert fotografi av ett vattenfall. Tavlans mörka gröna toner gör att den ger en lugnande effekt och är enkel att kombinera med andra naturmotiv och citat.";
    product7.size = "50 x 70 cm"
    products.push(product7);

    let product8 = new Product();
    product8.id = 8;
    product8.title = "Pink Wall";
    product8.image = "../images/product_8.jpg";
    product8.secondImage = "../images/product_8.2.jpeg";
    product8.price = 179;
    product8.description = "Vacker poster med ett fotografiskt motiv av en rosa vägg med ett vackert hålmönster i marockansk stil. Det ihåliga mönstret skapar en vacker och hänförande dynamik.";
    product8.size = "50 x 70 cm"
    products.push(product8);

    let product9 = new Product();
    product9.id = 9;
    product9.title = "Golden Palm";
    product9.image = "../images/product_9.jpg";
    product9.secondImage = "../images/product_9.2.jpg";
    product9.price = 199;
    product9.description = "Foto av palmblad mot en vägg i dova toner av guld, grått och grönt.";
    product9.size = "50 x 70 cm"
    products.push(product9);

    let product10 = new Product();
    product10.id = 10;
    product10.title = "Hiding in White";
    product10.image = "../images/product_10.jpg";
    product10.secondImage = "../images/product_10.2.jpg";
    product10.price = 179;
    product10.description = "Svartvitt fotografi av en person dold bakom böljande vitt tyg."
    product10.size = "50 x 70 cm"
    products.push(product10);

    let product11 = new Product();
    product11.id = 11;
    product11.title = "Brooklyn Building";
    product11.image = "../images/product_11.jpg";
    product11.secondImage = "../images/product_11.2.jpg";
    product11.price = 179;
    product11.description = "I Brooklyn, stadsdelen med störst befolkning i New York, hittar du New York-byggnader i en mer antik stil. Vårt kreativa team fotade denna fasad tillsammans med en trappuppgång som visar ett New York bortom studiolägenheter och moderna skyskrapor. Postern har en vit kant runt om som ramar in motivet fint.";
    product11.size = "50 x 70 cm"
    products.push(product11);

    let product12 = new Product();
    product12.id = 12;
    product12.title = "Purpose";
    product12.image = "../images/product_12.jpg";
    product12.secondImage = "../images/product_12.2.jpg";
    product12.price = 199;
    product12.description = "Peytil - Purpose poster. Konstnärlig poster med motiv av en människa i flera färger uppdelade i lager. Denna poster blir definitvt en speciell dekorationdetalj i hemmet som inte kommer gå obemärkt förbi! Passar perfekt att sätta upp i ett vardagsrum eller sovrum och passar lika bra på en vägg enskild som tillsammans med fler posters. En populär kombination är att matcha våra posters med konstmotiv tillsammans med en av våra texttavlor. Motiv skapat av Peytil, ett Stockholmsbaserat konstprojekt med Eitil Thorén Due som grundare.";
    product12.size = "50 x 70 cm"
    products.push(product12);
}

function displayProduct(x) {

    let arrayId = x - 1;

    console.log(arrayId);

    $(document).attr("title", products[arrayId].title);

    $("#producttitle").html(products[arrayId].title);

    $("#productimage").attr("src", products[arrayId].image);

    $("#productsecondimage").attr("src", products[arrayId].secondImage);

    $("#productdescription").html(products[arrayId].description);
    $("#productsize").html("Storlek: " + products[arrayId].size);

    $("#productprice").html(products[arrayId].price + " kr");

    $("#buybutton").click(function() {
        addToCart(arrayId);
    });
}

function addToCart(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length) {
        let found = false;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === x + 1    ) {
                cart[i].quantity++;

                found = true;
            }
        }
        if (found == false) {
            let cartItem = new CartProduct();
            cartItem.title = products[x].title;
            cartItem.image = products[x].image;
            cartItem.price = products[x].price;
            cartItem.id = products[x].id;
            cartItem.quantity = 1;
            cart.push(cartItem); 
        }    
    }

    else {
        let cartItem = new CartProduct();
            cartItem.title = products[x].title;
            cartItem.image = products[x].image;
            cartItem.price = products[x].price;
            cartItem.id = products[x].id;
            cartItem.quantity = 1;
            cart.push(cartItem); 
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
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
        let img = $("<img>").addClass("img-fluid w-25").attr("src", cart[i].image);
        let title = $("<h6>").addClass("mb-4").html(cart[i].title);
        let minus = $("<i>").addClass("fas fa-minus quant").click(function() {
            removeFromCart(cart[i].id - 1);
        });
        let quantity = $("<span>").addClass("mx-2").html(cart[i].quantity);
        let plus = $("<i>").addClass("fas fa-plus quant").click(function() {
            addToCart(cart[i].id - 1);
        });
        let deleteIt = $("<i>").addClass("fas fa-times quant pb-4").click(function() {
            deleteItem(cart[i].id);
        });
        let quantityContainer = $("<div>").addClass("mb-4").append(minus).append(quantity).append(plus).append(deleteIt);
        let price = $("<p>").html(cart[i].price * cart[i].quantity + " kr");
        
        $("#cart").append(($("<div>").addClass("d-flex pl-3 pb-1 pt-1 w-100 img-fluid border-top").append(img).append($("<div>").addClass("w-100 d-flex justify-content-between ml-3 pt-2").append(title).append($("<div>").addClass("justify-content-end mr-4").append(deleteIt).append(quantityContainer).append(price)))));

        $("#badge").html(cartQuantity);
    }

    if (cartQuantity === 0) {

        $("#badge").hide()
    }

    else {
        $("#badge").show();
    }

    if (cart.length) {
        $("#toCheckOut").removeAttr("disabled", "disabled");
        $( "#toCheckOut" ).click(function() {
            window.location = "checkout.html";
        }); 
    }
    else {
        $("#toCheckOut").attr("disabled", "disabled");
    }

    calculateTotalPrice();

}

function removeFromCart(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    console.log(x);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === x + 1) {
            cart[i].quantity--;

            if (cart[i].quantity === 0) {
                cart.splice(i, 1);
            }
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function deleteItem(x) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === x ) {
        cart.splice(i,1);
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
      
      $("#cart").append($("<div>").addClass("row justify-content-end d-flex totPriceCart py-2").append($("<span>").addClass("pr-3").html("<b>Totalt: </b> " + totalPrice + " kr")));
    }
  
    else {
      $("#cart").append($("<span>").html("<b>Totalt: </b> 0 kr"));
    }
    console.log(totalPrice);
  
  }