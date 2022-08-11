import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pics from '../components/Pics';

const picsProps = {
  name: 'sss',
  image: 'aaa',
  date: 'www',
  media: 'hhh',
  thumb: 'xxx',
};

const pictureRender = () => (
  <BrowserRouter>
    <Pics
      media={picsProps.media}
      date={picsProps.date}
      name={picsProps.name}
      image={picsProps.image}
      thumb={picsProps.thumb}
    />
  </BrowserRouter>
);

test('pic displayed', () => {
  render(<Pics
    media={picsProps.media}
    date={picsProps.date}
    name={picsProps.name}
    image={picsProps.image}
    thumb={picsProps.thumb}
  />, { wrapper: pictureRender });
  return expect(screen.getByText(/sss/)).toBeInTheDocument;
});

test('pic displayed', () => {
  render(<Pics media={picsProps.media}
    date={picsProps.date}
    name={picsProps.name}
    image={picsProps.image}
    thumb={picsProps.thumb}
  />, { wrapper: pictureRender });
  return expect(screen.getByText(/www/)).toBeInTheDocument;
});
  
test('pic displayed', () => {
  render(<Pics media={picsProps.media}
    date={picsProps.date}
    name={picsProps.name}
    image={picsProps.image}
    thumb={picsProps.thumb}
  />, { wrapper: pictureRender });
  return expect(screen.getByText(/See/)).toBeInTheDocument;
});
