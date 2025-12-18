import useCategory from "./useCategory"
import { Link } from "react-router"
import apple from '/apple.jpg'
import clohtes from '/clothes.jpg'
import watch from '/watch.jpg'
// import useImages from "./useImages"

function Home() {
    const {products: tablets} = useCategory('smartphones', 5, 0)
    const {products: watches} = useCategory('mens-watches', 5, 0)
    // const {products: watches, error, load} = useCategory('watches', 8, 0)
    // const {products: tablets, error, load} = useCategory('tablets', 8, 0)

    // if (load) return <p>Loading...</p>
    // if (error) return <p>A network error was encountered</p>

    return (
        <>
            <div className="home">
                <div className="disc">
                    <p>Free shipping on orders over $75!</p>
                    <Link to='/shop'>Shop</Link>
                </div>

                <div className="sale">

                    <h3>Last-Minute Gifting Event</h3>
                    <h1>Up to 50% Off</h1>
                    <h2>Almost Everything*</h2>
                    <div className="sale-links">
                        <Link to='/shop' className="link">Shop</Link>
                    </div>
                </div>

                <div className="prods">
                    <div className="prod-sec">
                        <img src={apple} alt="" className="prod-pic"/>
                        <div className="prod-overlay">
                            <p className="link"><Link to='/shop'>Shop Tech</Link></p>
                        </div>
                    </div>
                    <div className="prod-sec">
                        <img src={clohtes} alt="" className="prod-pic"/>
                        <div className="prod-overlay">
                            <p className="link"><Link to='/shop'>Shop Clothes</Link></p>
                        </div>
                    </div>
                    <div className="prod-sec">
                        <img src={watch} alt="" className="prod-pic"/>
                        <div className="prod-overlay">
                            <p className="link"><Link to='/shop'>Shop Accessories</Link></p>
                        </div>
                    </div>
                </div>

                <div className="tre-items">
                    <div className="h-desc">
                        <h1>Trending</h1>
                        <p>The biggest trends, all in one place</p>
                    </div>
                    <div className="h-items">
                        {tablets.map((p) => (
                            <div className="item" key={p.id}>
                                <div className="item-top">
                                    <img src={p.thumbnail} className="item-img"/>
                                </div>

                                <div className="item-mid">
                                    <p className="item-title">{p.title}</p>
                                    <p className="item-brand">{p.brand}</p>
                                    <p className="price"><span className="discount">${(p.price)}</span> ${(p.price * (1 - (p.discountPercentage/100))).toFixed(2)}</p>
                                </div>
                                
                                <div className="item-bot">
                               
                                </div>

                                <div className="item-overlay">
                                    <p className="link"><Link to='/shop'>Buy Now</Link></p>
                                </div>
                            </div>
                        ))}
                        {/* <useImages catName={smartphones}/> */}
                    </div>
                </div>

                <div className="sale-items">
                    <div className="h-desc">
                        <h1>Last-Minute Gifts on Sale</h1>
                        <p>Get them now before they're gone</p>
                    </div>
                    <div className="h-items">
                        {watches.map((p) => (
                            <div className="item" key={p.id}>
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
                                    <p className="link"><Link to='/shop'>Buy Now</Link></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home