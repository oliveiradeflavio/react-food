import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Recuperar itens do localStorage ao inicializar o estado
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    useEffect(() => {
        // Armazenar itens no localStorage sempre que cartItems mudar
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        console.log("Item adicionado ao carrinho:", item);
    };

    const removeFromCart = (itemName) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.name !== itemName);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Atualiza o localStorage
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems'); // Limpa o localStorage ao esvaziar o carrinho
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};


CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => {
    return useContext(CartContext);
};
