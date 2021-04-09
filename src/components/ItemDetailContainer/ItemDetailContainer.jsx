import React, { useEffect, useState } from 'react'
// import './itemListContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import products from "../../products/products";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) =>

            setTimeout(() => {

                if (itemId) {
                    const productFilter = products.find((product) => {
                        return product.id === parseInt(itemId);
                    });
                    resolve(productFilter);
                } else resolve(products)


            }, 2000)
        );
        promesa.then((resultado) => {
            setItem(resultado);
        });
    });


    return (
        <div className="container">

            <h2> Item: {itemId}</h2>
            <ItemDetail item={item} />

        </div>
    );
}

export default ItemDetailContainer;
