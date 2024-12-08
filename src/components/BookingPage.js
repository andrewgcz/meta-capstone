import './BookingPage.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [guestsError, setGuestsError] = useState('');
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        const dateObj = new Date(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', date: dateObj });
    };

    const handleGuests = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue) && (inputValue === "" || parseInt(inputValue, 10) <= 10 && parseInt(inputValue, 10) > 0)) {
            setGuests(inputValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (date === "") {
            setDateError("Date is still missing");
        } else {
            setDateError("");
        }

        if (guests === "" || parseInt(guests, 10) <= 0 || parseInt(guests, 10) > 10) {
            setGuestsError("Guests amount needs to be between 1 and 10");
        } else {
            setGuestsError("");
        }

        if (date && guests && parseInt(guests, 10) > 0 && parseInt(guests, 10) <= 10) {
            const formData = { date, time, guests, occasion };
            submitForm(formData);
        }
    };

    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                value={date}
                onChange={handleDateChange}
                id="res-date"
                required
            />
            <p className="error">{dateError}</p>

            <label htmlFor="res-time">Choose time</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} id="res-time" required>
                {availableTimes.map((time) => (<option key={time}>{time}</option>))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                value={guests}
                onChange={handleGuests}
                placeholder="0"
                id="guests"
                min="1"
                max="10"
                required
            />
            <p className="error">{guestsError}</p>

            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion" required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" disabled={!(date && guests && parseInt(guests, 10) > 0 && parseInt(guests, 10) <= 10)} />
        </form>
    );
};

const BookingPage = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();

    const submitForm = (formData) => {
        navigate('/confirmed');
    };

    return (
        <div className="booking-page">
            <div className="booking-title">
                <h1>Reservations</h1>
            </div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
};

export { BookingPage, BookingForm };
