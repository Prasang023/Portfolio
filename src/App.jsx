import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Grid, Stack, IconButton } from '@mui/material';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';

// screens import
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';

// Components import
import Sidebar from './components/Sidebar'
// import {lightTheme, darkTheme} from './components/theme'
import ModernSidebarContainer from './containers/ModernSidebarContainer'
import Socials from './components/Socials'
import { Paper } from '@material-ui/core';
import TopbarContainer from './containers/TopbarContainer'

const useStyles = makeStyles(theme => ({
  side: {
    position: 'fixed',
    right: '0px',
    top: '35%',
    [theme.breakpoints.down("sm")]: {
      position: 'relative'
    }
  },
  container: {
    margin: '0px',
    marginTop: '55px',
    background: theme.palette.background.main
  }
}));

function App() {
  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [darkMode, setDarkMode] = useState(true)
  return (
    // <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <>
    <TopbarContainer />
    <div className={classes.container}>
    {/* <Topbar /> */}
    <div style={{ position:'fixed', bottom:isMobile?'40%':25, left:isMobile?5:15, cursor: 'pointer' }}>
      <Socials />
    </div>
    <Grid container direction={isMobile ? 'column-reverse' : 'row'} style={{ height: '100%' }}>
    <Grid item xs={12} justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
      {/* <Router> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      {/* </Router> */}
      <div className={classes.side}>
      <ModernSidebarContainer />
      </div>
      </Grid>
      {/* <Grid item sm={2} className={classes.side}>
        <Sidebar />
      </Grid> */}
    </Grid>
    </div>
    </>
    // </ThemeProvider>
  );
}

export default App;
