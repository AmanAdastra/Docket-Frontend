import React from 'react'
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faCalendarMinus,faGear,faCirclePlay,faChartLine } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
  return (
        <div className={styles.navbar_container} >
          <div className={styles.navbar_items}>
            <div className={styles.navbar_item}>
              <NavLink 
                to="/"
                style={({ isActive }) => {
                  return {
                    color: 'white'
                  };
                }}>
                <FontAwesomeIcon icon={faCompass} />
              </NavLink>
            </div>
            <div className={styles.navbar_item}>
              <NavLink
                 to="/playground"
                 style={({ isActive }) => {
                  return {
                    color: 'white'
                  };
                }}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </NavLink>
            </div>
            <div className='navbar_item'>
              <NavLink
               to="/progressreport"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faChartLine} />
              </NavLink>
            </div>
            <div className={styles.navbar_item}>
              <NavLink
               to="/calendar"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faCalendarMinus} />
              </NavLink>
            </div>
            <div className={styles.navbar_item}>
              <NavLink
               to="/settings"
               style={({ isActive }) => {
                return {
                  color: 'white'
                };
              }}>
                <FontAwesomeIcon icon={faGear}  />
              </NavLink>
            </div>
            
          </div>
        </div>
  )
}

export default Navbar