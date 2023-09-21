let wishListContainer = document.querySelector(".wishList-container")
let wishListContainerShowBtn = document.querySelector(".wishList-containerShowBtn")
let wishListContainerHideBtn = document.querySelector(".wishList-containerHideBtn")
let prodImgsCol = document.querySelector(".prod-imgs-col")
let prodImgsSrcs = document.querySelectorAll(".prod-imgs-col img")


let imgNumber = []

prodImgsSrcs.forEach((img, index) => {
  imgNumber[index] = img.src
})

console.log(imgNumber)


if(screen.width <= 1200){
    prodImgsCol.innerHTML = `<section id="image-carousel" class="splide" aria-label="Beautiful Images">
    <div class="splide__track">
          <ul class="splide__list">
              <li class="splide__slide">
                  <img src="${imgNumber[0]}" alt="">
              </li>
              <li class="splide__slide">
                  <img src="${imgNumber[1]}" alt="">
              </li>
              <li class="splide__slide">
                  <img src="${imgNumber[2]}" alt="">
              </li>
          </ul>
    </div>
  </section>`
}


wishListContainerShowBtn.addEventListener("click", () => {
    wishListContainer.style.display = "block"
})

wishListContainerHideBtn.addEventListener("click", () => {
    wishListContainer.style.display = "none"
})





const products = [
    {
        id: 0,
        name: "Pearl Earrings",
        price: "1500 AED",
        image: 'images/Component 4 – 1.png',
        quantity: 0
    },
    {
        id: 1,
        name: "Elegance Band",
        price: "1500 AED",
        image: 'images/Component 3 – 1.png',
        quantity: 0
    },
    {
        id: 2,
        name: "Deux Pearl Earrings",
        price: "1500 AED",
        image: 'images/Component 2 – 1.png',
        quantity: 0
    },
    {
        id: 3,
        name: "Amavi",
        price: "1500 AED",
        image: 'images/Component 5 – 1.png',
        quantity: 0
    },
    {
        id: 4,
        name: "Vermeil",
        price: "1500 AED",
        image: 'images/Component 6 – 1.png',
        quantity: 0
    },
    {
        id: 5,
        name: "Sphere Earrings",
        price: "1500 AED",
        image: 'images/Image 25.png',
        quantity: 0
    },
    {
        id: 6,
        name: "Ivory",
        price: "1500 AED",
        image: 'images/new/Image 12.png',
        quantity: 0
    },
    {
        id: 7,
        name: "Swirling",
        price: "1500 AED",
        image: 'images/new/Image 17.png',
        quantity: 0
    },
    {
        id: 8,
        name: "Chain Necklace",
        price: "1500 AED",
        image: 'images/Image 26.png',
        quantity: 0
    },
    {
        id: 9,
        name: "Intaglio Dove Necklace",
        price: "1500 AED",
        image: 'images/Image 27.png',
        quantity: 0
    },
    {
        id: 10,
        name: "Braided Bracelet",
        price: "2000 AED",
        image: 'images/Image 28.png',
        quantity: 0
    }
]

let wishListJs = []

let wishListItems = document.querySelector(".wishList-cardsContainer")



window.addEventListener('load', () => {
  const savedWishList = localStorage.getItem('wishlist')
  if (savedWishList) {
      wishListJs = JSON.parse(savedWishList);
      updateWishListUI();
      checkIfWishList()
      removeItemFromWishList();

  }
})


function checkIfWishList(){
  const hearts = document.querySelectorAll(".wishList svg > g > path");
  console.log(hearts)
  
  wishListJs.forEach(item => {
    
    hearts.forEach(heart => {
      console.log(item)
      if(parseInt(heart.getAttribute("data-heart-number")) == item.id){
        heart.classList.add("active-Heart")
      }
  
    })
  })
  
}


function saveWishListToLocalStorage() {
  localStorage.setItem('wishlist', JSON.stringify(wishListJs))
}




