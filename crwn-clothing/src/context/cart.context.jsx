import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}]
}

  const removeCartItem = (cartItems, cartItemToRemove) => {
        const existingCartItem = cartItems.find(
          (cartItem) => cartItem.id === cartItemToRemove.id,
        );

    // Logic to remove quantity of the item
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    // Filter out items with quantity 0
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
  };

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(count)
    }, [cartItems])
    useEffect(() => {
      const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0,
      );
      setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemToCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };
    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      setCartItems,
      addItemToCart,
      cartCount,
      removeItemToCart,
      clearItemFromCart,
      cartTotal,
    };
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}