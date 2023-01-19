import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes, Grid, CardMedia} from '@mui/material';

type ImageDetailModal= {
  image: any;
}

let theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h6',
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
  width: {xs:'360px', sm:'750px', md: '825px', lg: '1100px'},
  height: {xs:'208px', sm:'433px', md: '476px', lg: '635px'},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImageDetailModal: React.FC<ImageDetailModal> = ({image}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen}>See Enlarged</Button>
        <Grid container spacing={0} sx={{justifyContent: 'center'}}>
          <Grid item xs={12} sm={8}>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <CardMedia 
                    className='calendar-image' 
                    image={image.imageURL}
                    sx={{height:'100%', width: '100%', alignContent: 'center'}}
                    />
                </Box>
              </Fade>
            </Modal>

          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default ImageDetailModal;