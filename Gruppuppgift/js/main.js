let products = [];

window.onload = function() {
    createProducts();

    console.log(products);
}

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
    product1.title = "titel1";
    product1.image = "bild.jpg";
    product1.price = 1;
    product1.description = "beskrivning";
    products.push(product1);

    let product2 = new Product();
    product2.id = 2;
    product2.title = "titel2";
    product2.image = "bild.jpg";
    product2.price = 1;
    product2.description = "beskrivning";
    products.push(product2);

    let product3 = new Product();
    product3.id = 3;
    product3.title = "titel3";
    product3.image = "bild.jpg";
    product3.price = 1;
    product3.description = "beskrivning";
    products.push(product3);

    let product4 = new Product();
    product4.id = 4;
    product4.title = "titel4";
    product4.image = "bild.jpg";
    product4.price = 1;
    product4.description = "beskrivning";
    products.push(product4);

    let product5 = new Product();
    product5.id = 5;
    product5.title = "titel5";
    product5.image = "bild.jpg";
    product5.price = 1;
    product5.description = "beskrivning";
    products.push(product5);

    let product6 = new Product();
    product6.id = 6;
    product6.title = "titel6";
    product6.image = "bild.jpg";
    product6.price = 1;
    product6.description = "beskrivning";
    products.push(product6);

    let product7 = new Product();
    product7.id = 7;
    product7.title = "titel7";
    product7.image = "bild.jpg";
    product7.price = 1;
    product7.description = "beskrivning";
    products.push(product7);

    let product8 = new Product();
    product8.id = 8;
    product8.title = "titel8";
    product8.image = "bild.jpg";
    product8.price = 1;
    product8.description = "beskrivning";
    products.push(product8);
}