import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const [serach, setSerach] = useState('');
    const [showSerach, setshowSerach] = useState(false);
    const [cartItems, setCartItems] = useState({})

    // Renamed from aadToCart to addToCart for consistency
    const addToCart = async (itemId, size) => {

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItems(cartData);
    }

    // New function to calculate the total count of items in the cart
    const getCartTotalCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size];
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const value = {
        products,
        currency,
        delivery_fee,
        serach,
        setSerach,
        showSerach,
        setshowSerach,
        cartItems,
        addToCart,
        getCartTotalCount // Added the new function here
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;