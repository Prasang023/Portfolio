import React from 'react'
import logo from '../assets/logo.png'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

import {openNav} from './ModernSidebar'

const useStyles = makeStyles(theme => ({
  side: {
    position: 'fixed',
    right: '0px',
    top: '35%',
    [theme.breakpoints.down("sm")]: {
      position: 'relative'
    }
  },
}));

const Topbar = (props) => {
  const theme = useTheme()
  const classes = useStyles()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // <div style={{ width: '100%',  }}>
    <div style={{ width: isMobile?'100vw':'100%', padding: '20px', color: 'white', display:'flex', zIndex:99, position: 'fixed', top: '0', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.background.main}}>
    
    <img src={logo} width='100px' style={{ display:'block', margin: 'auto' }}/>
    {isMobile?<span style={{fontSize:'30px', cursor:"pointer", display:'block', position: 'fixed', right:'18px' }} onClick={()=>props.menuClickHandler('change')} >&#9776;</span>:null}

    </div>
    
    // {/* </div> */}
  )
}

export default Topbar