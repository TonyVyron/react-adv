import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                <ProductCard product={product} >

                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title title={"test"} />
                    <ProductCard.Buttons />

                </ProductCard >
                <ProductCard product={product} >

                    <ProductImage img={product.img} />
                    <ProductTitle title={product.title} />
                    <ProductButtons />

                </ProductCard >
            </div>
        </div>
    );
}