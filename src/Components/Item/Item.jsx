import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="card mb-3 cardProducto border-light">
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                
                <button className="btn btn-primary"><Link className="nav-link" to={`/item/${item.id}`}> Ver Juego </Link></button>
            </div>
        </div>
    ); 
}
 
export default Item;
