import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
function TopProducts(props) {
    const [data,setData]=useState([])
    const [index,setStartIndex]=useState(0)
    const [visible,setVisible]=useState(7)
    useEffect(()=>{
       fetch(`${props.Jsonfile}.json`)
       .then(res=>res.json()) 
       .then(data=>setData(data))
    },[]) 
    useEffect(()=>{
        const handleresize=()=>{
            if(window.innerWidth<=1200){
                setVisible(8)
            }
            else{
                setVisible(7)
            } 
        } 
        handleresize()
        window.addEventListener("resize",handleresize)
        return()=>window.removeEventListener("resize",handleresize)
    },[])
    const handleChangeRight=()=>{
      if(index+visible<data.length){
        setStartIndex(index+1)
      }
    }
    const handleChangeLeft=()=>{
        if(index-1>=0){
            setStartIndex(index-1)
        }
  
    }
    const visibleProduct=data.slice(index,index+visible)
  return (
    <div className={styles.topProductContainer}> 
        <div className={styles.topProductMid }>
            <div className={styles.topProductSub}>
                <div className={styles.topProductTitle}>
                     <p className={styles.toProductHead}>{props.name}</p>
                </div>
                <div className={styles.topOfferProductMain}>
                <div className={styles.topOfferProductMid}>
                    <div className={styles.topOfferProductSub}>
                          {
                            visibleProduct.map((value,index)=>(
                                <div key={index} className={styles.topOfferSingle}>
                                    <div className={styles.topOfferSingleSub}>
                                        <div className={styles.topOfferSingleMid}>
                                            <div className={styles.topOfferP}>
                                                <div className={styles.topOfferSImage}>
                                                    <img className={styles.topOfferImg} src={value.img}/>
                                                </div>
                                                <div className={styles.topOfferSContent}>
                                                    <div className={styles.topOfferContentOne}>
                                                        {value.name}
                                                    </div>
                                                    <div className={styles.topOfferContentTwo}>
                                                        {value.offer}
                                                    </div>    
                                                </div>
                                             </div> 
                                             <svg width="16" className={styles.topProductsArrow} height="16" fill="none" viewBox="0 0 17 17" ><path d="m6.627 3.749 5 5-5 5" stroke="#111112" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            ))
                          }
                    </div>
                    { index==0&&(
                    <button className={styles.topDealButtonRight} onClick={handleChangeRight}>
                         <span className={styles.topDealButtonSpan}></span>
                    </button>
                    )
                    }{ index==1&&(
                    <button className={styles.topDealButtonLeft} onClick={handleChangeLeft}>
                         <span className={styles.topDealButtonLeftSpan}></span>
                    </button>
                    )
                  }
                </div>
                </div>
            </div>

        </div>
       
    </div>
  )
}

export default TopProducts
