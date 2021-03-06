import React from 'react';
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (

        <div className="producto__card flex flex-ai-c">
            <img src={ item.imagen } alt="" className="producto__imagen" />
            <div className="producto__detalles">
                <h3 className="producto__titulo"> { item.titulo } </h3>
                <p className="producto__autor"> { item.autor } </p>
                <div className="producto__clasif flex flex-ai-c">
                    <h4 className="producto__precio">${ item.precio }</h4>
                </div>
                <Link to={`/item/${item.id}`}>
                <button className="producto__botonComprar" data-id= { item.id } > Comprar </button>
                </Link>
            </div>
        </div>

    )
}

export default Item