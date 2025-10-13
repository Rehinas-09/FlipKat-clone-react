import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Components2/Navbar'
import Navbar2 from './Components2/Navbar2'
import ProductHead from './Components2/ProductHead'
import ProductData from './Components2/ProductData'
import Filter from './Components2/Filter'
import './Components2/style.css'
import footer from './Components/Footer'
import Footer from './Components/Footer'
import SmNavbar from './Components2/SmNavbar'
import Smimage from './Components2/Smimage'
import { FilterContext } from './Components2/FilterContextProvider'
import FilterSm from './Components2/FilterSm'

function Parent2() {
  const{
    price,
    setPrice,
    data,
    assured,
    setAssured,
    filterProduct,
    uniqueBrand
  }=useContext(FilterContext)
  //  const[price,setPrice]=useState({min:0,max:60000})
  //  const[data,setData]=useState([]) 
  //  const [assured,setAssured]=useState(false)
  //  const [brand,setBrand]=useState([])
  //  const [selectedScreenSize,setSelectedScreen]=useState([]) 
  //  const [resolution,setResolution]=useState([])
  // const [display,setDisplay]=useState([])
  // const [os,setOs]=useState([])
  //  const [rating,setRating]=useState([])
  //  const [invoice,setInvoice]=useState(false)
  //   const [discount,setDiscount]=useState([])
    const [open,setOpen]=useState(false)
    const [width,setWidth]=useState(window.innerWidth)
  // useEffect(()=>{
  //   fetch("TvData.json")   
  //   .then(res=>res.json())   
  //   .then(data=>setData(data)) 
  // },[]) 
  useEffect(()=>{
    const handleResize=()=>setWidth(window.innerWidth)
    window.addEventListener("resize",handleResize)
     return ()=>window.removeEventListener("resize",handleResize)
  })

 
  // const uniqueBrand=[...new Set(data.map((item)=>item.barnd))]
//   const resolutionData=data.map((item)=>item.resolution)
//   const filterProducts=data.filter(item=>{ //cd
//     const priceMatch=item.exact_price>=price.min&&item.exact_price<=price.max;
//     const assuredMatch=!assured||item.assured===true;
//      const brandMatch=brand.length===0||brand.includes(item.brand) 
//     const screenMatch = selectedScreenSize.length === 0 || selectedScreenSize.some(
//   (range) => item.inch >=range.min && item.inch <= range.max 
// ); 
//      const resolutionMatch=resolution.length===0||resolution.includes(item.resolution)
//      const displayMatch=display.length===0||display.includes(item.display)
//      const osMatch=os.length===0||os.includes(item.os)
//     const ratingMath=rating.length===0||rating.some(range=>item.rating_star>=range.min && item.rating_star<=range.max)
//     const discountMatch=discount.length===0||discount.some((range)=>item.dis>=range.min&&item.dis<=range.max)
//     const invoiceMatch=invoice.length==0||item.invoice=="available"
//     return priceMatch&&assuredMatch&&brandMatch&&screenMatch &&resolutionMatch&&displayMatch&&osMatch &&ratingMath&&invoiceMatch&&discountMatch;
//   } 
// ) 

  return (   
    <div> 
      {width<=1024?(<div>
        <FilterSm price={price} 
        setPrice={setPrice} 
        assured={assured} setAssured={setAssured}/>
        <SmNavbar onClick={()=>setOpen(true)}/>
        <div className='sm-main-container'>
        <Smimage/>
        <ProductData products={filterProduct} open={open} onClose={()=>setOpen(false)}/>
     
        </div>
      </div>):( 
          
        <div>
          <Navbar/>  
      <Navbar2></Navbar2> 
      <div className='productMainContainer'> 
        <div className='productSubContainer'> 
           <Filter 
                price={price} 
                setPrice={setPrice} 
                data={data}
               assured={assured} 
               setAssured={setAssured}
               uniqueBrand={uniqueBrand}
              //  selectedBrand={brand}
              //  changeBrand={setBrand}
              //  selectedScreen={selectedScreenSize}
              //   onScreenChange={setSelectedScreen}
              //  resolution={resolution}
              //  setResolution={setResolution}
              //  resolutionData={resolutionData}
              //  display={display}//display section
              //  setDisplay={setDisplay}
              //  os={os}
              //  setOs={setOs}
              //  rating={rating}
              //  setRating={setRating}
              //  invoice={invoice}
              //  setInvoice={setInvoice}
              //  discount={discount}
              //  setDiscount={setDiscount}/> 
              /> 
              <div>  
              <ProductHead />
            <ProductData products={filterProduct}/> 
         
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
