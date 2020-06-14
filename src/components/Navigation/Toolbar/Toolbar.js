import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import NavigationItems from '../NavigationItems/NavigationItems'
import SideNav from '../../SideNav/SideNav'

import classes from './Toolbar.module.css'



const Toolbar = () => {
    const [loginPage, setLoginPage] = useState(false)
    const [sideDrawer, setDrawer] = useState(false)

    // for Login page
    const showLoginPage = () => {
        setLoginPage(true)
    }
    const closeModal = () => {
        setLoginPage(false)
    } 

    // for side drawer
    const handleDrawer = () => {
        setDrawer(!sideDrawer)
    }
    let drawer = null 
    if(sideDrawer){
        drawer =  <SideNav showLoginPage={showLoginPage} sideDrawer={sideDrawer} closeDrawer={handleDrawer} />
     }
    return (
        <header className={classes.Toolbar}>
            { drawer }
            <h4 className={classes.Logo}>
                <span className={classes.Toggler} onClick={ handleDrawer }>&#9776;</span>
                Ecom 
                <NavLink to='/' className={classes.NavigationItems}>Store</NavLink> 
            </h4>
            <nav className={classes.NavigationItems}>
                <NavigationItems loginPage={loginPage} showLoginPage={showLoginPage} closeModal={closeModal} />
            </nav>
        </header>
    )
}

export default Toolbar
