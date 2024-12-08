import hsImg from "../assets/restauranfood.jpg"
import gsImg from "../assets/greek salad.jpg"
import ldImg from "../assets/lemon dessert.jpg"
import maImg from "../assets/Mario and Adrian A.jpg"
import pPh from "../assets/profilePlaceholder.png"
import abImg1 from "../assets/Mario and Adrian b.jpg"
import abImg2 from "../assets/restaurant.jpg"

import Button from "./Button.js"
import Card from "./Card.js"
import Profile from "./Profile.js"

const Main = ({abt}) => {
    return (
        <div className="main">
            <section className="hero-section">
                <div>
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus in odio
                            aliquet, vel egestas orci hendrerit. </p>
                        <Button text="Reserve a Table" to="/booking"/>
                    </div>
                    <img src={hsImg} alt=""/>
                </div>
            </section>
            <section className="highlights">
                <div>
                    <div className="heading">
                        <h1>This week specials!</h1>
                        <div><Button text="Online Menu"/></div>
                    </div>
                    <div className="cards">
                        <Card img={gsImg} title="Greek Salad" price="$12.99" content="Suspendisse felis tortor, ornare vitae nulla non, bibendum faucibus eros. Integer pulvinar pulvinar mi. Curabitur pulvinar vulputate diam, non vestibulum metus eleifend quis." />
                        <Card img={maImg} title="Bruschetta" price="$5.00" content="Nulla vitae tristique diam, sit amet efficitur est. In consectetur tortor diam, eu laoreet felis tempor sed. Phasellus aliquet elit elit, nec faucibus orci fringilla nec." />
                        <Card img={ldImg} title="Lemon Dessert" price="$5.99" content="Suspendisse potenti. Nunc pellentesque elit mi, at cursus augue scelerisque vel. Duis sed malesuada massa. Quisque molestie ipsum velit. Quisque fermentum, nisi ac faucibus." />
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div>
                    <h1>Testimonials</h1>
                    <div className="profiles">
                        <Profile rating="5" profileName="Suzie" pImg={pPh} review="Excellent" />
                        <Profile rating="4" profileName="Brandom" pImg={pPh} review="Pretty good" />
                        <Profile rating="3" profileName="Caroline" pImg={pPh} review="The meat was a bit raw.." />
                        <Profile rating="2" profileName="Josh" pImg={pPh} review="Way too much spicy" />
                    </div>
                </div>
            </section>
            <section className="about" ref={abt}>
                <div>
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat tellus in odio
                            aliquet, vel egestas orci hendrerit. </p>
                    </div>
                    <div>
                        <img src={abImg1} alt=""/>
                        <img src={abImg2} alt=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main