import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import Cart from './Cart/Cart';
import  Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';


import {CarritoProvider}  from '../context/CarritoContext';

const App = () => {

  
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>      
      <Footer/>
      <ToastContainer/>
    </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
