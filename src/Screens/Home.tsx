import { 
  Grid,
  Container,
  Typography,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@mui/material";
import '../App.css'
import Nav from "../Components/Nav";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PublicOffOutlinedIcon from '@mui/icons-material/PublicOffOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { Link } from 'react-router-dom';

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
                sx={{
                  color: 'black', 
                }}
                >
                Welcome to
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
                SpaceCal
              </Typography>
            </Grid>
        </Grid>
        
        <Grid container direction='row' justifyContent="center" sx={{flexDirection: {xs:'column', sm: 'row'}}}>
          <Grid item xs={12} sm={4} >
            <List sx={{mt: '20px'}}>
                <ListItem>
                  <ListItemIcon>
                    <PublicOffOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary= 'Build your own unique calendar from images in the NASA database' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ImageOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Choose your favorite images to add to your calendar'/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarMonthOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Great 10 x 8 inch size for the office, at home, or even a gift"/>
                </ListItem>
            </List>
            <Grid container justifyContent={'center'}>
              <Grid item xs={4} sm={4} sx={{justifyContent: 'center', alignItems: 'center', mt: '15px', mb: '20px'}}>
                <Button sx={{whiteSpace:'nowrap'}}variant="contained" component={Link} to={'/Images'}>
                  Begin Design
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mb: '20px', mt: '30px'}}>
              <img className='home-image'src={require('../Images/Space_Calendars_2023.png')}/>            
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
  </Container>
 )
}

export default Home;