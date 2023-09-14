let prodImg = document.querySelectorAll(".prod-img")
let height = screen.height
let prodName = document.querySelectorAll(".prod-name")
let prodP = document.querySelectorAll(".prod-p")
let prodPrice = document.querySelectorAll(".prod-price")
let prodNamePCont = document.querySelectorAll(".prod-name-p-cont")
let secondSectionSlider = document.querySelectorAll(".secondSection-slider")
let selectedProd = document.querySelectorAll(".selected-prod")
let unselectedProd = document.querySelectorAll(".unselected-prod")
let prodSlider = document.querySelectorAll(".prod-slider")
let secondSecRImg = document.querySelectorAll(".second-Section-rightImg")
let prodSVGs = document.querySelectorAll(".imgcol svg")
let wishList = document.querySelectorAll(".wishList")
let wishListHeart = document.querySelectorAll(".wishList svg g path")
let cardsSliderSection = document.querySelectorAll(".carousel-item")
let wishListContainer = document.querySelector(".wishList-container")
let wishListContainerShowBtn = document.querySelector(".wishList-containerShowBtn")
let wishListContainerHideBtn = document.querySelector(".wishList-containerHideBtn")

wishListContainerShowBtn.addEventListener("click", () => {
    wishListContainer.style.display = "block"
})

wishListContainerHideBtn.addEventListener("click", () => {
    wishListContainer.style.display = "none"
})




prodSlider.forEach(slider => {
    slider.addEventListener("click", () => {
        let sliderNumber = slider.getAttribute("data-slider-number")
        switch(sliderNumber) {
            case "0": prodImg[0].src = "images/new/Image 17.png"
                      secondSecRImg[0].src = "images/new/Mask Group 17.png"
                      prodName[0].innerText = "Swirling"
                      prodPrice[0].innerText = "1500 AED"
                      prodSlider[1].style.background = null
                      prodSlider[2].style.background = null
                      prodSlider[0].style.background = "#f17e5c"
                      prodSVGs.forEach(svg => {
                        svg.style.display = "none"
                      })



                      prodImg[0].src = "images/Image 25.png"
                      secondSecRImg[0].src = "images/Mask Group 25.png"
                      prodName[0].innerText = "Sphere Earrings"
                      prodPrice[0].innerText = "1500 AED"
                      selectedProd.forEach(point => {
                        point.style.opacity = 0
                      })
                      unselectedProd.forEach(point => {
                        point.style.opacity = 1
                      })
                      selectedProd[0].style.opacity = 1
                      unselectedProd[0].style.opacity = 0
                      prodSlider[0].style.background = null
                      prodSlider[1].style.background = null
                      prodSlider[2].style.background = "#f17e5c"
                      prodSVGs.forEach(svg => {
                        svg.style.display = "inline"
                      })
            break;

            case "1": prodImg[0].src = "images/new/Image 12.png"
                      secondSecRImg[0].src = "images/new/Mask Group 16.png"
                      prodName[0].innerText = "Ivory"
                      prodPrice[0].innerText = "1500 AED"
                      prodSlider[0].style.background = null
                      prodSlider[2].style.background = null
                      prodSlider[1].style.background = "#f17e5c"
                      prodSVGs.forEach(svg => {
                        svg.style.display = "none"
                      })
            break;

            case "2": prodImg[0].src = "images/Image 25.png"
                      secondSecRImg[0].src = "images/Mask Group 25.png"
                      prodName[0].innerText = "Sphere Earrings"
                      prodPrice[0].innerText = "1500 AED"
                      selectedProd.forEach(point => {
                        point.style.opacity = 0
                      })
                      unselectedProd.forEach(point => {
                        point.style.opacity = 1
                      })
                      selectedProd[0].style.opacity = 1
                      unselectedProd[0].style.opacity = 0
                      prodSlider[0].style.background = null
                      prodSlider[1].style.background = null
                      prodSlider[2].style.background = "#f17e5c"
                      prodSVGs.forEach(svg => {
                        svg.style.display = "inline"
                      })
        }
    })
})






    unselectedProd.forEach(point => {
        point.addEventListener("click", () => {
            
            let unselectedNumber = point.getAttribute("data-unselected-number");
            unselectedProd.forEach(prod => {
                prod.style.opacity = "1"
            })
            selectedProd.forEach(prod => {
                prod.style.opacity = "0"
            })
            selectedProd[unselectedNumber].style.opacity = "1"
            unselectedProd[unselectedNumber].style.opacity = "0"

            switch(unselectedNumber){
                case "0":   prodImg[0].src = "images/Image 25.png"
                            prodName[0].innerText = "Sphere Earring"
                            prodPrice[0].innerText = "1500 AED"
                break;

                case "1":   prodImg[0].src = "images/Image 26.png"
                            prodName[0].innerText = "Chain Necklace"
                            prodPrice[0].innerText = "1500 AED"

                break;

                case "2":   prodImg[0].src = "images/Image 27.png"
                            prodName[0].innerText = "Intaglio Dove Necklace"
                            prodPrice[0].innerText = "1500 AED"

                break;

                case "3":   prodImg[0].src = "images/Image 28.png"
                            prodName[0].innerText = "Braided Bracelet"
                            prodPrice[0].innerText = "2000 AED"

                default: console.log("default")
            }

            console.log(unselectedNumber);
        });
    });



