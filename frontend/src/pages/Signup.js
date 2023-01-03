import { Box,Button,Checkbox,Container, FormControlLabel, FormGroup, InputLabel, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form"

import React,{useState} from 'react'

const Signup = () => {
    const [checked, setChecked] = useState(false)

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm()
    const onSubmit = data => console.log(data)
  
    const handleCheck = e => {
      setChecked(!checked)
    }
  

  return (
    <Box >
    <Container>
    <form
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
                className='login-form'>
                <Typography
                  variant='h4'
                  sx={{ color: "white", fontFamily: "Playfair Display" }}
                  gutterBottom>
                  Sign Up
                </Typography>
                <Box className='input-box'>
                  <InputLabel sx={{ color: "white", margin: "7px 0" }}>
                    Username
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
                    name='username'
                    // label='Username'
                    variant='outlined'
                    {...register("username", {
                      required: "username is required",
                    })}
                    aria-invalid={errors.username ? "true" : "false"}
                    error={Boolean(errors.username)}
                  />
                  {errors.username && (
                    <Typography sx={{ color: "red" }} role='alert'>
                      {errors.username?.message}
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

    </Container>
    </Box>
  )
}

export default Signup