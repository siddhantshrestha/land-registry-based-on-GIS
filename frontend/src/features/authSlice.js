import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import authServices from "./authService"

const userLocalData = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: userLocalData ? userLocalData : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ user, navigate }, thunkAPI) => {
    try {
      let res = await authServices.register(user)
      // console.log(user);
      navigate("/otpverify", { state: { data: res?.data, user:user} })

      return res
    } catch (error) {
      console.log(error.response.data.error)

      const message =
        error.response.data.error || error.message || error.toString()
      toast.error(message)
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authServices.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.user = action.payload
        state.message = action.payload.message
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
  },
})

export default authSlice.reducer

export const { reset } = authSlice.actions
