import axios from 'axios';
import Cookies from 'js-cookie';

// const API_URL = import.meta.env.VITE_API_URL
const API_URL = "http://localhost:3000"


export const tokenverifie= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/token`
      , {
        withCredentials: true, // Include cookies
      }
    ).then((res)=>{
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
    // console.log(response.data)
    Cookies.set('token', response.data.token, { expires: 7 });
    return response.data;
  } catch (error) {
    console.error('Error fetching data problem in apicall user login');
    throw error; // Rethrow the error for further handling
  }
}


export const logout= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/logout`).then((res)=>{
      Cookies.remove("token")
      localStorage.removeItem("user")
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}



export const createAccount= async (data)=>{
  try {
    const response = await axios.post(`${API_URL}/api/createAccount`, { name: data.name, contact: data.contact, username:data.name, password: data.password}); // Replace with your endpoint
    console.log(response.data.newUser.name)
    // Cookies.set('token', response.data, { expires: 7 });
    localStorage.setItem("user", response.data.newUser.name)
    return response.data;
  } catch (error) {
    console.error('Error fetching data problem in apicall user login');
    throw error; // Rethrow the error for further handling
  }
}





export const weblinksData= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/weblinks`
      , {
        withCredentials: true, // Include cookies
      }
    ).then((res)=>{
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}

export const singupData= async ()=>{
  try {
    const response = await axios.get(`${API_URL}/api/getuser`
      , {
        withCredentials: true, // Include cookies
      }
    ).then((res)=>{
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}

