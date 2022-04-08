import React from 'react';
import { Stack, Paper, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Fade from 'react-reveal/Fade';

import dmomo from '../assets/dmomo.png'
import VCA from '../assets/VCA.png'
import dmomoA from '../assets/dmomoA.png'
import Petc from '../assets/Petc.png'
import Proshop from '../assets/Proshop.png'
import portfolio from '../assets/portfolio.png'

import TopbarContainer from '../containers/TopbarContainer'



const projects = [
  {
    title: 'Vide Conferencing WebApp',
    desc: ' A one-to-one video Conferencing WebApp using React, Nodejs and Websockettechnologies. Learned a lot about working with backend technologies like pear to peer connections using Websockets.',
    img: VCA,
    repoLink: 'https://github.com/Prasang023/Video-Call-App',
    website: 'https://mighty-taiga-31756.herokuapp.com/'
  },
  {
    title: 'E-commerce Website',
    desc: 'A full-stack funtional complete e-commerce website based on MERN stack. Learned and practiced full stack MERN development concepts while building this project website.',
    img: Proshop,
    repoLink: 'https://github.com/Prasang023/MERN-ecommerce-websitehttps://github.com/Prasang023/MERN-ecommerce-website',
    website: ''
  },
  {
    title: 'dmomo designs',
    desc: 'Designed and developed a Portfolio Website for a design Agency using simple HTML, CSS and javascript. Learned and practiced the concepts of UI/UX while implementing this project.',
    img: dmomoA,
    repoLink: 'https://github.com/Prasang023/D.momo-Portfolio/tree/master',
    website: 'https://dmomo.herokuapp.com'
  },
  {
    title: 'PetC - Pet Healthcare webapp',
    desc: 'A live online veterinary appointment booking system made using React, Material UI and Firebase. Learned good practices of writing code and making a optimized industry ready website.',
    img: Petc,
    repoLink: 'https://github.com/sparsh2002/PetC',
    website: 'https://www.petc.in/'
  },
  {
    title: 'Portfolio Website',
    desc: 'Designed and Developed a personal portfolio website implemented using React and Redux. Learned and practiced working with different react libraries for animation and redux.',
    img: portfolio,
    repoLink: 'https://github.com/',
    website: 'https://dmomo.herokuapp.com'
  },
]

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down("sm")]: {
      
    }
  },
  heading: {
    color: theme.palette.text.main,
    fontSize: '3vw',
    marginLeft: '10%',
    [theme.breakpoints.down("sm")]: {
      fontSize: '9vw',
    }
  },
  bigcont: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    }
  },
  smallcont: {
    marginTop: '50px',
    display: 'none',
    [theme.breakpoints.down("xs")]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
    }
  },
  overlay: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(25, 65, 98, 0.4)',
    padding: '13px', 
    margin: '0px'
  },
  title: {
    position: 'relative',
    top: 0,
    color: theme.palette.text.main,
  },
  icon: {
    color:theme.palette.text.main,
    
  }
}));

const Projects = () => {
  const theme = useTheme();
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return( 
      <>
      <h1 className={classes.heading}>Projects<span style={{ color: theme.palette.primary.main }}>.</span></h1>
      <div style={{ margin: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      
        <div spacing={3} className={classes.smallcont}>
        {projects.map((item)=>{
          return(
            <Fade>
          <div style={{ backgroundImage: `url(${item.img})`, width:'90%', backgroundSize: 'cover', backgroundPosition: 'center', padding: '0px 0px', margin: '10px 10px'}} 
          // onMouseEnter={(e)=>e.target.style.backgroundImage= `url(${item.img})`} onMouseLeave={(e)=>e.target.style.backgroundImage= `linear-gradient(rgba(25, 65, 98, 0.4), rgba(13, 37, 52, 0.6)), url(${item.img})`}
          >
            {/* <img src={item.img} style={{ width:"250px", height:'auto' }} /> */}
            <div className={classes.overlay}  onMouseEnter={(e)=>e.target.style.backgroundColor='rgba(25, 65, 98, 0)'} onMouseLeave={(e)=>e.target.style.backgroundColor='rgba(25, 65, 98, 0.4)'}>
            <h3  className={classes.title}>{item.title}</h3>
            <div>
            {item.repoLink?<IconButton href={item.repoLink} target='_blank' style={{ color: theme.palette.primary.main }} > <GitHubIcon /> </IconButton>:null}
            {item.website?<IconButton href={item.website} target='_blank' style={{ color: theme.palette.primary.main }}> <LinkIcon /> </IconButton>:null}
            </div>
            <p style={{ color: 'white', fontSize: '15px'}}>{item.desc}</p>
            </div>
          </div>
          </Fade>
          )
        })}
        </div>
      
      <div className={classes.bigcont}>
      {projects.map((item, i)=>{
        return (
        <Fade left={i%2===0?true:false} right={i%2===0?false:true}>
        <Stack direction={i%2===0?'row':'row-reverse'} key={item.title} sx={{ margin: '10px 0px' }} >
        <img src={item.img} width="40%" />
        <div style={{ height: '300px', width: '40%', backgroundColor: theme.palette.primary.main, marginLeft:i%2===0?'-40%':null, marginRight:i%2===0?null:'-40%', opacity: 0.4, transition: 'all 0.3s ease' }} onMouseEnter={(e)=>e.target.style.opacity=0} onMouseLeave={(e)=>e.target.style.opacity=0.4} ></div>
        <div style={i%2===0?{zIndex:2}:{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '10px', zIndex:2}}>
        <h3 style={{ marginLeft: '10px', marginBottom: '0', color: theme.palette.text.main}}>{item.title}</h3>
        <div>
        {item.repoLink?<IconButton href={item.repoLink} target='_blank' style={{ color: theme.palette.primary.main }}> <GitHubIcon /> </IconButton>:null}
        {item.website?<IconButton href={item.website} target='_blank' style={{ color: theme.palette.primary.main }}> <LinkIcon /> </IconButton>:null}
        </div>
        <div style={i%2===0?{ padding: '15px', backgroundColor: 'white', width: '300px', marginLeft: '-20px', fontSize: '15px'}:{ padding: '15px', backgroundColor: 'white', width: '300px', marginRight: '-20px', textAlign: 'right', fontSize: '15px'}}><p>{item.desc}</p></div>
        </div>
        </Stack>
        </Fade>
        )}
        )}
        </div>
        
        </div>
        </>
      )
};

export default Projects;
