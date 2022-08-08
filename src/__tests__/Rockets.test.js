/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

const rocketRender = () => {
  const rocketProps = {
    name: 'KKKK',
    description: 'gggg',
    image: 'ffff',
    reserved: false,
    id: 'K667',
  };

  return (
    <Provider store={store}>
      <Rockets id={rocketProps.id} name={rocketProps.name} description={rocketProps.description} />
    </Provider>
  );
};

test('Rocket displayed', () => {
  render(<Rockets />, { wrapper: rocketRender });
  expect(screen.getByText(/KKKK/)).toBeInTheDocument;
});

test('Rocket displayed', () => {
  render(<Rockets />, { wrapper: rocketRender });
  expect(screen.getByText(/gggg/)).toBeInTheDocument;
});
