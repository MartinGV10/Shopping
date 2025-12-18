import { Link } from "react-router"
import apple from '/apple.jpg'
import clohtes from '/clothes.jpg'
import watch from '/watch.jpg'
import UseImages from "./useImages"

function Home() {
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
                        {/* {tablets.map((p) => (
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
                        ))} */}
                        <UseImages category={'smartphones'} limit={5} skip={0}/>
                    </div>
                </div>

                <div className="sale-items">
                    <div className="h-desc">
                        <h1>Last-Minute Gifts on Sale</h1>
                        <p>Get them now before they're gone</p>
                    </div>
                    <div className="h-items">
                        {/* {watches.map((p) => (
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
                        ))} */}
                        <UseImages category={'mens-watches'} limit={5} skip={0}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home