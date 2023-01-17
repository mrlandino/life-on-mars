import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia, Typography, Grid, Button, Container } from '@mui/material';
import ChooseMonth from "./ChooseMonth";

type ImageCard = {
  key: number;
  image: {
    date?:string;
    explanation?:string;
    hdurl?:string;
    media_type?:string;
    service_version?:string;
    title?:string;
    url?:string;
  };
  index:number;
  setImageList: React.Dispatch<React.SetStateAction<object[]>>
  imageList: object[];
}
  
  const BasicImageCard: React.FC<ImageCard> = ({image, index, setImageList, imageList}) => {
    
    const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
      let imageList1 = [...imageList]
      const updateList = imageList1.filter(thisImage => thisImage !== image)
      setImageList(updateList)
    }
    
    return (
        // <Grid item xs={12} sm={6} md={3} sx={{justifyContent:'center', alignItems: 'center'}}>
          <Card sx={{ width: '250px', margin: '15px', justifyContent:'center', textAlign: 'center'}}>
            <CardContent sx={{justifyContent:'center', alignContent: 'center'}}>
              <Grid container sx={{mb: '5px', alignItems:"center"}}>
              <Grid item xs={6}>
                <Typography sx={{fontFamily: 'Poppins'}}>
                  {index + 1}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={(e) => handleClick(e, 'clicked')}>
                  Remove
                </Button>
              </Grid>
              </Grid>
              <CardMedia 
                className='calendar-image' 
                image={image.url}
                sx={{height:'120px', width: '100%', alignContent: 'center'}}
                />
            </CardContent>
          </Card>
        // </Grid>
  );
}

export default BasicImageCard;