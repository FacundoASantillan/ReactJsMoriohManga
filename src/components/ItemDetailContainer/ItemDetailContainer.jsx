import { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirproducto'
import { useParams } from 'react-router-dom'
import BasicExample from '../spinner/spinner'
import { ItemDetailCard } from '../ItemDetailCard/ItemDetailCard'
import "./ItemDetailContainer.css"

export const ItemDetailContainer = ({Stock}) => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()
    console.log(itemId)
    useEffect(() => {
        setLoading(true)
        pedirProductos()
        .then((data) => setItem(data.find((el) => (el.id) === Number(itemId))))
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    
    
    return(
        <div className="producto-detalle">
            <h2>Catalogo de productos</h2>
            <hr />
            <p>{Stock}</p>
            { loading
                ? <BasicExample />
                : <ItemDetailCard item={item}/>
            }
            
        </div>
    )
}
