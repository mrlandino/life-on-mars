import React from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import '../App.css'
import Nav from "../Components/Nav";
import ImageCard from "../Components/ImageCard";
import { createTheme, ThemeProvider, responsiveFontSizes, } from "@mui/material"
import ChooseMonth from "../Components/ChooseMonth";
import CalendarImageCard from "../Components/CalendarImageCard";

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
  calendarImages: object[];
  finalCalendar: object[];
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
}

theme = responsiveFontSizes(theme)

const Calendar: React.FC<Calendar> = ({calendarImages, finalCalendar, setFinalCalendar}) => {
  
  // const finalCalenderToBuy = {'JANUARY': '', 'FEBRUARY': '', 'MARCH':'', 'APRIL':'', 'MAY':'', 'JUNE':'', 'JULY':'', 'AUGUST':'', 'SEPTEMBER':'', 'OCTOBER':'', 'NOVEMBER':'', 'DECEMBER':''}
  // const finalCalenderToBuy1 : object[] = [
  //   {month: 'Jan', imageURL: ''}, 
  //   {month: 'Feb', imageURL: ''},
  //   {month: 'Mar', imageURL: ''},
  //   {month: 'Apr', imageURL: ''},
  //   {month: 'May', imageURL: ''},
  //   {month: 'Jun', imageURL: ''},
  //   {month: 'Jul', imageURL: ''},
  //   {month: 'Aug', imageURL: ''},
  //   {month: 'Sep', imageURL: ''},
  //   {month: 'Oct', imageURL: ''},
  //   {month: 'Nov', imageURL: ''},
  //   {month: 'Dec', imageURL: ''},
  // ]

  // const months: number[]= [1,2,3,4,5,6,7,8,9,10,11,12]
  
  const calendarCards = finalCalendar.map((image, index) => {
    return (
      <CalendarImageCard key={index} image={image} index={index} finalCalendar={finalCalendar} setFinalCalendar={setFinalCalendar}/>
    )
  })

  // const finalCalendarLayout = finalCalenderToBuy1.map((image, index) => {
  //   return (
  //     <CalendarImageCard key={index} image={image} index={index}/>
  //   )
  //   })

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


     <Grid container spacing={2} justifyContent='center' mt='20px'>
          {calendarCards}
      </Grid>
      {/* <Grid container spacing={2} justifyContent='center' mt='20px'>
          {finalCalendarLayout}
      </Grid> */}
    </Container>
   )
}

export default Calendar;