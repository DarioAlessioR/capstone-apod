import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import PicsPage from '../pages/PicsPage';

const picsRender = () => (
  <Provider store={store}>
    <PicsPage />
  </Provider>
);

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  return expect(screen.getByText(/both/)).toBeInTheDocument;
});

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  return expect(screen.getByText(/media/)).toBeInTheDocument;
});

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  return expect(screen.getByText(/loading/)).toBeInTheDocument;
});

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  return expect(screen.getByText(/Choose/)).toBeInTheDocument;
});
