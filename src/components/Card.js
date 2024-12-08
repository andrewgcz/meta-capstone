const Card = ({img, title, price, content}) => {


    const heading = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    }


    const ctStyle = {
        padding: '25px'
    }

    const astyle = {
        position: 'absolute',
        bottom: '25px',
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
    }

    return (
        <article className="card">
            <img src={img} alt={title} />
            <div style={ctStyle}>
                <div style={heading}>
                    <h3>{title}</h3>
                    <h3 style={{justifySelf: 'end', color: '#FFA237'}}>{price}</h3>
                </div>
                <p>{content}</p>
                <a style={astyle} href="#">Order a delivery →</a>
            </div>
        </article>
    )
}

export default Card