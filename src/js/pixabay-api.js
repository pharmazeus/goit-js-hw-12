import axios from 'axios';
import { config, BASE_URL } from './pixabay-config';

export const fetchPicsByQuery = (searchedQuery, currentPage = 1) => {
  const searchParams = new URLSearchParams({
    ...config,
    q: searchedQuery,
    page: currentPage,
  });

  return axios.get(`${BASE_URL}?${searchParams}`);
};
