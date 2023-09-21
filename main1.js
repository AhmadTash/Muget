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
let wishListHeart = document.querySelectorAll(".wishList svg g path")
let cardsSliderSection = document.querySelectorAll(".carousel-item")
let wishListContainer = document.querySelector(".wishList-container")
let wishListContainerShowBtn = document.querySelector(".wishList-containerShowBtn")
let wishListContainerHideBtn = document.querySelector(".wishList-containerHideBtn")
let shoppingCartContainer = document.querySelector(".shoppingCart-container")
let shoppingCartContainerShowBtn = document.querySelector(".shoppingCart-containerShowBtn")
let shoppingCartContainerHideBtn = document.querySelector(".shoppingCart-containerHideBtn")
let unselected = document.querySelectorAll(".imgUnselectedProd")
let selected = document.querySelectorAll(".imgSelectedProd")
let onHoverCard = document.querySelectorAll(".onHoverCard")
let fifthSection = document.querySelector("#fifth-Section")
let removeCardBtn = document.querySelectorAll(".removeCardBtn")



if(window.screen.width <= 1160){
    fifthSection.innerHTML = ` <div class="container-fluid exploreSec d-flex flex-column align-items-start px-0">
    <div class="fifthSection-innerContainer d-flex flex-column">
        <div class="fifthSectionTitle">Shop By Trend</div>


        <div id="carouselExampleIndicators" class="carousel slide pointer-event">
            




          <div class="carousal-inner" >

            <div class="carousel-item carouselMargin active">
              <div class="d-flex cardGap justify-content-center"> 
                <div class="mycard card card111" style="width: 18rem;" data-heart-number="0" >
                  <div class="cardImgCont">
                      <img class="pic1" src="images/Component 4 – 1.png" alt="">
                      <img class="pic2" src="images/onHover/Component 4 – 1.png" alt="">
                  </div>
                  <div class="card-body" data-heart-number="0">
                      <div class="wishList" data-heart-number ="0">
                          <svg  xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                              <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                <path data-heart-number="0" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                              </g>
                            </svg>
                            
                      </div>
                    <h5 class="card-title">Pearl Earrings</h5>
                    <div class="d-flex flex-column justify-content-between">
                    <div class="card-price">1500 <span class="currency">AED</span></div>
                    <div class="myBtn btn bg-light">
                      <svg  class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                            </clipPath>
                          </defs>
                          <g id="shopping-bag" transform="translate(0 0)">
                            <g id="g2331" transform="translate(0 0)">
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
                            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                          </g>
                        </svg>
                          Add to Bag                              
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item carouselMargin">
              <div class="d-flex cardGap justify-content-center"> 
                <div class="mycard card" style="width: 18rem;" data-heart-number="1">
                  <div class="cardImgCont">
                      <img class="pic1" src="images/Component 3 – 1.png" alt="">
                      <img class="pic2" src="images/onHover/Component 3 – 1.png" alt="">
                  </div>
                  <div class="card-body"  data-heart-number="1">
                      <div class="wishList" data-heart-number ="1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                              <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                <path data-heart-number="1" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                              </g>
                            </svg>
                            
                      </div>
                    <h5 class="card-title">Elegance Band</h5>
                    <div class="d-flex flex-column justify-content-between">
                    <div class="card-price">1500 <span class="currency">AED</span></div>
                    <div class="myBtn btn bg-light">
                      <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                            </clipPath>
                          </defs>
                          <g id="shopping-bag" transform="translate(0 0)">
                            <g id="g2331" transform="translate(0 0)">
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
                            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                          </g>
                        </svg>
                          Add to Bag                              
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item carouselMargin">
              <div class="d-flex cardGap justify-content-center"> 
                <div class="mycard card" style="width: 18rem;" data-heart-number="2">
                  <div class="cardImgCont">
                      <img class="pic1" src="images/Component 2 – 1.png" alt="">
                      <img class="pic2" src="images/onHover/Component 2 – 1.png" alt="">
                  </div>
                  <div class="card-body" data-heart-number="2">
                      <div class="wishList" data-heart-number ="2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                              <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                <path data-heart-number="2" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                              </g>
                            </svg>
                            
                      </div>
                    <h5 class="card-title">Deux Pearl Earrings</h5>
                    <div class="d-flex flex-column justify-content-between">
                    <div class="card-price">1500 <span class="currency">AED</span></div>
                    <div class="myBtn btn bg-light">
                      <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                            </clipPath>
                          </defs>
                          <g id="shopping-bag" transform="translate(0 0)">
                            <g id="g2331" transform="translate(0 0)">
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
                            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                          </g>
                        </svg>
                          Add to Bag                              
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item carouselMargin">
              <div class="d-flex cardGap justify-content-center">
                <div class="mycard card" style="width: 18rem;" data-heart-number="3">
                  <div class="cardImgCont">
                      <img class="pic1" src="images/Component 5 – 1.png" alt="">
                      <img class="pic2" src="images/onHover/Component 5 – 1.png" alt="">
                  </div>  
                  <div class="card-body" data-heart-number="3">
                      <div class="wishList" data-heart-number ="3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                              <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                <path data-heart-number="3" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                              </g>
                            </svg>
                            
                      </div>
                    <h5 class="card-title">Amavi</h5>
                    <div class="d-flex flex-column justify-content-between">
                    <div class="card-price">1500 <span class="currency">AED</span></div>
                    <div class="myBtn btn bg-light">
                      <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                            </clipPath>
                          </defs>
                          <g id="shopping-bag" transform="translate(0 0)">
                            <g id="g2331" transform="translate(0 0)">
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
                            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                          </g>
                        </svg>
                          Add to Bag                              
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item carouselMargin ">
              <div class="d-flex cardGap justify-content-center">
                <div class="mycard card" style="width: 18rem;" data-heart-number="4">
                  <div class="cardImgCont">
                      <img class="pic1" src="images/Component 6 – 1.png" alt="">
                      <img class="pic2" src="images/onHover/Component 6 – 1.png" alt="">
                  </div>
                  <div class="card-body" data-heart-number="4">
                      <div class="wishList" data-heart-number ="4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                              <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                <path data-heart-number="4" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                              </g>
                            </svg>
                            
                      </div>
                    <h5 class="card-title">Vermeil</h5>
                    <div class="d-flex flex-column justify-content-between">
                    <div class="card-price">1500 <span class="currency">AED</span></div>
                    <div class="myBtn btn bg-light">
                      <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                          <defs>
                            <clipPath id="clip-path">
                              <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                            </clipPath>
                          </defs>
                          <g id="shopping-bag" transform="translate(0 0)">
                            <g id="g2331" transform="translate(0 0)">
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
                            <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                          </g>
                        </svg>
                          Add to Bag                              
                    </div>
                  </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                    <g id="Group_216" data-name="Group 216" transform="translate(0 0)">
                      <g id="Rectangle_187" data-name="Rectangle 187" transform="translate(0 0)" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                        <rect width="56" height="56" rx="10" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="none"/>
                      </g>
                      <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M6.613,2.279l5,5a.941.941,0,0,0,1.334,0,.953.953,0,0,0,0-1.338L7.282.275a.943.943,0,0,0-1.3-.028L.276,5.94A.945.945,0,0,0,1.61,7.278Z" transform="translate(24.293 34.803) rotate(-90)"/>
                    </g>
                  </svg>
                  
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                    <g id="Group_215" data-name="Group 215" transform="translate(-1849.246 -3907.246)">
                      <g id="Rectangle_187" data-name="Rectangle 187" transform="translate(1849.246 3907.246)" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                        <rect width="56" height="56" rx="10" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="none"/>
                      </g>
                      <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M6.613,5.281l5-5a.941.941,0,0,1,1.334,0,.953.953,0,0,1,0,1.338L7.282,7.284a.943.943,0,0,1-1.3.028L.276,1.62A.945.945,0,0,1,1.61.281Z" transform="translate(1873.394 3942.05) rotate(-90)"/>
                    </g>
                  </svg>
                  
            </button>
          </div>
           </div>
</div>`

}else if(window.screen.width > 1160) {
    fifthSection.innerHTML = `<div class="container-fluid exploreSec d-flex flex-column align-items-start px-0">
    <div class="fifthSection-innerContainer d-flex flex-column">
        <div class="fifthSectionTitle">Shop By Trend</div>


        <div id="carouselExampleIndicators" class="carousel slide pointer-event">
            




            <div class="carousel-inner">





            
              
              <div class="carousel-item carouselMargin active">
                
                <div class="d-flex cardGap justify-content-center">

                <div class="mycard card card111" style="width: 18rem;" data-heart-number="0" >
                    <div class="cardImgCont">
                        <img class="pic1" src="images/Component 4 – 1.png" alt="">
                        <img class="pic2" src="images/onHover/Component 4 – 1.png" alt="">
                    </div>
                    <div class="card-body" data-heart-number="0">
                        <div class="wishList" data-heart-number ="0">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                                <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                  <path data-heart-number="0" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                                </g>
                              </svg>
                              
                        </div>
                      <h5 class="card-title">Pearl Earrings</h5>
                      <div class="d-flex flex-column justify-content-between">
                      <div class="card-price">1500 <span class="currency">AED</span></div>
                      <div class="myBtn btn bg-light">
                        <svg  class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                            <defs>
                              <clipPath id="clip-path">
                                <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                              </clipPath>
                            </defs>
                            <g id="shopping-bag" transform="translate(0 0)">
                              <g id="g2331" transform="translate(0 0)">
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
                              <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                              <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            </g>
                          </svg>
                            Add to Bag                              
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="mycard card" style="width: 18rem;" data-heart-number="1">
                    <div class="cardImgCont">
                        <img class="pic1" src="images/Component 3 – 1.png" alt="">
                        <img class="pic2" src="images/onHover/Component 3 – 1.png" alt="">
                    </div>
                    <div class="card-body"  data-heart-number="1">
                        <div class="wishList" data-heart-number ="1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                                <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                  <path data-heart-number="1" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                                </g>
                              </svg>
                              
                        </div>
                      <h5 class="card-title">Elegance Band</h5>
                      <div class="d-flex flex-column justify-content-between">
                      <div class="card-price">1500 <span class="currency">AED</span></div>
                      <div class="myBtn btn bg-light">
                        <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                            <defs>
                              <clipPath id="clip-path">
                                <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                              </clipPath>
                            </defs>
                            <g id="shopping-bag" transform="translate(0 0)">
                              <g id="g2331" transform="translate(0 0)">
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
                              <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                              <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            </g>
                          </svg>
                            Add to Bag                              
                      </div>
                    </div>
                    </div>
                  </div>

                  <div class="mycard card" style="width: 18rem;" data-heart-number="2">
                    <div class="cardImgCont">
                        <img class="pic1" src="images/Component 2 – 1.png" alt="">
                        <img class="pic2" src="images/onHover/Component 2 – 1.png" alt="">
                    </div>
                    <div class="card-body" data-heart-number="2">
                        <div class="wishList" data-heart-number ="2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                                <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                  <path data-heart-number="2" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                                </g>
                              </svg>
                              
                        </div>
                      <h5 class="card-title">Deux Pearl Earrings</h5>
                      <div class="d-flex flex-column justify-content-between">
                      <div class="card-price">1500 <span class="currency">AED</span></div>
                      <div class="myBtn btn bg-light">
                        <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                            <defs>
                              <clipPath id="clip-path">
                                <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                              </clipPath>
                            </defs>
                            <g id="shopping-bag" transform="translate(0 0)">
                              <g id="g2331" transform="translate(0 0)">
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
                              <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                              <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            </g>
                          </svg>
                            Add to Bag                              
                      </div>
                    </div>
                    </div>
                  </div>


                  <div class="mycard card" style="width: 18rem;" data-heart-number="3">
                    <div class="cardImgCont">
                        <img class="pic1" src="images/Component 5 – 1.png" alt="">
                        <img class="pic2" src="images/onHover/Component 5 – 1.png" alt="">
                    </div>  
                    <div class="card-body" data-heart-number="3">
                        <div class="wishList" data-heart-number ="3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                                <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                  <path data-heart-number="3" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                                </g>
                              </svg>
                              
                        </div>
                      <h5 class="card-title">Amavi</h5>
                      <div class="d-flex flex-column justify-content-between">
                      <div class="card-price">1500 <span class="currency">AED</span></div>
                      <div class="myBtn btn bg-light">
                        <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                            <defs>
                              <clipPath id="clip-path">
                                <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                              </clipPath>
                            </defs>
                            <g id="shopping-bag" transform="translate(0 0)">
                              <g id="g2331" transform="translate(0 0)">
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
                              <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                              <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                            </g>
                          </svg>
                            Add to Bag                              
                      </div>
                    </div>
                    </div>
                  </div>
                  
                  

                </div>


              </div>




              <div class="carousel-item carouselMargin">

                <div class="d-flex cardGap justify-content-center">

                    <div class="mycard card" style="width: 18rem;" data-heart-number="4">
                        <div class="cardImgCont">
                            <img class="pic1" src="images/Component 6 – 1.png" alt="">
                            <img class="pic2" src="images/onHover/Component 6 – 1.png" alt="">
                        </div>
                        <div class="card-body" data-heart-number="4">
                            <div class="wishList" data-heart-number ="4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38.004" height="33.505" viewBox="0 0 38.004 33.505">
                                    <g id="Icon_awesome-heart" data-name="Icon awesome-heart" transform="translate(1.002 1.004)">
                                      <path data-heart-number="4" id="Icon_awesome-heart-2" data-name="Icon awesome-heart" d="M32.505,4.4a9.615,9.615,0,0,0-13.12.956L18,6.785,16.615,5.358A9.615,9.615,0,0,0,3.495,4.4,10.1,10.1,0,0,0,2.8,19.02L16.4,33.068a2.2,2.2,0,0,0,3.185,0L33.195,19.02A10.09,10.09,0,0,0,32.505,4.4Z" transform="translate(0.001 -2.248)" fill="none" stroke="#000" stroke-width="2"/>
                                    </g>
                                  </svg>
                                  
                            </div>
                          <h5 class="card-title">Vermeil</h5>
                          <div class="d-flex flex-column justify-content-between">
                          <div class="card-price">1500 <span class="currency">AED</span></div>
                          <div class="myBtn btn bg-light">
                            <svg class="bag-Icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.183" height="20.183" viewBox="0 0 20.183 20.183">
                                <defs>
                                  <clipPath id="clip-path">
                                    <path id="path2337" d="M0-682.665H20.183v20.183H0Z" transform="translate(0 682.665)"/>
                                  </clipPath>
                                </defs>
                                <g id="shopping-bag" transform="translate(0 0)">
                                  <g id="g2331" transform="translate(0 0)">
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
                                  <path id="Path_98" data-name="Path 98" d="M10.092,9.811v6.846" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                                  <path id="Path_99" data-name="Path 99" d="M10.092,9.811v6.846" transform="translate(23.325 3.142) rotate(90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1"/>
                                </g>
                              </svg>
                                Add to Bag                              
                          </div>
                        </div>
                        </div>
                      </div>
                  

                </div>

              </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                    <g id="Group_216" data-name="Group 216" transform="translate(0 0)">
                      <g id="Rectangle_187" data-name="Rectangle 187" transform="translate(0 0)" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                        <rect width="56" height="56" rx="10" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="none"/>
                      </g>
                      <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M6.613,2.279l5,5a.941.941,0,0,0,1.334,0,.953.953,0,0,0,0-1.338L7.282.275a.943.943,0,0,0-1.3-.028L.276,5.94A.945.945,0,0,0,1.61,7.278Z" transform="translate(24.293 34.803) rotate(-90)"/>
                    </g>
                  </svg>
                  
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
                    <g id="Group_215" data-name="Group 215" transform="translate(-1849.246 -3907.246)">
                      <g id="Rectangle_187" data-name="Rectangle 187" transform="translate(1849.246 3907.246)" fill="#fff" stroke="#1a1a1a" stroke-width="1">
                        <rect width="56" height="56" rx="10" stroke="none"/>
                        <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" fill="none"/>
                      </g>
                      <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M6.613,5.281l5-5a.941.941,0,0,1,1.334,0,.953.953,0,0,1,0,1.338L7.282,7.284a.943.943,0,0,1-1.3.028L.276,1.62A.945.945,0,0,1,1.61.281Z" transform="translate(1873.394 3942.05) rotate(-90)"/>
                    </g>
                  </svg>
                  
            </button>
          </div>
           </div>
</div>`
}

















