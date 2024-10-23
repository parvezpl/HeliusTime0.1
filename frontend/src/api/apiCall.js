import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_API_URL // IF LOCAL HOST THEN localhost:3000 and if deploy then heliustimebachend.onrender.com

const token = Cookies.get("token")


export const tokenverifie = async () => {

    const responece=await axios.get(`${API_URL}/api/token`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        }
      }
    ).then((res) => {
      // localStorage.setItem("user", res.data?.name)
      console.log(res.data)
      return res.data
    })
    .catch((err)=>{
      return "server problem or internet not connected"
    })
    return responece
}


export const userLogin = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/userlogin`, { username: formData.contact, password: formData.password }); // Replace with your endpoint
    if (response){
      Cookies.set('token', response.data.token, { expires: 7 });
      console.log(response)
      localStorage.setItem('islogin', true)
      localStorage.setItem("user", response?.data.payload.name)
      return response?.data;
    }
  } catch (error) {
    console.error('Error fetching data problem in apicall user login');
  }
}


export const logout = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/logout`).then((res) => {
      Cookies.remove("token")
      localStorage.removeItem("user")
      localStorage.removeItem('islogin')
      localStorage.removeItem('linkId')
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}



export const createAccount = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/createAccount`, { name: data.name, contact: data.contact, username: data.name, password: data.password }); // Replace with your endpoint
    console.log(response.data.newUser.name)
    // Cookies.set('token', response.data, { expires: 7 });
    localStorage.setItem("user", response.data.newUser.name)
    localStorage.setItem('islogin', true)
    return response.data;
  } catch (error) {
    console.error('Error fetching data problem in apicall user login');
    throw error; // Rethrow the error for further handling
  }
}


export const weblinksData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/weblinks`
      // , {
      //   withCredentials: true, // Include cookies
      // }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }

}

export const createWeblinksData = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/weblinks`, data) // Replace with your endpoint
      .then((res => {
        return res.data
      }))

    return response;
  } catch (error) {
    console.error('Error fetching data problem in apicall user login');
    throw error; // Rethrow the error for further handling
  }
}

export const deleteWeblinksData = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/weblinks/${userId}`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        },
      }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}

export const singupData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/getuser`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        }
      }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}


export const getUserData = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/api/getuserdata?id=${userId}`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        }
      }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}

export const getUserDataUpdate = async (userId, data) => {
  try {
    const response = await axios.put(`${API_URL}/api/getuserdata/${userId}`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        },
        data
      }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}

export const deleteUserData = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/getuserdata/${userId}`
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
        },
      }
    ).then((res) => {
      return res.data
    })
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for further handling
  }
}