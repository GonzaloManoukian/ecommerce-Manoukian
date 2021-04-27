import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import './cart.css';

const Cart = () => {

    const { cart, removeItem, totalItems, totalPrecio } = useContext(CartContext)




    return (
        <div>
            <div className="carrito_lista">
                <div className="carrito__header flex flex-jc-sb flex-ai-c">
                    <h3 className="carrito__titulo">Carrito</h3>
                </div>
                <div className="carrito__listaContenedor">

                    {!cart.length ? <h2>No hay Items en el carrito<br/><Link to="/">Ir al Home</Link></h2>
                        : (
                            <>
                                {cart.map(cartItem =>
                                    <div key={cartItem.item.id}>

                                        <div className="carrito__item flex flex-ai-c">
                                            <div className="carrito__itemImagenDiv">
                                                <img src={cartItem.item.imagen} alt="Tapa" className="carrito__itemImagen" />
                                            </div>
                                            <div className="carrito__itemDescripcion">
                                                <h3 className="carrito__itemTitulo"> {cartItem.item.titulo} </h3>
                                                <p className="carrito__itemAutor"> {cartItem.item.autor} </p>
                                                <button onClick={() => removeItem(cartItem.item.id)} className="carrito__productoEliminar"> Eliminar </button>
                                            </div>

                                            <div className="carrito__Cantidad flex flex-jc-c flex-ai-c">
                                                <p className="carrito__itemCantidad"> {cartItem.quantity} </p>
                                            </div>
                                            <div class="carrito__itemPrecio">
                                                <h3> ${cartItem.item.precio} </h3>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                </div>

                <div className="carrito__total flex flex-jc-sb flex-ai-c">
                    <div className="carrito__totalTitulo">
                        <h3>Total</h3>
                    </div>

                    <div className="carrito__totalCalculo">
                        <h2 className="carrito__totalCalculo--h">${totalPrecio}</h2>
                    </div>
                </div>

                <div className="carrito__bottom flex flex-jc-c flex-ai-c">
                    <button className="carrito__bottomVaciar boton">Vaciar Carrito</button>
                    <button className="carrito__bottomCheckout botonCTA">Finalizar Compra</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
