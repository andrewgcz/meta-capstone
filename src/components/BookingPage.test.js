import { render, screen } from "@testing-library/react";
import {BookingForm} from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[1, 2, 3, 4, 5]} dispatch={['a']} />);
    const headingElement = screen.getByText("Occasion");
    expect(headingElement).toBeInTheDocument();
})