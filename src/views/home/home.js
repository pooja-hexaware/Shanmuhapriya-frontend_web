import React, {useState} from 'react'
import Footer from '../../components/common/footer/footer'
import Header from '../../components/common/header/header'
import CenteredTabs from '../../components/common/tabOptions/centeredTabs';
import CouponValidation from '../../components/couponValidation/couponValidation';
import MainPage from '../../components/mainPage/mainPage';
import Menu from '../../components/menu/menu';
import Restaurants from '../../components/restaurants/restaurants';
import Cart from '../../components/cart/cart';

const Home = () => {

  // const tabs = ['NearBy Restaurants', 'Menu Listings'];
  const [activeTab, setActiveTab] = useState("NearBy Restaurants")

  return (
    // <div>
      

    <div>
              
        <Header />
        <CenteredTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
          {getCorrectScreen(activeTab)}
        <Footer />
        
    </div>
    // </div>
  )
};

const getCorrectScreen = (tab) => {
  switch(tab){
    case "MainPage":
      return <MainPage />

    case "NearBy Restaurants":
      
      return <Restaurants />

    case "Menu Listings":
      return <Menu />

    case "Coupons":
      return <CouponValidation />

    case "Cart":
      return <Cart />

    default:
      return <MainPage />
  }
}

export default Home

