import React from 'react'
import { useState } from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
// styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import ResumePDF from '../assets/ResumePDF.pdf';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '70%',
    alignItems: 'center',
    margin: '50px auto',
    [theme.breakpoints.down("sm")]: {
      
    }
  },
}));

const Resume = () => {
    const theme = useTheme();
    const classes = useStyles()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const [pdfFile, setPdfFile] = useState(ResumePDF);

  return (
    <div className={classes.container}>
      <a href={pdfFile} style={{ textDecoration: 'none' }}><Button variant="outlined" size="large" style={{ color: theme.palette.primary.main, margin: '20px' }}>Download Resume</Button></a>
      <object data={pdfFile} type="application/pdf" width="100%" height="100%" style={{ border: '1px solid #07CFF6', boxShadow: '0px 0px 5px 5px #0D2534', borderRadius: '5px'}}>
      <p>Resume <a href={pdfFile}>to the PDF!</a></p>
      </object>
    </div>
  )
}

export default Resume