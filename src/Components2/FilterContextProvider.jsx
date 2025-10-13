import React, { Children, createContext, useEffect, useState } from 'react'
export const FilterContext=createContext()

function FilterContextProvider({children}) {
    const [data,setData]=useState([])
    const [price,setPrice]=useState([])
    const [assured,setAssured]=useState([])
    useEffect(()=>{
        fetch("TvData.json")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>err)
    },[])
    const uniqueBrand=[...new Set(data.map((item)=>item.brand))]
    const filterProduct=data.filter((item)=>{
        const filterPrice=price.length==0||price.some(
          (prange)=>item.exact_price>=prange.min&&item.exact_price<=prange.max
        )
        const AssurecdCheck=!assured||item.assured===true
        return filterPrice&&AssurecdCheck;
    })
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
        filterProduct,
        uniqueBrand
      }}>
        {children}

      </FilterContext.Provider>

  )
}

export default FilterContextProvider

