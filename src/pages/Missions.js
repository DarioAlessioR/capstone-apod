/* eslint-disable import/extensions */
import { useSelector } from 'react-redux/es/exports';
import MissionTable from '../components/MissionTable';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionList = Object.values(missions);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{' '}</th>
          </tr>
        </thead>
        {
          missionList ? missionList.map((mission) => (
            <MissionTable
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              joined={mission.joined}
            />
          ))
            : <p>No missions available</p>
        }
      </table>
    </section>
  );
};

export default Missions;
