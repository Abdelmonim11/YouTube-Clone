// import 'dotenv/config';
import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '5',
  },
  headers: {
    'x-rapidapi-key': process.env.API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios(`${base_url}/${url}`, options);

    return data;
} 
