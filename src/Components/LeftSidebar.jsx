import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from "./Home";
import { Switch } from "antd";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const LeftSidebar =()=>{
   
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
    return(
      <div>
        <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100vh', width: '100hv' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{
            sx: {
              alignItems: "center",
              display: "flex",
  justifyContent: "center",
            },
          }}
        sx={{ textTransform :"none", backgroundColor: 'var(--container-color)', borderColor: 'divider', width: '150px', alignItems: 'start', paddingTop: '37px', paddingLeft: '30px', paddingRight: '4.5px'}}
      >
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}}  label={<div className="menu"><i className="fas fa-home"></i><span className='label'>Home</span></div>} {...a11yProps(0)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-book"></i><span className='label'>Course</span></div>} {...a11yProps(1)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-newspaper"/><span className='label'>Assignments</span></div>} {...a11yProps(2)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-pen-to-square"/><span className='label'>Exams</span></div>} {...a11yProps(3)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-user-pen"/><span className='label'>Grade</span></div>} {...a11yProps(4)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-folder-open"/><span className='label'>Resources</span></div>} {...a11yProps(5)} />
        <Tab sx={{color: 'var(--text-color)', alignItems: 'start',  textTransform :"none", minHeight: '0px', padding: '5px', marginBottom: '15px'}} label={<div className="menu"><i className="fas fa-gear"/><span className='label'>Settings</span></div>} {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>

{/* <div className="dark-mode">
  <div className="mode"><i className="fas fa-moon"></i></div>
  <div className="switch"><Switch/></div> 
</div> */}


        
    </div>
    );
};
export default LeftSidebar;