import footerimg from "../assets/lemon.jpg"

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={footerimg} alt="Little Lemon Logo"/>
                <ul>
                    <li><h3>Doormat Navigation</h3></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
                <ul>
                    <li><h3>Contact</h3></li>
                    <li><span>Santa St, 43</span></li>
                    <li><a href="tel: +5511111111111">Phone number</a></li>
                    <li><a href="mailto:little@lemon.com">Email</a></li>
                </ul>
                <ul>
                    <li><h3>Social Media Links</h3></li>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://x.com" target="_blank">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer