import React, { useEffect, useState } from 'react'
import './style.css'

function ProductData() {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("TvData.json")
       .then(response=>response.json())
       .then(data=>setData(data))
    },[])
  return (
    <>
    {
        data.map((value,index)=>(
            <div className="productDataContainer" key={index}>
                <div className='productDataContainerSub'>
                  <a className='productDataContainerA'>
                    <div className='productDataImage'>
                       <div className='productDataImg'>
                          <img className='pdImage' src={value.img}></img>
                       </div>
                       <div className='productDataAdd'>
                        <span className='pdspan'>
                          <label className='pdspanl'>
                            <input type='checkbox' className='pdspani'></input>
                            <div className='pdspand'></div>
                          </label>
                        </span>
                        <label className='pdlabel'>
                            <span className='pdlabels'>Add to Compare</span>
                        </label>
                       </div>
                       <div className='productDataLove'>
                        <div classname='pdl'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="16" height="16" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></svg>
                        </div> 
                       </div>
                    </div>
                    <div className='productDataContent'></div>
 
                  </a>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default ProductData
