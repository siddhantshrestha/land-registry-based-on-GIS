import axios from "axios"

const API_URL =
  "https://gis-land-registration-system.vercel.app/api/user/"

  const LOGIN_API_URL = "https://gis-land-registration-system.vercel.app/api/user/login"



const register = async userData => {

  const res = await axios.post(API_URL+ "register", userData)
  // console.log(res)
  return res.data

}
const login = async userData => {

  const res = await axios.post(LOGIN_API_URL, userData)
  console.log(res.data)
  return res.data

}

const logout = () => {
  localStorage.removeItem("user")
}

const authServices = {

  login,
  register,
  logout,
}
export default authServices
