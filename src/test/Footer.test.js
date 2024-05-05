import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with social media icons', () => {
  // Render the Footer component
  render(<Footer />);

  // Assert that the social media icons are rendered
  const twitterIcon = screen.getByLabelText('Twitter');
  expect(twitterIcon).toBeInTheDocument();

  const facebookIcon = screen.getByLabelText('Facebook');
  expect(facebookIcon).toBeInTheDocument();

  const dribbbleIcon = screen.getByLabelText('Dribbble');
  expect(dribbbleIcon).toBeInTheDocument();

  const githubIcon = screen.getByLabelText('GitHub');
  expect(githubIcon).toBeInTheDocument();
});

test('renders footer with useful links', () => {
  // Render the Footer component
  render(<Footer />);

  // Assert that the useful links are rendered
  const aboutLink = screen.getByText(/About Us/i);
  expect(aboutLink).toBeInTheDocument();

  const blogLink = screen.getByText(/Blog/i);
  expect(blogLink).toBeInTheDocument();

  const githubLink = screen.getByText(/Github/i);
  expect(githubLink).toBeInTheDocument();

  const freeProductsLink = screen.getByText(/Free Products/i);
  expect(freeProductsLink).toBeInTheDocument();
});
