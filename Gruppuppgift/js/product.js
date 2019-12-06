let products = [];

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
    console.log(productId);

    displayProduct(productId);

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
    product1.price = 1;
    product1.description = "Vacker tavla med ett abstrakt motiv i stilfulla färgtoner av vitt, grått, svart och guld. Illustrationen är gjord av Elisabeth Fredriksson som är känd för sina färgrika och eleganta illustrationer.";
    products.push(product1);

    let product2 = new Product();
    product2.id = 2;
    product2.title = "Deep Teal Stone";
    product2.image = "images/product_2.jpeg";
    product2.price = 1;
    product2.description = "Grafiskt och elegant print med motiv av ett grönblått mönster och eleganta guldiga linjer. Postern passar lika bra för sig själv som i kombination med andra posters i en trendig tavelvägg.";
    products.push(product2);

    let product3 = new Product();
    product3.id = 3;
    product3.title = "Corridor";
    product3.image = "images/product_3.jpg";
    product3.price = 1;
    product3.description = "Stilren svartvit poster av en lång korridor i vacker arkitektur där solljusets strålar skapar skuggmönster i marken.";
    products.push(product3);

    let product4 = new Product();
    product4.id = 4;
    product4.title = "Elephant";
    product4.image = "images/product_4.jpg";
    product4.price = 1;
    product4.description = "En fotokonst poster med motiv av en vacker och ståtlig elefant. Bilden går i svartvita toner med otroliga detaljer, vilket ger en känsla av att du nästan står där själv och möter det storslagna djuret.";
    products.push(product4);

    let product5 = new Product();
    product5.id = 5;
    product5.title = "Boat in the Lake";
    product5.image = "images/product_5.jpeg";
    product5.price = 1;
    product5.description = "En vacker naturposter med motiv av en vattenfylld dal som omringas av kantiga berg. Närmst synfältet syns en trätrappa som leder ner i vattnet och bort i horisonten. Tätt intill trätrappan ligger en träbåt vilket ger ett intressant liv till den kraftfulla naturbilden.";
    products.push(product5);

    let product6 = new Product();
    product6.id = 6;
    product6.title = "Blossom";
    product6.image = "images/product_6.jpg";
    product6.price = 1;
    product6.description = "Vacker natur poster med bild på en blommande ros. Blossom passar perfekt att kombinera med andra botaniska motiv och den gör sig väldigt bra i en tavelvägg.";
    products.push(product6);

    let product7 = new Product();
    product7.id = 7;
    product7.title = "Waterfall";
    product7.image = "images/product_7.jpg";
    product7.price = 1;
    product7.description = "Stilren naturposter med ett hisnande vackert fotografi av ett vattenfall. Tavlans mörka gröna toner gör att den ger en lugnande effekt och är enkel att kombinera med andra naturmotiv och citat.";
    products.push(product7);

    let product8 = new Product();
    product8.id = 8;
    product8.title = "Pink Wall";
    product8.image = "images/product_8.jpg";
    product8.price = 1;
    product8.description = "Vacker poster med ett fotografiskt motiv av en rosa vägg med ett vackert hålmönster i marockansk stil. Det ihåliga mönstret skapar en vacker och hänförande dynamik.";
    products.push(product8);
}

function displayProduct(x) {
    // document.write(products[x - 1].title);

    $( "#toCheckOut" ).click(function() {
        window.location.href = "\checkout.html";
      });
}