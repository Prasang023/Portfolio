import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

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

const useStyles = makeStyles(theme => ({
    container: {
        // position: 'fixed',
        // right: '0',
        // width: '30%',
        // [theme.breakpoints.down("sm")]: {
        //   position: 'relative'
        // }
        padding: '0px',
        
    },
    navlink: {
        color: theme.palette.text.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        margin: '0px 0px',
        cursor: 'pointer',
    },
    activeNavlink: {
        fontWeight: 'bold',
        color: theme.palette.text.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        margin: '0px 0px',
        cursor: 'pointer',
    },
    mobileNavlink:{
        color: theme.palette.text.main,
        cursor: 'pointer',
        margin: '10px',
        fontSize: '7vw',
        zIndex: 2
    },
    activeMobileNavlink:{
        color: theme.palette.primary.main,
        cursor: 'pointer',
        margin: '10px',
        fontSize: '7vw',
        zIndex: 2,
    },
    navText: {
        fontFamily: 'Raleway',
        fontSize: '20px',
    },
    overlay: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 2,
        top: 0,
        left: 0,
        backgroundColor: 'rgb(0,0,0)',
        backgroundColor: 'rgba(0,0,0, 0.9)',
        overflowX: 'hidden',
        transition: '0.5s',
      },
    overlayContent: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: '25%',
        width: '100%',
        textAlign: 'center',
        marginTop: '30px',
      }
  }));

//   function call(){
//       openNav()
//   }

const ModernSidebar = (props) => {
    console.log("Sidebar", props.data.switchMenu)
    const classes = useStyles()
    let navigate = useNavigate()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [activeTab, setActiveTab] = useState(window.location.pathname)
    const [navMenu, setNavMenu] = useState(false)

    function handleClick(x){
        setActiveTab(x)
        navigate(x)
    }

    const openNav = () => {
        setNavMenu(!navMenu)
    }

  return <div className="container"> 
        {isMobile?
            props.data.switchMenu?<div id="myNav" className={classes.overlay}>
            {/* <a href="javascript:void(0)" className={classes.closebtn}>&times;</a> */}
            <div className={classes.overlayContent}>
                {navLinks.map((item)=>{
                    return (
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <a key={item.name} onClick={()=>{handleClick(item.path); props.menuClickHandler('change');}} className={(item.path===activeTab)?classes.activeMobileNavlink:classes.mobileNavlink} onMouseEnter={(e)=>e.target.style.color=theme.palette.primary.main} onMouseLeave={(item.path===activeTab)?null:(e)=>e.target.style.color=theme.palette.text.main}>{item.name}</a>
                        <svg height="15px" width="25vw" style={{  zIndex: '1', display: (item.path===activeTab)?'block':'none' }}>
                        <line x1="0" y1="0" x2="200" y2="0" style={{stroke:theme.palette.primary.main, strokeWidth:'3', marginRight:'0px', }} />
                        </svg>
                        </div> 
                    )
                })}
            </div>
            </div>:null
        :
        navLinks.map((item)=>{
            return (   
            <div key={item.name} onClick={()=>handleClick(item.path)} className={(item.path===activeTab)?classes.activeNavlink:classes.navlink}>
            <p className={classes.navText}>{item.name}</p> 
            <svg width={(item.path===activeTab)?'100px':'50px'} height='5px' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 0px', marginLeft: '5px' }}>
            <line x1="0" y1="0" x2={(item.path===activeTab)?'100px':"80"} y2="0" style={{stroke:theme.palette.primary.main, strokeWidth:'3', marginRight:'0px', }} />
            </svg> 
            {/* <hr size="8" width="50px" color="red" />  */}
            </div>
            )
        })}
    </div>;
};

export default ModernSidebar;
// export {openNav}
