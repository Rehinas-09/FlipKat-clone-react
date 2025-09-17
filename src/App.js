
import './App.css';
import styles from './Components/style.module.css'
import Bigbillio from './Components/Bigbillio';
import Category from './Components/Category';
import Navbar from './Components/Navbar';
import ShopNowImg from './Components/ShopNowImg';
import SlideImage from './Components/SlideImage';
import TopDeals from './Components/TopDeals';
import BigBillonOffer from './Components/BigBillonOffer';
import TopProducts from './Components/TopProducts';
import TopPicks from './Components/TopPicks';
import TopSelling from './Components/TopSelling';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
       <div className="main-section">
        <div className="main-subSection">
           <div className='sub'>
           <Category/> 
           <SlideImage/>
           <Bigbillio/> 
            <div className={styles.TopDealsMainContainer}>
          
           <TopDeals name="Top Deals" products="TopDeals"/>
           <ShopNowImg/>
           </div> 
      
          <BigBillonOffer json="Offer"/>
            <TopProducts name="Top Products for you" Jsonfile="TopProducts"/>
             <BigBillonOffer json="brand"/>
             <div className={styles.mainContainerSP}>
            <TopPicks title="Big Billion Days'Top Picks" jsonfile="TopPicks"/>
            <TopSelling/> 
            </div>
            <TopProducts name="Mobiles" Jsonfile="TopMobiles" />
           <BigBillonOffer json="OfferTwo"/>
           
           </div> 
           </div>  
       </div> 
       <Footer/>
    
    </div> 
  );
}

export default App;
