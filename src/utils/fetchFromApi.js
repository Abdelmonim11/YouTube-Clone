// import 'dotenv/config';
import axios from "axios";

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '5'
  },
  headers: {
    'x-rapidapi-key':'2f9c9d8340msh28f2697f05e560cp1bbb11jsnc6d2d2ff2769',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
   
  }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios(`${base_url}/${url}`, options);

    return data;
} 
