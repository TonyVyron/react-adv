import styles from '../styles/styles.module.css';
import { UseProducts } from '../hooks/useProducts';
import { createContext, ReactElement } from 'react';
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    onChange?: (props: onChangeArgs) => void;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSModuleClasses,
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, increaseBy } = UseProducts( { product, onChange, value } );

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
}
