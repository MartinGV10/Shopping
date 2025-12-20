import { createContext, useState, useContext } from "react";

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item, num) => {
        setCart(prev => {
            const existing = prev.find(x => x.id == item.id)
            if (existing) {
                return prev.map(x => x.id == item.id ? {...x, num: x.num + num} : x)
            }
            return [...prev, {id: item.id, item, num}]
        })
    }

    const increaseQuantity = (id) => {
        setCart(prev => prev.map(x => x.id == id ? {...x, num: x.num + 1} : x))
    }

    const decreaseQuantity = (id) => {
        setCart(prev => prev.map(x => {
            if (x.id == id) {
                if (x.num > 1) {
                    return {...x, num: x.num - 1}
                } else {
                    return null // will be filtered out
                }
            }
            return x
        }).filter(x => x !== null))
    }

    const setQuantity = (id, num) => {
        if (num <= 0) {Quantity, set
            setCart(prev => prev.filter(x => x.id != id))
        } else {
            setCart(prev => prev.map(x => x.id == id ? {...x, num} : x))
        }
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)