import { Link } from "react-router"
import useCategory from "./useCategory"

const UseImages = ({ category, limit, skip }) => {
    const { products, load, error } = useCategory(category, limit, skip)

    if (load) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>
    return (
        <>
        {products.map((p) => (
            <div key={p.id}>
            <Link to='/shop'> 
            <div className="item" >
                <div className="item-top">
                    <img src={p.thumbnail} className="item-img"/>
                </div>

                <div className="item-mid">
                    <p className="item-title">{p.title}</p>
                    <p className="item-brand">{p.brand}</p>
                    <p className="price"><span className="discount">${(p.price)}</span> ${(p.price * (1 - (p.discountPercentage/100))).toFixed(2)}</p>
                </div>
                
                <div className="item-bot">
                    {/* <p className="ship">{p.shippingInformation}</p> */}
                    {/* <p>{p.stock} {p.availabilityStatus}</p>
                    <p className="rating">{p.rating}/5 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    </p> */}
                </div>

                <div className="item-overlay">
                    <p className="link">Buy Now</p>
                </div>
            </div>
            </Link>
            </div>
        ))}
        </>
    )
}

export default UseImages