import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Pics from '../components/Pics';
import loading from '../assets/images/loading-progress.gif';

const PicsPage = () => {
  const [tempPictList, setTempPictList] = useState([]);
  const { pics } = useSelector((state) => state.pics);
  const picList = Object.keys(pics);

  const handleClick = (event) => {
    if (event.target.value !== 'both') {
      const pepito = picList.filter((date) => (pics[date].media === event.target.value));
      setTempPictList(pepito);
    } else {
      setTempPictList(picList);
    }
  };

  useEffect(() => {
    setTempPictList(picList);
  }, [pics]);

  return (

    <div className="totallist">
      <form action="/" className="form" id="form1">
        <p>Choose media type: image, video or both (default)</p>
        <select id="select" name="select" onChange={handleClick}>
          <option value="both">Both</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </form>

      <ul className="piclist">
        {
        tempPictList.length ? tempPictList.map((date) => (
          <Pics
            date={pics[date].date}
            name={pics[date].name}
            description={pics[date].description}
            image={pics[date].image}
            id={pics[date].id}
            key={uuidv4()}
            thumb={pics[date].thumb}
            media={pics[date].media}
          />
        )) : (
          <div className="wait">
            <li className="alert">Please wait until our images finish loading...</li>
            <img className="progress" src={loading} alt="progress icon" />
          </div>
        )
      }
      </ul>
    </div>
  );
};
export default PicsPage;
