import React from "react";
import { Grid, Box, Container, Typography, Toolbar } from "@mui/material";
import './App.css'
import Nav from "./Nav";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"

const Weather = () => {
  return (
    <Container className='main-weather'>
      <Nav />
 
    </Container>
   )
}

export default Weather;