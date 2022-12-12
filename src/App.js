import logo from './logo.svg';
import './App.css';
import Home from './views/home/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './components/restaurants/restaurants';
import Menu from './components/menu/menu';
import Cart from './components/cart/cart'
import CouponValidation from './components/couponValidation/couponValidation';
// import Container from './components/container/container';
import Container from './components/common/header/header';

function App() {
 return(
  <div>
  <Router>

   

  <Routes>

      {/* <Route path = '/' element = {<Home />}/> */}

      <Route exact path="/" element={<Container><Restaurants/></Container>}/>

            <Route path="/menu" element={<Container><Menu/></Container>} />

      {/* <Route exact path='/restaurants'  element={<Restaurants/>} /> */}

      {/* <Route path='/menu' element={<Menu/>} /> */}

      <Route path='/cart' element={<Cart/>} />

      <Route path='/coupon' element={<CouponValidation/>} />

     

</Routes>

  </Router>
  </div>
 )
};

export default App;