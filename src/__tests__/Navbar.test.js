import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Navbar displayed', () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  return expect(screen.getByText(/Astronomical/)).toBeInTheDocument;
});

test('Navbar displayed', () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  return expect(screen.getByText(/Home/)).toBeInTheDocument;
});
