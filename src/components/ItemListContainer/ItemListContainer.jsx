
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { pedirProductos } from '../../helpers/pedirproducto'
import ItemList from '../ItemList/ItemList'
import BasicExample from '../spinner/spinner'

export const ItemListContainer = ({Stock}) =>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)
    console.log(productos)

    useEffect(() => {
        setLoading(true)
        pedirProductos()
        .then((res) => {
            setProductos(res)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    
    
    return(
        <div className="list_container">
            <h2>Catalogo de productos</h2>
            <hr />
            <p>{Stock}</p>
            { loading
                ? <BasicExample />
                : <ItemList items={productos}/>
            }
            
        </div>
    )
}

