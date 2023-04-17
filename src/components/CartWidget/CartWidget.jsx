import './CartWidget.css'
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return(
        <Button className="carrito" variant="succes">
            <img src="./public/img/carrito-de-compras.png" alt="Carrito" /> <span>0</span>
        </Button>
    )
}

export default CartWidget