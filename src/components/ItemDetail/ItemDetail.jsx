import React, {  useState } from 'react';
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(0)

    const agregar = (num) => {
        console.log(`Se Agrego un Item. Cantidad: ${num}`)
        setCount(num)
    }


    return (

        <div className="itemDetail">
            <div className="producto__detail__card flex flex-ai-c">
                <img src={item?.imagen} alt="" className="producto__detail__imagen" />
                <div className="producto__detail__detalles">
                    <h3 className="producto__detail__titulo"> {item?.titulo} </h3>
                    <p className="producto__detail__autor"> {item?.autor} </p>
                    <p className="producto__detail__descripcion"> {item?.desc} </p>
                    <div className="producto__detail__clasif flex flex-ai-c">
                        <h4 className="producto__detail__precio">${item?.precio}</h4>
                    </div>
                </div>
            </div>


            { count === 0 ? 
                <ItemCount initial={1} stock={5} onAdd={agregar} />
                :
                 <Link to="/cart">
                 <button> Terminar mi compra </button>
                 </Link>
            }
           

        </div >

    )
}

export default ItemDetail
