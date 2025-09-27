import React, { useEffect, useState } from 'react'
import Navbar from './Components2/Navbar'
import Navbar2 from './Components2/Navbar2'
import ProductHead from './Components2/ProductHead'
import ProductData from './Components2/ProductData'
import Filter from './Components2/Filter'
import './Components2/style.css'

function Parent2() {
  const [price,setPrice]=useState({min:0,max:60000})
  const [data,setData]=useState([])
  const [selectedScreenSize,setSelectedScreen]=useState([])
  const uniquebrandSection=[...new Set(data.map((item)=>item.brand))]
  const [selectBrands,setSelectBrands]=useState([])
  const [assured,setAssured]=useState(false)
  
  useEffect(()=>{
    fetch("TvData.json")  
    .then(res=>res.json()) 
    .then(data=>setData(data))
  },[])
 
  const filterProducts=data.filter(item=>{
    const priceMatch=item.exact_price>=price.min&&item.exact_price<=price.max;
    const assuredMatch=!assured||item.assured===true;
    const brandMatch=selectBrands.length==0 || selectBrands.includes(item.brand)
    const selectedScreen=selectedScreenSize.length==0||
        selectedScreenSize.some((range)=>item.inch>=range.min&&item.inch<=range.max)
        return priceMatch&&assuredMatch&&selectedScreen&&brandMatch
  } 
) 
  return (   
    <div> 
      <Navbar/> 
      <Navbar2></Navbar2> 
      <div className='productMainContainer'> 
        <div className='productSubContainer'> 
           <Filter priceRange={price} onPriceChange={setPrice} products={filterProducts} assuredOnly={assured} onAssuredChange={setAssured} selectedScreenSize={selectedScreenSize} onScreenSizeChanage={setSelectedScreen} selectBrands={selectBrands} onBrandChanging={setSelectBrands}/> 
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
