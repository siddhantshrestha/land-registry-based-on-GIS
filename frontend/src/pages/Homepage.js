import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import mapImg from "../images/map.png"

const Homepage = () => {
  return (
    <Box>
      <Container>
        <Grid
          container
          spacing={1}
          mt={5}
          p={2}
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}>
          <Grid item sm={12} md={5} lg={6}>
            <Grid container sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant='h4' sx={{ fontWeight: "bold" }} gutterBottom>
                Land Registration
              </Typography>
              <Typography variant='h4' sx={{ fontWeight: "bold" }} gutterBottom>
                using GIS
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  fontWeight: "normal",
                  color: "#5f5f5f",
                  overflow: "ellipsis",
                  // width: "500px",
                }}
                gutterBottom>
                land registration is a process of registering the land. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vero
                sed sequi, repellat quam, incidunt laboriosam porro ut
                temporibus rerum voluptatibus inventore mollitia dolor
                perferendis veniam. Obcaecati laborum unde expedita?
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={12} md={7}  lg={6}>
            <Grid container sx={{ maxWidth: "100%" }}>
              <img sx={{width:'300px'}} src={mapImg} alt='map pic' />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Homepage

// sm: "640",
// md: "768px",
// lg: "1024px",
// xl: "1280px",
// /
