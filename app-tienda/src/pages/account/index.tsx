//styles 
import styles from "./account.module.scss"
//components
import Info from "@/components/account/Info/Info"
import { UpdateForm } from "@/components/account/Settings";
// layout
import { BasicLayout } from "@/layouts"
//mui
import { Box, Tab, Tabs } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Logout, Settings } from "@mui/icons-material";
//react
import React, { useContext } from "react";
//context
import { AuthContext } from "@/context/auth";
//next
import router from "next/router";



const AccountPage = () => {

  const { logout } = useContext(AuthContext)

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const isTokenPresent = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return token !== null && token !== undefined && token !== '';
    }
    return false;
  }

  // if (!isTokenPresent) {
  //   router.push("/")
  //   return null
  // }

  const onLogout = () => {
    logout()
    router.push("/")
  }
  
  return (
    <>
      <BasicLayout isContainer relative>
        <Info/>
        
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#3d3d3d' }}>
            <TabList 
              onChange={handleChange} 
              textColor="inherit"
              indicatorColor="secondary"
              className={styles.tabs}
            >
              <Tab label="Mis pedidos" value="1" />
              <Tab label="Lista de deseos" value="2" />
              <Tab label="Direcciones" value="3" />
              <Tab icon={<Settings/>} value="4" />
              <Tab icon={<Logout/>} value="5" onClick={onLogout}/>
            </TabList>
          </Box>
          <TabPanel value="1">Mis pedidos...</TabPanel>
          <TabPanel value="2">Mi lista de deseos...</TabPanel>
          <TabPanel value="3">Mis direcciones...</TabPanel>
          <TabPanel value="4"><UpdateForm/></TabPanel>
        </TabContext>
        
      </BasicLayout>
    </>
  )
}

export default AccountPage