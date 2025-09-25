import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
function Category() {
    const [data,setData]=useState([])
    const [isHoveredId,setisHoveredId]=useState(null)
    const [width,setWidth]=useState(window.innerWidth)
    const navigate=useNavigate();
    useEffect(()=>{ 
       fetch("./product.json")
       .then(respose=>respose.json()) 
       .then(data=>setData(data)) 
       .catch(error=>console.error("Error to fetch json",error))
    },[]) 
    useEffect(()=>{
      const handleWidth=()=>{
        setWidth(window.innerWidth)
      }
      handleWidth()
      window.addEventListener("resize",handleWidth)
      return()=>window.removeEventListener("resize",handleWidth)

    },[])
    const goToProduct=()=>{
       navigate("/product") 
    }
  return ( 
    <div className={styles.categoryContainer}>
        <div className={styles.categorySub}>
          <div className={styles.catAlign}>
            {
              data.map((value)=>( 
                <a className={styles.catAnger} 
                key={value.id}

                onMouseOver={()=>{ 
                  if(width>1024){setisHoveredId(value.id)}}}
                 onMouseLeave={()=>{ if(width>1024){setisHoveredId(null)}}} 
                 onClick={()=>{
                  if(value.id===6){ 
                    goToProduct(); 
                  }
                 }}>
                  <div className={styles.catElement} >
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
                     {
                      (isHoveredId===value.id&&(value.section1||value.section2||value.section3))&&(
                        
                        <div className={styles.styleContainer}> 
                          <div className={styles.styleContainerSub}> 
                            <object className={styles.styleObject}>
                              { value.section1.map((item,index)=>( 
                                
                                 <a herf="#" className={styles.styleContent} key={index}>
                                  <span className={styles.stylespan}>{item}</span>
                               </a>
                              ))} 
                              
                            </object>
                          </div> 
                          
                          <div className={styles.styleContainerSubT}>
                            <object className={styles.styleObject}>
                              { 
                            
                              value.section2.map((item,index)=>(
                                 <a herf="#" className={styles.styleContent} key={index} >
                                  <span className={styles.stylespan}>{item}</span>
                               </a>
                              
                              ))
                            }
                            </object>

                          </div>
                        </div>
                      )
                    
                     }
                  
                </a>
              ))
            } 
          </div>
        </div>
  
    </div>
  )
} 

export default Category
