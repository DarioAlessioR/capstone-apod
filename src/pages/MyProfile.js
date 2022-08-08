import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions);
  const rocketList = Object.values(rockets);
  const missionList = Object.values(missions);
  const reservedRockets = rocketList.filter((rockets) => rockets.reserved);
  const joinedMissions = missionList.filter((mission) => mission.joined);

  return (
    <div className="mycontainer">
      <div className="mycontainer-section">
        <h2 className="mycontainer-section__title">
          My Missions
        </h2>
        <ul className="mycontainer-section__box">
          {
            joinedMissions.length ? joinedMissions.map((item) => (
              <li key={item.id} className="element-name">{item.name}</li>
            )) : <li className="element-name">No Missions Ongoing</li>
          }
        </ul>
      </div>
      <div className="mycontainer-section">
        <h2 className="mycontainer-section__title">
          My Rockets
        </h2>
        <ul className="mycontainer-section__box">
          {
            reservedRockets.length ? reservedRockets.map((item) => (
              <li key={item.id} className="element-name">{item.name}</li>
            )) : <li className="element-name">No Rockets Selected</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
