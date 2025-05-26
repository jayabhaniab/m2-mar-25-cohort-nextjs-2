export default function ProductCard({title, price}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
        </div>
    )
}