import React from "react"
import './cartWidget.css'
import cart from './cart.svg'

const CartWidget = () => {
    return (
        <img src={cart} alt="Carrito" />
    );
}

export default CartWidget;