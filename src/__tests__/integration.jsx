import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

const MockApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Integration Test', () => {
  it('MockApp', async () => {
    render(<MockApp />);
    return expect(screen.getByText(/APOD/)).toBeInTheDocument;
  });
});

describe('Integration Test', () => {
  it('MockApp', async () => {
    render(<MockApp />);
    return expect(screen.getByText(/Choose/)).toBeInTheDocument;
  });
});
