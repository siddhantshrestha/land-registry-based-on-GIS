import React, { useState } from "react"
import OtpInput from "react-otp-input"
import axios from "axios"
// import { useSelector } from "react-redux"

import { Box, Button, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useLocation } from "react-router-dom"

const Otp = () => {
  const location = useLocation()
  // const { user } = useSelector(state => state.auth)
  // console.log(location.state)

  const url =
    "https://gis-land-registration-system.vercel.app/api/user/register/otp/verify"

  const [otp, setOtp] = useState("")

  const info = {
    email: location.state.data.email,
    OTP: otp,
  }

  const handleChange = otp => {
    // console.log(otp)
    setOtp(otp)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post(url, info)
      console.log(res.data)
      if (res.data) {
        console.log(res.data)
        localStorage.setItem("userId", JSON.stringify(res.data?.userData?._id))
        localStorage.setItem("token", JSON.stringify(res.data?.token))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <Container
        className='otp-box'
        sx={{
          mt: 5,
          display: "flex",
          justifyContent: "center",
          width: "500px",
        }}>
        <Typography sx={{ textAlign: "center" }} variant='h4' gutterBottom>
          OTP Verification
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container column={12}>
            <Typography>Enter the OTP code send to your email</Typography>

            <Grid item xs={12}>
              <OtpInput
                className='otp-input'
                value={otp}
                onChange={handleChange}
                autoFocus
                separator={<> - </>}
                OTPLength={4}
                hasErrored={true}
                isInputNum={true}
              />
            </Grid>
            <Grid item>
              <Button type='submit' variant='contained'>
                Verify
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default Otp
