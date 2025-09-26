import React from 'react'
import './style.css'
function Filter() {
  return (
    <div className='filterContainer'>
        <div className='filterContainerSub'>
            <div className='filterContainerMid'>
               <div className='filterSection1'>
                <div className='filterSection1Sub'>
                    <div className='filterHead'>
                        <span>Filters</span>
                    </div>
                </div>
               </div>
               <div className='filterCategories'>
                <div className='filterCategorySection'>
                    <div className='filterCategoryName'>
                        <span>CATEGORIES</span>
                    </div>
                    <div className='filterCatLoc'>
                        <span>
                           <svg width="10" height="10" className="filterCatSvg" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="P3pAQJ"></path></svg> 
                        </span>
                        <a href="#" className='filterCatA'>Home Entertaiment</a>
                    </div>
                    <div className='filterTele'>
                           <span>
                            <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="IZmjtf"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class=""></path></svg>
                            <a className='filterTeleA'>
                                Televisions
                            </a>
                           </span> 
                    </div>
                </div>
               </div>
               <div className='filterPrice'>
                 <div className='filterPriceOne'>
                    <div className='filterPriceName'>
                        <span>Price</span>
                    </div>
                 </div>
                 <div className='filterPriceTwo'>
                    <div className="filterPriceTwoSub">
                       <div className='pricebox'></div>
                       <div className='pricebox'></div>
                       <div className='pricebox'></div>
                       <div className='pricebox'></div> 
                       <div className='pricebox'></div>
                       <div className='pricebox'></div>
                    </div>
                 </div>
                 <div className='filterPriceThree'>
                    <div className='priceLine'>
                        <div className="leftRound">
                            <div className="lRound"></div>
                        </div>
                        <div className="rightRound">
                          <div className='rRound'></div>
                        </div>
                        <div className='filterLineOne'></div>
                        <div className='filterLineTwo'></div>
                    </div> 
                    <div className="pricedots">
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                         <div className='priceDot'>.</div>
                    </div>

                 </div>
                 <div className='filterPriceFour'>
                    <div className='priceMenuOne'>
                       <select className='selecetMinPrice'>
                        <option className='selectMinOption'>Min</option>
                        <option className='selectMinOption'>₹15000</option>
                        <option className='selectMinOption'>₹30000</option>
                        <option className='selectMinOption'>₹40000</option>
                        <option className='selectMinOption'>₹50000</option>
                        <option className='selectMinOption'>₹60000</option>

                       </select>
                    </div>
                    <div className='priceMid'>to</div>
                    <div className='priceMenuTwo'>
                        <select className='selectMaxPrice'>
                            <option className='selectMaxOption'>₹15000</option>
                            <option className='selectMaxOption'>₹30000</option>
                            <option className='selectMaxOption'>₹40000</option>
                            <option className='selectMaxOption'>₹50000</option>
                            <option className='selectMaxOption'>₹60000</option>
                            <option className='selectMaxOption'>₹60000+</option>
                        </select>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Filter
