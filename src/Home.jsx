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
                            <p className="link"><Link to='/shop' state={{ step: 'Phones'}}>Shop Tech</Link></p>
                        </div>
                    </div>
                    <div className="prod-sec">
                        <img src={clohtes} alt="" className="prod-pic"/>
                        <div className="prod-overlay">
                            <p className="link"><Link to='/shop' state={{ step: 'Clothes'}}>Shop Clothes</Link></p>
                        </div>
                    </div>
                    <div className="prod-sec">
                        <img src={watch} alt="" className="prod-pic"/>
                        <div className="prod-overlay">
                            <p className="link"><Link to='/shop' state={{ step: 'Watches'}}>Shop Accessories</Link></p>
                        </div>
                    </div>
                </div>

                <div className="tre-items">
                    <div className="h-desc">
                        <h1>Trending</h1>
                        <p>The biggest trends, all in one place</p>
                    </div>
                    <div className="h-items">
                        <UseImages category={'smartphones'} limit={5} skip={0}/>
                    </div>
                </div>

                <div className="sale-items">
                    <div className="h-desc">
                        <h1>Last-Minute Gifts on Sale</h1>
                        <p>Get them now before they're gone</p>
                    </div>
                    <div className="h-items">
                        <UseImages category={'mens-watches'} limit={5} skip={0}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home