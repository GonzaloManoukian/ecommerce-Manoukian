import React, { useEffect, useState } from 'react'
// import './itemListContainer.css'
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import products from "../../products/products";

import {getFirestore} from '../../firebase/client'



const getItems = (id) => {
    const db = getFirestore();
    const itemsCollection = db.collection('items')

    const item = itemsCollection.doc(id)
    return item.get();
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { itemId } = useParams()

    useEffect(()=> {
        getItems(itemId)
        .then((res) => {
            console.log('existe?', res.exists);
            if (res.exists){
                setItem(res.data())
                        }

        })
    }, []);

    return (
        <div className="container">

            <h2> Item: {itemId}</h2>
            <ItemDetail item={{id: itemId, ...item}} />

        </div>
    );
}

export default ItemDetailContainer;
