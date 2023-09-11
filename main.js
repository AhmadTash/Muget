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







// function marginCalc(percentage, screenHeight) {
//     let totalMargin = percentage * screenHeight
//     return totalMargin
// }


// prodImg.forEach(prod => {
//     prod.style.marginTop = `${marginCalc(12/100, height)}px`
//     });

// prodImg.forEach(prod => {
// prod.style.marginBottom = `${marginCalc(11.2/100, height)}px`
// });


// prodNamePCont.forEach(prod => {
//     prod.style.marginBottom = `${marginCalc(8.15/100, height)}px`
//     });

// secondSectionSlider.forEach(prod => {
//     prod.style.marginBottom = `${marginCalc(5.74/100, height)}px`
//     });

// prodPrice.forEach(prod => {
//     prod.style.marginBottom = `${marginCalc(1.48/100, height)}px`
//     });




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


// selectedProd[0].addEventListener("click", () => {
//     unselectedProd.forEach(prod => {
//         prod.style.opacity = "0"
//     })
// })


wishList.forEach(heart => {
    heart.addEventListener("click", () => {
        console.log("working")

        let selectedWishList = heart.getAttribute("data-wishList-number")
        console.log(selectedWishList)
        if(wishListHeart[selectedWishList].classList.contains("active-Heart")){
            wishListHeart[selectedWishList].classList.remove("active-Heart")
            
        } else {
            
            wishListHeart[selectedWishList].classList.add("active-Heart")
            

        }

    })
})






