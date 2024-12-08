import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css'

const ConfirmedBooking = () => {
    return (
        <>
            <div className="confirmed-booking">
                <h1>Booking Confirmed!</h1>
            </div>
            <div className="booking-info">
                <p>Your reservation has been successfully made.</p>
                <Link to="/" id="back-home">Back to Home</Link>
            </div>
        </>
    );
};

export default ConfirmedBooking;
