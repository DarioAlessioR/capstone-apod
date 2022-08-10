import React from 'react';
import { render, screen } from '@testing-library/react';
import { PropTypes } from 'prop-types';
import PicDetails from '../components/PicDetails';

const picsRender = () => {
  const picsProps = {
    description: 'fff',
    author: 'Dario',
    service: 'ddd',
    name: 'Nebula',
    date: '2022-10-10',
    media: 'video',
    image: 'hhh',
  };

  return (
      <PicDetails
        image={picsProps.image}
        name={picsProps.name}
        date={picsProps.date}
        media={picsProps.media}
        description={picsProps.description}
        author={picsProps.author}
        service={picsProps.service}
      />
  );
};

test('pic displayed', () => {
  render(<PicDetails />, { wrapper: picsRender });
  expect(screen.getByText(/Dario/)).toBeInTheDocument;
});

test('pic displayed', () => {
  render(<PicDetails />, { wrapper: picsRender });
  expect(screen.getByText(/2022-10-10/)).toBeInTheDocument;
});

test('pic displayed', () => {
    render(<PicDetails />, { wrapper: picsRender });
    expect(screen.getByText(/Nebula/)).toBeInTheDocument;
  });

  test('pic displayed', () => {
    render(<PicDetails />, { wrapper: picsRender });
    expect(screen.getByText(/fff/)).toBeInTheDocument;
  });
