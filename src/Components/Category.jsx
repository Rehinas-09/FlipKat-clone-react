import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
function Category() {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch("./product.json")
       .then(respose=>respose.json()) 
       .then(data=>setData(data))
       .catch(error=>console.error("Error to fetch json",error))
    },[])
  return (
    <div className={styles.categoryContainer}>
        <div className={styles.categorySub}>
          <div className={styles.catAlign}>
            {
              data.map((value)=>(
                <a className={styles.catAnger} key={value.id}>
                  <div className={styles.catElement}>
                     <div className={styles.catImg}>
                       <img className={styles.catImage} src={value.img} style={{width:"64px",height:"64px"}}/>
                     </div>
                     <span className={styles.catName}>
                     <span >
                       {value.category}
                     </span>
                     {
                      (value.id===3||value.id===4||value.id===5||value.id===8)&&(
                        <span className={styles.categoryArrow}></span>
                      )
                     }   
                     </span>
                     
                  </div>
                </a>
              ))
            } 
          </div>
        </div>
  
    </div>
  )
} 

export default Category
