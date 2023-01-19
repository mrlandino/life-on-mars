import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, ThemeProvider, responsiveFontSizes, createTheme} from '@mui/material';
import { Link } from 'react-router-dom';

type CartModal = {
  setFinalCalendar: React.Dispatch<React.SetStateAction<object[]>>;
  setCalendarImages: React.Dispatch<React.SetStateAction<object[]>>
}

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

theme = responsiveFontSizes(theme)

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  justifyContent: 'center', 
  alignItems: 'center'
};

const CartModal: React.FC<CartModal> = ({setFinalCalendar, setCalendarImages}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setFinalCalendar([])
    setCalendarImages([])
  }

  return (
    <div>
       <ThemeProvider theme={theme}>
          <Button sx={{mt: '12px'}} variant='contained' onClick={handleOpen}>Add to Cart</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
          >
            <Fade in={open}>
              <Box sx={style}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid item>
                    <Typography id="transition-modal-title" variant="h3" component="h2">
                      Your Cart
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" sx={{}}>
                  <Grid item>
                    <Typography variant= 'h5' id="transition-modal-description" sx={{ mt: 2 }}>
                      SpaceCal 10 x 8 Desktop Calendar 
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" sx={{mb: '20px', mt: '30px'}}>
                  <Grid item xs={12} sm={8} md={6}>
                    <img className='home-image'src={require('../Images/Space_Calendars_2023.png')}/>            
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" sx={{}}>
                  <Grid item>
                    <Typography>
                      Price $29.95 X 1
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" sx={{}}>
                  <Grid item>
                    <Typography variant= 'h4'>
                      Total: $29.95
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" sx={{}}>
                  <Grid item>
                    <Button variant="contained" sx={{mt: '12px'}} component={Link} to='/' onClick={(e) => handleClick(e, 'clicked')}>
                      Order
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
       </ThemeProvider>
    </div>
  );
}

export default CartModal;