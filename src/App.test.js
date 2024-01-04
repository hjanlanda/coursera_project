import { render, screen } from '@testing-library/react';
import ReservationsPage from './pages/ReservationsPage';

test('renders Reservation page', () => {
  render(<ReservationsPage />);
  const button = screen.getByText(/Book now/i);
  expect(button).toBeInTheDocument();
});
