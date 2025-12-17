import Footer from "./Footer"
import Nav from "./Nav"
import { Link } from "react-router"
import './CSS/Err.css'

function Error() {
    return (
        <>
        <div className="whole-page">
            <Nav />
            <div className="main">
                <div className="err">
                    <h1>Wrong Page</h1>
                    <p>There's no reason for you to be here bc there's nothing on this page.</p>
                    <p>To go back to shopping for kits, press here:</p>
                    <div className="err-links">
                        <Link to='/'>Home</Link>
                        <Link to='/'>Shop</Link>
                        <Link to='/'>About</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Error