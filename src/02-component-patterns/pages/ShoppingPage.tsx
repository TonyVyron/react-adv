import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';
import { products } from "../data/products";
import styles from '../styles/styles.module.css';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >{({ reset, count, increaseBy, isMaxCountReached }) => (
                <>
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />

                    <button onClick={reset}>Reset</button>
                    <button onClick={() => increaseBy(-2)}>-2</button>
                    <button className={`${isMaxCountReached ? styles.disabled : ""}`} onClick={() => increaseBy(2)}>+2</button>
                    <div >{count}</div>
                </>
            )}</ProductCard>
        </div>
    );
}