wishListContainerShowBtn.addEventListener("click", () => {
    wishListContainer.style.display = "block"
})

wishListContainerHideBtn.addEventListener("click", () => {
    wishListContainer.style.display = "none"
})



shoppingCartContainerShowBtn.addEventListener("click", () => {
    shoppingCartContainer.style.display = "flex"
})

shoppingCartContainerHideBtn.addEventListener("click", () => {
    shoppingCartContainer.style.display = "none"
})




unselected.forEach((icon, index) => {
    icon.addEventListener("mouseover", () => {
        selected[index].style.scale = "1"
        onHoverCard[index].style.opacity = "1"
        if(index == 3){
            onHoverCard[index].style.width = "609px"
        }else {
        onHoverCard[index].style.width = "509px"}
        onHoverCard[index].addEventListener("mouseleave", () => {
            selected[index].style.scale = "0.65"
            onHoverCard[index].style.width = "1px"
            onHoverCard[index].style.opacity = "0"
            
        })
        
    })

    // icon.addEventListener("mouseleave", () => {
    //     selected[index].style.scale = "0.65"
    //     onHoverCard[index].style.opacity = "0"
    //     onHoverCard[index].style.width = "1px"
        
    // })
})





















let secondSecWishlist = document.querySelector(".secondSecWishList")
let seconcSecWishlistHeart = secondSecWishlist.querySelector("svg > g > path")

