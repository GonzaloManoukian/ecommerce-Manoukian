import { React, useContext} from "react"
import './cartWidget.css'
import cart from './cart.svg'
import { CartContext } from "../../context/cartContext"

const CartWidget = () => {

    const {totalItems} = useContext(CartContext)

    return (
        <>
    <img src={cart} alt="Carrito" className="cartWidget" />
    {totalItems ? <span> ({totalItems})</span> : null }
        </>
    );
}

export default CartWidget;