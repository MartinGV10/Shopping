import { useEffect, useState } from 'react'
import './CSS/Checkout.css'
import { useCart } from './CartContext'
import { Link } from 'react-router'

function Checkout() {
    const {cart, increaseQuantity, decreaseQuantity, setQuantity} = useCart()

    // const [total, setTotal] = useState(0)

    // const handleTotal = (amt) => {
    //     setTotal(cart.item.price)
    // }

    const total = cart.reduce((sum, c) => {
        const unitPrice = c.item.price * (1 - c.item.discountPercentage / 100);
        return sum + unitPrice * c.num;
    }, 0);

    return (
        <>
        <div className="cart">
            <div className="cart-list">
                <h1>Cart</h1>
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <h1>There's nothing in your cart</h1>
                        <div className="link">
                            <Link to='/shop'>Shop</Link>
                        </div>
                    </div>
                ) : (
                    <>
                    {cart.map(({ id, item, num }) => (
                        <div className="cart-item" key={id}>
                            <div className="cart-left">
                                <img src={item.thumbnail} alt="" />
                                <p className='check-tit'>{item.title}</p>

                            </div>

                            <div className="cart-right">
                                <p className="price"><span className="discount">${(item.price * num).toFixed(2)}</span> ${(item.price * (1 - (item.discountPercentage/100)) * num).toFixed(2)}</p>

                                <div className="inputs">
                                    <button className="addsub" onClick={() => increaseQuantity(id)}>+</button>

                                    <input type="number" min={0} onKeyDown={(e) => { if (e.key === '-') e.preventDefault(); }} onChange={(e) => {
                                        const newNum = parseInt(e.target.value) || 0
                                        setQuantity(id, newNum)
                                        // handleTotal(item.price)
                                    }} value={num}/>

                                    <button className="addsub" onClick={() => decreaseQuantity(id)}>-</button>

                                </div>
                            </div>

                        </div>
                    ))}

                    <div className="total-price">
                        <p className='tot-sub'>Subtotal: ${total.toFixed(2)}</p>
                        <p className='tot-sub'>Taxes applied (7.5%): ${(total * 0.075).toFixed(2)}</p>
                        <hr />
                        <p className='total'>Total Price: ${(total * 1.075).toFixed(2)}</p>
                    </div>
                    
                    <button className='continue' onClick={() => {
                        if (cart.length === 0) {
                            console.log('hi')
                        }
        
                        else {
                            alert('bought')
                        }
                    }}>Confirm Purchase</button>
                    </>
                )}
            </div>

        </div>
        </>
    )
}

export default Checkout