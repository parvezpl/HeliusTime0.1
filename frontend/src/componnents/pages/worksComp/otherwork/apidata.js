import axios from 'axios';


const API_URL = import.meta.env.VITE_API_URL // Replace with your backend URL
// const API_URL = "http://localhost:3000"

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api`); // Replace with your endpoint
    console.log("fetchdata", response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
};