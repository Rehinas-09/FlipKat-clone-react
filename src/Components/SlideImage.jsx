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
        <div className={styles.slidersub}>
        <div className={styles.ImgDiv}>    
       {
          image.length>0&&(
            <img src={image[index]} style={{width:"100%",margin:"auto",objectFit:"cover"}}
            alt="slider" 
             />
          )
       }
             <button className={styles.slideButtonOne}>
            
          </button>
          <button className={styles.slideButtonTwo}>
            
          </button>
          </div>
       <div className={styles.sidebar}>
           <div className={styles.SlidebarSub}></div>
           <div className={styles.SlidebarSub}></div>
           <div className={styles.SlidebarSub}></div>
           <div className={styles.SlidebarSub}></div>
           <div className={styles.SlidebarSub}></div>
           <div className={styles.SlidebarSub}></div>
      
       </div> 
     </div>
 
    </div> 
   
    </>
  ) 
}
export default SlideImage

