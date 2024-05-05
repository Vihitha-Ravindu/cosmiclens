import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders navbar with buttons', () => {
  // Render the Navbar component
  render(<Navbar />);

  // Assert that each button is rendered
  const button1 = screen.getByText(/Button 1/i);
  expect(button1).toBeInTheDocument();

  const button2 = screen.getByText(/Button 2/i);
  expect(button2).toBeInTheDocument();

  const button3 = screen.getByText(/Button 3/i);
  expect(button3).toBeInTheDocument();
});
