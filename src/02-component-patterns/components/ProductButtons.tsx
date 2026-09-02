import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <button className={styles.buttonLabel}>{counter}</button>
            <button className={styles.buttonPlus} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
}
