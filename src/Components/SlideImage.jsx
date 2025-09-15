import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
function SlideImage() {
    const [image,setImage]=useState([])
    const [index,currentIndex]=useState(0)
    useEffect(()=>{
       fetch("slideImage.json")
       .then(response=>response.json())
       .then(data=>setImage(data))
    },[])
    useEffect(()=>{
        let intervel=setInterval(()=>{
              currentIndex((previndex)=>
            previndex===image.length-1?0:previndex+1)
        },5000)
        return()=>clearInterval(intervel)
    },[image]) 
  return (    
    <>
    <div className={styles.slider}>
        <div className={styles.slidersub} style={{position:'relative'}}>
     
       {
          image.length>0&&(
            <img src={image[index]} style={{width:"100%",margin:"auto",objectFit:"cover"}}
            alt="slider" 
             /> 
          )
       }
             <button className={styles.slideButtonOne}>
               <span className={styles.slideButtonspan}>
               </span>
            
          </button>
          <button className={styles.slideButtonTwo}>
            <span className={styles.slideButtonspanTwo}>
  
            </span>
          </button>
  
       <div className={styles.sidebar}>
          {
            image.map((_,i)=>(
              <div key={i} className={`${styles.SlidebarSub} ${
                i=== index? styles.active:""
              }`}> 
              </div>
            ))
          }
        
       </div> 
     </div> 
 
    </div> 
   
    </>
  ) 
}
export default SlideImage

