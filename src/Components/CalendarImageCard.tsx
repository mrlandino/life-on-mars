import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography, Grid, Button } from '@mui/material';
import ChooseMonth from './ChooseMonth';
import ImageDetailModal from './ImageDetailModal'; 
import { Image } from '@mui/icons-material';

type CalendarImageCard = {
  key: number;
  image: Image;
  index: number;
  finalCalendar: Image[];
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
  monthList: string[];
  usedMonths: string[];
  setUsedMonths: React.Dispatch<React.SetStateAction<never[]>>;
  setMonthList: React.Dispatch<React.SetStateAction<string[]>>
};

type Image = {
  month?: any;
  imageURL?: string;
}

type ArrayMove = {
  arr: Image[];
  old_index: number;
  new_index: number
}

const CalendarImageCard: React.FC<CalendarImageCard> = ({image, index, finalCalendar, setFinalCalendar, monthList, usedMonths, setUsedMonths, setMonthList}) => {
  const [imageDetails, setImageDetails] = React.useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setImageDetails((prevState) => !prevState)
  //   // let imageList1 = [...calendarImages]
  //   // const updateList = imageList1.filter(thisImage => thisImage !== image)
  //   // setCalendarImages(updateList)
  }

  let sendToFinalCalendar = [...finalCalendar]
  const updateImageOrder = (month: any, ) => {
    
    // const monthPosition: any = {
    //   'JANUARY': 0,
    //   'FEBRUARY': 1,
    //   'MARCH': 2,
    //   'APRIL': 3,
    //   'MAY': 4, 
    //   'JUNE': 5,
    //   'JULY': 6,
    //   'AUGUST': 7,
    //   'SEPTEMBER': 8,
    //   'OCTOBER': 9,
    //   'NOVEMBER': 10, 
    //   'DECEMBER': 11
    //  }
    //  const deletePosition: any = {
    //   'JANUARY': 1,
    //   'FEBRUARY': 2,
    //   'MARCH': 3,
    //   'APRIL': 4,
    //   'MAY': 5, 
    //   'JUNE': 6,
    //   'JULY': 7,
    //   'AUGUST': 8,
    //   'SEPTEMBER': 9,
    //   'OCTOBER': 10,
    //   'NOVEMBER': 11, 
    //   'DECEMBER': 12
    //  }
    //  const swapElement = (array, indexA, indexB) => {
    //   const tmp = array[indexA];
    //   array[indexA] = array[indexB];
    //   array[indexB = tmp]
    //  }

    // const array_move = ({arr, old_index, new_index}: ArrayMove) => {
    //   if (new_index >= arr.length) {
    //       var k = new_index - arr.length + 1;
    //       while (k--) {
    //           arr.push(undefined);
    //       }
    //   }

  //     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  //     return arr; // for testing
  // };

  //    if (monthPosition[month] !== index) {
  //     let prevIndex: number = monthPosition[month]
  //     array_move(sendToFinalCalendar, index, prevIndex)
  //    }

    //  if (monthPosition[month] > index) {
    //   // console.log(sendToFinalCalendar[12])
    //     sendToFinalCalendar.unshift(sendToFinalCalendar[12])
    //     sendToFinalCalendar.splice(monthPosition[month], 1)
    //     sendToFinalCalendar.splice(12, 1)
    //   //  sendToFinalCalendar.splice(monthPosition[month] + 1, 0, )
    //  } 
    //  else {
    //   sendToFinalCalendar.splice(index + 1, 1)
    //  }
     
     setFinalCalendar(sendToFinalCalendar)
  }

  return (
    <Card sx={{ width: '250px', margin: '15px', justifyContent:'center', textAlign: 'center'}} onClick={(e) => handleClick(e, 'clicked')}>
      <CardContent sx={{justifyContent:'center', alignContent: 'center', padding: '0'}}>
        <Grid container sx={{mb: '0px', alignItems:"center"}}>
          <Grid item xs={12}>
            <Typography sx={{fontFamily: 'Poppins', margin: '5px'}}>
              {image.month}
            </Typography>
          </Grid>
        </Grid>
        <CardMedia 
          className='calendar-image' 
          image={image.imageURL}
          sx={{height:'140px', width: '100%', alignContent: 'center'}}
          />
          <ImageDetailModal image={image}/>
      </CardContent>
    </Card>
  );
}

export default CalendarImageCard;