import {useNavigate} from "react-router-dom";

const Button = ({text, to}) => {
    const navigate = useNavigate();

    const btnStyle = {
        backgroundColor: '#F4CE14',
        color: 'black',
        padding: '20px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: "'Karla', sans-serif",
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
}
    return (
        <button style={btnStyle} onClick={() => navigate(to)}>{text}</button>
    )
}

export default Button;