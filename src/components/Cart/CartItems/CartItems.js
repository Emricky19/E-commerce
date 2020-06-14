import React from 'react'
import { Grid } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import SamsungImage from '../../../assets/images/samsung_phone.png'

import classes from './CartItems.module.css'

const CartItems = () => {
    return (
        <div>
            <div className={classes.CartItems}>
                <div className={classes.CartitemsContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs sm={3} className={classes.DesktopOnly}/>
                        <Grid item xs sm={3} className={classes.DesktopOnly}>
                            <strong>Item</strong>
                        </Grid>
                        <Grid item xs sm={2} className={classes.DesktopOnly}>
                            <strong>Price</strong>
                        </Grid>
                        <Grid item xs sm={2} className={classes.DesktopOnly}>
                            <strong>Quantity</strong>
                        </Grid>
                        <Grid item xs sm={2} className={classes.DesktopOnly}>
                            <strong>Total</strong>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}> <img src={SamsungImage} className={classes.CartitemsImg} alt="samsung phone" style={{float: 'left'}} /></Grid>
                        <Grid item xs={12} sm={3} className={classes.MobileGrid}>
                            <span><strong className={classes.MobileOnly}>Item: </strong>Demola's Book</span>
                        </Grid>
                        <Grid item xs={12} sm={2} className={classes.MobileGrid}>
                            <span><strong className={classes.MobileOnly}>Price: </strong>$20</span>
                        </Grid>
                        <Grid item xs={12} sm={2}> 
                            <Grid container spacing={0}>
                                <Grid item lg={2}>
                                    <span className={classes.DesktopOnly}>3</span>
                                </Grid>
                                <Grid item xs lg={6} style={{marginTop: -10}} className={classes.DesktopOnly}>
                                    <KeyboardArrowUpIcon className={classes.ChangeQuantity} /> 
                                    <KeyboardArrowDownIcon  className={classes.ChangeQuantity} />
                                </Grid>
                                <Grid item xs={12} className={classes.MobileGrid}>
                                    <div className={classes.MobileOnly}><strong style={{display: 'block', padding: '20px'}}>Quantity</strong> 
                                        <span className={classes.Decrease}>-</span> 3 <span className={classes.Increase}>+</span>
                                    </div>
                                </Grid>
                                    
                            </Grid>
                        </Grid>
                        <Grid item xs lg={2} className={classes.MobileGrid}>
                            <span><strong className={classes.MobileOnly}>Total: </strong>$20</span>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default CartItems