function addToWishList(productId) {
    let product = products.find(item => item.id === productId);
    if (product) {
        const existingItemIndex = wishListJs.findIndex(item => item.id === productId);
        

        if (existingItemIndex !== -1) {

            // Remove the existing item from the wishlist
            wishListJs.splice(existingItemIndex, 1);

        } else {
            
        wishListJs.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image
        });

        
    }
    updateWishListUI();
    removeItemFromWishList();

    saveWishListToLocalStorage();
}
}


function updateWishListUI(){
    
    wishListItems.innerHTML = '';
    wishListJs.forEach(item => {
        const div = document.createElement('div')
        
        div.className = "wishList-container-prod card"
        div.setAttribute("data-heart-number",`${item.id}`)
        div.innerHTML = `
        <div class="removeCardBtn" data-heart-number=${item.id} >Remove Item</div>
        <div class="card-body">
            <div class="wishList-prod-left-container">
              <img class="wishList-prodImg" src="${item.image}" alt="">
              <div class="wishList-prod-left-innerContainer">
                <div class="card-title">${item.name}</div>
                <div class="card-price">${item.price}</div>
              </div>
            </div>
            <div class="addToCart btn">
            <svg id="shopping-bag" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
            <defs>
              <clipPath id="clip-path">
                <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
              </clipPath>
            </defs>
            <g id="g2331">
              <g id="g2333">
                <g id="g2335" clip-path="url(#clip-path)">
                  <g id="g2341" transform="translate(2.085 5.054)">
                    <path id="path2343" d="M-525.6-472h-16.013l1.51-14.38h12.993Z" transform="translate(541.615 486.376)" fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"/>
                  </g>
                  <g id="g2345" transform="translate(7.025 0.749)">
                    <path id="path2347" d="M0-203.5v-3.133A3.067,3.067,0,0,1,3.067-209.7h0a3.067,3.067,0,0,1,3.067,3.067v3.133" transform="translate(0 209.695)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"/>
                  </g>
                </g>
              </g>
            </g>
            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" transform="translate(0 0)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
            <path id="Path_99" data-name="Path 99" d="M0,0V6.846" transform="translate(13.515 13.233) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
          </svg>
            </div>
          </div>
        `

        wishListItems.appendChild(div)
        

    });
    
}

let addToWishListButtons = document.querySelectorAll('.wishList');


addToWishListButtons.forEach(button => {

    button.addEventListener('click', () => {
        let heart = button.querySelector("svg > g > path")
        if(heart.classList.contains("active-Heart")) {
            heart.classList.remove("active-Heart")
        } else {
            heart.classList.add("active-Heart")
            console.log(parseInt(heart.getAttribute('data-heart-number')))
        
        }
        const productId = button.getAttribute('data-heart-number')
        addToWishList(parseInt(productId))

    })
})







let prodCard = document.querySelectorAll(".mycard .card-body .card-title")
prodCard.forEach(card => {
    card.addEventListener("click", () => {
        const cardNumber = parseInt(card.parentNode.getAttribute("data-heart-number"))
        switch(cardNumber){
            case 0: location.href = "pearlEarrings.html" ;
            break;
            case 1: location.href = "eleganceBand.html";
            break;
            case 2: location.href = "deuxPearlEarrings.html";
            break;
            case 3: location.href = "amavi.html";
            break;
            case 4: location.href = "vermeil.html";
            break;
        }
    })
})


prodName.forEach(name => {
    name.addEventListener("click", () => {
        const nameNumber = parseInt(name.getAttribute("data-heart-number"))
        switch(nameNumber){
            case 7: location.href = "swirling.html"
            break ;
        }
    })
})





function removeItemFromWishList(){
  const removeCardBtn = document.querySelectorAll(".removeCardBtn")
  removeCardBtn.forEach(btn => {
  btn.addEventListener("click", () => {
  const btnIndex = parseInt(btn.getAttribute("data-heart-number"))
  const itemCard = btn.closest(".wishList-container-prod")
  const heartNum = document.querySelector(`.wishList svg path[data-heart-number="${btnIndex}"]`);
    heartNum.classList.remove("active-Heart")
    itemCard.remove()
    const existingItemIndex = wishListJs.findIndex(item => item.id === btnIndex);
    wishListJs.splice(existingItemIndex, 1)
    saveWishListToLocalStorage()
})
})
}
