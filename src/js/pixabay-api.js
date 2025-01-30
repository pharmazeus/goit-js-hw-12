import axios from 'axios';
export const fetchPicsByQuery = searchedQuery => {
  const API_KEY = '48449909-94b1753e13b470dade065bce0';
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`${BASE_URL}?${searchParams}`);
};
//old fetch
// const url = `${BASE_URL}?${searchParams}`;

// return fetch(url).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });
