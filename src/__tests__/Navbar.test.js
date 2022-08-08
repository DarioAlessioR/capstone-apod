/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Navbar displayed', () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Travelers/)).toBeInTheDocument;
});

test('Navbar displayed', () => {
  render(<Navbar />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Profile/)).toBeInTheDocument;
});
