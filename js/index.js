// ITERATION 1
const buttonRemove = document.querySelectorAll(".btn-remove")
const table = document.querySelector("tbody")

function updateSubtotal() {
  const price = product.querySelector(".price span")
  const quantity =  product.querySelector(".quantity input")
  const subTotalElement = product.querySelector(".subtotal span")
  subTotalElement.innerHTML = price.innerHTML * quantity.value
return subTotalElement.innerHTML
}

function calculateAll() {
  const totalValue = document.querySelector(".total-value span")
  const totalSum = updateSubtotal()
  totalValue.innerHTML = totalSum
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

    //console.log(allProducts);
  }
  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
    const currentElement = event.target.parentNode.parentNode;
    table.removeChild(currentElement)
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

[...buttonRemove].map((button) => {
  button.addEventListener('click', function(event){
    removeProduct(event);
  });
}) 