import React, { useContext, useState } from 'react'
import "./FinishOrder.css"
import { CartContext } from '../../context/Cartcontext'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const FinishOrder = () => {
    const { cart, totalCompra, emptyCart }= useContext(CartContext)

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        direccion: ""
    })

    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) =>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }
        
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, order)
        .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
        })
    }

    if(orderId){
        return(
            <div className='container my-5'>
                <h2>¡Tu compra se ha realizado exitosamente!</h2>
                <hr />
                <p>Guardar tu numero de pedido: {orderId}</p> 

                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='container my-5 formularioDeCompra'>
            <h2>Finalizar compra</h2>
            <hr />
            
            <div className='container my-5 formulario-compra'>
                <h3>Por favor complete los siguientes datos:</h3>
            
            <form onSubmit={handleSubmit}>
                <input 
                className='form-control my-4'
                type="text" 
                placeholder='Nombre'
                value={values.nombre}
                name='nombre'
                onChange={handleInput}
                />
                <input 
                className='form-control my-4'
                type="text" 
                placeholder='Email'
                value={values.email}
                name='email'
                onChange={handleInput}
                />
                <input 
                className='form-control my-4'
                type="text" 
                placeholder='Dirección'
                value={values.direccion}
                name='direccion'
                onChange={handleInput}
                />

                <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
            </div>
        </div>
    )
    }

export default FinishOrder