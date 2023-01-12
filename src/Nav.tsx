import { useState }from 'react';
import { Typography, Container, Box, Button, AppBar, CssBaseline, Grid, Toolbar, Link } from '@mui/material';

const pages = ['Weather', 'Properties', 'Home'];

const Nav = () => {

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <CssBaseline/>
      <AppBar position="static" color='transparent' elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 15,
                ml: 5,
                mt: 5,
                display: { xs: '4', md: '4' },
                fontFamily: 'Poppins',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#F18C43',
                textDecoration: 'none',
              }}
            >
              Life on Mars
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: '4', md: '4', lg: '8' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleNavMenu}
                  sx={{
                    mt: 5,
                    mr: 5,
                    color: 'black',
                    display: {xs:'block', sm: 'inline'},
                    fontFamily:'Poppins'}}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav;