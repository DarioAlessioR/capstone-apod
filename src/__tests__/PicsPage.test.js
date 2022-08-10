
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { PropTypes } from 'prop-types';
import { Router, useNavigate } from 'react-router-dom';
import PicsPage from '../pages/PicsPage';

const picsRender = () => {
  const picsProps = {
  };

  return (
    <Provider store={store}>
      <PicsPage />
    </Provider>
  );
};

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  expect(screen.getByText(/both/)).toBeInTheDocument;
});


test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  expect(screen.getByText(/media/)).toBeInTheDocument;
});

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  expect(screen.getByText(/loading/)).toBeInTheDocument;
});

test('pics displayed', () => {
  render(<PicsPage />, { wrapper: picsRender });
  expect(screen.getByText(/Choose/)).toBeInTheDocument;
});