prodSlider.forEach(slider => {
    slider.addEventListener("click", () => {
        let sliderNumber = slider.getAttribute("data-slider-number")
        switch(sliderNumber) {
            case "0": 
                      secondSecWishlist.setAttribute("data-heart-number","5")
                      seconcSecWishlistHeart.setAttribute("data-heart-number","5")
                      prodName[0].setAttribute("data-heart-number", "5")
                      prodImg[0].src = "images/Image 25.png"
                      secondSecRImg[0].src = "images/onHover/Mask Group 25.png"
                      prodName[0].innerText = "Sphere Earrings"
                      prodPrice[0].innerText = "1500 AED"
                      selectedProd.forEach(point => {
                        point.style.opacity = 0
                      })
                      unselectedProd.forEach(point => {
                        point.style.opacity = 1
                      })
                      
                      prodSlider[2].classList.remove("active-slider")
                      prodSlider[1].classList.remove("active-slider")
                      prodSlider[0].classList.add("active-slider")
                      prodSVGs.forEach(svg => {
                        svg.style.display = "inline"
                      })
            break;

            case "1": 
                      secondSecWishlist.setAttribute("data-heart-number","6")
                      seconcSecWishlistHeart.setAttribute("data-heart-number","6")
                      prodName[0].setAttribute("data-heart-number", "6")
                      prodImg[0].src = "images/new/Image 12.png"
                      secondSecRImg[0].src = "images/new/Mask Group 16.png"
                      prodName[0].innerText = "Ivory"
                      prodPrice[0].innerText = "1500 AED"
                      prodSlider[0].classList.remove("active-slider")
                      prodSlider[2].classList.remove("active-slider")
                      prodSlider[1].classList.add("active-slider")
                      prodSVGs.forEach(svg => {
                        svg.style.display = "none"
                      })
            break;

            case "2": 
            secondSecWishlist.setAttribute("data-heart-number","7")
            seconcSecWishlistHeart.setAttribute("data-heart-number","7")
            prodName[0].setAttribute("data-heart-number", "7")
            prodImg[0].src = "images/new/Image 17.png"
            secondSecRImg[0].src = "images/new/Mask Group 17.png"
            prodName[0].innerText = "Swirling"
            prodPrice[0].innerText = "1500 AED"
            prodSlider[0].classList.remove("active-slider")
            prodSlider[1].classList.remove("active-slider")
            prodSlider[2].classList.add("active-slider")
            prodSVGs.forEach(svg => {
              svg.style.display = "none"
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
                case "0":   
                            secondSecWishlist.setAttribute("data-heart-number","5")
                            seconcSecWishlistHeart.setAttribute("data-heart-number","5")
                            prodImg[0].src = "images/Image 25.png"
                            prodName[0].innerText = "Sphere Earring"
                            prodPrice[0].innerText = "1500 AED"
                break;

                case "1":   
                            secondSecWishlist.setAttribute("data-heart-number","8")
                            seconcSecWishlistHeart.setAttribute("data-heart-number","8")
                            prodImg[0].src = "images/Image 26.png"
                            prodName[0].innerText = "Chain Necklace"
                            prodPrice[0].innerText = "1500 AED"

                break;

                case "2":   
                            secondSecWishlist.setAttribute("data-heart-number","9")
                            seconcSecWishlistHeart.setAttribute("data-heart-number","9")
                            prodImg[0].src = "images/Image 27.png"
                            prodName[0].innerText = "Intaglio Dove Necklace"
                            prodPrice[0].innerText = "1500 AED"

                break;

                case "3":   
                            secondSecWishlist.setAttribute("data-heart-number","10")
                            seconcSecWishlistHeart.setAttribute("data-heart-number","10")
                            prodImg[0].src = "images/Image 28.png"
                            prodName[0].innerText = "Braided Bracelet"
                            prodPrice[0].innerText = "2000 AED"

                default: console.log("default")
            }

            console.log(unselectedNumber);
        });
    });

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