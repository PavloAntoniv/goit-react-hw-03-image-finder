import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '35725736-1d55e9c3004cf0c0340b411f8',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};

// const response = await axios.get(
//   `https://pixabay.com/api/?key=27697316-9cc45c303ea5cb91afbaa3e72&q=${query}&image_type=photo&per_page=12`
// );
