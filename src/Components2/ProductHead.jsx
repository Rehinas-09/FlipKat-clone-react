import React from 'react'
import './style.css'
function ProductHead() {
  return (
    <div>
      <div className='productHead'>
          <div className='productHeadSub'>
            <div className='productHeadSection1'>
                <div className='productSubHead1'>
                   <a>Home</a>
                   <svg  width="7" height="20" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path  d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO" ></path></svg>
                </div>
                <div className='productSubHead2'>
                   <a>Home Entert...</a>
                   <svg width="7" height="20" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="sfneHK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="wMLTcO"></path></svg>
                </div>
                <div className='productSubHead3'>
                   <a>Televisions</a> 
                </div>
            </div>
            <span className='productHeadSection2'>
                 Showing 1-24 of 2,134 results for "tv"
            </span>
            <span className='productHeadSection3'>
              Show result for <a className='productHeadSectionA'>tv and applience</a> insted
            </span>
            <div className='productHeadSection4'>
               <span className='productSection4Sub'>Sort By</span> 
               <div className="productSection4Sub2">Relevance</div>
                <div className="productSection4Sub2">Popularity</div>
                <div className="productSection4Sub2">Price -- Low to High</div> 
                <div className="productSection4Sub2">Price -- High to Low</div>
                <div className="productSection4Sub2">Newest Frist</div>
                <div className="productSection4Sub2">Discount</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductHead
