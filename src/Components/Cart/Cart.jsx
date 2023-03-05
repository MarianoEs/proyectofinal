
import { Link } from 'react-router-dom';
import ItemList  from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

const Cart = () => {
	const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
           {carrito.length === 0 
					 ? 
					 <>
					 	<h2>Carrito Vacio</h2>
						<Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
					 </>
					 :
					 <div clasName="container cartContainer">
							{
                <ItemList products={carrito} plantilla={'itemCart'}/>
               }
							<div className="divButtons">
								<p>Resumen de la compra :$ {new Intl.NumberFormat('de-DE').format (totalPrice())}l</p>
								<button className="btn btn-danger" onClick={()=> emptyCart()}>Vaciar carrito</button>
								<Link className="nav-link" to={'/'}><button className="btn btn-danger">Continuar Comprando</button></Link>
								<Link className="nav-link" to={'/checkout'}><button className="btn btn-danger">Finalizar Compra</button></Link>
							</div>
					 </div>  						 
					 }
					  
        </>
    );
}

export default Cart;
