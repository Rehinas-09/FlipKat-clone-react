import React, { useEffect, useState } from 'react'
import styles  from './style.module.css'
function BigBillonOffer(props) {
    const [image,setImage]=useState([])
    useEffect(()=>{
        fetch(`${props.json}.json`)
        .then(res=>res.json())
        .then(data=>setImage(data))
        .catch(err=>console.log(err))
    })
  return (
    <div className={styles.offerContainer}>
      <div className={styles.offerContainerSub}>
        <div className={styles.offerContainerMid}>
            <div className={styles.offerContent}>
                {
                    image.map((value,index)=>(
                        <div key={index} className={styles.OfferSingle}>
                            <div className={styles.offerSingleMid}>
                                <div className={styles.offerSingleSub}>
                                    <img src={value.img} className={styles.offerImg} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default BigBillonOffer
