
import './ItemListContainer.css'

export const ItemListContainer = ({Stock}) =>{
    return(
        <div className="list_container">
            <h2>Catalogo de productos</h2>
            <hr />
            <p>{Stock}</p>
        </div>
    )
}