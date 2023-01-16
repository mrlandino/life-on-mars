import React, { useState } from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import './App.css'
import Nav from "./Nav";
import ImageCard from "./ImageCard";
import DatePicker from "./DatePicker";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"


let  theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1',
          },
          style: {
            fontFamily: 'Poppins'
            
          }
        },
        {
          props: {
            variant: 'subtitle1',
          },
          style: {
            fontFamily: 'Poppins'
          }
        }
      ]
    }
  }
})

theme = responsiveFontSizes(theme)
const Images = () => {
  const [selectedImage, setSelectedImage] = useState<string>('')
  // add Progress from MUI to display when loading image. use a ternary if state is undefined
  return (
    <Container className='main-images'>
      <Nav />
      <Toolbar></Toolbar>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'} >
            <Grid item>
              <Typography 
                variant='h1'
                component='h1' 
                // mt={2} 
                sx={{
                  color: 'black', 
                }}
                >
                Search
              </Typography>
            </Grid>
            <Grid item>
              <Typography 
                variant='h1'
                component='h2'
                // mt={2} 
                ml={2} 
                sx={{
                  fontWeight:'800',
                  color: '#F18C43'
                  }}
                  >
                Images
              </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'}>
          <Grid item>
            <Typography
              variant='subtitle1'
              component='p'
              mt={2}
              >
                NASA has a database of images that they have collected since 1995! They do a 'photo of the day' everyday and will continue to do so for the foreseeable future. This search function allows you to see what the "photo of the day" was on the date that you chose. After you find an image you like, you can add it to your list of photos to be displayed on your calendar. Once you have chosen 12 images you can move to the Calendar page to work on your photo order by month. 
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>  
      <Grid container spacing={2} justifyContent='center'>
        <DatePicker />
      </Grid>
        {/* <ImageCard /> */}
    </Container>
   )
}

export default Images;