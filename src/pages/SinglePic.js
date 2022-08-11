import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PicDetails from '../components/PicDetails';

const SinglePic = () => {
  const { date } = useParams();
  const { pics } = useSelector((state) => state.pics);

  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  let selecteddate = '2022-07-27';
  if (date) selecteddate = date;

  return (
    <div>
      <h2 className="detail">Details for the selected APOD</h2>
      <ul className="singlepic">
        <PicDetails
          date={pics[selecteddate].date}
          name={pics[selecteddate].name}
          description={pics[selecteddate].description}
          image={pics[selecteddate].image}
          author={pics[selecteddate].author}
          media={pics[selecteddate].media}
          service={pics[selecteddate].service}
          id={pics[selecteddate].id}
          key={pics[selecteddate].id}
        />
      </ul>
      <button className="returnbutton" type="button" onClick={() => handleClick()}>Return to homepage</button>
    </div>
  );
};

export default SinglePic;
