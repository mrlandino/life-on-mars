// import { useState }from 'react';
// import { Typography, Container, Box, Button, AppBar, CssBaseline, Grid, Toolbar, Link } from '@mui/material';

// const pages = ['Weather', 'Properties', 'Home'];

// const Nav = () => {

//   const [anchorElNav, setAnchorElNav] = useState(null)

//   const handleNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <>
//       <CssBaseline/>
//       <AppBar position="static" color='transparent' elevation={0}>
//         <Toolbar disableGutters sx={{justifyContent: 'flex-start'}}>
//           <Box>
//             <Typography
//               variant='h4'
//               component={Link}
//               href='/Home'
//               sx={{
//                 mr: 15,
//                 ml: 5,
//                 mt: 5,
//                 display: { xs: '4', md: '4' },
//                 fontFamily: 'Poppins',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: '#F18C43',
//                 textDecoration: 'none',
//                 fontSize: {xs:'18px', md:'48px'}
//               }}
//             >
//               Life on Mars
//             </Typography>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: '4', md: '4', lg: '8' }}}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleNavMenu}
//                 component={Link}
//                 href={`/${page}`}
//                 sx={{
//                   mt: {xs: '5px', md: '15'},
//                   mr: 5,
//                   color: 'black',
//                   display: {xs:'block', sm: 'inline'},
//                   direction: {xs:'column'},
//                   fontFamily:'Poppins',
//                   // alignContent: 'flex-end'
//                 }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </>
//   )
// }

// export default Nav;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link'

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Weather', 'Properties'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 , color: '#F18C43', fontFamily: 'Poppins' }}>
        Life on Mars
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} href={`/${item}`} sx={{ textAlign: 'center', fontFamily: 'Poppins' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='transparent' style={{backdropFilter: 'blur(10px)'}} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component={Link}
            href='/home'
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, color: '#F18C43', textDecoration: 'none', fontFamily: 'Poppins'}}
          >
            Life on Mars
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} component={Link} href={`/${item}`} sx={{ color: 'black', fontFamily: 'Poppins'}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
