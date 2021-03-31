import React, { useEffect, useState } from "react";
// import './itemListContainer.css'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"; 
import  products  from '../../products/products';


const ItemListContainer = ({ greeting /* greeting:saludo Asigna greeting a una variable llamada saludo*/ }) => {

    const [items, setItems] = useState([])
    
    const {categoryId} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                    if (categoryId) {
                        const productsFilter = products.filter((product) => {
                            return product.category.toString() === categoryId;
                        });
                        resolve(productsFilter);
                    } else resolve(products);
            }, 2000);
        });

        promesa.then((resultado) => {
            setItems(resultado)
        })
    })

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
