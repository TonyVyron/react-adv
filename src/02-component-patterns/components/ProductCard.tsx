import styles from '../styles/styles.module.css';
import { UseProducts } from '../hooks/useProducts';
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSModuleClasses
}

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {

    const { counter, increaseBy } = UseProducts();

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
}
