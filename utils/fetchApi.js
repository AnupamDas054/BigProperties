import axios from 'axios';

export const URL ='https://bayut.p.rapidapi.com'

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7a78fc9141msh93674a2b1d340c6p1bc6fcjsnc33899ec9b14'
          }
    })

    return data;
}