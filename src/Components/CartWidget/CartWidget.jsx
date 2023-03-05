import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

 const CardWidget = () => {

    const {getItemQuantity} = useCarritoContext()
    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn btn-dark"><i class="bi bi-cart4"></i></button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link>
            
        </>
    );
}

export default CardWidget;
