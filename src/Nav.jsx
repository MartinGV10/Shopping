import { useCart } from './CartContext'
import { Link } from 'react-router'
import './CSS/Nav.css'

function Nav() {
    const {cart, increaseQuantity, decreaseQuantity, setQuantity} = useCart()

    const amount = cart.reduce((sum, item) => sum + item.num, 0)

    return (
        <>
        <div className="nav">
            <div className="n-left">
                <Link to='/'><h2 className="n-name">Threads FC</h2></Link>
            </div>
            <div className="n-mid">
                <Link to='/'><p className="n-title">Home</p></Link>
                <Link to='/shop'><p className="n-title">Shop</p></Link>
                <Link to='/about'><p className="n-title">About</p></Link>
            </div>
            <Link to='/checkout'>
                <div className="n-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    {amount != 0 ? (<p className='item-quant'>{amount}</p>): ('')}
                </div>
            </Link>
        </div>
        </>
    )
}

export default Nav