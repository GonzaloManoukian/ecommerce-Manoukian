import React from 'react'
// import './itemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

const agregar = (num) => console.log(`Se Agrego un Item. Cantidad: ${num}`)

    return (
        <div className="container ">
            <p>
                {greeting}
            </p>
            <ItemCount initial={1} stock={10} onAdd={agregar} />
        </div>
    );
}

export default ItemListContainer;
