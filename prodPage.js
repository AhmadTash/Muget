let mayLikeSection = document.querySelector(".may-like-section")
let shoppingCartContainer = document.querySelector(".shoppingCart-container")
let shoppingCartContainerShowBtn = document.querySelector(".shoppingCart-containerShowBtn")
let shoppingCartContainerHideBtn = document.querySelector(".shoppingCart-containerHideBtn")


shoppingCartContainerShowBtn.addEventListener("click", () => {
    shoppingCartContainer.style.display = "flex"
})

shoppingCartContainerHideBtn.addEventListener("click", () => {
    shoppingCartContainer.style.display = "none"
})




if(window.screen.width <= 1160){
    mayLikeSection.innerHTML = ` <div class="container-fluid exploreSec d-flex flex-column align-items-start px-0">
    <div class="fifthSection-innerContainer d-flex flex-column">
        <div class="fifthSectionTitle">You May Like</div>


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
    mayLikeSection.innerHTML = `<div class="container-fluid exploreSec d-flex flex-column align-items-start px-0">
    <div class="fifthSection-innerContainer d-flex flex-column">
        <div class="fifthSectionTitle">You May Like</div>


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