/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MissionTable from '../components/MissionTable';

const missionRender = () => {
  const missionProps = {
    id: 'K667',
    name: 'JamesWeb',
    description: 'xxxx',
    joined: false,
  };

  return (
    <Provider store={store}>
      <MissionTable
        id={missionProps.id}
        name={missionProps.name}
        description={missionProps.description}
        joined={missionProps.joined}
      />
    </Provider>
  );
};

test('Mission displayed', () => {
  render(<MissionTable />, { wrapper: missionRender });
  expect(screen.getByText(/xxxx/)).toBeInTheDocument;
});

test('Mission displayed', () => {
  render(<MissionTable />, { wrapper: missionRender });
  expect(screen.getByText(/JamesWeb/)).toBeInTheDocument;
});
