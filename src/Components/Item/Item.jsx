

const Item = ({item}) => {
    return (
        <div className="card mb-3 cardProducto border-light">
            <img src={`../img/${item.img}`} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body cardBody">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                
                <button className="btn btn-primary">Ver Juego</button>
            </div>
        </div>
    ); 
}
 
export default Item;
