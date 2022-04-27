import React from 'react';
import { Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

//Assets import 
import dribbble from '../assets/Dribbble.png'

const socialLinks = [
    {
      icon: <GitHubIcon style={{ color:'white' }} />,
      link: 'https://github.com/Prasang023'
    },
    {
        icon: <LinkedInIcon style={{ color:'white' }} />,
        link: 'https://www.linkedin.com/in/prasang-maheshwari-40923a201/'
    },
    {
        icon: <EmailIcon style={{ color:'white' }} />,
        link: 'mailto:prasang023.2@gmail.com'
    },
    {
        icon: <InstagramIcon style={{ color:'white' }} />,
        link: 'https://www.instagram.com/__prasang__/'
    },
    {
      icon: <img src={dribbble} width='27px' height='auto' />,
      link: 'https://dribbble.com/prasang023'
    }
  ]

  const useStyles = makeStyles(theme => ({
    icon: {
      color: theme.palette.text.main
    },
  }));

const Socials = () => {

  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return <Stack spacing={2} >
  {socialLinks.map((item)=>{
    return(
    <IconButton size={isMobile?'small':'medium'} key={item.icon} href={item.link} target='_blank' className={classes.icon} >{item.icon}</IconButton>
    )
    })}
    <svg width='10px' height='250px' style={{ display: isMobile?'none':'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '-25px', marginLeft: isMobile?'15px':'20px'}}>
      <line x1="0" y1="0" x2='0' y2="300" style={{stroke:theme.palette.primary.main, strokeWidth:'3', marginRight:'0px', }} />
    </svg> 
</Stack>;
};

export default Socials;
