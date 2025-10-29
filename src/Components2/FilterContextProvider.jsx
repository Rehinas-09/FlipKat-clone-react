import React, {createContext, useEffect, useState } from 'react'
export const FilterContext=createContext()

function FilterContextProvider({children}) {
    const [data,setData]=useState([])
    const [price,setPrice]=useState({min:0,max:70000})
    const [assured,setAssured]=useState(false)
    const [brand,setBrand]=useState([])
    const [screen,setScreen]=useState([])
    const [resolution,setResolution]=useState([])
    const [display,setDisplay]=useState([])
    const [os,setOs]=useState([])
    const [rating,setRating]=useState([])
    const [invoice,setInvoice]=useState(false) 
    const [discount,setDiscount]=useState([])
    const [min,setMin]=useState([])
 
    useEffect(()=>{
        fetch("TvData.json")
        .then(res=>res.json()) 
        .then(data=>setData(data))
        .catch(err=>err)
    },[])
    const uniqueBrand=[...new Set(data.map((item)=>item.brand))]
    const resolutionUnique=[...new Set(data.map((res)=>res.resolution))]
    const displayUnique=[...new Set(data.map((res)=>res.display))]
    const osUnique=[...new Set(data.map((res)=>res.os))]
     const minSort=data.sort((a,b)=>a.exact_price-b.exact_price)
     const filterProduct = data.filter((item) => {
  const filterPrice =
    item.exact_price >= price.min && item.exact_price <= price.max;

  const AssurecdCheck = !assured || item.assured === true;
  const brandMatch = brand.length === 0 || brand.includes(item.brand);
  const screenMatch =
    screen.length === 0 ||
    screen.some(
      (range) => item.inch >= range.min && item.inch <= range.max
    );
  const resolutionMatch =
    resolution.length === 0 || resolution.includes(item.resolution);
  const displayMatch =
    display.length === 0 || display.includes(item.display);
  const osMatch = os.length === 0 || os.includes(item.os);
  const ratingMatch =
    rating.length === 0 ||
    rating.some(
      (range) => item.rating_star >= range.min && item.rating_star <= range.max
    );
  const discountMatch =
    discount.length === 0 ||
    discount.some(
      (range) => item.dis >= range.min && item.dis <= range.max
    );
  const invoiceMatch = !invoice || item.invoice === true;

  return (
    filterPrice &&
    AssurecdCheck &&
    brandMatch &&
    screenMatch &&
    resolutionMatch &&
    displayMatch &&
    osMatch &&
    ratingMatch &&
    discountMatch &&
    invoiceMatch
  );
});

    //selectedScreenSize.length === 0 || selectedScreenSize.some(
//   (range) => item.inch >=range.min && item.inch <= range.max 
  return (
      <FilterContext.Provider 
      value={{
        price, 
        setPrice, 
        data,
        assured,
        setAssured,
        brand,
        setBrand, 
        screen,
        setScreen,
        filterProduct,
        uniqueBrand,
        resolutionUnique,
        resolution,
        setResolution,
        display,
        setDisplay,
        displayUnique,
        os,
        setOs,
        osUnique,
        rating,
        setRating,
        invoice,
        setInvoice,
        discount,
        setDiscount,
    
        
      }}>
        {children}

      </FilterContext.Provider>

  )
}

export default FilterContextProvider
