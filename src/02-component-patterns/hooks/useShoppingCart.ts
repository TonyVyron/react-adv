import { useState } from "react";
import { onChangeArgs, ProductsInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductsInCart }>({});

    const onProductCountChange = ({ product, count }: onChangeArgs) => {
        setShoppingCart(prev => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [product.id]: { ...product, count }
            }
        });
    };

    return {
        shoppingCart,
        setShoppingCart,
        onProductCountChange
    }

}