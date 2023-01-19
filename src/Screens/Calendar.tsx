import React from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import '../App.css'
import Nav from "../Components/Nav";
import ImageCard from "../Components/ImageCard";
import { createTheme, ThemeProvider, responsiveFontSizes, Button} from "@mui/material"
import ChooseMonth from "../Components/ChooseMonth";
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
  finalCalendar: object[];
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
}

theme = responsiveFontSizes(theme)

const Calendar: React.FC<Calendar> = ({calendarImages, finalCalendar, setFinalCalendar}) => {
 
  // const [itemsInCart, setItemsInCart] = React.useState(false)
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
      <CalendarImageCard key={index} image={image} index={index} finalCalendar={finalCalendar} setFinalCalendar={setFinalCalendar} monthList={monthList} usedMonths={usedMonths} setUsedMonths={setUsedMonths} setMonthList={setMonthList}/>
    )
  })

  const handleAddToCart = (event: React.MouseEvent<HTMLElement>, text: string) => {

  }
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
              {/* <Button sx={{mt: '12px'}} variant='contained' onClick={(e) => handleAddToCart(e, 'clicked')}>
                Add to Cart
              </Button> */}
              <CartModal/>
            </Grid>
          </Grid>
        :
        <Grid container sx={{justifyContent:'center', mt: '40px'}}>
          <Grid item xs={10}>
            <Typography variant='h4' component='h4'>
              Head to the Images page to choose your images and generate calendar. 
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