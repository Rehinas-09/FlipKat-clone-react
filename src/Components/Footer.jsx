import React from 'react'
import styles from './style.module.css'
import fimage from './images/facebook.svg'
import timage from './images/twitter.svg'
import iimage from './images/instagram.svg'
import yimage from './images/youtube.svg'
import one  from './images/g.svg'
import Two from './images/Two.svg'
import  Three from './images/Three.svg'
import Four from './images/sg.svg'
import Icons from './images/icons.svg'
function Footer() {  

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footer}>
                <div>
                    <div className={styles.footerSecOne}>
                        <div className={styles.fcc}>
                            <div className={styles.footerHead}>
                                About
                            </div>
                            <a href="#" className={styles.footerLink}>Contact Us</a>
                            <a href="#" className={styles.footerLink}>About Us</a>
                            <a href="#" className={styles.footerLink}>Careers</a>
                            <a href="#" className={styles.footerLink}>Flipkart Stories</a>
                            <a href="#" className={styles.footerLink}>Press</a>
                            <a href="#" className={styles.footerLink}>Corporate Information</a>
                        </div> 
                        <div className={styles.fcc}>
                            <div className={styles.footerHead}>
                                Group Companies
                            </div>
                            <a href="#" className={styles.footerLink}>Myntra</a>
                            <a href="#" className={styles.footerLink}>Cleartrip</a>
                            <a href="#" className={styles.footerLink}>Shopsy</a>
                        </div>
                        <div className={styles.fcc}>
                            <div className={styles.footerHead}>
                                Help
                            </div>
                            <a href="#" className={styles.footerLink}>Payments</a>
                            <a href="#" className={styles.footerLink}>Shipping</a>
                            <a href="#" className={styles.footerLink}>Cancellation & Returns</a>
                            <a href="#" className={styles.footerLink}>FAQ</a>

                        </div>
                        <div className={styles.fc}>
                            <div className={styles.footerHead}>
                                Consumer policy
                            </div>
                            <a href="#" className={styles.footerLink}>Cancellation & Returns</a>
                            <a href="#" className={styles.footerLink}>Terms Of Use</a>
                            <a href="#" className={styles.footerLink}>Security</a>
                            <a href="#" className={styles.footerLink}>Privacy</a>
                            <a href="#" className={styles.footerLink}>Sitemap</a>
                            <a href="#" className={styles.footerLink}>Grievance Redressal</a>
                            <a href="#" className={styles.footerLink}>EPR Compliance</a>
                        </div>
                        <div className={styles.fc}>
                            <div className={styles.footerSecondHead} >
                                <div className={styles.footerHeadTwo}>
                                    Mail Us
                                </div>
                                <div className={styles.footerPara}>
                                    <p className={styles.fpara}>
                                        FlipKart Internet Private Limited,
                                    </p>
                                    <p className={styles.fpara}>
                                        Buildings Alyssa, Begonia &
                                    </p>
                                    <p className={styles.fpara}>
                                        Clove Embassy Tech Village,
                                    </p>
                                    <p className={styles.fpara}>Outer Ring Road, Devarabeesanahalli village</p>
                                    <p className={styles.fpara}>Bangaluru, 560103,</p>
                                    <p className={styles.fpara}>Karnataka, India</p>

                                </div>
                                <div className={styles.footerHeadTwo}>Social</div>
                                <div className={styles.footerIconHead}>
                                    <div className={styles.footerIconDiv}>
                                        <a href='#' ><img src={fimage} /></a>
                                    </div>
                                    <div className={styles.footerIconDiv}>
                                        <a href='#'><img src={timage} /></a>
                                    </div>
                                    <div className={styles.footerIconDiv}>
                                        <a href="#">
                                            <img src={yimage} />
                                        </a>
                                    </div>
                                    <div className={styles.footerIconDiv}>
                                        <a href='#'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" aria-labelledby="instWhiteTitle" role="img" style={{ width: "22px", height: "22px" }}>
                                                <title id="instWhiteTitle">Instagram (white)</title>
                                                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0-2h10c3.866 0 7 3.134 7 7v10c0 3.866-3.134 7-7 7H7c-3.866 0-7-3.134-7-7V7c0-3.866 3.134-7 7-7zm5 7a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zm5.5-3.9a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z" />
                                            </svg>

                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.fc}>
                            <div className={styles.footerHeadTwo}>
                                Registered Office Address
                            </div>
                                  <div className={styles.footerPara}>
                                    <p className={styles.fpara}>
                                        FlipKart Internet Private Limited, 
                                    </p>
                                    <p className={styles.fpara}>
                                        Buildings Alyssa, Begonia &
                                    </p>
                                    <p className={styles.fpara}>
                                        Clove Embassy Tech Village,
                                    </p>
                                    <p className={styles.fpara}>Outer Ring Road, Devarabeesanahalli village</p>
                                    <p className={styles.fpara}>Bangaluru, 560103,</p>
                                    <p className={styles.fpara}>Karnataka, India</p>
                                    <p className={styles.fpara}>CIN : U51109KA2012PTC066107</p>
                                    <p className={styles.fpara}>Telephone:<span className={styles.footerNumber}> 044-45614700</span> / <span className={styles.footerNumber}>044-67415800</span></p>
                                     
                                </div>

                        </div>
                    </div>

                    <div className={styles.footerSecTwo}>
                       <div className={styles.belowFooter}> <img src={one} className={styles.ftImage}/><a href='#' className={styles.footerIconT}>Become a Seller</a></div>
                       <div className={styles.belowFooter}> <img src={Two} className={styles.ftImage}/><a href='#' className={styles.footerIconT}>Adertise </a> </div>
                       <div className={styles.belowFooter}><img src={Three} className={styles.ftImage}/><a href="#" className={styles.footerIconT}>Gift Cards</a> </div>
                       <div className={styles.belowFooter}><img src={Four} className={styles.ftImage}/><a href='#' className={styles.footerIconT}>Help Center</a></div>
                       <span className={styles.footerDate}>
                           © 2007-2025 &nbsp;
                           <span className={styles.footerDateSub}>
                             FilpKart.com
                           </span>
                       </span> 
                       <img src={Icons} className={styles.ftImageTwo}></img>
                    </div>
                </div>  
            </div>
        </footer> 
    )
}

export default Footer
