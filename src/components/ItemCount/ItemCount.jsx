import React, {  useState } from 'react'

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
        <div>

            <button disabled={count <= 0} onClick={restar}>-</button>
            {count}
            <button disabled={count >= stock} onClick={sumar}>+</button>
            <button disabled={count <= 0 || count > stock}  onClick={add}>Agregar</button>

        </div>
    )
}

export default ItemCount