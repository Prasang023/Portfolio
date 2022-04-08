import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
  para: {
    color: theme.palette.text.main
  }
}));

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const About = () => {
  const theme = useTheme();
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <h1 className={classes.heading}>About Me<span style={{ color: theme.palette.primary.main }}>.</span></h1>
    <div className={classes.container}>
    <div style={{ width: '80%' }}>
    <div className={classes.inContainer}>
      <p className={classes.para}>Hello! My name is Prasang and I enjoy creating things that capture the attention. My interest in Computer Science started in school in 10th standard when I was tried editing wordpress available templates using html and css code snippets i newly aquired from google — turns out I liked it and continued learning further in my college years!</p>
      <p className={classes.para}>Fast-forward to today, I've had the privilege to learn a lot of technology stuff while doing my bachelor's degree in techonology. My main focus these days is building accessible, inclusive products and digital experiences and improve my skills and work quality through working on industry ready projects.</p>
      <p className={classes.para}>My skillset includes web development, UI/UX designing, illustrator, Blockchain development, competitive coding and playing football. A brief about my different roles can be found here.</p>
      </div>
    </div>

    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered size='small'>
          <Tab label="WebDev"  />
          <Tab label="Design"  />
          <Tab label="CP"  />
          <Tab label="Blockchain"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        WebDev
      </TabPanel>
      <TabPanel value={value} index={1}>
        Designing
      </TabPanel>
      <TabPanel value={value} index={2}>
        Competitive Programmer
      </TabPanel>
      <TabPanel value={value} index={3}>
        Blockchain development
      </TabPanel>
    </Box>
</div>
</>
  )
};

export default About;
