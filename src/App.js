// App.js
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import { BookingPage } from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking'; // Import ConfirmedBooking
import './App.css';
import { useRef, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAPI } from './components/api';

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(action.date);
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

const App = () => {
    const abt = useRef(null);
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <BrowserRouter>
            <div className="head-nav">
                <Header />
                <Nav abt={abt} />
            </div>
            <Routes>
                <Route path="/" element={<Main abt={abt} />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
