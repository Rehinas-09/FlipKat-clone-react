import React, { useEffect, useState } from 'react'
import './style.css'
import {Star} from "lucide-react"
import Sort from './Sort'
import { useSort } from './Context'
function ProductData({products,open,onClose}) {
 const [screen,setScreen]=useState(window.innerWidth)
 const [data,setData]=useState([])
 const {sort,setSort}=useSort()
 let sortedProduct=[...products]
 
if(sort==="PriceLowHigh"){
     sortedProduct.sort((a,b)=>a.exact_price-b.exact_price)
} 
else if(sort==="PriceHighLow"){
  sortedProduct.sort((a,b)=>b.exact_price-a.exact_price)
}
else if(sort==="Newest"){
  sortedProduct.sort((a,b)=>a.id-b.id)
}
else if(sort==="Discount"){
  sortedProduct.sort((a,b)=>b.dis-a.dis)
}
 useEffect(()=>{
  const handleResize=()=>{
       setScreen(window.innerWidth<=1200)
  }
  window.addEventListener("resize",handleResize)
  return()=>window.removeEventListener('resize',handleResize)
 })
 useEffect(()=>{
     fetch("brandc.json") 
     .then(res=>res.json())
     .then(data=>setData(data))
     .catch(err=>console.log(err))
 })
  return (
   <>
  {sortedProduct.map((value, index) => (  
    <div className="productDataContainer" key={index}>
      <div className="productDataContainerSub">
        <a className="productDataContainerA">
          <div className="productDataImage">
            <div className="productDataImg">
              <img className="pdImage" src={value.img} alt={value.name} />
            </div>
            <div className="productDataAdd">
              <span className="pdspan">
                <label className="pdspanl">
                  <input type="checkbox" className="pdspani" />
                  <div className="pdspand"></div>
                </label>
              </span>
              <label className="pdlabel">
                <span className="pdlabels">Add to Compare</span>
              </label>
            </div>
            <div className="productDataLove">
              <div className="pdl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="N1bADF"
                  width="16"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                    fill="#c2c2c2"
                    className="x1UMqG"
                    stroke="#FFF"
                    fillRule="evenodd"
                    opacity=".9"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="productDataContent">
            <div className="productDataContentOne">
              <div className="ProductDCOne">{value.name}</div>
              <div className="ProductDcTwo">
                <span className="ProductDcTwoSpan1">
                  <div className="ProductDcTwodiv">
                    {value.rating_star}
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                      className="rating-star"
                      alt="rating"
                    /> 
                  </div>
                </span>
              <div className='productSpanplusRating'>
                <span className="ProductDcTwoSpanSM">
                    <div className='pratingstar'>
                           <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                       viewBox="0 0 24 24" 
                      fill="#388E3C">
                         <path d="M12 .587l3.668 7.431L24 9.75l-6 5.849L19.335 24 12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.732z"/>
                      </svg>
                    </div>
                    <div className='pratingstar'>
                           <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                       viewBox="0 0 24 24" 
                      fill="#388E3C">
                         <path d="M12 .587l3.668 7.431L24 9.75l-6 5.849L19.335 24 12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.732z"/>
                      </svg>
                    </div>
                    <div className='pratingstar'>
                           <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                       viewBox="0 0 24 24" 
                      fill="#388E3C">
                         <path d="M12 .587l3.668 7.431L24 9.75l-6 5.849L19.335 24 12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.732z"/>
                      </svg>
                    </div>
                    <div className='pratingstar'>
                           <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                       viewBox="0 0 24 24" 
                      fill="#388E3C">
                         <path d="M12 .587l3.668 7.431L24 9.75l-6 5.849L19.335 24 12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.732z"/>
                      </svg>
                    </div>
                    <div className='pratingstar'>
                         <svg xmlns="http://www.w3.org/2000/svg" 
                      width="24" height="24" 
                       viewBox="0 0 24 24">
                     <defs>
                   <linearGradient id="half-green">
                   <stop offset="50%" stopColor="#388E3C"/>
                       <stop offset="50%" stopColor="#e5e7eb"/>
                 </linearGradient>
                  </defs>
                     <path fill="url(#half-green)" 
                         d="M12 .587l3.668 7.431L24 9.75l-6 5.849L19.335 24 
                      12 19.897 4.665 24 6 15.599 0 9.75l8.332-1.732z"/>
              </svg>
                    </div>

              </span>
                <span className="ProductDcTwoSpan2">{value.rating}</span>
                <div className='ProductDcTwoSpan2Sm'>({value.rating_only})</div>
              </div>
               <div className="PDCTsub2">
                <img
                  height="21"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                  alt="icon"
                  className='smfilpicone'
                />
              </div>
              </div>
              <div className='productofferwithcash'>
                <div className='offerwithcashsub'>
                  <div className='offerArrow'>
                    <svg width="17" height="17" viewBox="0 0 12 12" fill="none"><path d="M6.73461 1V8.46236L9.5535 5.63352L10.5876 6.65767L5.99384 11.2415L1.41003 6.65767L2.42424 5.63352L5.25307 8.46236V1H6.73461Z" fill="#008C00"></path></svg>
                    <div className="PDCToff">{value.off}%</div>
                  </div>
                  <div className="PDCTactual">{value.total_Price}</div>
                  <div className="PDCTprice">{value.price}</div>
                </div>
                    
              </div>
              <div className='smbankoffer'>
                <div className='smwow'>
                  <img className='smwowimage' src='https://rukminim1.flixcart.com/www/76/32/promos/23/06/2025/cca911bb-9c66-4490-826e-9d9b807d62a5.png?q=90'/>
                </div>
                <div  className='smBankPrice'>
                     {value.bank_price}
                </div>
                <div className='smwithbankoff'>
                      with Bank offer
                </div>
              
              </div>
            {
              value.discount!==""?(
                <div className='sm-topdiscount'>
                <div className='smdiscount'>
                  {value.discount}
                </div>
              </div>
              ):(
                <div className="smexchange">
                  Upto {value.Exchange} Off on Exchange
                </div>
              )
            }  
            <div className="smautherization">
              <div className='smauthername'>{value.brand} authorised installation</div>
            </div>
              <div className="ProductDcTwoSpan3">
                <ul className="ProductDcTwoUl">
                  <li className="ProductDcList">{value.hd}</li>
                  <li className="ProductDcList">{value.model}</li>
                  <li className="ProductDcList">{value.Launch_Year}</li>
                  <li className="ProductDcList">{value.warrenty}</li>
                </ul>
              </div>
            </div>

            <div className="productDataContentTwo">
              <div className="PDCTsub1">
                <div>
                  <div className="PDCTprice">{value.price}</div>
                  <div className="PDCTactual">{value.total_Price}</div>
                  <div className="PDCToff">{value.Offer}</div>
                </div>
              </div>

              <div className="PDCTsub2">
                <img
                  height="21"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png"
                  alt="icon"
                />
              </div>

              {value.discount !== "" && (
                <div className="PDCTsub3">
                  <div className="PDCTsub3sub">
                    <div className="PDCTsub3sub1">{value.discount}</div>
                  </div>
                </div>
              )}

              {value.left && (
                <div className="PDCTsub5">
                  <div className="PDCTsub5sub">{value.left}</div>
                </div>
              )}

              <div className="PDCTsub4">
                <div className="PDCTupto">Upto {value.Exchange}</div>
             <div className="PDCTexchange"> Off on Exchange</div>
              </div>
            </div>
          </div>
        </a>
        <div className='productdisbox'>
            <div className="productdisbox1">
               <div className='productdiscontent'>
                   {value.hd}
               </div>
            </div>
             <div className="productdisbox1">
               <div className='productdiscontent'>
                  {value.model}
               </div>
            </div> 
             <div className="productdisbox1">
                  <div className='productdiscontent'>
                    {value.Launch_Year}
               </div>
            </div>
             <div className="productdisbox1">
              <div className='productdiscontent'>
                  Total Sound Output: {value.sound} W
               </div>
            </div>
        </div>
      </div>
      {
        screen&&(
          <>
          {index+1===4 &&(
             <div className='topSalebox'>
              <div className='topSalesubbox'>
                 <div className='topSaleshead'>
                  <div className='topSalesheadsub'>
                    <div className='smSalesTop'>
                       <span className='smHead'>
                        Which Operating System are you looking for?
                       </span>
                    </div>
                  </div>
                 </div>
                 <div className='opratingsystem'>
                  <div className='osSub'>
                    <div className='osMid'>
                      {
                        data.map((value,index)=>(
                          <div className='singleossystem' key={index}>
                              <div className='singleossystemsub'>
                                <div className='osimage'>
                                  <img className="osimageimg" src={value.img}/>
                                 </div>
                                 <div className='osname'>
                                  <span>{value.name}</span>
                                  </div> 
                                </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                 </div>
              </div>
             </div>
          )}
          {
            screen&&(
              <>
               {index+1===8&&(
                <div className='xiaomiadd'>
                   <a>
                     <div className='xiaomiaddsub'>
                      <img src='https://rukminim1.flixcart.com/fk-p-image/1206/536/cf-chitrakaar-prod/5f93a43e5b608ae418af6d6bcd8cefd3.jpeg?q=60' className='xiaomiimg'/>
                     </div>
                   </a>
                </div>
               )}
              </>
            )
          }
          </>
        )
      }
    </div>
  ))}
  <div className='tvSortingsection' >
      <div className='tvSortingSub'>
        <div className='tvSortHead'>
            Sort
        </div>
        <div className="sortingContent">
            <div className='sortingElements'>
              {["Relevence","Popularity","PriceLowHigh","PriceHighLow","Newest","Discount"].map(opt=>(
                <>
                  <div className='sortingElementp' key={opt}>
                    <div className='sortinge'>
                    {opt}
                    </div>
                    <div className='eleradio'>
                       <input type='radio'
                       value={opt}
                       checked={sort===opt}
                       onChange={()=>setSort(opt)}/>
                    </div>
                </div>
              
                </>
              ))}
                
            </div>
        </div>
      </div>
    </div>
</>

  )
}
export default ProductData
