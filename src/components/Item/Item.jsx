import React from 'react';
import "./item.css";

const Item = ({ item }) => {
    return (

        <div class="producto__card flex flex-ai-c">
            <img src={ item.imagen } alt="" class="producto__imagen" />
            <div class="producto__detalles">
                <h3 class="producto__titulo"> { item.titulo } </h3>
                <p class="producto__autor"> { item.autor } </p>
                <div class="producto__clasif flex flex-ai-c">
                    <h4 class="producto__precio">${ item.precio }</h4>
                </div>
                <button class="producto__botonComprar" data-id= { item.id } > Comprar </button>
            </div>
        </div>

    )
}

export default Item