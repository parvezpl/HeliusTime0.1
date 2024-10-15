import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL
// const API_URL = "http://localhost:3000"


export const tokenverifie= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/token`,{
      withCredentials: 'include',
    }).then((res)=>{
      // console.log(res)
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}


export const userLogin= async (formData)=>{
  try {
    const response = await axios.post(`${API_URL}/api/userlogin`, { username: formData.contact, password: formData.password }); // Replace with your endpoint
    Cookies.set('token', response.data.token, { expires: 7 });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}


export const logout= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/logout`,{
      withCredentials: 'include',
    }).then((res)=>{
      // console.log(res)
      Cookies.remove("token")
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}



export const weblinksData= async (formData)=>{
  try {
    const response = await axios.get(`${API_URL}/api/weblinks`,{
      withCredentials: 'include',
    }) // Replace with your endpoint
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}