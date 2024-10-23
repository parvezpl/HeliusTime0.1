import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL // IF LOCAL HOST THEN localhost:3000 and if deploy then heliustimebachend.onrender.com

const token = Cookies.get("token")


export const createCctnsData = async (data) => {

    try {
      const response = await axios.post(`${API_URL}/api/createCctnsData`, {dataType:data.option, userData:{name:data.name, email:data.email, password:data.password}}) // Replace with your endpoint
      .then((res=>{
        return res.data
      }))
  
      return response;
    } catch (error) {
      console.error('Error fetching data problem in apicall user login');
      throw error; // Rethrow the error for further handling
    }
  }