import React, { useEffect, useState } from 'react'
import './style.css'


function Navbar2() {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("Navbar2.json")
       .then(res=>res.json())
       .then(data=>setData(data))
       .catch(error=>console.log("error to fetch data"))
    },[])
  return (
    <div className='navSection2'>
       <div className='navSection2-Sub'>
         {
            data.map((value,index)=>(
                <span key={index} className='bar2span'>
                    {value.id>=1&&value.id<=7&&(
                        <svg className="bar2svg" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="CGMB7B"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class="CPYntE" transform="rotate(270 8 13.5)" ></path></svg>
                     )}
                </span> 
                    
            ))
         }
       </div>
    </div>
  )
}

export default Navbar2
