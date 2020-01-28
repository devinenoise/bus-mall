export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }

    //remove product from the array
    removeProduct(someId) {
        this.products.forEach((product, i) => {
            if (someId === product.id) {
                this.products.splice(i, 1);
            }
        });
    }

    //get certain products
    getProductById(someId) {
        let productMatch;

        this.products.forEach(product => {
            if (someId === product.id) {
                productMatch = product;
            }
        });    

        return productMatch;
    }

    




    }

}