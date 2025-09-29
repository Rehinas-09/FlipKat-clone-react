import React, { useEffect, useState } from 'react'
import Navbar from './Components2/Navbar'
import Navbar2 from './Components2/Navbar2'
import ProductHead from './Components2/ProductHead'
import ProductData from './Components2/ProductData'
import Filter from './Components2/Filter'
import './Components2/style.css'

function Parent2() {
   const[price,setPrice]=useState({min:0,max:60000})
   const[data,setData]=useState([])
   const [assured,setAssured]=useState(false)
   const [brand,setBrand]=useState([])
   const [selectedScreenSize,setSelectedScreen]=useState([]) 
   const [resolution,setResolution]=useState([])
   const [display,setDisplay]=useState([])
   const [os,setOs]=useState([])
   const [rating,setRating]=useState([])
  useEffect(()=>{
    fetch("TvData.json")   
    .then(res=>res.json())  
    .then(data=>setData(data)) 
  },[]) 
  const uniqueBrand=[...new Set(data.map((item)=>item.barnd))]
   const resolutionData=data.map((item)=>item.resolution)
  const filterProducts=data.filter(item=>{
    const priceMatch=item.exact_price>=price.min&&item.exact_price<=price.max;
    const assuredMatch=!assured||item.assured===true;
    const brandMatch=brand.length===0||brand.includes(item.brand) 
    const screenMatch = selectedScreenSize.length === 0 || selectedScreenSize.some(
  (range) => item.inch >=range.min && item.inch <= range.max
); 
  const resolutionMatch=resolution.length===0||resolution.includes(item.resolution)
  const displayMatch=display.length===0||display.includes(item.display)
  const osMatch=os.length===0||os.includes(item.os)
  const ratingMath=rating.length===0||rating.some(r=>item.rating_star>=r)
    return priceMatch&&assuredMatch&&brandMatch&&screenMatch&&resolutionMatch&&displayMatch&&osMatch&&ratingMath
  } 
) 
  return (   
    <div> 
      <Navbar/>  
      <Navbar2></Navbar2> 
      <div className='productMainContainer'> 
        <div className='productSubContainer'> 
           <Filter priceRange={price} 
               onPriceChange={setPrice} 
               products={filterProducts} 
               assured={assured} 
               assuredChange={setAssured}
               selectedBrand={brand}
               changeBrand={setBrand}
               selectedScreen={selectedScreenSize}
               onScreenChange={setSelectedScreen}
               resolution={resolution}
               setResolution={setResolution}
               resolutionData={resolutionData}
               display={display}
               setDisplay={setDisplay}
               os={os}
               setOs={setOs}
               rating={rating}
               setRating={setRating}/>  
               
          <div>  
              <ProductHead />
            <ProductData products={filterProducts}/> 
          </div>
      </div> 
      </div>
    </div> 
  )
}

export default Parent2
