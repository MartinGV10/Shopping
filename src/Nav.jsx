import './CSS/Nav.css'
import { Link } from 'react-router'

function Nav() {
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
            <div className="n-right">Shopping Cart</div>
        </div>
        </>
    )
}

export default Nav