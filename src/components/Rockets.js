import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateRocket } from '../redux/rockets';

const Rockets = (props) => {
  const dispatch = useDispatch();

  const {
    name, description, image, id, reserved,
  } = props;

  return (
    <li className="rocket-container">
      <img className="rocket-container__img" src={image} alt={name} />
      <div className="rocket-info">
        <h2 className="rocket-info__title">{name}</h2>
        <p className="rocket-info__description">
          {reserved
            && <span className="rocket-info__description__reserved">Reserved</span>}
          {description}
        </p>
        {reserved ? <button className="rocket-info__cancelbutton" type="button" onClick={() => dispatch(updateRocket(id))}>Cancel reservation</button>
          : <button className="rocket-info__reservebutton" type="button" onClick={() => dispatch(updateRocket(id))}>Reserve rocket</button>}
      </div>
    </li>
  );
};

Rockets.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,

};

export default Rockets;
