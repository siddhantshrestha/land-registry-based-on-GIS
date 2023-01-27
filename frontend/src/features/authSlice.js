import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authServices from "./authService"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

//Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return authServices.register(user)
    } catch (error) {
      const message =
        (error.res && error.res.data && error.res.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
  }
)

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
    extraReducers: (builder) => {
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = true 
            state.message = action.payload
        })
        },
  },
})

export default authSlice.reducer

export const { reset } = authSlice.actions
