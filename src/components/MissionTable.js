import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setStatus } from '../redux/missions';

const MissionTable = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, description, joined,
  } = props;

  return (
    <>
      <tbody>
        <tr className="mission">
          <td id={id} className="mission-name">{name}</td>
          <td className="mission-description">{description}</td>
          <td className={!joined ? 'mission-not-member' : 'mission-member'}><p>{!joined ? 'NOT A MEMBER' : 'MEMBER'}</p></td>
          <td className="botton-container">
            <button
              className={!joined ? 'button-container__join-button' : 'button-container__leave-button'}
              onClick={() => dispatch(setStatus(id))}
              type="button"
            >
              {!joined ? 'Join mission' : 'Leave mission'}
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

MissionTable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionTable;
