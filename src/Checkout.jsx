import { useEffect, useState } from 'react'
import './CSS/Checkout.css'
import { useCart } from './CartContext'

function Checkout() {
    const {cart, increaseQuantity, decreaseQuantity, setQuantity} = useCart()

    const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     setTotal()
    // }, [cart])
    
    // const [count, setCount] = useState(1)

    // const handleCount = (e) => {
    //     setCount(e)
    // }


    return (
        <>
        <div className="cart">
            <div className="cart-list">
                <h1>Cart</h1>
                {cart.map(({ id, item, num }) => (
                    <div className="cart-item" key={id}>
                        <div className="cart-left">
                            <img src={item.thumbnail} alt="" />
                            <p className='check-tit'>{item.title}</p>

                        </div>

                        <div className="cart-right">
                            <p className="price"><span className="discount">${(item.price * num)}</span> ${(item.price * (1 - (item.discountPercentage/100)) * num).toFixed(2)}</p>
                            {/* <p className='quant'>Quantity: {num}</p> */}
                            {/* <input type="number" className="quant" value={num}/> */}
                        </div>

                        <div className="inputs">
                            <button className="addsub" onClick={() => increaseQuantity(id)}>+</button>

                            <input type="number" min={0} onKeyDown={(e) => { if (e.key === '-') e.preventDefault(); }} onChange={(e) => {
                                const newNum = parseInt(e.target.value) || 0
                                setQuantity(id, newNum)
                            }} value={num}/>

                            <button className="addsub" onClick={() => decreaseQuantity(id)}>-</button>

                        </div>
                    </div>
                ))}

                <div className="total-price">
                    <p>Total Price: </p>
                </div>
            </div>

            <button className='continue' onClick={() => {
                if (cart.length === 0) {
                    console.log('hi')
                }
            }}>Confirm Purchase</button>
        </div>
        </>
    )
}

export default Checkout