import React from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import photo from '../assets/rene.jpg'

const useStyles = makeStyles(theme => ({
    justify: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-around",
      }
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        [theme.breakpoints.down("sm")]:{
            height: "40vh",
        }
    },
    navbar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   
        justifyContent: "center",
    },
    navlink: {
        textAlign: "center",
        cursor: "pointer"
    },
  }));

const navLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Resume',
        path: '/resume'
    },

]

const Sidebar = () => {
    const classes = useStyles()
    let navigate = useNavigate()
    const theme = useTheme()

    function handleClick(x){
        navigate(x)
    }

  return <div className={classes.container}>
      <Avatar alt="Prasang" src={photo} sx={{ height: 150, width: 150, marginBottom: '30px' }} />
      <div className={classes.navbar}>
        {navLinks.map((item)=>{
            return (   
            <div key={item.name} onClick={()=>handleClick(item.path)} className={classes.navlink}>
            {item.name} 
            </div>
            )
        })}
      </div>
  </div>;
};

export default Sidebar;

<Avatar />