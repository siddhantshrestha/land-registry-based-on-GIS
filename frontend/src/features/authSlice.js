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
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return authServices.register(user)
    } catch (error) {
      console.log(error)
      const message =
        (error.res && error.res.data && error.res.data.message) ||
        error.message ||
        error.toString()
        console.log(message);
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
        state.isLoading = true
        state.message = action.payload
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
  },
})

export default authSlice.reducer

export const { reset } = authSlice.actions
