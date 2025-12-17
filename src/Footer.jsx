import './CSS/Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="f-col">
                    <h2 className="f-title">About Us</h2>
                    <p className="f-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laboriosam deleniti eum esse perferendis? Dignissimos</p>
                    <div className="f-imgs">
                        <img src="" alt="linkedin" />
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
                    <p className="f-links">Home</p>
                    <p className="f-links">Shop</p>
                    <p className="f-links">About</p>
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