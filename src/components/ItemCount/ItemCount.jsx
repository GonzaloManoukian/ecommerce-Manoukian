import React, {  useState } from 'react';
import "./itemCount.css";

export function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial);

    const restar = () => {

        setCount(count-1)
    }
    const sumar = () => {
        if (count >= stock){
            return
        }
        setCount(count+1) 
    }
    const add = () => {
        onAdd(count)
    }

    return (
        <div className="flex-c flex-jc-c">
            <div>

            <button disabled={count <= 0} onClick={restar} className="carritoItemRestar">-</button>
            <span className="carrito__itemCantidad">{count}</span>
            <button disabled={count >= stock} onClick={sumar} className="carritoItemSumar">+</button>
            </div>
            <button disabled={count <= 0 || count > stock}  onClick={add} className="botonCTA">Agregar</button>

        </div>
    )
}

export default ItemCount