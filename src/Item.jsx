import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import useCategory from "./useCategory"
import UseImages from "./useImages"
import './CSS/Item.css'
import { useNavigate } from "react-router"
import { useCart } from "./CartContext"

function Item() {
    const { state } = useLocation()
    const selected = state?.item

    const [count, setCount] = useState(1)

    const handleCount = (e) => {
        setCount(e)
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    const [cartList, setCartList] = useState({})

    // const addToCart = (thing, num) => {
    //     setCartList(prev => ({
    //         ...prev,
    //         [thing]: num
    //     }))

    // }

    // const navigate = useNavigate()
    const { addToCart } = useCart()

    const handleAdd = () => {
        addToCart(selected, count)
        // navigate('/checkout')
    }
    
    // useEffect(() => {
    //     console.log(cartList)
    // }, [cartList])

    return (
        <>
        <div className="i-page">
            <div className="i-content">

                <div className="i-left">
                    <img src={selected.thumbnail} alt=""  className="sel-img"/>
                </div>

                <div className="i-right">
                    <div className="sel-desc">
                        <p className="sel-tit">{selected.title}</p>
                        <div className="sel-group">
                            <div className="sel-brand">
                                {selected.brand} • 
                            </div>

                            <div className="ratings">
                                {selected.rating} ({selected.reviews.length})  
                                <svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </div>
                        <p className="description">{selected.description}</p>
                        

                        <p className="price"><span className="discount">${(selected.price)}</span> ${(selected.price * (1 - (selected.discountPercentage/100))).toFixed(2)}</p>
                        <p className="delivery">{selected.availabilityStatus} • {selected.shippingInformation} • {selected.warrantyInformation}</p>
                    </div>

                    <div className="add">
                        <div className="inputs">
                            <button className="addsub" onClick={() => {setCount(count + 1); console.log(count)}}>+</button>

                            <input type="number" min={0} onKeyDown={(e) => { if (e.key === '-') e.preventDefault(); }} onChange={(e) => {
                                const num = parseInt(e.target.value)
                                handleCount(num)
                                setCount(num < 1 ? 1 : num)
                            }} value={count}/>

                            <button className="addsub" onClick={() => {
                                if (count > 1) {
                                    setCount(count - 1);
                                    console.log(count)
                                }
                            }}>-</button>

                        </div>
                        <button className="link" onClick={() => {console.log(count); handleAdd()}}>Add to Cart</button>


                    </div>
                </div>
            
            </div>

            <div className="rest">
                <div className="prod-list">
                    <h2>Product Information</h2>
                    <div className="prod-info">
                        <div className="item-desc">
                            <div className="prod-left">
                                <p><span className="status">Brand: </span>{selected.brand}</p>
                                <hr />
                                <p><span className="status">Title: </span>{selected.title}</p>
                                <hr />
                                <p><span className="status">Item ID: </span>{selected.sku}</p>
                                <hr />
                                <p><span className="status">Category: </span>{selected.category}</p>
                                {/* {Object.entries(selected.tags).join()} */}
                                <hr />
                                <p><span className="status">Tags: </span>{selected.tags.join(', ')}</p>
                                <hr />
                                {/* {Object.entries(selected.dimensions).join(' x ')} */}
                                <p><span className="status">Dimensions: </span>{selected.dimensions.width}" x {selected.dimensions.height}" x {selected.dimensions.depth}"</p>
                                <hr />
                            </div>

                            <div className="prod-right">
                                <p><span className="status">Weight: </span>{selected.weight}lbs</p>
                                <hr />
                                <p><span className="status">Status: </span>{selected.availabilityStatus}</p>
                                <hr />
                                <p><span className="status">Return Policy: </span>{selected.returnPolicy}</p>
                                <hr />
                                <p><span className="status">Created at: </span>{selected.meta.createdAt}</p>
                                <hr />
                                <p><span className="status">Created at: </span>{selected.meta.updatedAt}</p>
                                <hr />
                                <p><span className="status">Created at: </span>{selected.meta.barcode}</p>
                                <hr />
                            </div>
                        </div>
                </div>

                </div>
                
                <div className="prod-list">
                    <h2>Customer Reviews</h2>
                    <div className="reviews">
                        {Object.entries(selected.reviews).map(([key, s]) => (
                            <div className="review" key={key}>
                                <div className="rev-top">
                                    <h3 className="rev-name">{s.reviewerName}</h3>
                                    <p className="rev-em"><i>{s.reviewerEmail}</i></p>
                                </div>

                                <div className="rev-mid">
                                    <p className="user-rev">{s.comment}</p>
                                </div>

                                <div className="rev-bot">
                                    <p className="user-rat">
                                        {s.rating}/5
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </p>
                                    <p className="user-date">{formatDate(s.date)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="prod-list">
                    <h2>Other Items You Might Like</h2>
                    <div className="other-stuff">
                        <UseImages category={selected.category} limit={5} skip={0} excludeId={selected.id}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item