import React, { useState, useEffect} from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {

        let precio = 0;
        let totItems = 0;
        for (const cartItem of cart) {
            totItems += cartItem.quantity;
            precio += cartItem.quantity * cartItem.item.precio;
        }

        setTotalItems(totItems);
        setTotalPrecio(precio);

    }, [cart])

    // FUNCION EN CLASE
    // const addItem = (newItem, newQuantity)=>{

    //     const {quantity = 0} = cart.find(e=> e.item.id === newItem.id) || {}
    //     const newCart = cart.filter(e => e.item.id !== newItem.id)

    //     setCart([...newCart, 
    //             { item: newItem , quantity: quantity + newQuantity  }])

    //     console.log(`Se agrego el Titulo: ${newItem.titulo}, cantidad: ${newQuantity}`);
    //     console.log(cart);        
    // } // agregar cierta cantidad de un ítem al carrito
    
    //METODO DE CORVATA
	const addItem = (item, quantity) => {
		if (!isInCart(item.id)) {
			const newCart = [...cart, { item: item, quantity: quantity }];
			setCart(newCart);
		} else {
			setCart(
				cart.map((cartItem) => {
					if (cartItem.item.id === item.id) {
						return { ...cartItem, quantity:cartItem.quantity + quantity };
					} else {
						return cartItem;
					}
				})
			);
		}
        console.log(cart);
	};


    
    const removeItem = (itemId) => {
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    } // Remover un item del cart por usando su id
    
    const clear = () => {
        setCart([])
    }// Remover todos los items
    
    const isInCart = (id) => {
		return cart.findIndex((cartItem) => cartItem.item.id === id) >= 0 ? true : false;
	};


    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, totalItems, totalPrecio}}>
        {children}
    </CartContext.Provider>
}