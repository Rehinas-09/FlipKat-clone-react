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
       <div className={styles.subCategory}>
         <div className={styles.categories}>
           {
            data.map((value,index)=>(
                <a key={index} className={styles.categoryLink}>
                        <div className={styles.categoryContent}>
                            <div className={styles.categoryImage}>
                                
                            </div>
                            <span> 
                                {value.category}
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
