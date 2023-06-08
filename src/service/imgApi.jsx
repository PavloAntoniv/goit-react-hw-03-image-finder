import axios from 'axios';

export async function imgApi(query, page) {
  const API_URL = 'https://pixabay.com/api/';
  // параметри запиту на бекенд
  const options = {
    params: {
      key: '35725736-1d55e9c3004cf0c0340b411f8',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 12,
    },
  };

  const response = await axios.get(API_URL, options);
  return response;
}
