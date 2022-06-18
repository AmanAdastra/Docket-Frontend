import React from 'react'
import { Outlet } from "react-router-dom"
import { Grid,Box } from "@mui/material";
import styles from './layout.module.css'
import Navbar from '../Navbar/Navbar';

const Layout = () => {
  return (
    <>
        <Box>
            <Grid container className={styles.grid_container}>
                <Grid item xs={1}>
                    <Navbar />
                </Grid>
                <Grid item xs={11} className={styles.grid_pages}>
                    <div className={styles.grid_pages_item}>
                        <Outlet />
                    </div>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Layout