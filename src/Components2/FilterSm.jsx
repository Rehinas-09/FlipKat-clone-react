import React, { useContext, useState } from 'react'
import './style.css'
import { FilterContext } from './FilterContextProvider'
import { useNavigate } from 'react-router-dom'
import ClearFilter from './ClearFilter'
function FilterSm() {
  const {
    price,
    setPrice,
    assured,
    setAssured,
    uniqueBrand,
    brand,
    setBrand,
    screen,
    setScreen,
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
    setDiscount
  } = useContext(FilterContext)
   const navigate=useNavigate() 
   const handleApply=()=>{
    navigate('/product')
   }
  const item = ["Price", "F-Assured", "Brand", "ScreenSize", "Resolution", "Display Technology", "Operating System", "Customer Rating", "GST Invoice Available", "Discount"]
  const [selected, setSelected] = useState("Price")
  const priceRange = [
    { label: "Rs.15000 and Below", min: 0, max: 15000 },
    { label: "Rs.15000 and 30000", min: 15000, max: 30000 },
    { label: "Rs.30000 and 40000", min: 30000, max: 40000 },
    { label: "Rs.40000 and 50000", min: 40000, max: 50000 },
    { label: "Rs.50000 and 60000", min: 50000, max: 60000 },
    { label: "Rs.60000 and 70000", min: 60000, max: 70000 }
  ]
     const discountRange=[
        {label:"40% or more",min:40,max:100},
        {label:"30% or more",min:30,max:100},
        {label:"20% or more",min:20,max:100 }
    ]
     
   const screenSizeRange=[
         {label:"40 - 43 inch",min:40,max:43},
         {label:"28 - 32 inch",min:28,max:32} //
     ]
  const setPriceChange = (item, checked) => {
    if (checked) {
      setPrice([...price], item)
    }
    else {
      setPrice(price.filter((r) => r.label !== item.label))
    }
  }
  const assuredChange=(checked)=>{ 
    setAssured(checked)
  }
  const onChangebrand=(value,checked)=>{
    if(checked){
      setBrand([...brand,value])
    }
    else{
      setBrand(brand.filter((b)=>b!==value))
    }
  }
     const handleScreenSize=(item,checked)=>{
        if(checked){
            setScreen([...screen,item])
         }
           else{
             setScreen(
                 screen.filter((r)=>r.label!==item.label)
             )
         } 
     }
        const handleResolution=(data,checked)=>{
        if(checked){
           setResolution([...resolution,data])
          }
           else{ 
         setResolution(resolution.filter((r)=>r!==data))
     }
     } 
      const handleRating=(rate,checked)=>{
      if(checked){
        setRating([...rating,rate])
      }
      else{
        const updateRating=rating.filter((r)=>r.label!==rate.label)
        setRating(updateRating)
      }
     }
      const handleDisplay=(data,checked)=>{
        if(checked){
           setDisplay([...display,data])
          }
           else{ 
         setDisplay(display.filter((r)=>r!==data))
     }
     } 
        const handleOs=(data,checked)=>{
        if(checked){
           setOs([...os,data])
          }
           else{ 
         setOs(os.filter((r)=>r!==data))
     }
     } 
       
     const ratingRange=[
       {label:"3★ & above",min:3,max:5},
       {label:"4★ & above",min:4,max:5}
     ]
        const handleDiscountChange=(dis,checked)=>{
         if(checked){
             setDiscount([...discount,dis])
         }//
         else{
             setDiscount(discount.filter((d) => d.label !== dis.label));
        }
     }
  return (
    <div className='filterSmContainer'>
      <div className='filterSmSub'>
        <div className='filterSmPadding'>
          <div className='filterSmboxes'>
            <div className='filterSmHead'>
              <div className='filterSmHeadSub'>
                <div className='filterSmHeadMid'>
                  {
                    item.map((value) => (
                      <div className="filteritems" key={value}>
                        <div className='filteritemssub'>
                          <div onClick={() => setSelected(value)}
                            className={`filteritemsname ${selected === value ? "active" : ""}`}>
                            {value}
                          </div>
                        </div>
                      </div>

                    ))
                  }

                </div>
              </div>
            </div>
            <div className='filterSmcheck'>
              <div className='filterSmcheksub'>
                {
                  selected === "Price" && (
                    <div className='filterSmcheckmid'>
                      {
                        priceRange.map((item, index) => (
                          <div className='filterPriceSm' key={index}>
                            <div className='filterPricePadding'>
                              <input
                                type="checkbox"
                                id={`price-${index}`}
                                className='checkboxSm'
                                value={item.label}
                                checked={price.some((r) => r.label === item.label)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setPrice([...price, item]);
                                  } else {
                                    setPrice(price.filter((r) => r.label !== item.label));
                                  }
                                }}
                              />
                              <label htmlFor="price" className='labelSm'>
                                {item.label}
                              </label>
                            </div>
                          </div>
                        ))

                      }
                    </div>
                  )
                }
                {
                  selected === "F-Assured" && (
                    <>
                      <div className='assured-sm'>
                        <div className='popular-sm'>Ppular Filters</div>
                        <div className='F-Assured-Check'>
                          <input type='checkbox' className='checkbox-assured' checked={assured} onChange={(e)=>assuredChange(e.target.checked)}></input>
                          <div className='f-assured-name'>F-Assured</div>
                        </div>
                      </div>
                    </>
                  )
                }
                 {
                  selected === "Brand" && (
                    <> 
                       
                          <div className='brand-sm'>
                        <div className='brand-search'>
                          <div className='search-icon'>
                             <img src="https://rukminim1.flixcart.com/www/36/36/promos/05/02/2019/2c3684ce-966a-43b1-b93b-35d288875e8e.png?q=60" className='smbrandicon'></img>
                          </div>
                          <input type='text' placeholder='Search Brand' className='brandinputsm'></input>

                        </div>
                        <div className='Brand-check'>
                         
                            {
                              uniqueBrand.map((item,index)=>(
                                 <div className='brand-checksub' key={index}>
                                    <input type='checkbox' className='checkbox-assured'  value={item} checked={brand.includes(item)} onChange={(e)=>onChangebrand(item,e.target.checked)}></input>
                                    <div className='f-assured-name'>{item}</div>
                                  </div>
                              ))
                            }
      
                        
                        </div>
                      </div>
                      
                    </>
                  )
                }

                   {
                  selected === "ScreenSize" && (
                    <>
                      <div className='assured-sm'>
                        <div className='popular-sm'>Tip: More the viewing distance,greater Tv Screen Size</div>
                        {
                          screenSizeRange.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={screen.some((r)=>r.label===item.label)} onChange={(e)=>handleScreenSize(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item.label}</div>
                            </div> 
                          ))
                        }
                       
                      </div>
                    </>
                  )
                }
                  {
                  selected === "Resolution" && (
                    <>
                      <div className='assured-sm'>
                        <div className='popular-sm'>Tip: Higher resolution gives the picture extra details, depth and clarity</div>
                        {
                            resolutionUnique.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={resolution.includes(item)} onChange={(e)=>handleResolution(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item}</div>
                            </div> 
                          )) 
                        }
                       
                      </div>
                    </>
                  )
                }
                 {
                  selected === "Display Technology" && (
                    <>
                      <div className='assured-sm'>
                        {
                            displayUnique.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={display.includes(item)} onChange={(e)=>handleDisplay(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item}</div>
                            </div> 
                          )) 
                        }
                       
                      </div>
                    </>
                  )
                }
                 {
                  selected === "Operating System" && (
                    <>
                      <div className='assured-sm'>
                        {
                            osUnique.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={os.includes(item)} onChange={(e)=>handleOs(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item}</div>
                            </div> 
                          )) 
                        }
                       
                      </div>
                    </>
                  )
                }
                  {
                  selected === "Customer Rating" && (
                    <>
                      <div className='assured-sm'>
                        {
                            ratingRange.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={rating.some((r)=>r.label===item.label)} onChange={(e)=>handleRating(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item.label}</div>
                            </div> 
                          )) 
                        }
                       
                      </div>
                    </>
                  )
                }
                 {
                  selected === "GST Invoice Available" && (
                    <>
                      <div className='assured-sm'>
                                                <div className='popular-sm'>Popular Filters</div>
                              <div className='F-Assured-Check' >
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={invoice} onChange={(e)=>setInvoice(e.target.checked)}></input>
                              <div className='f-assured-name'>GST Invoice Available</div>
                            </div> 
                      </div>
                    </>
                  )
                }
                {
                  selected === "Discount" && (
                    <>
                      <div className='assured-sm'>
                        {
                            discountRange.map((item,index)=>(
                              <div className='F-Assured-Check' key={index}>
                              <input type='checkbox' className='checkbox-assured' value={item.label} checked={discount.some((d)=>d.label===item.label)}  onChange={(e) =>handleDiscountChange(item,e.target.checked)}></input>
                              <div className='f-assured-name'>{item.label}</div>
                            </div> 
                          )) 
                        }
                       
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div className='filterClearSection'>
          <div className='fcsub'>
            <div className='fcmid'>
              <a href='#' className='fcarrow' onClick={handleApply}>
                <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg"><path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
              </a>
              <div className='fchead'>
                <h1 className='fcheadsub'>Filters</h1>
              </div>
            </div>
            <a className='fcclear'>
              <span className='fcspan'>Clear Filter</span>
            </a>
          </div>
        </div>
        <div className='apply-head'>
          <div className='apply-headsub'>
            <div className='apply-headmid'>
              <div className='applyHead'>
                  <div className='productCount'>
                       10
                  </div>
                  <div className='productFound'>
                    productFound
                  </div>
              </div>
              <div className='applyButton' onClick={handleApply}>
                   <div className='applyButtonName'>
                    Apply
                   </div>
              </div>
            
            </div>

          </div>
        </div>
   
      </div>
    </div>
  )
}

export default FilterSm
