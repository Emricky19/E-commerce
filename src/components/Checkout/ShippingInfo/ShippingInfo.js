import React from 'react'
import { Grid, Divider } from '@material-ui/core'

import classes from './ShippingInfo.module.css'
const ShippingInfo = () => {
    return (
        <div className={classes.ShippingInfo}>
            <div className={classes.Container}>
                <Divider />
                <Grid container spacing={1} >
                    <Grid item xs={12} md={6} lg={6}>
                        <input type="text" name="name" placeholder="Name.."/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <input type="text" name="email" placeholder="Email.." />
                    </Grid> 
                </Grid>
                <Divider className={classes.Divider} />
                    <span className={classes.Info}>Shipping information: </span>
                <Divider className={classes.Divider} />
                <Grid container spacing={1} className={classes.GridSection}>
                    <Grid item xs={12} md={6} lg={6}>
                        <input type="text" name="Address" placeholder="Address.."/>
                        <input type="text" name="State" placeholder="State.."/>
                        <input type="text" name="Zip" placeholder="Zip code.."/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <input type="text" name="city" placeholder="City.." />
                        <input type="text" name="Zip" placeholder="Zip code.." />
                    </Grid>
                </Grid>
                <Divider />
                <button className={classes.ShippingButton}>Continue</button>
            </div>
        </div>
    )
}

export default ShippingInfo
