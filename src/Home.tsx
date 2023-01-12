import { Grid, Box, Container } from "@mui/material";

const Home = () => {

  const styles = {
    imageContainer: {
      backgroundImage: `https://www.freepnglogos.com/uploads/mars-png/mars-transparent-png-stickpng-0.png`
    }
  }
 return (
  <>
    <Grid>
      <Container maxWidth='sm'>
        <Box 
          component='img'
          sx={{
            height:700,
            width: 650,
            maxHeight: {xs: 350, md: 720},
            maxWidth: {xs: 350, md: 725}
          }}
          alt='Planet Mars'
          src='https://e7.pngegg.com/pngimages/629/223/png-clipart-mars-mars-thumbnail.png
          '
        />
      </Container>
    </Grid>

  </>
 )
}

export default Home;