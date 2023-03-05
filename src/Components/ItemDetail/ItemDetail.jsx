import ItemCount from '../ItemCount/ItemCount'
import { useCarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    const onAdd = (cantidad) => { 
        addItem(item,cantidad)
      }
    return (
        <div>
            <div className='row g-0'>
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
                </div>
              <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
                    
                </div>
              </div>
     
            </div>
        </div>
    );
}

export default ItemDetail;
