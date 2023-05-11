//styles 
import styles from "./account.module.scss"
//components
import Info from "@/components/account/info/Info"
// layout
import { BasicLayout } from "@/layouts"
//mui
import { Box, Tab, Tabs } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//react
import React from "react";


const AccountPage = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  return (
    <>
      <BasicLayout isContainer relative>
        <Info/>

        {/* <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: '#3d3d3d'}}>
            <TabList>
              <Tab label="Mis pedidos" value={1} className={styles.tablist}/>
            </TabList>
          </Box>

          <TabPanel value="1">Mis pedidos...</TabPanel>
        </TabContext> */}

        
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#3d3d3d' }}>
            <TabList 
              onChange={handleChange} 
              textColor="inherit"
              indicatorColor="secondary"
              
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
        
      </BasicLayout>
    </>
  )
}

export default AccountPage