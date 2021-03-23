import React, { useEffect, useState } from 'react'
// import './itemListContainer.css'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

    const agregar = (num) => console.log(`Se Agrego un Item. Cantidad: ${num}`)

    const [items, setItems] = useState([])

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([
                    { imagen: "img/bukowskicartero.jpg", titulo: "Cartero", autor: "Charles Bukowski", precio: "1000", id: "1" },
                    { imagen: "img/austerviajes.jpg", titulo: "Viajes por el scriptorum", autor: "Paul Auster", precio: "1400", id: "2" },
                    { imagen: "img/abseda.jpg", titulo: "Seda", autor: "Alessandro Baricco", precio: "900", id: "3" }
                ])
            }, 2000)

            promesa.then((resultado) => {
                setItems(resultado)
            })
        })
    })

    return (
        <div className="container ">
            <p>
                {greeting}
            </p>

            <ItemList items={items} />

            <ItemCount initial={1} stock={10} onAdd={agregar} />
        </div>
    );
}

export default ItemListContainer;
