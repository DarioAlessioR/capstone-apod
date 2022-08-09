import { PropTypes } from 'prop-types';

const PicDetails = (props) => {
  const {
    name, description, image, author, date, media, service,
  } = props;

  // console.log(props);

  return (
    <li className="singlepic-container">
      {
        (media === 'image') ? <img className="rocket-container__img" src={image} alt={name} />
          : <iframe title="video" width="560" height="315" src={image} />
       }
      <div className="singlepic-info">
        <h1 className="singlepic-info__title">
          Title:
          {' '}
          {name}
        </h1>
        <h2 className="singlepic-info__author">
          Author:
          {' '}
          {author}
        </h2>
        <h4 className="singlepic-info__rest">
          Date published:
          {' '}
          {date}
        </h4>
        <p className="singlepic-info__rest">
          Explanation:
          {' '}
          {description}
        </p>
        <p className="singlepic-info__rest">
          Media service:
          {' '}
          {media}
        </p>
        <p className="singlepic-info__rest">
          Service code:
          {' '}
          {service}
        </p>
      </div>
    </li>
  );
};

PicDetails.propTypes = {
  author: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PicDetails;
