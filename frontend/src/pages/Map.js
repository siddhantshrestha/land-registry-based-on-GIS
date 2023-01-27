// import React, { useEffect, useRef } from "react"
// import { loadModules } from "esri-loader"
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Container,
//   Typography,
//   InputLabel,
// } from "@mui/material"
// import { useForm } from "react-hook-form"

// const MyMap = () => {
//   const mapRef = useRef(null)

//   useEffect(() => {
//      loadModules(
//       ["esri/config", "esri/Basemap", "esri/views/MapView", "esri/WebMap"],
//       {
//         css: true,
//       }
//     ).then((MapView, WebMap, esriConfig) => {
//       const apiKey = "YOUR_API_KEY";

//       const map = L.map("map").setView([48.865195, 2.321033], 16);

//       L.esri.Vector.vectorBasemapLayer("ArcGIS:Streets", {
//         apikey: apiKey
//       }).addTo(map);
//     })
//   })
    
//     const {
//       register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm()
//   const onSubmit = data => console.log(data)
//   return (
//     <Box>
//       <Container>
//         <Grid container className='login-form-box'>
//           <Box
//             className='login-box'
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               background: "#3f3f3f",
//               width: "100%",
//               borderRadius: "10px",
//               height: "450px",
//             }}>
//             <Grid item xs={12} md={8}>
//               <Box ref={mapRef} sx={{ height: "80vh", width: "100%" }} />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} sx={{ height: "100%" }}>
//               <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 autoComplete='off'
//                 className='login-form'>
//                 <Typography
//                   variant='h4'
//                   sx={{ color: "white", fontFamily: "Playfair Display" }}
//                   gutterBottom>
//                   map
//                 </Typography>
//                 <Box className='input-box'>
//                   <InputLabel sx={{ color: "white", margin: "7px 0" }}>
//                     Username
//                   </InputLabel>

//                   <TextField
//                     sx={{
//                       background: "white",
//                       color: "black",
//                       borderRadius: "6px",
//                       outline: "none",
//                       maxWidth: "300px",
//                       width: "100%",
//                     }}
//                     name='username'
//                     // label='Username'
//                     variant='outlined'
//                     {...register("username", {
//                       required: "username is required",
//                     })}
//                     aria-invalid={errors.username ? "true" : "false"}
//                     error={Boolean(errors.username)}
//                   />
//                   {errors.username && (
//                     <Typography sx={{ color: "red" }} role='alert'>
//                       {errors.username?.message}
//                     </Typography>
//                   )}
//                 </Box>
//                 <Box className='input-box'>
//                   <InputLabel sx={{ color: "white", margin: "7px 0" }}>
//                     Password
//                   </InputLabel>

//                   <TextField
//                     sx={{
//                       color: "black",
//                       borderRadius: "6px",
//                       background: "white",
//                     }}
//                     name='password'
//                     // label='password'
//                     variant='outlined'
//                     type='password'
//                     {...register("password", {
//                       required: "Password is required",

//                       minLength: {
//                         value: 8,
//                         text: "Password must be atleast 8 in character",
//                       },
//                     })}
//                     aria-invalid={errors.password ? "true" : "false"}
//                     error={Boolean(errors.password)}
//                     // helperText=
//                   />
//                   {errors.password && (
//                     <Typography sx={{ color: "red" }} role='alert'>
//                       {errors.password?.message}
//                     </Typography>
//                   )}
//                   {errors.password?.type === "minLength" && (
//                     <Typography sx={{ color: "red" }} role='alert'>
//                       Password must be atleast 8
//                     </Typography>
//                   )}
//                 </Box>

//                 {/* <input type='checkbox' ref={checkRef} onClick={handleCheck}/> */}
//                 <Button id='login-btn' type='submit' variant='contained'>
//                   Login
//                 </Button>
//               </form>
//             </Grid>
//           </Box>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default MyMap

// //   // esriConfig.apiKey =
// //   //   "AAPKf340bd6c0f03414f9ddbb343a513223bTmHn-m0UK-wPqf4HRLB9VWUg66ScAg0xu2HX553NaJw7cXuBG6sEU6FEXZlS_Swf"

// //   const webMap = new WebMap({
// //     basemap: "topo-vector",
// //   })
// //   view = new MapView({
// //     map: webMap,
// //     container: mapRef.current,
// //     zoom: 8,
// //   })
// // })
// // return () => {
// //   if (!!view) {
// //     view.destroy()
// //     view = null
// //   }
// // }