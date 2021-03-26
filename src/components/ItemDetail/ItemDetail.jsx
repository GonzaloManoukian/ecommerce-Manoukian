import React from 'react';
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
    return (

        <div className="itemDetail">

            <div className="producto__detail__card flex flex-ai-c">
                <img src={item.imagen} alt="" className="producto__detail__imagen" />
                <div className="producto__detail__detalles">
                    <h3 className="producto__detail__titulo"> {item.titulo} </h3>
                    <p className="producto__detail__autor"> {item.autor} </p>
                    <p className="producto__detail__descripcion"> {item.desc} </p>
                    <div className="producto__detail__clasif flex flex-ai-c">
                        <h4 className="producto__detail__precio">${item.precio}</h4>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default ItemDetail
