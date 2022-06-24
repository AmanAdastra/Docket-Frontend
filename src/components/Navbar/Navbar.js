import React from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faCalendarMinus,faGear,faCirclePlay,faChartLine } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip';



const Navbar = () => {
  return (
        <div className={styles.navbar_container} >
          <div className={styles.navbar_items}>
            <div className={styles.navbar_item}>
              <Tooltip title="Home" placement="left-start">
              <NavLink 
                to="/"
                style={({ isActive }) => {
                  return {
                    color: 'white'
                  };
                }}>
                  <FontAwesomeIcon icon={faCompass} />
              </NavLink>
              </Tooltip>
            </div>
            <div className={styles.navbar_item}>
              <Tooltip title="Playground" placement="left-start">
              <NavLink
                 to="/playground"
                 style={({ isActive }) => {
                  return {
                    color: 'white'
                  };
                }}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </NavLink>
              </Tooltip>
            </div>
            <div className={styles.navbar_item}>
              <Tooltip title="Progress Report" placement="left-start">
              <NavLink
               to="/progressreport"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </NavLink>
              </Tooltip>
            </div>
            <div className={styles.navbar_item}>
              <Tooltip title="Calendar" placement="left-start">
              <NavLink
               to="/calendar"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faCalendarMinus} />
              </NavLink>
              </Tooltip>
            </div>
            <div className={styles.navbar_item}>
              <Tooltip title="Settings" placement="left-start">
              <NavLink
               to="/settings"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faGear}  />
              </NavLink>
              </Tooltip>
            </div>
            
          </div>
        </div>
  )
}

export default Navbar