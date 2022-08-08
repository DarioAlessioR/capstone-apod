/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../pages/MyProfile';

const profileRender = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

test('MyProfile displayed', () => {
  render(<MyProfile />, { wrapper: profileRender });
  expect(screen.getByText(/Ongoing/)).toBeInTheDocument;
});

test('MyProfile displayed', () => {
  render(<MyProfile />, { wrapper: profileRender });
  expect(screen.getByText(/Selected/)).toBeInTheDocument;
});
