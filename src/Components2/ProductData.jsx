import React, { useEffect, useState } from 'react'
import './style.css'

function ProductData({products}) {
   
  return (
    <>
    {
        products.map((value,index)=>(
            <div className="productDataContainer" key={index}>
                <div className='productDataContainerSub'>
                  <a className='productDataContainerA'>
                    <div className='productDataImage'>
                       <div className='productDataImg'>
                          <img className='pdImage' src={value.img}></img>
                       </div>
                       <div className='productDataAdd'>
                        <span className='pdspan'>
                          <label className='pdspanl'>
                            <input type='checkbox' className='pdspani'></input>
                            <div className='pdspand'></div>
                          </label>
                        </span>
                        <label className='pdlabel'>
                            <span className='pdlabels'>Add to Compare</span>
                        </label>
                       </div>
                       <div className='productDataLove'>
                        <div classname='pdl'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#c2c2c2" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9" ></path></svg>
                        </div> 
                       </div>
                    </div>
                    <div className='productDataContent'>
                      <div className="productDataContentOne">
                         <div className='ProductDCOne'>
                          {value.name}
                         </div>
                         <div className='ProductDcTwo'>
                            <span className='ProductDcTwoSpan1'>
                               <div className='ProductDcTwodiv'>
                                {value.rating_star}
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className='rating-star'></img>
                               </div>
                            </span>
                            <span className='ProductDcTwoSpan2'>
                                 {value.rating}
                            </span>
                         </div>
                         <div className='ProductDcTwoSpan3'>
                           <ul className='ProductDcTwoUl'>
                            <li className='ProductDcList'>
                              {value.hd}
                            </li>
                             <li className='ProductDcList'>
                              {value.model}
                            </li>
                                 <li className='ProductDcList'>
                              {value.Launch_Year}
                            </li>
                                  <li className='ProductDcList'>
                              {value.warrenty}
                            </li>
                           </ul>
                         </div>
                      </div>
                      <div className='productDataContentTwo'>
                              <div className='PDCTsub1'>
                                <div>
                                  <div className='PDCTprice'>
                                    {value.price}
                                  </div>
                                  <div className='PDCTactual'>
                                      {value.total_Price}
                                  </div>
                                  <div className='PDCToff'>
                                      {value.Offer}
                                  </div>
                                </div>
                              </div>
                              <div className='PDCTsub2'>
                                     <img height="21" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"></img>
                              </div>
                              {
                                (value.discount!=="")&&(
                                                                    <div className='PDCTsub3'>
                                 <div className='PDCTsub3sub'>
                                  <div className='PDCTsub3sub1'>
                                    {value.discount}
                                  </div>
                                 </div>
                              </div>
                                )  
                                }
                                {
                                  (value.left)&&(
                                      <div className='PDCTsub5'>
                                        <div className='PDCTsub5sub'>
                                          {value.left}
                                        </div>
                                      </div>
                                  )
                                }
                              <div className='PDCTsub4'>
                                  <div className='PDCTupto'>Upto </div>
                                  <div className='PDCToffon'>
                                     {value.Exchange}
                                  </div>
                                  <div className="PDCTexchange"> Off on Exchanage</div>
                              </div> 
                      </div>
                    </div>
 
                  </a>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default ProductData
