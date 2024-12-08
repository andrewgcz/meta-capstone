import logo from "../assets/Logo.svg";
import hamIcon from "../assets/hamburger_icon.png";
import {useEffect, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const LoginPopup = ({loginState, setLoginState}) => {
    const loginPopupRef = useRef(null);

    useEffect(() => {
        loginPopupRef.current.style.display = loginState;
    }, [loginState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginState('none');
        document.body.style.overflowY = 'scroll';
    }

    return (
        <div className="login-popup" ref={loginPopupRef}>
            <div className="login-display">
                <button onClick={handleSubmit}>&#10006;</button>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

const HamOptions = ({hamState, handleAbout, handleLogin}) => {
    const mobNav = useRef(null);

    useEffect(() => {
        mobNav.current.style.display = hamState;
    }, [hamState]);

    return (
        <div id="mobile-nav" ref={mobNav}>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><a href="#about" onClick={handleAbout}>ABOUT</a></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/booking">RESERVATIONS</Link></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#" onClick={handleLogin}>LOGIN</a></li>
            </ul>
        </div>
    )
}

const Nav = ({abt}) => {
    const [hamState, setHamState] = useState('none');
    const [loginState, setLoginState] = useState('none');

    const navigate = useNavigate();

    const handleLogin = () => {
        setLoginState('grid');
        document.body.style.overflowY = 'hidden';
    }

    const handleClick = () => {
        (hamState == 'none') ? setHamState('block') : setHamState('none');
    }

    const handleAbout = () => {
        navigate('/');
        setTimeout(() => {
            if (abt.current) {
                abt.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    }


    return (
        <>
            <nav>
                <ul id="pc-nav">
                    <li><Link to="/">HOME</Link></li>
                    <li><a href="#about" onClick={handleAbout}>ABOUT</a></li>
                    <li><Link to="/menu">MENU</Link></li>
                    <li><Link to="/booking">RESERVATIONS</Link></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>ORDER ONLINE</a></li>
                    <li><a href="#" onClick={handleLogin}>LOGIN</a></li>
                </ul>
                <button onClick={handleClick}><img src={hamIcon} alt="hamIcon"/></button>
            </nav>
            <HamOptions hamState={hamState} abt={abt} handleAbout={handleAbout} handleLogin={handleLogin} />
            <LoginPopup loginState={loginState} setLoginState={setLoginState} />
        </>

    )
}

export default Nav