import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <ProductCard product={product} >

                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title title={"test"} />
                    <ProductCard.Buttons />

                </ProductCard >
                <ProductCard product={product} className="bg-dark">

                    <ProductImage img={product.img} className="custom-image" />
                    <ProductTitle title={product.title} className="text-white" />
                    <ProductButtons className="custom-buttons" />

                </ProductCard >
                <ProductCard product={product} className="bg-dark" style={{ backgroundColor: 'red' }}>

                    <ProductImage img={product.img} className="custom-image" style={{ boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)' }} />
                    <ProductTitle title={product.title} className="text-bold text-white" />
                    <ProductButtons className="custom-buttons" style={{ display: 'flex', justifyContent: 'end' }} />

                </ProductCard >
            </div>
        </div>
    );
}