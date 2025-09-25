import React, { useState } from 'react'
import './style.css'
import notification from './images/notification.svg'
import help from './images/help.svg'
import advertise from './images/advertise.svg'
import download from './images/download.svg'
function Navbar() {
  const [ismenu,setisMenu]=useState(false)
  return (
    <div>
       <div className="nav-container">
         <div className="nav-containerSub">
            <div className="nav-left"> </div>
            <div className="navSection">
               <div className="nav-icon">
                 <div className='nav-icons'>
                  <a href='#' className='nav-iconsA'>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" className="iconImg"/>
                  </a>
                  <a href='#' className='nav-iconsB'>
                      Explore
                     <span className='plus'>Plus</span>
                     <img src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" className="explorePlus"></img>
                  </a>
                 </div>
               </div> 
               <div className='inputSection'>
                <form className='form'>
                  <div className='formContainer'>
                    <div className="formContainerSub">
                      <input className='input' placeholder='Search for Products,brands and more'></input>
                    </div>
                    <button className='formButton'>
                     <svg width="20" height="20" viewBox="0 0 17 18" class="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="EwE-Fa" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="EwE-Fa" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
                    </button>
                  </div>
                </form>
               </div>
               <div className='loginSection'>
                 <div className="loginSectionMid">
                  <div className='loginSectionSub'>
                    <a className="loginInputSection">
                      Login
                    </a>
                  </div>
                 </div>
               </div>
               <div className="seller">
                <a className="sellerA">
                  <span className='sellerSpan'>Become a Seller</span>
                </a>
               </div>
               <div className='more' onMouseOver={()=>setisMenu(true)} onMouseLeave={()=>setisMenu(false)}> 
                <div className='moreSub'>
                  <div className='moreName'>
                    <div>More</div>
                  </div>
                  <svg className='moreSvg' width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="Wto0b0" style={{ transform:"rotate(270deg)",
                   margin: "1px 0 0 8px"}}><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="-dC5Le"></path></svg>
                
                 {
                  ismenu?(
                    <div className='bar2menu'>
                      <div className='bar2menuSub'></div>
                    <ul className="menuItem">
                                              <a href='#' className="menuItemList">
                                                <li className="list">
                                                   <div className="icon">
                                                    <img  src={notification}  className="menuImg"/>
                                                    </div> 
                                                    <span>Notification Preferences</span>
                                                </li>
                                              </a> 
                                              <a href='#' className="menuItemList">
                                                <li className="list">
                                                   <div className="icon">
                                                    <img  src={help}  className="menuImg"/>
                                                    </div> 
                                                    <span>24x7 Customer care</span>
                                                </li>
                                              </a> 
                                              <a href='#' className="menuItemList">
                                                <li className="list">
                                                   <div className="icon">
                                                    <img  src={advertise}  className="menuImg"/>
                                                    </div> 
                                                    <span>Advertise</span>
                                                </li>
                                              </a> 
                                              <a href='#' className="menuItemList">
                                                <li className="list">
                                                   <div className="icon">
                                                    <img  src={download}  className="menuImg"/>
                                                    </div> 
                                                    <span>Download App</span>
                                                </li>
                                              </a>
                                            </ul>
                              </div>
                  ):(
                         <div></div>
                  )
                 }
                 </div>
               </div>
                <div className='more'> 
                <div className='moreSub'>
                  
                 <svg class="GAbRIN" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="cziJ98" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                   <div className='moreName'>
                    <div>Cart</div>
                  </div>
                </div>   
               </div>
            </div>
            <div className="nav-right"></div>
         </div>
       </div>
    </div>
  )
}

export default Navbar
