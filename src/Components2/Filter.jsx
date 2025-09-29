import React, { useEffect, useState } from 'react'
import './style.css'
function Filter({ priceRange,
     onPriceChange, 
     assured,
     assuredChange,
     brand, 
     selectedBrand,
     changeBrand,
     selectedScreen,
     onScreenChange,
     resolution,
     setResolution,
     resolutionData,
     display,
     setDisplay,
     os,
     setOs,
     rating,
     setRating
    }) {
        const [brandSearch,setBarndSearch]=useState("")
        const [ratingStar,setRatingStar]=useState([])
        const [data,setData]=useState([])
    const handleMinChange = (e) => {
        const newMin = Number(e.target.value) 
        onPriceChange({ min: newMin, max: priceRange.max })
    }
    const handleMaxChange = (e) => { 
        const newMax = Number(e.target.value);
        onPriceChange({ min: priceRange.min, max: newMax })
    }
    const handleBrandChange=(brand,checked)=>{
        if(checked){ 
            changeBrand([...selectedBrand,brand])
        }
        else{
            changeBrand(selectedBrand.filter((b)=>b!==brand))
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
    const screenSizeRange=[
        {label:"40 - 43 inch",min:40,max:43},
        {label:"28 - 32 inch",min:28,max:32}
    ] 
    const handleScreenSize=(range,checked)=>{
        if(checked){
            onScreenChange([...selectedScreen,range])
        }
        else{
            onScreenChange(
                selectedScreen.filter((r)=>r.label!==range.label)
            )
        } 
    }
    const handleDisplay=(data,checked)=>{
        if(checked){
          setDisplay([...display,data])
        }
        else{
            setDisplay(display.filter((d)=>d!==data))
        }
    }
     const handleOs=(data,checked)=>{
        if(checked){
            setOs([...os,data])
        }
        else{
            setOs(os.filter((d)=>d!==data))
        }
     } 
      useEffect(()=>{   
        fetch("TvData.json")  
        .then(res=>res.json()) 
        .then(data=>setData(data))
      },[]) 
        const uniqueBrand=[...new Set(data.map((item)=>item.brand))]
        const resolutionUnique=[...new Set(data.map((res)=>res.resolution))]
        const displayUnique=[...new Set(data.map((item)=>item.display))]
        const osUnique=[...new Set(data.map((item)=>item.os))]
        const uniqueRating=[...new Set(data.map((item)=>item.ratingSection))]
        console.log(displayUnique)
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
                                <select className='selecetMinPrice' value={priceRange.min} onChange={handleMinChange}>
                                    <option className='selectMinOption' value={0}>Min</option>
                                    <option className='selectMinOption' value={15000}>₹15000</option>
                                    <option className='selectMinOption' value={30000}>₹30000</option>
                                    <option className='selectMinOption' value={40000}>₹40000</option>
                                    <option className='selectMinOption' value={50000}>₹50000</option>
                                    <option className='selectMinOption' value={60000}>₹60000</option>

                                </select>
                            </div>
                            <div className='priceMid'>to</div>
                            <div className='priceMenuTwo'>
                                <select className='selectMaxPrice' value={priceRange.max} onChange={handleMaxChange}>
                                    <option className='selectMaxOption' value={15000}>₹15000</option>
                                    <option className='selectMaxOption' value={30000}>₹30000</option>
                                    <option className='selectMaxOption' value={40000}>₹40000</option>
                                    <option className='selectMaxOption' value={50000}>₹50000</option>
                                    <option className='selectMaxOption' value={60000}>₹60000</option>
                                    <option className='selectMaxOption' value={70000}>₹60000+</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* assured section */}
                    <div className="assured-section">
                        <div className="labelAssured"> 
                            <input type='checkbox' checked={assured} onChange={(e)=>assuredChange(e.target.checked)} ></input>
                            <div className="Assuredfil">
                                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' height="21"></img>
                            </div>
                        </div>
                        <div className='Qmark'>
                            <span className='QmarkSpan'>?</span>
                        </div>
                    </div>
                    <div className='brand-section'>
                        <div className='brandSone'>
                           <div className='brandName'>
                            Brand 
                          </div>
                          <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35"></path></svg>
                        </div>  
                       
                       
                        <div className='brandStwo'>
                           <div className='brandStwoSub'>
                             <div className='searchBrand'>
                                <svg width="20" height="20" viewBox="0 0 17 18" className="zmbstL searchIcon" xmlns="http://www.w3.org/2000/svg"><g fill="#878787" fill-rule="evenodd"><path class="JVQyl9" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="JVQyl9" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                                <input type="text" placeholder='Search Brand' value={brandSearch} onChange={(e)=>setBarndSearch(e.target.value)} className='SB '></input>
                             </div> 
                              {   

                                uniqueBrand.map((value,index)=>(
                                           
                                     <div className='brandCheck' key={index}> 
                                        <div className='brandCheckSub'> 
                                            <input type='checkbox' value="brand" checked={selectedBrand.includes(value)} onChange={(e)=>handleBrandChange(value,e.target.checked)}></input>
                                            <div className='brandNames'>
                                                {value}
                                            </div>   
                                        </div>  
                                     </div>
                                ))
                             }
                                   
                           </div>
                        </div>
                    </div>
                    <div className='screensize' >
                        <div className='brandSone'>
                            <div className='brandName'>
                                Screen Size
                            </div>
                            <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                        <div className='barndStwo'>
                            <div className="brandStwoSub">
                               {
                                screenSizeRange.map((range,index)=>(
                                    <div className='screen_size' key={index}> 
                                        <div className='screen_sizeSub'>
                                           <div className='screen_sizeLabel'>
                                            <input type="checkbox" value={range.label} checked={selectedScreen.some((r)=>r.label===range.label)} onChange={(e)=>handleScreenSize(range,e.target.checked)}></input>
                                            <div className='screenSizeRange'>{range.label}</div> 
                                            </div> 
                                        </div>
                                    </div>
                                ))
                               }
                            </div>
                                    
                        </div>

                    </div>
                    <div className='screensize'>
                        <div className='brandSone'>
                            <div className='brandName'>
                                Ideal for Viewing Distance
                            </div>
                             <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                    </div>
                     <div className='screensize'>
                        <div className='brandSone'>
                            <div className='brandName'>
                                Resolution
                            </div>
                             <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                        <div className='barndStwo'>
                            <div className="brandStwoSub">
                               {
                                resolutionUnique.map((data,index)=>(
                                    <div className='screen_size' key={index}> 
                                        <div className='screen_sizeSub'>
                                           <div className='screen_sizeLabel'>
                                            <input type="checkbox" value={data} checked={resolution.includes(data)} onChange={(e)=>handleResolution(data,e.target.checked)}></input>
                                            <div className='screenSizeRange'>{data}</div> 
                                            </div> 
                                        </div>
                                    </div>
                                ))
                               } 
                            </div>
                                    
                        </div>

                    </div> 
                       <div className='screensize'>
                        <div className='brandSone'>
                            <div className='brandName'>
                                DISPLAY TECHNOLOGY
                            </div>
                             <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                        <div className='barndStwo'>
                            <div className="brandStwoSub">
                               {
                                displayUnique.map((data,index)=>(
                                    <div className='screen_size' key={index}> 
                                        <div className='screen_sizeSub'>
                                           <div className='screen_sizeLabel'>
                                            <input type="checkbox" value={data} checked={display.includes(data)} onChange={(e)=>handleDisplay(data,e.target.checked)}></input>
                                            <div className='screenSizeRange'>{data}</div> 
                                            </div> 
                                        </div>
                                    </div>
                                ))
                               } 
                            </div>
                                    
                        </div>

                    </div> 
                      <div className='screensize'>
                        <div className='brandSone'>
                            <div className='brandName'>
                                OPERATING SYSTEM
                            </div>
                             <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                        <div className='barndStwo'>
                            <div className="brandStwoSub">
                               {
                                osUnique.map((data,index)=>(
                                    <div className='screen_size' key={index}> 
                                        <div className='screen_sizeSub'>
                                           <div className='screen_sizeLabel'>
                                            <input type="checkbox" value={data} checked={os.includes(data)} onChange={(e)=>handleOs(data,e.target.checked)}></input>
                                            <div className='screenSizeRange'>{data}</div> 
                                            </div> 
                                        </div>
                                    </div>
                                ))
                               } 
                            </div>
                                    
                        </div>

                    </div> 
                     <div className='screensize'>
                        <div className='brandSone'>
                            <div className='brandName'>
                                OPERATING SYSTEM
                            </div>
                             <svg  width="6" height="11" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"  className="ukzDZP rZzKt4 svgBrand" ><path className='svgPath' d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="SV+H35" ></path></svg>
                        </div>
                        <div className='barndStwo'>
                            <div className="brandStwoSub">
                               { 
                               (uniqueRating!=="")&&
                                uniqueRating.map((data,index)=>(
                                    <div className='screen_size' key={index}> 
                                        <div className='screen_sizeSub'>
                                           <div className='screen_sizeLabel'>
                                            <input type="checkbox" value={data}  onChange={(e)=>handleOs(()=>setRating(rating))}></input>
                                            <div className='screenSizeRange'>{data}</div> 
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

        </div>
    )
}

export default Filter
