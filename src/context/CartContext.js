import {createContext} from 'react'

const CartContext = createContext({
    cartList: [],
    addCartItem: () => {},
    removeCartItem: () => {},
    removeAllCartItem: () => {},
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {}
})

export default CartContext