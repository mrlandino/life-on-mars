import React, { useEffect, useState } from "react";
import './App.css'
import Nav from "./Nav";
import DatePicker from "./DatePicker";
import { createTheme, ThemeProvider, responsiveFontSizes, Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Grid, Container, Typography, Toolbar  } from "@mui/material"
import { getImageByDate } from './apiCalls';
import CircularIndeterminate from "./Loading";
import BasicImageCard from "./BasicImageCard";

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
  calendarImages: object[];
  setCalendarImages: React.Dispatch<React.SetStateAction<object[]>>
}

theme = responsiveFontSizes(theme)

const Images: React.FC<Images> = ({selectedImage, setSelectedImage, setCalendarImages, calendarImages}) => {

  const [imageList, setImageList] = useState<object[]>([])
  const todaysDate = new Date().toISOString().slice(0, 10)
  // const todaysRealDate = Instant.now().toISOString().slice(0,10)

  useEffect(() => {
    getImageByDate('2022-01-13')
    .then(data => setSelectedImage(data))
  }, [])
  //need to add error handling for data.media_type === 'video' and put a replacement message and image if you want to. Also if the data.media_type is falsy then add the replacement message and imgage. 

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setImageList([...imageList, selectedImage]);
    setCalendarImages(imageList);
  }

  const calendarCards = imageList.map((image, index) => {
    return (
      <BasicImageCard key={index} image={image} index={index} setImageList={setImageList} imageList={imageList}/>
    )
  })

  return (
    // selectedImage? 
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
                NASA has a database of images that they have collected since 1995! They do a 'photo of the day' everyday and will continue to do so for the foreseeable future. This search function allows you to see what the "photo of the day" was on the date that you chose. After you find an image you like, you can add it to your list of photos to be displayed on your calendar. Once you have chosen 12 images you can move to the Calendar page to work on your photo order by month. 
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>  
      <Grid container spacing={2} justifyContent='center'>
        <DatePicker setSelectedImage={setSelectedImage}/>
      </Grid>
      <Grid container spacing={2} justifyContent='center' mt='20px'>
        <Grid container sx={{justifyContent:'center'}}>
          <Grid item>
            <Typography variant='h5' component='h5' sx={{fontFamily:'Poppins'}}>
              Images for your Calendar
            </Typography>
          </Grid>
        </Grid>
        {calendarCards}
        <Grid container sx={{justifyContent:'center'}}>
          <Grid item>
            <Button>
              Generate Calendar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Card sx={{ maxWidth: '100%', mt: '30px'}}>
      <CardActionArea>
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
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={(e) => handleClick(e, 'clicked')}>
          Add to Calendar
        </Button>
      </CardActions>
    </Card>
    </Container>
    //  : 
    //  <Container className='main-images'>
    //   <Nav />
    //   <Toolbar></Toolbar>
    //   <ThemeProvider theme={theme}>
    //     <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'} >
    //         <Grid item>
    //           <Typography 
    //             variant='h1'
    //             component='h1' 
    //             // mt={2} 
    //             sx={{
    //               color: 'black', 
    //             }}
    //             >
    //             Search
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Typography 
    //             variant='h1'
    //             component='h2'
    //             // mt={2} 
    //             ml={2} 
    //             sx={{
    //               fontWeight:'800',
    //               color: '#F18C43'
    //               }}
    //               >
    //             Images
    //           </Typography>
    //         </Grid>
    //     </Grid>
    //     <Grid container spacing={1} sx={{justifyContent:'center'}} maxWidth={'xl'}>
    //       <Grid item xs={10}>
    //         <Typography
    //           variant='subtitle1'
    //           component='p'
    //           mt={2}
    //           >
    //             NASA has a database of images that they have collected since 1995! They do a 'photo of the day' everyday and will continue to do so for the foreseeable future. This search function allows you to see what the "photo of the day" was on the date that you chose. After you find an image you like, you can add it to your list of photos to be displayed on your calendar. Once you have chosen 12 images you can move to the Calendar page to work on your photo order by month. 
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </ThemeProvider>  
    //   <CircularIndeterminate/>
  //  </Container>
   )
}

export default Images;