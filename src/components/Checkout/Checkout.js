import React from 'react'
import { Grid } from '@material-ui/core'
import ShippingInfo from './ShippingInfo/ShippingInfo'
import OrderSummary from './OrderSummary/OrderSummary'

import classes from './Checkout.module.css'

const Checkout = () => {
    return (
        <div className={classes.Checkout}>
            <Grid container spacing={2}>
                <Grid item xs ={12} sm={6} lg={6}>
                    <ShippingInfo />
                </Grid>
                <Grid item xs={12} sm={6} lg={6} >
                    <OrderSummary />
                </Grid>
            </Grid>
        </div>
    )
}

export default Checkout
