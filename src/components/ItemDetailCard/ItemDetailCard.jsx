import "./ItemDetailCard.css"

export const ItemDetailCard = ({item}) => {
    return (
        <div className="detalle-producto">
        <img src={item.img} alt={item.nombre} />
            <div>
                <h3>{item.nombre}</h3>
                <h5>{item.editorial}</h5>
                <h4><strong>${item.precio}</strong></h4>
                <p>{item.detalle}</p>
                <a href="#">Añadir al carrito</a>
            </div>
        </div>
    )
}