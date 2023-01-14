import React from "react";
import { Grid, Box, Container, Typography, Toolbar, Button, List, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import './App.css'
import Nav from "./Nav";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"
import { ListRounded } from "@mui/icons-material";
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

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
        {
          props: {
            variant: 'h4',
          },
          style: {
            fontFamily: 'Poppins'
          }
        }
      ]
    }
  }
})

theme = responsiveFontSizes(theme)


const Home = () => {

 return (
  <Container className='main-home'>
    <Nav />
    <Toolbar></Toolbar>
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} sx={{justifyContent:'center'}}>
            <Grid item>
              <Typography 
                variant='h1'
                component='h1' 
                mt={2} 
                sx={{
                  color: '#F18C43', 
                }}
                >
                Welcome to
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
                  }}
                  >
                Life on Mars
              </Typography>
            </Grid>
        </Grid>
        <Grid container direction='row' justifyContent="center" sx={{flexDirection: {xs:'column', sm: 'row'}}}>
          <Grid item xs={12} sm={4} >
            <List sx={{mt: '20px'}}>
                <ListItem>
                  <ListItemIcon>
                    <TravelExploreOutlinedIcon sx={{fontSize:'large'}}/>
                  </ListItemIcon>
                  <ListItemText primary= 'Search Properties to purchase on Mars for your out of this world home' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CloudOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Check the weather for your next easy visit'/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Get real estate analysis on who is ditching earth and who hasn't decided yet"/>
                </ListItem>
            </List>
            <Grid container justifyContent={'center'}>
              <Grid item xs={4} sm={4} sx={{justifyContent: 'center', alignItems: 'center', mt: '30px', mb: '20px'}}>
                <Button variant="contained" component={Link} href={`/properties`}>
                  Properties
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mb: '20px'}}>
              <img src= 'https://www.pngall.com/wp-content/uploads/13/Mars-PNG-Picture.png'/>
              {/* <img src="https://64.media.tumblr.com/60fb766d7ddc41658a8a14b8404838b2/6408ac8f95e277f6-33/s640x960/2c53c5e8c268cfea66bab1880a979ce76a3b6cb0.gif" /> */}
            
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
  </Container>
 )
}

export default Home;