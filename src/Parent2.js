import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components2/Navbar'
import Navbar2 from './Components2/Navbar2'
import ProductHead from './Components2/ProductHead'
import ProductData from './Components2/ProductData'
import Filter from './Components2/Filter'
import './Components2/style.css'
import Footer from './Components/Footer'
import SmNavbar from './Components2/SmNavbar'
import Smimage from './Components2/Smimage'
import { FilterContext } from './Components2/FilterContextProvider'
import SortingSection from './Components2/SortingSection'
import SmSort from './Components2/SmSort'
import ClearFilter from './Components2/ClearFilter'

function Parent2() {
  const { filterProduct } = useContext(FilterContext)
  const [width,setWidth] = useState(window.innerWidth)
  const [sortElement,setSortElement]=useState("Relevence")
  const [showSort,setShowSort]=useState(false)
  const open=()=>setShowSort(true)
  const close=()=>setShowSort(false)
  useEffect(()=>{
    const handleResize=()=>setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
  },[])



  let sortedProducts = [...filterProduct] 
  if(sortElement=== "Relevence") sortedProducts.sort((a,b)=>b.id-a.id)
  else if(sortElement === "Price--High to Low") sortedProducts.sort((a,b)=>b.exact_price-a.exact_price)
  else if(sortElement === "Newset First") sortedProducts.sort((a,b)=>b.id-a.id)
  else if(sortElement === "Discount") sortedProducts.sort((a,b)=>b.dis-a.dis)

  else if(sortElement=== "Price--Low to High") sortedProducts.sort((a,b)=>a.exact_price-b.exact_price)
  return (
    <div>
      {width <= 1024 ? (
        <>
        <div className='sm-parent-head'> 
          {showSort&&<div className='overlay' onClick={close}></div>}
          <div className={`productdim ${showSort?"dimmed":""}`}> 
          <SmNavbar onOpen={open} /> 
          
          <div className='sm-main-container'>
            <Smimage/>
            <ProductData products={sortedProducts} />
          </div>
         </div>
            <SmSort sortElement={sortElement} setSortElement={setSortElement} show={showSort} onClose={close}/>

        </div>
        
        </>
      ) : (
        <div>
          <Navbar/>  
          <Navbar2/> 
          <div className='productMainContainer'> 
            <div className='productSubContainer'> 
              <Filter /> 
              <div>
                <ProductHead sortItem={sortElement} setSortItem={setSortElement} />
                <ProductData products={sortedProducts}/> 
              </div>
            </div>
          </div> 
          <Footer/>
        </div>
      )}
    </div>
  )
}

export default Parent2
