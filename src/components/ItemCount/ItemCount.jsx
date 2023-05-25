import React, { useState } from 'react'
import "./ItemCount.css"

export const ItemCount = ({stock, cantidad, setCantidad, add}) => {



    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }


return (<div className='contador'>
    <button onClick={handleRestar} className='btn btn-outline-dark'>-</button>
    <span className='mx-2'>{cantidad}</span>
    <button onClick={handleSumar} className='btn btn-dark'>+</button>
    <a onClick={add} href="#">Añadir al carrito</a> 
</div>

)
}


