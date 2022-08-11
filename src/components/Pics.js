import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Pics = (props) => {
  const navigate = useNavigate();

  const {
    name, image, date, media, thumb,
  } = props;

  const handleClick = (date) => {
    // const selecteddate = date;
    navigate(`/singlepic/${date}`);
    // dispatch(SinglePic(selecteddate));
  };

  return (
    <li className="pic-container">
      {
        (media === 'image') ? <img className="pic-container__img" src={image} alt={name} />
          : <img className="pic-container__img" src={thumb} alt={name} />
      }
      <div className="pic-info">
        <p className="pic-info__title">
          Title:
          {' '}
          {name}
        </p>
        <p className="pic-info__date">
          Date published:
          {' '}
          {date}
        </p>
        <button
          className="pic-see-details"
          type="button"
          onClick={() => handleClick(date)}
        >
          See details
        </button>
      </div>
    </li>
  );
};

Pics.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  media: PropTypes.string.isRequired,
  thumb: PropTypes.string,
};

Pics.defaultProps = {
  image: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
  thumb: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
};

export default Pics;
