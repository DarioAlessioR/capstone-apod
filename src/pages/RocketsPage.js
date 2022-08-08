import React from 'react';
import { useSelector } from 'react-redux';
import Rockets from '../components/Rockets';

const RocketsPage = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const rocketList = Object.keys(rockets);

  return (
    <ul className="rocketlist">
      {
        rocketList ? rocketList.map((rocket) => (
          <Rockets
            name={rockets[rocket].name}
            description={rockets[rocket].description}
            image={rockets[rocket].image}
            reserved={rockets[rocket].reserved}
            id={rockets[rocket].id}
            key={rockets[rocket].id}
          />
        )) : <li>At the moment there are no rokects available</li>
      }
    </ul>
  );
};
export default RocketsPage;
