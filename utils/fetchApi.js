require('dotenv').config();
import axios from 'axios';

export const URL ='https://bayut.p.rapidapi.com'

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': process.env.KEY
          }
    })

    return data;
}