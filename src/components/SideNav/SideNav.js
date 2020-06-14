import React from 'react'

import { NavLink } from 'react-router-dom'
import classes from './SideNav.module.css'

const style = {
    width: '0px'
}

const SideNav = (props) => {
    const { showLoginPage, sideDrawer, closeDrawer } = props
    let newWidth = null
    if(sideDrawer){
        style.width = '250px'
        newWidth = style.width
    }
    return (
        <div className={classes.SideNav} style={{width: newWidth}}>
            <div className={classes.closeBtn} onClick={closeDrawer}>&times;</div>
            <div className={classes.loginLink} onClick={showLoginPage}>Login</div>
            <NavLink to="/cart">Cart Items</NavLink>
        </div>
    )
}

export default SideNav
