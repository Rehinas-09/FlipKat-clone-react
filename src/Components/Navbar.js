import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import icon  from './images/icon.svg'
import login from './images/login.svg'
import downArrow from './images/downArrow.svg'
import cart from './images/cart.svg'
import seller from './images/seller.svg'
import menu from './images/menu.svg'
import notification from './images/notification.svg'
import help from './images/help.svg'
import advertise from './images/advertise.svg'
import download from './images/download.svg'
import mobileMenu from './images/mobileMenu.svg'
import icon2 from './images/icon2.svg'
import mobile from './images/mobile.svg'
function Navbar() {
    const [isHoved,setisHoverd]=useState(false) 
    const [isMenu,setisMenu]=useState(false)
    const [isimage,setisImage]=useState([])
    useEffect(()=>{
        fetch("login.json")
        .then(res=>res.json())
        .then(data=>setisImage(data))
    },[])
     
  return ( 
    <div className={styles.container}>
        <div className={styles.containerSub}>
          <div className={styles.alignment}></div>
            <nav className={styles.header}> 
              <div className={styles.sectionA}>
                <div className={styles.filpIcon}>
                    <a className={styles.mb}>
                      <img className={styles.mobileIcon} src={mobileMenu} />
                    </a>
                    <a className={styles.filpIconLink}>
                        <img  src={icon} className={styles.icon1}/>
                        <img src={icon2} className={styles.icon2}/>
                    </a> 
                </div> 
                <div className={styles.input} >  
                    <form className={styles.form}>
                      <div className={styles.subForm}>
                       <button className={styles.button} type='submit'>
                         <svg className={styles.svg} width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L21 21" stroke="#717478" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                       </button> 
                       <div className={styles.inputBox}> 
                          <input type='text' placeholder="Search for Products, Brands and More" className={styles.input}/>
                       </div> 
                      </div>
                    </form> 
                </div>

              </div> 
              <div className={styles.sectionB}>
                <div className={styles.loginPart}>
                      <div className={styles.login} >
                          <a href='#' className={styles.loginAnger}>
                        <img src={mobile} className={styles.loginImg}/> 
                       </a> 
                    </div> 
                    <div className={styles.login} >
                      <div className={styles.loginAlign} onMouseOver={()=>setisHoverd(true)} onMouseLeave={()=>setisHoverd(false)} style={{backgroundColor:isHoved?"#2a55e5":"white",borderRadius:isHoved?"8px":"none"}} > 
                        <a href="#" className={styles.loginAnger}> 
                          <img className={styles.loginImg} src={login} style={{filter:isHoved?"brightness(0) invert(1)":"brightness(0)"}}/>
                            <span className={styles.loginTitle} style={{color:isHoved?"white":"#000"}}>Login</span>
                               <img className={styles.downArrow} src={downArrow} style={{filter:isHoved?"brightness(0) invert(1)":"brightness(0)", transform:isHoved?"rotate(180deg)":"rotate(0deg)"}}/>
                        </a> 
                        
                                                      {  
                         isHoved?(
                            <ul className={styles.loginItem}>
                              
                                <a href="#" className={styles.newCustom}>
                                  <span className={styles.newCustomer}>New Customer</span>
                                  <span className={styles.sign}>Sign Up</span>
                                </a>
                                {
                                  
                                  isimage.map((value,index)=>(
                                        <a href="#" style={{textDecoration:"none"}} key={index}>
                                           <li className={styles.loginItemMid}>
                                               <div className={styles.loginItemDiv}>
                                         <img className={styles.loginItemImage} src={value.images}></img>
                                          </div>
                                       <p className={styles.loginItemprofile}>{value.des}</p>
                                 </li>
                                      </a>
                                  ))
                              
                                }
                                
                            </ul> 
                         ):( 
                             <div></div>
                         )  
                        }  
                        </div>
                      </div> 
                     
                  </div>  
                   
                         
                <div className={styles.login}> 
                   <a href='#' className={styles.loginAnger}>
                    <img src={cart} className={styles.loginImg}  />
                   </a>
                   <a className={styles.cartTitle}>Cart</a>
                </div>
                <div className={styles.login}>
                    <a href='#' className={styles.loginAnger}>
                        <img src={seller} className={styles.loginImg}/>
                    </a>
                    <a className={styles.cartTitle}>Become a Seller</a> 
                </div>
                <div className={styles.login} >
                    <div className={styles.menu} onMouseOver={()=>setisMenu(true)} onMouseLeave={()=>setisMenu(false)} style={{borderRadius:isMenu?"8px":"0", borderColor:isMenu?"#e0e0e0":"white",background:isMenu?"#fafafa":"none"}} >
                        <a href='#' className={styles.tagA}>
                            <img src={menu}></img>
                        </a>
                    {
                       isMenu?(
                        <ul className={styles.menuItem}>
                          <a href='#' className={styles.menuItemList}>
                            <li className={styles.list}>
                               <div className={styles.icon}>
                                <img  src={notification}  className={styles.menuImg}/>
                                </div> 
                                <span>Notification Preferences</span>
                            </li>
                          </a> 
                          <a href='#' className={styles.menuItemList}>
                            <li className={styles.list}>
                               <div className={styles.icon}>
                                <img  src={help}  className={styles.menuImg}/>
                                </div> 
                                <span>24x7 Customer care</span>
                            </li>
                          </a> 
                          <a href='#' className={styles.menuItemList}>
                            <li className={styles.list}>
                               <div className={styles.icon}>
                                <img  src={advertise}  className={styles.menuImg}/>
                                </div> 
                                <span>Advertise</span>
                            </li>
                          </a> 
                          <a href='#' className={styles.menuItemList}>
                            <li className={styles.list}>
                               <div className={styles.icon}>
                                <img  src={download}  className={styles.menuImg}/>
                                </div> 
                                <span>Download App</span>
                            </li>
                          </a>
                        </ul>
                       ):(
                        <div></div> 
                       )
                    }
                    </div> 
                </div>
              </div>
             
            </nav>
        </div> 
     
      
    </div>
  )
}

export default Navbar
