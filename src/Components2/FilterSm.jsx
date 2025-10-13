import React, { useContext, useState } from 'react'
import './style.css'
import { FilterContext } from './FilterContextProvider'
function FilterSm() {
  const {
    price,
    setPrice,
    assured,
    setAssured,
    uniqueBrand
  } = useContext(FilterContext)
  const item = ["Price", "F-Assured", "Brand", "Screen Size", "Resolution", "Display Technology", "Operating System", "Customer Rating", "GST Invoice Available", "Discount"]
  const [selected, setSelected] = useState("Price")
  const priceRange = [
    { label: "Rs.15000 and Below", min: 0, max: 15000 },
    { label: "Rs.15000 and 30000", min: 15000, max: 30000 },
    { label: "Rs.30000 and 40000", min: 30000, max: 40000 },
    { label: "Rs.40000 and 50000", min: 40000, max: 50000 },
    { label: "Rs.50000 and 60000", min: 50000, max: 60000 },
    { label: "Rs.60000 and 70000", min: 60000, max: 70000 }
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
                        <div className='F-Assured-Check'>
                          <input type='checkbox' className='checkbox-assured' checked={assured} onChange={(e)=>assuredChange(e.target.checked)}></input>
                          <div className='f-assured-name'>F-Assured</div>
                        </div>
                      </div>
                    </>
                  )
                }


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSm
