/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"
import { registerUser } from "../features/authSlice"
import { useNavigate,useLocation } from "react-router-dom"
// import Spinner from "../component/Spinner"

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  // const {user} = useSelector(state=>state.auth)
 

  // useEffect(() => {
  //   if (location.state) {
  //     setValue(location.state.user)
  //   }
  // }, [location, setValue])

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const onSubmit = data => {
    const { firstName, lastName, phoneNumber, address, email, password } = data

    if (data.password !== data.confirmPassword) {
      toast.error(`Password and Confirm Password does not match`)
    } else {
      const userData = {
        firstName,
        lastName,
        phoneNumber,
        address,
        email,
        password,
      }

      dispatch(registerUser({ user: userData, navigate }))
    }
  }

  return (
    <Box>
      <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete='on'
          className='register-form'>
          <Typography
            variant='h4'
            sx={{ fontFamily: "Playfair Display", textAlign: "center" }}
            gutterBottom>
            Sign Up
          </Typography>

          <Grid container column={12}>
            <Grid
              id='input-box'
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "20px",
              }}>
              <TextField
                className='register-input'
                name='firstName'
                label='First Name'
                fullWidth
                variant='outlined'
                {...register("firstName", {
                  required: "First Name is required",
                  pattern: /[a-zA-Z]/i,
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
                error={Boolean(errors.firstName)}
              />
              {/* {errors.firstName && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.firstName?.message}
                </Typography>
              )}
              {errors?.firstName?.type === "pattern" && (
                <Typography sx={{ color: "red" }} role='alert'>
                  first name shouldn't contain special character
                </Typography>
              )} */}
            </Grid>
            <Grid
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "20px",
              }}>
              <TextField
                className='register-input'
                name='lastName'
                label='Last Name'
                variant='outlined'
                fullWidth
                {...register("lastName", {
                  required: "Last Name is required",
                  pattern: /[a-zA-Z]/i,
                })}
                aria-invalid={errors.lastName ? "true" : "false"}
                error={Boolean(errors.lastName)}
              />
              {/* {errors?.lastName?.type === "pattern" && (
                <Typography sx={{ color: "red" }} role='alert'>
                  last name shouldn't contain special character
                </Typography>
              )}
              {errors.lastName && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.lastName?.message}
                </Typography>
              )} */}
            </Grid>
          </Grid>
          <Grid container column={12}>
            <Grid
              id='input-box'
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "25px",
                marginTop: "5px",
              }}>
              <TextField
                className='register-input'
                fullWidth
                name='address'
                label='Address'
                variant='outlined'
                {...register("address", {
                  required: "address is required",
                })}
                aria-invalid={errors.address ? "true" : "false"}
                error={Boolean(errors.address)}
              />
              {/* {errors.address && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.address?.message}
                </Typography>
              )} */}
            </Grid>
            <Grid
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "25px",
                marginTop: "5px",
              }}>
              <TextField
                fullWidth
                className='register-input'
                name='phoneNumber'
                type='number'
                label='Phone Number'
                variant='outlined'
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  // pattern: /^[9][7-8]\d{8}$/i,
                })}
                aria-invalid={errors.phoneNumber ? "true" : "false"}
                error={Boolean(errors.phoneNumber)}
              />
              {/* {errors?.phoneNumber?.type === "pattern" && (
                <Typography sx={{ color: "red" }} role='alert'>
                  number not validate
                </Typography>
              )}
              {errors?.phoneNumber?.type === "required" && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.phoneNumber?.message}
                </Typography>
              )} */}
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            md={12}
            sx={{
              padding: "0 10px",
              fontSize: "14px",
              marginBottom: "25px",
              marginTop: "5px",
            }}>
            <TextField
              className='register-input'
              fullWidth
              name='email'
              label='Email Address'
              variant='outlined'
              {...register("email", {
                required: "email is required",
                pattern:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              })}
              aria-invalid={errors.email ? "true" : "false"}
              error={Boolean(errors.email)}
            />
            {/* {errors.email && (
              <Typography sx={{ color: "red" }} role='alert'>
                {errors.email?.message}
              </Typography>
            )}
            {errors?.email?.type === "pattern" && (
              <Typography sx={{ color: "red" }} role='alert'>
                Invalid email address
              </Typography>
            )} */}
          </Grid>
          <Grid container column={12}>
            <Grid
              id='input-box'
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "25px",
                marginTop: "5px",
              }}>
              <TextField
                className='register-input'
                fullWidth
                name='password'
                label='Password'
                variant='outlined'
                {...register("password", {
                  required: "password is required",
                })}
                aria-invalid={errors.password ? "true" : "false"}
                error={Boolean(errors.password)}
              />
              {/* {errors.password && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.password?.message}
                </Typography>
              )} */}
            </Grid>
            <Grid
              container
              xs={12}
              sm={6}
              md={6}
              sx={{
                padding: "0 10px",
                fontSize: "14px",
                marginBottom: "25px",
                marginTop: "5px",
              }}>
              <TextField
                className='register-input'
                fullWidth
                name='confirmPassword'
                label='Confirm Password'
                variant='outlined'
                {...register("confirmPassword", {
                  required: "confirmPassword is required",
                })}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                error={Boolean(errors.confirmPassword)}
              />
              {/* {errors.confirmPassword && (
                <Typography sx={{ color: "red" }} role='alert'>
                  {errors.confirmPassword?.message}
                </Typography>
              )} */}
              {/* {errors.password !== errors.confirmPassword && (
                <Typography sx={{ color: "red" }} role='alert'>
                  Confirm password not matched
                </Typography>
              )} */}
            </Grid>
          </Grid>
          {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
            {message && toast.error(message)}
          </Box> */}

          <Button id='msg-btn' variant='outlined' type='submit'>
            Register
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default Signup
