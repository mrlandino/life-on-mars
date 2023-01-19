import React, { useEffect } from "react";
import '../App.css'
import Nav from "../Components/Nav";
import DatePicker from "../Components/DatePicker";
import { createTheme, ThemeProvider, responsiveFontSizes, Card, CardContent, CardMedia, Button,  CardActions, Grid, Container, Typography, Toolbar } from "@mui/material"
import { getImageByDate } from '../apiCalls';
import BasicImageCard from "../Components/BasicImageCard";
import { Link } from 'react-router-dom';

let theme = createTheme({
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
        },
        {
          props: {
            variant: 'h4',
          },
          style: {
            fontFamily: 'Poppins'
          }
        },{
          props: {
            variant: 'body2',
          },
          style: {
            fontFamily: 'Poppins'
          }
        }
      ]
    }
  }
})

type Images = {
  selectedImage: {
    date?:string;
    explanation?:string;
    hdurl?:string;
    media_type?:string;
    service_version?:string;
    title?:string;
    url?:string;
  };
  setSelectedImage: React.Dispatch<React.SetStateAction<object>>
  calendarImages: Image[];
  setCalendarImages: React.Dispatch<React.SetStateAction<object[]>>
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>
}

type Image= {
  date?:string;
  explanation?:string;
  hdurl?:string;
  media_type?:string;
  service_version?:string;
  title?:string;
  url?:string;
}

theme = responsiveFontSizes(theme)

const Images: React.FC<Images> = ({selectedImage, setSelectedImage, setCalendarImages, calendarImages, setFinalCalendar}) => {
  const monthNames: string[] = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

  const todaysDate = new Date().toISOString().slice(0, 10)

  useEffect(() => {
    getImageByDate('2022-01-13')
    .then(data => setSelectedImage(data))
  }, [])
  //need to add error handling for data.media_type === 'video' and put a replacement message and image if you want to. Also if the data.media_type is falsy then add the replacement message and imgage. 

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setCalendarImages([...calendarImages, selectedImage])
  }

  const handleGenerateCalendar = (event: React.MouseEvent<HTMLElement>, text: string) => {
    const sendFinal : object[] = [];
      for (let i = 0; i <= 11; i++ ) {
        sendFinal.push({
          month: monthNames[i],
          imageURL: calendarImages[i].url
        })
      }
    setFinalCalendar(sendFinal)
  }

  const calendarCards = calendarImages.map((image, index) => {
    return (
      <BasicImageCard key={index} image={image} index={index} setCalendarImages={setCalendarImages} calendarImages={calendarImages}/>
    )
  })

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
          <Grid item xs={10}>
            <Typography
              variant='subtitle1'
              component='p'
              mt={2}
              >
                NASA has a database of images that they have collected since 1995! They post a "photo of the day" everyday and will continue to do so for the foreseeable future. This search function allows you to see what the "photo of the day" was on the date that you chose. After you find an image you like, you can add it to your list of photos to be displayed on your calendar. Once you have chosen 12 images you can generate your calendar and move to the next page to finalize your purchase. 
            </Typography>
          </Grid>
        </Grid>
      <Grid container spacing={2} justifyContent='center'>
        <DatePicker setSelectedImage={setSelectedImage}/>
      </Grid>
      <Grid container spacing={2} justifyContent='center' mt='20px'>
        {calendarImages.length > 0?
        <Grid container sx={{justifyContent:'center'}}>
          <Grid item>
            <Typography variant='h4' component='h4'>
              Images for your Calendar
            </Typography>
          </Grid>
        </Grid>
        :
        <>
        </>
        }
        {calendarCards}
        {calendarImages.length === 12?
        <Grid container sx={{justifyContent:'center', mt: '12px'}}>
          <Grid item>
            <Button variant='contained' component={Link} to={'/Calendar'} onClick={(e) => handleGenerateCalendar(e, 'clicked')}>
              Generate Calendar
            </Button>
          </Grid>
        </Grid>
        :
        <>
        </>
        }
      </Grid>
      <Grid container sx={{justifyContent:'center'}}>
        <Grid item xs={12} sm={8} md={8} >
          <Card sx={{mt: '30px', justifyContent:'center'}}>
              <CardMedia
                component="img"
                height="40%"
                image={selectedImage.url}
                alt={selectedImage.title}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {selectedImage.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {selectedImage.explanation}
                </Typography>
              </CardContent>
            {calendarImages.length < 12?
            <CardActions>
              <Button sx={{mb: '15px', ml: '50px'}} variant= 'contained' size="small" color="primary" onClick={(e) => handleClick(e, 'clicked')}>
                Add image to Calendar
              </Button>
            </CardActions>
            :
            <>
            </>
          }
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>  
    <Toolbar></Toolbar>
    </Container>
   )
}

export default Images;