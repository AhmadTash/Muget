


let navBarItemsCount = document.querySelector(".navbar-itemsInCart")
navBarItemsCount.addEventListener("click", () => {
  shoppingCartContainer.style.display = "flex"
})


let shoppingCartJs = []
let numOfItemsInCart = 0
let cartTotalPrice = 0
let shoppingCartItems = document.querySelector(".shoppingCart-cardsContainer")



window.addEventListener('load', () => {
  const savedShoppingCart = localStorage.getItem('shoppingCart');
  if (savedShoppingCart) {
    shoppingCartJs = JSON.parse(savedShoppingCart);
    updateShoppingCart();
    numberOfItemsInShoppingCart();
    quantityControl();
    sumOfPrice();
  }
});


function saveShoppingCartToLocalStorage() {
  localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartJs));
}



function addToShoppingCart(productId){
  const product = products.find(item => item.id === productId);
    console.log(product)
    if (product){
      console.log("product exists")

        product.quantity++

        const existingCartItem = shoppingCartJs.find(item => item.id === productId)
        
        if(existingCartItem){
          existingCartItem.quantity = product.quantity;
        } else {
          
          shoppingCartJs.push({
            id:productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: product.quantity

            
        })
        }
        
        updateShoppingCart();
        quantityControl();
        numberOfItemsInShoppingCart()
        sumOfPrice()

        saveShoppingCartToLocalStorage()
    }  

    

    
    
    

}


function updateShoppingCart(){
    shoppingCartItems.innerHTML = ""
    
    shoppingCartJs.forEach(item => {
      
        const div = document.createElement('div')
        div.className = "shoppingCart-container-prod card"
        div.setAttribute("data-heart-number", `${item.id}`)
        div.innerHTML = `
        <div class="card-body">
        <div class="shoppingCart-prod-left-container">
          <img class="shoppingCart-prodImg" src="${item.image}" alt="">
          <div class="shoppingCart-prod-left-innerContainer">
            <div class="card-title">${item.name}</div>
            <div class="shoppingCartProdQuantity">Quantity<span class="SCPQ-Subtract">-</span><span class="SCPQ-Number">${item.quantity}</span><span class="SCPQ-add">+</span></div>
          </div>
        </div>
        <div class="shoppingCart-prod-right-container">
        
          <svg class="shoppingCart-prod-menu" xmlns="http://www.w3.org/2000/svg" width="5" height="21" viewBox="0 0 5 21">
            <g id="Group_225" data-name="Group 225" transform="translate(-1851 -132)">
              <circle id="Ellipse_3" data-name="Ellipse 3" cx="2.5" cy="2.5" r="2.5" transform="translate(1851 132)" fill="#1a1a1a"></circle>
              <circle id="Ellipse_4" data-name="Ellipse 4" cx="2.5" cy="2.5" r="2.5" transform="translate(1851 140)" fill="#1a1a1a"></circle>
              <circle id="Ellipse_5" data-name="Ellipse 5" cx="2.5" cy="2.5" r="2.5" transform="translate(1851 148)" fill="#1a1a1a"></circle>
            </g>
          </svg>
          
        

        <div class="card-price">${item.price}</div>
      </div>
    </div>`

    shoppingCartItems.appendChild(div)
    })
}


let addToShoppingCartButtons = document.querySelectorAll(".card-body .myBtn")

addToShoppingCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.closest(".card-body").getAttribute("data-heart-number")
        addToShoppingCart(parseInt(productId))
    })
})



function quantityControl(){
const subtractQuantityButton = document.querySelectorAll(".SCPQ-Subtract")
const addQuantityButton = document.querySelectorAll(".SCPQ-add")

  addQuantityButton.forEach(button => { 
    
    button.addEventListener("click", () => {
      
      const productId = button.closest(".shoppingCart-container-prod").getAttribute("data-heart-number")
      
      const product = shoppingCartJs.find(item => item.id === parseInt(productId))
      
      product.quantity++
      let quantity = button.closest(".shoppingCart-container-prod").querySelector(".SCPQ-Number")
      
      quantity.innerText = product.quantity
      numberOfItemsInShoppingCart()
      sumOfPrice()
      saveShoppingCartToLocalStorage()
    })

    

  })

  subtractQuantityButton.forEach(button => {
    button.addEventListener("click", () => {
      const productId = button.closest(".shoppingCart-container-prod").getAttribute("data-heart-number")
      
      const product = shoppingCartJs.find(item => item.id === parseInt(productId))
      if(product.quantity > 1){
        product.quantity--
        let quantity = button.closest(".shoppingCart-container-prod").querySelector(".SCPQ-Number")
         quantity.innerText = product.quantity
         numberOfItemsInShoppingCart()
         sumOfPrice()
         saveShoppingCartToLocalStorage()
      } else {
        
        const existingItemIndex = shoppingCartJs.findIndex(item => item.id === parseInt(productId));
        shoppingCartJs.splice(existingItemIndex, 1)
        button.closest(".shoppingCart-container-prod").remove()
        numberOfItemsInShoppingCart()
        sumOfPrice()
        saveShoppingCartToLocalStorage()
      }
      
    })
    
  })
  
}

function numberOfItemsInShoppingCart(){
  numOfItemsInCart = 0
  
  let shoppingCartItemsCount = document.querySelector(".items-count")
  if(shoppingCartJs[0]){
    shoppingCartJs.forEach(item => {

  
      console.log(item.quantity)
      numOfItemsInCart += parseInt(item.quantity)
    
      navBarItemsCount.innerText = numOfItemsInCart
      shoppingCartItemsCount.innerText = `${numOfItemsInCart} Items`
    })
  } else {
    navBarItemsCount.innerText = 0
      shoppingCartItemsCount.innerText = `0 Items`
  }

}

function sumOfPrice() {
  cartTotalPrice = 0
  let shoppingCartTotalPrice = document.querySelector(".shoppingCart-totalPrice")
  if(shoppingCartJs[0]){
    shoppingCartJs.forEach(item => {
      cartTotalPrice += (parseInt(item.price) * item.quantity  )
      shoppingCartTotalPrice.innerText = `${cartTotalPrice} AED`
    })
  } else {
    shoppingCartTotalPrice.innerText = `0 AED`
  }
}