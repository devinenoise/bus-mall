import { products } from './products.js';

// make copy of our products data
const productsData = products.slice();

export function findById(productArray, id) {
    for (let i = 0; i < productArray.length; i++) {
        const item = productArray[i];
        if (item.id === id) {
            return item;
        }
    }

}

// keep track of how many times a user has voted, period (up to 25)
let totalVotes;
let productVoteDetails;
// keep track of the votes for a given product
//let productVoteDetails;


const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
    productsData.forEach(product => {
        const initialVote = {
            id: product.id,
            votes: 0
        };
        productVoteDetails.push(initialVote);
    });

};

// set the votes array ([]) and total votes array ([]) to their initial states
initializeState();



// display three random non duplicated products
function getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * productsData.length);
    const randomProduct = productsData[randomIndex];
    return randomProduct;
}

// display three products on the screen
const displayThreeProducts = () => {
    // GET three random products from our data
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);

    // make sure the products are unique by comparing them ( || = OR )
    while (product1.id === product2.id || product2.id === product3.id || product1 === product3) {
        // generate a new random unique product
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }

    // render these three items on the screen as radio buttons with the same name and different values

    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');

    const radio1Span = document.getElementById('product1span');
    const radio2Span = document.getElementById('product2span');
    const radio3Span = document.getElementById('product3span');

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    radio1.value = product1.id;
    radio2.value = product2.id;
    radio3.value = product3.id;

    radio1Span.textContent = product1.name;
    radio2Span.textContent = product2.name;
    radio3Span.textContent = product3.name;

    img1.src = product1.image;
    img2.src = product2.image;
    img3.src = product3.image;

    
};


const form = document.querySelector('form');

const reset = () => {
    initializeState();
};

// EVENT LISTENER

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const selectedProductId = formData.get('product');

    totalVotes++;
    // which ever one they clicked on, see if they've voted for it before
    const productInVotesArray = findById(productVoteDetails, selectedProductId);

    if (productInVotesArray) {
        // if there's a product in the votes array, increment votes for the product in the votes array
        productInVotesArray.votes++;
    } else {
        // if there's no product in the votes array, push a product into the vote array
        const newVoteObject = {
            id: selectedProductId,
            votes: 1
        };
        productVoteDetails.push(newVoteObject);
    }

    localStorage.setItem('votes', JSON.stringify(productVoteDetails));

    if (totalVotes >= 25) {
        // document.querySelector('button').disabled = true;
        alert('Thanks for your participation');
        // reset the whole app when finished
        reset();
        window.location = 'results.html';
    }

    displayThreeProducts();

});





displayThreeProducts();

// STRETCH don't show the same product twice in a row
// STRETCH - keep track of how many times a product appears so we can build a percentage (times clicked / times shown)