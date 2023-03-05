import { useState } from "react"
import {toast} from 'react-toastify'
const ItemCount = ({valInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(valInicial)
    
            const sumar = () =>  (contador < stock) && setContador(contador + 1) 
            const restar = () => (contador > valInicial)  && setContador(contador - 1) 
            const agregarCarrito = () => {
                onAdd(contador) 
                toast.success('El juego se agrego al carrito')
            }
    return (
        <>
        <button className="btn btn-dark" onClick={() => restar()}> - </button>

            {contador}
            
        <button className="btn btn-dark" onClick={() => sumar()}> + </button>

        <button className="btn btn-dark" onClick={() => agregarCarrito()}> Agregar al Carrito </button>
            
        </>
    );
}

export default ItemCount;
