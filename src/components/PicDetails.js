import { PropTypes } from 'prop-types';

const PicDetails = (props) => {
  const {
    name, description, image, author, date, media, service,
  } = props;

  return (
    <li className="singlepic-container">
      {
        (media === 'image') ? <img className="rocket-container__img" src={image} alt={name} />
          : (
            <div className="video-container">
              <iframe className="video" title="video" width="540" height="370" src={image} />
            </div>
          )
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
  author: PropTypes.string,
  media: PropTypes.string,
  service: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

PicDetails.defaultProps = {
  image: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg',
  author: 'N/A',
  media: 'N/A',
  service: 'N/A',
  date: 'N/A',
  name: 'N/A',
  description: 'N/A',
};

export default PicDetails;
