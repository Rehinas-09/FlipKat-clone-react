import React from 'react'
import style from './style.module.css'
function TopSelling() {
  return (
    <div className={style.topSellingContainer} >
       <div className={style.topSellingMid}>
        <div className={style.topSellingSub}>
          <img src="https://rukminim2.flixcart.com/www/2140/1420/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60" className={style.topSellingPic}/>
        </div>
       </div>
    </div>
  )
}

export default TopSelling
