import React from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import './App.css'
import Nav from "./Nav";
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
            variant: 'h4',
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


const Home = () => {

 return (
  <Container className='main-home'>
    <Nav />
    <Toolbar></Toolbar>
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} sx={{justifyContent:'center'}}>
            <Grid item>
              <Typography 
                variant='h1'
                component='h1' 
                mt={2} 
                sx={{
                  color: '#F18C43', 
                }}
                >
                Welcome to
              </Typography>
            </Grid>
            <Grid item>
              <Typography 
                variant='h1'
                component='h2'
                mt={2} 
                ml={2} 
                sx={{
                  fontWeight:'800',
                  }}
                  >
                Life on Mars
              </Typography>
            </Grid>
        </Grid>
        <Grid container direction='row' justifyContent="center" alignItems="center" sx={{direction: {xs:'column'}}}>
          <Grid item xs={6}>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
              <img src= 'https://www.pngall.com/wp-content/uploads/13/Mars-PNG-Picture.png'/>
            </Grid>
          </Grid>
          <Grid item xs={6} >
            <Typography 
              variant="h4"
              textAlign={'center'}
              sx={{
              }}
              >
                - Search Properties to purchase on Mars for your out of this world home <br></br>
                - Check the weather for your next easy visit <br></br>
                - Get real estate analysis on who is ditching earth and who hasn't decided yet
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
  </Container>
 )
}

export default Home;