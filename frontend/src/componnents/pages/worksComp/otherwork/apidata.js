import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const fetchData = async () => {
  try {
    const response = await axios.get(`/api`); // Replace with your endpoint
    console.log("fetchdata", response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
};