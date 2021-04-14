import React, { useEffect, useState } from "react";
// import './itemListContainer.css'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; 
import  products  from '../../products/products';
import { getFirestore } from '../../firebase/client' 


const ItemListContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

    const [items, setItems] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('items');

        // TRAER POR FILTRO
        // const filtrado = itemsCollection.where('category', '==', 'novelas').limit(1)
        // const prom = filtrado.get()

        const prom = itemsCollection.get()



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
    }, []);

    return (
        <div className="container ">
            <p>
                {greeting}
            </p>

            <ItemList items={items} />


        </div>
    );
}

export default ItemListContainer;
