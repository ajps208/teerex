import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';

function App() {
  return (
    <>
   <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mens' element={<Mens/>}></Route>
      <Route path='/womens' element={<Womens/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
