import { JSX } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
import { ProductCardProps } from "../components/ProductCard";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    (props: ProductCardProps): JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
    Image: (props: ProductImageProps) => JSX.Element,
    Buttons: (props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductsInCart extends Product {
    count: number;
}
