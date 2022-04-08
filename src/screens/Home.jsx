import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import TopbarContainer from '../containers/TopbarContainer'

import photo from '../assets/photo.png'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // height: '100%',
    alignItems: 'center',
    // backgroundColor:'#000',
    width:'100vw',
    [theme.breakpoints.down("sm")]: {
      width: 'auto'
    }
  },
  inContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  sftext: {
    fontFamily: 'Space Mono',
    fontSize: '1.5vw',
    color: theme.palette.primary.main,
    margin: '10px 0px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '3vw'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '5vw'
    }
  },
  raletext: {
    fontFamily: 'Raleway',
    fontSize: '3.5vw',
    color: theme.palette.text.main,
    // textShadow: `5px 5px 40px ${theme.palette.primary.main}`,
    margin: '10px 0px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '5vw'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '12vw'
    }
  },
  para: {
    fontFamily: 'Raleway',
    fontSize: '1.8vw',
    color: theme.palette.primary.main,
    margin: '10px 0px',
    [theme.breakpoints.down("sm")]: {
      fontSize: '2.2vw'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '5vw'
    }
  }
}));


const Home = (props) => {
  const theme = useTheme();
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <div className={classes.container}>
      
      <div className={classes.inContainer}>
      <p className={classes.sftext}>Hi I'm,</p><h1 className={classes.raletext}>Prasang</h1><p className={classes.para}>I am a CSE student at IIIT Surat. I am developing web applications, and learning the next generation Web3.0 technologies. I like learning technologies, concepts and developing projects.</p>
      {/* <Button variant="outlined" size={(theme.breakpoints.down("xs"))?'small':'large'} color="secondary">Get in touch</Button> */}
      </div>
      <img src={photo} height='auto' width={isMobile?'90%':'55%'} alt="Profile image" style={{ position: 'fixed', bottom: '0px' }} />
  </div>;
};

export default Home;

