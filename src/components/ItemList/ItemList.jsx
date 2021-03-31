import React from 'react';
import "./itemList.css";
import Item from "../Item/Item";

const ItemList = ({ items = [] }) => {
    return (

        <div className="itemList">

            {items.map(item => <Item item={item} key={item.id} />)}

        </div >

    )
}

export default ItemList
