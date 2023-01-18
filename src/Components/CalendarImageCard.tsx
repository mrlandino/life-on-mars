import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography, Grid, Button } from '@mui/material';
import ChooseMonth from './ChooseMonth';

type CalendarImageCard = {
  key: number;
  image: Image;
  index: number;
  finalCalendar: Image[];
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
};

type Image = {
  month?: any;
  imageURL?: string;
}
  
const CalendarImageCard: React.FC<CalendarImageCard> = ({image, index, finalCalendar, setFinalCalendar}) => {
    
  // const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
  //   // let imageList1 = [...calendarImages]
  //   // const updateList = imageList1.filter(thisImage => thisImage !== image)
  //   // setCalendarImages(updateList)
  // }
  let sendToFinalCalendar = [...finalCalendar]
  const updateImageOrder = (month: any, ) => {
    
    const monthPosition: any = {
      'JANUARY': 0,
      'FEBRUARY': 1,
      'MARCH': 2,
      'APRIL': 3,
      'MAY': 4, 
      'JUNE': 5,
      'JULY': 6,
      'AUGUST': 7,
      'SEPTEMBER': 8,
      'OCTOBER': 9,
      'NOVEMBER': 10, 
      'DECEMBER': 11
     }
     const deletePosition: any = {
      'JANUARY': 1,
      'FEBRUARY': 2,
      'MARCH': 3,
      'APRIL': 4,
      'MAY': 5, 
      'JUNE': 6,
      'JULY': 7,
      'AUGUST': 8,
      'SEPTEMBER': 9,
      'OCTOBER': 10,
      'NOVEMBER': 11, 
      'DECEMBER': 12
     }
    //  console.log(month)
    //  console.log(monthPositions[month])
    // console.log(monthPositions[image.month])
    // console.log(sendToFinalCalendar)
     if (monthPosition[month] !== index) {
      sendToFinalCalendar.splice(monthPosition[month], 0, image);
     }

     if (monthPosition[month] > index) {
      // console.log(sendToFinalCalendar[12])
        sendToFinalCalendar.unshift(sendToFinalCalendar[12])
        sendToFinalCalendar.splice(monthPosition[month], 1)
        sendToFinalCalendar.splice(12, 1)
      //  sendToFinalCalendar.splice(monthPosition[month] + 1, 0, )
     } 
    //  else {
    //   sendToFinalCalendar.splice(index + 1, 1)
    //  }
     
     setFinalCalendar(sendToFinalCalendar)
  }

  return (
    <Card sx={{ width: '250px', margin: '15px', justifyContent:'center', textAlign: 'center'}}>
      <CardContent sx={{justifyContent:'center', alignContent: 'center'}}>
        <Grid container sx={{mb: '5px', alignItems:"center"}}>
        {/* <Grid item xs={6}>
          <Typography sx={{fontFamily: 'Poppins'}}>
            {image.month}
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          {/* <Button onClick={(e) => handleClick(e, 'clicked')} sx={{whiteSpace: 'nowrap', justifyContent: 'center'}}>
            {image.month}
          </Button> */}
          <ChooseMonth updateImageOrder={updateImageOrder}/>
        </Grid>
        </Grid>
        <CardMedia 
          className='calendar-image' 
          image={image.imageURL}
          sx={{height:'120px', width: '100%', alignContent: 'center'}}
          />
      </CardContent>
    </Card>
  );
}

export default CalendarImageCard;