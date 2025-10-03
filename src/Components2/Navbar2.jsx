import React, { useEffect, useState } from 'react'
import './style.css'
import Electroni from './Electroni'


function Navbar2() {
    const slideOne=["MI","Realme","Samsung","Infinix","OPPO","Apple","Vivo","Honor","Asus","Poco X2","realme Narzo 10","Infinix Hot 9","IQDO 3","iPhone SE","Motrola razer","realme Narzo 10A","Motrola GB Power Lite"];
    const slideTwo=["Mobile Cases","Headphones & Hedsets","Power Banks","Screenguards","MemoryCards","Smart Headphones","Mobile Cables","Mobile Chargers","Mobile Holders"]
    const slideTwoSub=["Smart watches","Smart Glasses (VR)","Smart Brands"]
    const slideTwoSubTwo=["Bp Monitors","Weighing Scale"]
    const slideThree=["Gaming Laptops"]
    const slideThreeSub=["External Hard Disks","Pendrives","Laptop Skins & Decals","Laptop Bags","Mouse"]
    const slideThreeSubOne=["Printers & Ink Cartridges","Monitors"]
    const slideThreeSubTwo=["Apple iPads"]
    const slideFour=["Television"]
    const sildeFourSub=["Home Audio Speakers","Home Theaters","Soundbars","Bluetooth Speakers","DTH Set Top Box"]
    const slideFourSubOne=["Google Nest"]
    const slideFourSubTwo=["DSLR & Mirrorless","Compact & Bridge Cameras","Sports & Action"]
    const slideFourSubThree=["Lens","Tripods"]
    const SliderFourSubFour=["Routers"]
    const SliderFive=["Google Assistant Store","Laptops on Buyback Gurantee","FlipKart SmartBuy","LI-Polymer Power Banks","Sony PS4 Pro & Slim","Apple Products","Microsoft Store","Lenovo Phab Series","JBL Speakers","Smartphones on Buyback Guarantee","Philips","Dr. Morepen","Complete Mobile Protection","Huawell Watch Gt 2e Smart Watch"]
    const [data,setData]=useState([])
    const [Menu,setisMenu]=useState(false)
    useEffect(()=>{
       fetch("Navbar2.json")
       .then(res=>res.json())
       .then(data=>setData(data))
       .catch(error=>console.log("error to fetch data"))
    },[])
  return(
    <div className='navSection2'>
       <div className='navSection2-Sub'>
         {//dddddddd
            data.map((value,index)=>(
                <span key={index} className='bar2span' onMouseOver={()=>setisMenu(true)} onMouseLeave={()=>setisMenu(false)}>
                  {value.name}
                    {value.id>=1&&value.id<=7&&(
                        <svg className="bar2svg" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class="CPYntE" transform="rotate(270 8 13.5)" ></path></svg>
                     )}
                </span> 
               

                    
            ))
         }
      {
        Menu?(
          <div className='electronic-Container'>
      <div className='electro-SubOne'>
        <a className='electro-Head'>
            Mobiles
        </a> 
     
            {
                slideOne.map((item)=><a className='electro-title'>{item}</a>)
            }
      </div>
      <div className='electro-subTwo'>
         <a className='electro-Head'>
            Mobiles Accessories
        </a>
     
            {
                slideTwo.map((item)=><a className='electro-title'>{item}</a>)
            }
        <a className='electro-Head'>
            Smart Wearable Tech 
        </a>
     
            {
                slideTwoSub.map((item)=><a className='electro-title'>{item}</a>)
            }
            <a className='electro-Head'>
            Health Care Appliances
        </a>
     
            {
                slideTwoSubTwo.map((item)=><a className='electro-title'>{item}</a>)
            } 
      </div>
      <div className='electro-SubOne'>
             <a className='electro-Head'>
             Laptops
        </a>
     
            { 
                slideThree.map((item)=><a className='electro-title'>{item}</a>)
            }
         <a className='electro-Head'>
             Desktop PCs
        </a>
          <a className='electro-Head'>
             Gaming & Accessories
          </a>
            <a className='electro-Head'>
             Computer & Accessories
              </a>

            { 
                slideThreeSub.map((item)=><a className='electro-title'>{item}</a>)
            }
            <a className='electro-Head'>
             Computer Peripherals
              </a>
            { 
                slideThreeSubOne.map((item)=><a className='electro-title'>{item}</a>)
            }
             <a className='electro-Head'>
               Tablets
              </a>
                { 
                slideThreeSubTwo.map((item)=><a className='electro-title'>{item}</a>)
              }
      </div>
      <div className='electro-subTwo'>
           { 
                slideFour.map((item)=><a className='electro-title'>{item}</a>)
            }
             <a className='electro-Head'>
               Speakers
             </a>
             { 
                sildeFourSub.map((item)=><a className='electro-title'>{item}</a>)
            }
             <a className='electro-Head'>
               Smart Home Automation
             </a>
               { 
                slideFourSubOne.map((item)=><a className='electro-title'>{item}</a>)
            }
             <a className='electro-Head'>
               Camera
             </a>
              { 
                slideFourSubTwo.map((item)=><a className='electro-title'>{item}</a>)
            }
            <a className='electro-Head'>
               Camera Accessories
             </a>
               { 
                slideFourSubThree.map((item)=><a className='electro-title'>{item}</a>)
               }
                <a className='electro-Head'>
                  Network Components
             </a>
              { 
                SliderFourSubFour.map((item)=><a className='electro-title'>{item}</a>)
               }
               </div>
               <div className='electro-SubOne'>
                 <a className='electro-Head'>
                  Featured
               </a>
                 { 
                SliderFive.map((item)=><a className='electro-title'>{item}</a>)
               }
             </div>
      </div>

        ):<div></div>
      }  
    
       </div>
    </div>
  )
}

export default Navbar2
