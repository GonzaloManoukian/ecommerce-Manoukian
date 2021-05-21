import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; 
import { getFirestore } from '../../firebase/client' 


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('items');

        console.log(itemsCollection);

        const filtrado = categoryId? itemsCollection.where('category', '==', categoryId) : itemsCollection
        const prom =  filtrado.get();

        prom.then((snaptshot) => {
            console.log("Se consultaron los datos");
            console.log(snaptshot);

            if(snaptshot.size > 0){
                console.log(snaptshot.docs.map(doc => doc.data()));
                console.log(snaptshot.docs.map(doc => doc.id));
                setItems(snaptshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }));
            }
            // setItems(resultado)
        })
    }, [categoryId]);

    return (
        <div className="container ">

            <ItemList items={items} />

        </div>
    );
}

export default ItemListContainer;
