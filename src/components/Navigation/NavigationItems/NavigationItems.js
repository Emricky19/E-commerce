import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom'
import Login from '../../Auth/Login/Login'

import classes from './NavigationItems.module.css'

const NavigationItems = (props) => {
    let { loginPage, showLoginPage, closeModal } = props
    let login = null
    if(loginPage){
        login = <Login closeModal={closeModal} isModal={ loginPage }/>
    }
    
    return (
        <> 
            { login }
            <div className={classes.NavigationItems}>
            {/* <Button className={classes.LoginBtn}>Login</Button>
             */}
            <ul className={classes.NavigationLinks}>
                <li onClick={showLoginPage} className={classes.LoginBtn}>Login</li>
                <li><NavLink to='/cart'>
                        <ShoppingCartIcon style={{fontSize: "30px"}} />
                        <span className={classes.CartNotification}>3</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavigationItems
