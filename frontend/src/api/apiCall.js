import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL
// const API_URL = "http://localhost:3000"


export const tokenverifie= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/token`); // Replace with your endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}

