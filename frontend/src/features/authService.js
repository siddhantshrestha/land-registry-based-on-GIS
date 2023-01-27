import axios from "axios"

const API_URL =
  "https://gis-land-registration-system.vercel.app/api/user/register"

const register = async userData => {
  const res = await axios.post(API_URL, userData)

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data))
  }
  return res.data
}

const authServices = {
  register,
}
export default authServices
