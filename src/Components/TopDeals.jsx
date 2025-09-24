import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
function TopDeals(props) {
    const [startIndex, setStartIndex] = useState(0)
    const [visibleContent, setVisibleContent] = useState(6)
    const [data, setData] = useState([])
    const [windowWidth, setwindowWindth] = useState(window.innerWidth)
    useEffect(() => {
        fetch(`${props.products}.json`)
            .then((res) => res.json())
            .then((json) => setData(json))
    }, [props.products])
    useEffect(() => {
        const handleResize = () => {
            setwindowWindth(window.innerWidth)
            if (window.innerWidth <= 1024) {
                setVisibleContent(8)
            }
            else {
                setVisibleContent(6)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const handleClick = () => {
        if (startIndex + visibleContent < data.length)
            setStartIndex(startIndex + 2)

    }
    const handleClickLeft = () => {
        if (startIndex - 2 >= 0) {
            setStartIndex(startIndex - 2)
        }
    }
    const visibleProduct = data.slice(startIndex, startIndex + visibleContent)
    let headingText = props.name

    return (
        <div className={styles.topdeals}>
            <div className={styles.topdealsSub}>
                <div className={styles.topDealsContainer}>
                    <div className={styles.topDealsTitle}>
                        <div className={styles.topDealsAlign}>
                            <div className={styles.topDealsHead}>
                                {props.name}
                            </div>

                        </div>
                    </div>
                    <div className={styles.topDealContent}>
                        <div className={styles.topDealContentSub}>
                            <div className={styles.topDealContentMid}>
                                {
                                    visibleProduct.map((value, index) => (
                                        <div className={styles.singleProduct}>
                                            <div className={styles.singleProductMid}>
                                                <div className={styles.singleProductSub}>
                                                    <div className={styles.singleP}>
                                                        <div className={styles.topProducts}>
                                                            <img src={value.img} className={styles.TopDelasImages} />
                                                        </div>
                                                        <div className={styles.topContent} >
                                                            {
                                                                windowWidth == 1024 ? (
                                                                    <p className={styles.topContentOne}>{value.Fname}</p>
                                                                ) : (
                                                                    <p className={styles.topContentOne}>{value.name}</p>
                                                                )
                                                            }

                                                            <p className={styles.contentOffer}>{value.des}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <svg  className={styles.topDealsArrow} width="16" height="16" fill="none" viewBox="0 0 17 17" ><path d="m6.627 3.749 5 5-5 5" stroke="#111112" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    ))
                                }
                                {startIndex == 0 && (
                                    <button className={styles.topDealButtonRight} onClick={handleClick}>
                                        <span className={styles.topDealButtonSpan}></span>
                                    </button>
                                )}
                                {startIndex == 2 && (
                                    <button className={styles.topDealButtonLeft} onClick={handleClickLeft}>
                                        <span className={styles.topDealButtonLeftSpan}></span>
                                    </button>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopDeals
