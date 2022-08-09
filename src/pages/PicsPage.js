import { useSelector } from 'react-redux';
import Pics from '../components/Pics';

const PicsPage = () => {
  const { pics } = useSelector((state) => state.pics);
  let picList = Object.keys(pics);

  const handleClick = (event) => {
    const newpicList = [];
    picList.forEach((date) => {
      if (pics[date].media === event.target.value) {
        newpicList.push(date);
      }
    });
    picList.splice(0, picList.length);
    picList = [...newpicList];
    console.log(picList);
  };

  return (

    <div className="totallist">
      <form action="/" className="form">
        <label form="form">Choose media type: image, video or both (default)</label>
        <select id="select" name="select" onChange={handleClick}>
          {/*
  picList.forEeach((item) => {
    <option value={item}>{item}</option>
  })
*/}
          <option value="both">Both</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </form>

      <ul className="piclist">
        {
        picList ? picList.map((date) => (
          <Pics
            date={pics[date].date}
            name={pics[date].name}
            description={pics[date].description}
            image={pics[date].image}
            id={pics[date].id}
            key={pics[date].id}
            thumb={pics[date].thumb}
            media={pics[date].media}
          />
        )) : <li className="alert">At the moment there are no pictures available</li>
      }
      </ul>
    </div>
  );
};
export default PicsPage;
