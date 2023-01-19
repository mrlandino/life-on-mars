import React from "react";
import { Grid, Container, Typography, Toolbar } from "@mui/material";
import '../App.css'
import Nav from "../Components/Nav";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"
import CalendarImageCard from "../Components/CalendarImageCard";
import CartModal from "../Components/CartModal";

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
  setCalendarImages: React.Dispatch<React.SetStateAction<object[]>>;
  finalCalendar: object[];
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
}

theme = responsiveFontSizes(theme)

const Calendar: React.FC<Calendar> = ({setCalendarImages, finalCalendar, setFinalCalendar}) => {
 
  const [monthList, setMonthList] = React.useState([
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY', 
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER', 
    'DECEMBER'])
  const [usedMonths, setUsedMonths] = React.useState([])
  
  const calendarCards = finalCalendar.map((image, index) => {
    return (
      <CalendarImageCard key={index} image={image} index={index} finalCalendar={finalCalendar} setFinalCalendar={setFinalCalendar} monthList={monthList} usedMonths={usedMonths} setUsedMonths={setUsedMonths} setMonthList={setMonthList}/>
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
                Your
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
        <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'}>
          <Grid item xs={10}>
            <Typography
              variant='subtitle1'
              component='p'
              mt={2}
              >
                Welcome to your final calendar layout! This is how your calendar will be printed in the order you chose your images. You can click on 'see enlarged' to see a bigger visual of the image you click on. If you don't like a certain image, you can return to the IMAGES page to remove and add another image to your lineup. When you are happy with your images you have chosen click the "Add to Cart" button for purchase. Note images are cropped to fit the aspect ratio of the final calendar. 
            </Typography>
          </Grid>
        </Grid>
        {finalCalendar.length === 12? 
          <Grid container sx={{justifyContent:'center', mt: '12px'}}>
            <Grid item>
              <CartModal setFinalCalendar={setFinalCalendar} setCalendarImages={setCalendarImages}/>
            </Grid>
          </Grid>
        :
        <Grid container sx={{justifyContent:'center', mt: '40px'}}>
          <Grid item xs={10}>
            <Typography variant='h4' component='h4'>
              Your custom calendar is currently empty. Please return to the images page to fill your calendar.  
            </Typography>
          </Grid>
        </Grid>
        }
      </ThemeProvider>  
      <Grid container spacing={2} justifyContent='center' mt='20px'>
          {calendarCards}
      </Grid>
    </Container>
   )
}

export default Calendar;