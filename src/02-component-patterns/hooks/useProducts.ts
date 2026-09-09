import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface UseProductsProps {
    product: Product;
    onChange?: (props: onChangeArgs) => void;
    value?: number;
}

export const UseProducts = ({ product, onChange, value = 0 }: UseProductsProps) => {
    const [counter, setCounter] = useState(value);


    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter,
        increaseBy,
    }

}