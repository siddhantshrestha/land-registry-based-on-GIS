import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Container,
  Typography,
  InputLabel,
} from "@mui/material"
import { useForm } from "react-hook-form"
import loginImg from "../images/log.png"
import Checkbox from "@mui/material/Checkbox"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"
import { login, reset } from "../features/authSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successful")
    }
    dispatch(reset())
  }, [isError, isSuccess, message, dispatch,])

  const [checked, setChecked] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = data => {
    const { email, password } = data

    const userData = {
      email,
      password,
    }

    dispatch(login({ user: userData,navigate} ))
  }

  const handleCheck = e => {
    setChecked(!checked)
  }

  return (
    <Box>
      <Container>
        <Grid container className='login-form-box'>
          <Box
            className='login-box'
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#3f3f3f",
              width: "100%",
              borderRadius: "10px",
              height: "450px",
            }}>
            <Grid
              className='login-img-box'
              item
              sx={{ display: { xs: "none", sm: "block" } }}
              md={6}>
              <img id='login-img' src={loginImg} alt='login' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ height: "100%" }}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
                className='login-form'>
                <Typography
                  variant='h4'
                  sx={{ color: "white", fontFamily: "Playfair Display" }}
                  gutterBottom>
                  Sign In
                </Typography>
                <Box className='input-box'>
                  <InputLabel sx={{ color: "white", margin: "7px 0" }}>
                    Email
                  </InputLabel>

                  <TextField
                    sx={{
                      background: "white",
                      color: "black",
                      borderRadius: "6px",
                      outline: "none",
                      maxWidth: "300px",
                      width: "100%",
                    }}
                    name='email'
                    // label='email'
                    variant='outlined'
                    {...register("email", {
                      required: "email is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    error={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <Typography sx={{ color: "red" }} role='alert'>
                      {errors.email?.message}
                    </Typography>
                  )}
                </Box>
                <Box className='input-box'>
                  <InputLabel sx={{ color: "white", margin: "7px 0" }}>
                    Password
                  </InputLabel>

                  <TextField
                    sx={{
                      color: "black",
                      borderRadius: "6px",
                      background: "white",
                    }}
                    name='password'
                    // label='password'
                    variant='outlined'
                    type={checked ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",

                      minLength: {
                        value: 8,
                        text: "Password must be atleast 8 in character",
                      },
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    error={Boolean(errors.password)}
                    // helperText=
                  />
                  {errors.password && (
                    <Typography sx={{ color: "red" }} role='alert'>
                      {errors.password?.message}
                    </Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography sx={{ color: "red" }} role='alert'>
                      Password must be atleast 8
                    </Typography>
                  )}
                </Box>

                <Box className='input-box'>
                  <FormGroup sx={{ color: "white" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "primary",
                            },
                          }}
                          checked={checked}
                          onClick={handleCheck}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label='show password'
                    />
                  </FormGroup>
                </Box>

                {/* <input type='checkbox' ref={checkRef} onClick={handleCheck}/> */}
                <Button id='login-btn' type='submit' variant='contained'>
                  Login
                </Button>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Login
