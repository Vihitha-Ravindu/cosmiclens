import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from '../components/Heading';

test('renders heading component', () => {
  render(<Heading />);

  const headingText = screen.getByText(/CosmicLens/i);
  const exploreText = screen.getByText(/Explore the wonders of the cosmos/i);
  const uncoverText = screen.getByText(/Uncover the boundless wonders/i);

  expect(headingText).toBeInTheDocument();
  expect(exploreText).toBeInTheDocument();
  expect(uncoverText).toBeInTheDocument();
});