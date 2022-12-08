import React from "react"
// import { Box, Grid } from "@mui/system"
import { Box, Grid, Typography } from "@mui/material"
import mapImage  from '../images/map.png'
const Homepage = () => {
  return (
    <Box className='mainpage'>
      <Grid
        container
        sx={{
          flexGrow: 1,
          maxWidth: "1140px",
          margin: "auto",
          padding: "10px 18px",
        }}>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Typography variant='h3' gutterBottom className='info-title'>
              Land<br/> Registration<br/> Using GIS
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <img alt='map' src={mapImage}/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Homepage
