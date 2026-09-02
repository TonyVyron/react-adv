import styles from '../styles/styles.module.css';
import { UseProducts } from '../hooks/useProducts';
import { createContext } from 'react';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, increaseBy } = UseProducts();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
}
