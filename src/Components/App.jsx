import './App.css'
import CardWidget from "./CartWidget/CartWidget";
import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer"

const App = () => {
  return (
    <>
      <Navbar/>
      <CardWidget cantCarrito ={10}/>
      <ItemListContainer/>
    </>
  );
}

export default App;
