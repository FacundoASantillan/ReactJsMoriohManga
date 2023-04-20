import "./ItemCard.css"


const ItemCard = ( {item} ) => {
    return(
        <div>
            <img src={item.img} alt={item.nombre} />
            <h5>{item.editorial}</h5>
            <h3>{item.nombre}</h3>
            <h4><strong>${item.precio}</strong></h4>
            <a href="#" >Añadir al carrito</a>
        </div>
    )
}

export default ItemCard