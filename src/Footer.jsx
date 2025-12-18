import './CSS/Footer.css'
import { Link } from 'react-router'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="f-col">
                    <h2 className="f-title">About Us</h2>
                    <p className="f-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laboriosam deleniti eum esse perferendis? Dignissimos</p>
                    <div className="f-imgs">
                        <img src="" alt="github" />
                        <img src="" alt="github" />
                        <img src="" alt="idk" />
                    </div>
                    
                </div>
                <div className="f-col">
                    <h2 className="f-title">Support</h2>
                    <p className="f-links">FAQ</p>
                    <p className="f-links">Privacy Policy</p>
                    <p className="f-links">Help</p>
                    <p className="f-links">Contact</p>
                </div>
                <div className="f-col">
                    <h2 className="f-title">Shop</h2>
                    <Link to='/' className="f-links"><p >Home</p></Link>
                    <Link to='/shop' className="f-links"><p >Shop</p></Link>
                    <Link to='/about' className="f-links"><p >About</p></Link>
                </div>
                <div className="f-col">
                    <h2 className="f-title">Contact Us</h2>
                    <p className="f-links">(239) 823-7788</p>
                    <p className="f-links">martinganen10@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer