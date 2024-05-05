import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders navigation buttons', () => {
  render(
    <Router>
      <Navigation />
    </Router>
  );

  const homeButton = screen.getByText(/home/i);
  const apodButton = screen.getByText(/apod/i);
  const marsButton = screen.getByText(/mars pics/i);
  const nasaButton = screen.getByText(/nasa pics/i);
  const neowsButton = screen.getByText(/near earth object/i);

  expect(homeButton).toBeInTheDocument();
  expect(apodButton).toBeInTheDocument();
  expect(marsButton).toBeInTheDocument();
  expect(nasaButton).toBeInTheDocument();
  expect(neowsButton).toBeInTheDocument();
});