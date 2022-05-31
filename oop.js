const _private = new WeakMap();

class Book {
    constructor(title, author, price) {
        const properties = {
            _title: title,
            _author: author,
            _price: price,
        };

        _private.set(this, { properties });
    }

    get title() {
        return _private.get(this).properties["_title"];
    }

    get author() {
        return _private.get(this).properties["_author"];
    }

    set author(newAuthor) {
        return (_private.get(this).properties["_author"] = newAuthor);
    }

    get price() {
        return _private.get(this).properties["_price"];
    }

    set price(newPrice) {
        return (_private.get(this).properties["_price"] = newPrice);
    }

    getAllData() {
        console.log(`Titulo: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`);
    }

}

class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price);

        this.illustrators = illustrators;
    }

    addIllustrator(newIllustrator = []) {
        this.illustrators.push(newIllustrator);
    };

    getAllData() {
        super.getAllData();
        console.log(`Illustradores: ${this.illustrators}`);
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(amount, price) {
        this.products.push(...Array(amount).fill(price));
    };

    showProducts() {
        console.log(this.products);
    };

    calcTotal() {
        return this.products
            .map((price) => price)
            .reduce((ac, price) => ac + price, 0);
    };

    printTicket() {
        console.log(`Total a pagar ${this.calcTotal()}`)
    };

}

class Seller { }

//Instancia de Book;
const book1 = new Book("1984", "G.O", 350);
const book2 = new Book("Frankestein", "M.S", 200);

const comic1 = new Comic("The Killing Joke", "A.M", 150, ["B.B"]);

comic1.addIllustrator("J.H");

console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.showProducts();
cart.addProduct(2, comic1.price);
cart.addProduct(3, book1.price);
cart.showProducts();
cart.printTicket();


book1.getAllData();
comic1.getAllData();
