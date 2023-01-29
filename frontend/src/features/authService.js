import axios from "axios"

const API_URL =
  "https://gis-land-registration-system.vercel.app/api/user/register"

const register = async (userData) => {
  const res = await axios.post(API_URL, userData)
  
  return res.data
}
const logout = () =>{
  localStorage.removeItem('user')
}

const authServices = {
  register,
  logout,
}
export default authServices
