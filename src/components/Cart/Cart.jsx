import React, { useContext } from 'react'
import { CartContext } from '../../context/Cartcontext'
import "./Cart.css"

const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
return (
    <div className='container my-5'>
        <h2>Tu compra</h2>
        <hr />
        {
            cart.map((item) => (
                <div className='cartProductos' key={item.id}>
                    <div>
                        <img className='imgCart' src={item.img} alt={item.nombre} />
                    </div>
                    <div className='datosProductos'>
                    <h2>{item.nombre}</h2>
                    <h3>Cantidad: {item.cantidad}</h3> 
                    <h3>Subtotal: ${item.cantidad * item.precio}</h3>
                    </div>
                    <button className='btn btn-ligth' onClick={() => removeItem(item.id)}> <img className='trash' src="img/contenedor-de-basura.png" alt="" /></button>
                </div>
            ))
        }
        <div>
            <hr />
            <h3>TOTAL: ${totalCompra()}</h3>
            <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
        </div>
    </div>
)
}



export default Cart