//styles 
import styles from "./account.module.scss"
//components
import Info from "@/components/account/Info/Info"
import { UpdateForm } from "@/components/account/Settings";
import { AddAddress, ListAddresses } from "@/components/account/Address";
import { Separator } from "@/components/shared";
// layout
import { BasicLayout } from "@/layouts"
//mui
import { Box, Tab } from "@mui/material"
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { Logout, Settings } from "@mui/icons-material";
//react
import React, { useContext, useState } from "react";
//context
import { AuthContext } from "@/context/auth";
//next
import router from "next/router";
//hooks
import { useDirecciones } from "@/hooks/useDirecciones";


const AccountPage = () => {

  const { direcciones, isLoading } = useDirecciones('/direcciones')

  const { logout } = useContext(AuthContext)
  const [value, setValue] = React.useState('1')
  const [reload, setReload] = useState(false)

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
          <TabPanel value="3">
            <AddAddress/>
            <ListAddresses direccion={direcciones}/>
            <Separator height={80}/>
          </TabPanel>
          <TabPanel value="4"><UpdateForm/></TabPanel>
        </TabContext>
        
        <Separator height={50}/>
      </BasicLayout>
    </>
  )
}

export default AccountPage