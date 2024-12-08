const Profile = ({rating, pImg, profileName, review}) => {

    return (
        <div className="profile">
            <div>
                <p>{rating}⭐</p>
                <img style={{height: '60px'}} src={pImg} alt={profileName} />
                <p>{review}</p>
            </div>
            <p>{profileName}</p>
        </div>
    )
}

export default Profile