import './CSS/About.css'
import about from '/about.jpg'
import idk from '/idk.jpg'

function About() {
    return (
        <>
            <div className="about">
                <div className="ab-vert">
                    <div className="ab-left">
                        <h2>About Us</h2>
                        <p>
                            We believe shopping should be simple, transparent, and actually enjoyable. Our goal is to bring together quality products across multiple categories—tech, fashion, and everyday essentials—so you can find what you need without digging through clutter. Every item in our store is chosen with value, reliability, and design in mind.
                        </p>
                        <p>
                            We focus on clear pricing, honest product information, and a smooth experience from browsing to checkout. Whether you’re upgrading your setup, refreshing your wardrobe, or just browsing for something new, we’re here to make the process easy and straightforward.
                        </p>
                        <p>
                            This shop was built with the idea that good products don’t need to be complicated—and neither should buying them.
                        </p>
                    </div>

                    <div className="ab-right">
                        <img src={about} alt="some pic" className='ab-pic'/>
                    </div>
                </div>

                <div className="ab-vert">
                    <div className="ab-left">
                        <img src={idk} alt="some pic" className='ab-pic'/>
                    </div>

                    <div className="ab-right">
                        <h2>Why Shop With Us</h2>
                        <p>We’re committed to making online shopping simple, transparent, and reliable. Every product in our store is carefully selected to meet our standards for quality, functionality, and value. Instead of overwhelming you with endless options, we focus on offering products that are practical, well-designed, and worth your time.</p>

                        <p>We believe that informed decisions lead to better purchases. That’s why we provide clear pricing, detailed product descriptions, and real customer feedback—so you know exactly what you’re getting before you buy. No hidden fees, no confusing fine print, and no unnecessary friction.</p>

                        <p>Our platform is built with usability in mind. From intuitive navigation to a streamlined checkout process, every part of the experience is designed to be fast, responsive, and easy to use across devices. Whether you’re browsing casually or shopping with a specific goal, we aim to make the process smooth from start to finish.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About