let prodNum = 0

wishList.forEach(heart => {

    heart.addEventListener("click", function()  {
        
        
        let pathElement = heart.querySelector("svg > g > path")
        let prodTitle = `prod${prodNum}Title`
        let prodPrice = `prod${prodNum}Price`
        let prod = heart.closest(".card-body")
        let fullCard = heart.closest(".mycard")
        let prodImg = fullCard.querySelector(".mycard img").getAttribute("src")
        if(pathElement.classList.contains("active-Heart")){
            pathElement.classList.remove("active-Heart")    

            for(let i = 0; i < localStorage.length;i++){
                let key = localStorage.key(i)

                if(localStorage.getItem(key) === prod.querySelector(".card-title").textContent ){
                    localStorage.removeItem(key)
                    break;
                }
            }

            for(let i = 0; i < localStorage.length;i++){
                let key = localStorage.key(i)
                

                if(localStorage.getItem(key) === prod.querySelector(".card-price").textContent){
                    localStorage.removeItem(key)
                    break;
                }
            }

            let cardContainer = document.querySelectorAll(".wishList-container-prod")
            cardContainer.forEach(card => {
                let innerCardTitle = card.querySelector(".card-title").textContent
                if(innerCardTitle === prod.querySelector(".card-title").textContent){
                    card.remove()
                }
            })

        }else{
            prodNum ++
        pathElement.classList.add("active-Heart")
        
      
        
        localStorage[prodTitle] = prod.querySelector(".card-title").textContent
        localStorage[prodPrice] = prod.querySelector(".card-price").textContent

        addToWishList(localStorage[prodTitle], localStorage[prodPrice],prodImg)

        removeCard(prod)
    }
    })


})



function addToWishList(wishListProdName, wishListProdPrice, wishListprodImg) {
    
    let wishListCardsContainer = document.querySelector(".wishList-cardsContainer")
    let card = document.createElement("div")
    card.className = "wishList-container-prod card"
    card.innerHTML = `
    <div class="removeCardBtn">Remove Item</div>
    <div class="card-body">
        <div class="wishList-prod-left-container">
          <img class="wishList-prodImg" src="${wishListprodImg}" alt="">
          <div class="wishList-prod-left-innerContainer">
            <div class="card-title">${wishListProdName}</div>
            <div class="card-price">${wishListProdPrice}</div>
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
    `;
    wishListCardsContainer.appendChild(card)
}


function removeFromWishlist(){

}


function removeCard(prod) {
    let removeCardBtn = document.querySelectorAll(".removeCardBtn")
    removeCardBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".wishList-container-prod").remove()
        for(let i = 0; i < localStorage.length;i++){
            let key = localStorage.key(i)

            if(localStorage.getItem(key) === prod.querySelector(".card-title").textContent){
                localStorage.removeItem(key)
                break;
            }
        }

        for(let i = 0; i < localStorage.length;i++){
            let key = localStorage.key(i)

            if(localStorage.getItem(key) === prod.querySelector(".card-price").textContent){
                localStorage.removeItem(key)
                break;
            }
        }
        

    })
})
}

removeCard()