import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
function TopPicks(props) {
    const [data,setData]=useState([])
    useEffect(()=>{
       fetch(`${props.jsonfile}.json`)
       .then(res=>res.json())
       .then(data=>setData(data))
       .catch(err=>console.log(err))
    },[])
  return (
    <div className={styles.topPicksContainer}>
        <div className={styles.topPicksContainerMid}>
           <div className={styles.topPicksContainerSub}>
            <a className={styles.topPicksHead}>
              <div className={styles.topPicksHeadMid}>
                <div className={styles.topPicksHeadOne}>
                   <p className={styles.topPicksTitle}>
                       {props.title}
                   </p>
                </div>
                <div className={styles.topPicksHeadTwo}>
                    <div className={styles.topPicksSvg}>
                        <svg width="16" height="16" fill="none" viewBox="0 0 17 17" style={{margin: "4px"}}><path d="m6.627 3.749 5 5-5 5" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div>
              </div>
            </a>
            <div className={styles.topPicksContent}>
               <div className={styles.topPicksContentMid}>
                {
                    data.map((value,index)=>(
                        <div key={index} className={styles.topPicksS}>
                            <div className={styles.topPicksSMid}>
                                <div className={styles.topPicksSub}>
                                    <div className={styles.topPicksP}>
                                      <div className={styles.topPicksImg}>
                                        <img className={styles.topPicksImage} src={value.img
                                        }/>
                                      </div>
                                      <div className={styles.topPicksDetails}>
                                        <div className={styles.topPicksOne}>
                                            {value.name}
                                        </div>
                                        <div className={styles.topPicksTwo}>
                                            <div className={styles.topPicksTwoSub}>
                                                {value.offer}
                                             </div>   
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
               </div>
            </div>
           </div>
        </div>
      
    </div>
  )
}

export default TopPicks
