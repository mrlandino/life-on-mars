import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography, Grid } from '@mui/material';
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

const CalendarImageCard: React.FC<CalendarImageCard> = ({image}) => {

  return (
    <Card sx={{ width: '250px', margin: '15px', justifyContent:'center', textAlign: 'center'}}>
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