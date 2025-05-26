import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <div>
            <ProductCard title="Laptop" price={5000} />
            <ProductCard title="Mobile" price={2000}/>
        </div>
    )
}