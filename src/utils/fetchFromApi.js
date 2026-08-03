import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  }
};

console.log(process.env.API_KEY)
export const fetchFromApi = async (url) => {
    const { data } = await axios(`${base_url}/${url}`, options);
    return data;
} 
