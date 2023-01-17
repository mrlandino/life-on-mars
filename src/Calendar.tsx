import React from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import './App.css'
import Nav from "./Nav";
import ImageCard from "./ImageCard";
import { createTheme, ThemeProvider, responsiveFontSizes, } from "@mui/material"
// import Draggable from "react-draggable";
import ChooseMonth from "./ChooseMonth";

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
      ]
    }
  }
})

type Calendar = {
  calendarImages: any;
}

theme = responsiveFontSizes(theme)

const Calendar: React.FC<Calendar> = ({calendarImages}) => {
  // const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

  const months: number[]= [1,2,3,4,5,6,7,8,9,10,11,12]
  
  const calendarCards = months.map(month => {
    return (
      <ImageCard key={month}/>
    )
  })
  return (
    <Container className='main-calendar' maxWidth={'xl'}>
      <Nav />
      <Toolbar></Toolbar>
      <ThemeProvider theme={theme}>
        <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'} >
            <Grid item>
              <Typography 
                variant='h1'
                component='h1' 
                mt={2} 
                sx={{
                  color: 'black', 
                }}
                >
                Customize
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
                  color: '#F18C43'
                  }}
                  >
                Calendar
              </Typography>
            </Grid>
        </Grid>
      </ThemeProvider>  
      <Grid container spacing={2} xs={12} sm={6} md={3} justifyContent='center'>
          {calendarCards}
      </Grid>
    </Container>
   )
}

export default Calendar;