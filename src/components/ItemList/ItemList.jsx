import React from 'react';
import "./itemList.css";
import Item from "../Item/Item";

const ItemList = ({ items = [] }) => {
    return (

        <div className="itemList">

            {items.map(item => <Item item={item} />)}

        </div >

    )
}

export default ItemList
