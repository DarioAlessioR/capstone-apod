import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = 'OSCLzO1eeu2qJffkWDUEnhw5vgCZGBKQUF8gHUVJ';
// previous = vFnwG1TUnH6EUE3InyLcQ3LeHeldl4GzaHH4TkGf

let todayLessOneMonth = new Date() - 30 * 24 * 60 * 60 * 1000;
todayLessOneMonth = new Date(todayLessOneMonth);
let dd = todayLessOneMonth.getDate();
let mm = todayLessOneMonth.getMonth() + 1;
const yyyy = todayLessOneMonth.getFullYear();

if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}
const startDate = `${yyyy}-${mm}-${dd}`;

const startdate = `&start_date=${startDate}&`;
const thumbs = '&thumbs=True&';

const finalUrl = apiUrl + apiKey + startdate + thumbs;

const picList = (objetc) => {
  let picData = {};

  objetc.forEach((item) => {
    picData = {
      ...picData,
      [item.date]: {
        name: item.title,
        description: item.explanation,
        image: item.url,
        author: item.copyright,
        date: item.date,
        media: item.media_type,
        service: item.service_version,
        thumb: item.thumbnail_url,
      },
    };
  });
  return picData;
};

const getPics = createAsyncThunk(
  'pics/getPics',
  async () => {
    const response = await fetch(finalUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    const dataReversed = data.reverse();
    return picList(dataReversed);
  },
);

export default getPics;
