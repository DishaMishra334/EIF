import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/cart';
import Oder from './pages/oder';
import Producte from './pages/Producte';
import Placeoder from './pages/Placeoder';
import Login from './pages/login';
import Contect from './pages/contect';
import Navbar from './Componet/Navbar';
import Footer from './Componet/Footer';
import Collections from './pages/collections';
import Searchbar from './Componet/searchbar';  
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
      <Routes>
        {/* Define the root path, e.g., for when the user first visits the site */}
        <Route path='/' element={<Home/>}/> {/* Added a default root route */}
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Collection' element={<Collections/>}/>
        <Route path='/Oder' element={<Oder/>}/>
        {/* CORRECTED: Changed '/Producte' to '/product' to match the URL in the browser */}
        <Route path='/product/:ProducteID' element={<Producte/>}/>
        <Route path='/Placeoder' element={<Placeoder/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contect' element={<Contect/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
