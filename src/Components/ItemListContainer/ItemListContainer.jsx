import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import  ItemList  from '../ItemList/ItemList'

import {getProductos} from '../../Firebase/firebase'



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    useEffect(() => {
        if(idCategoria) {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'item'}/> 
                
                setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/> 
                
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    
    return (
        <>
        <div className= 'row cardProductos'>
            {productos}
        </div>
        </>
    )
}

export default ItemListContainer;
