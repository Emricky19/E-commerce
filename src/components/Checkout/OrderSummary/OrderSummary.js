import React from 'react'
import { Link } from 'react-router-dom'

import { Grid, Button, Divider } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

import SamSungImage from '../../../assets/images/samsung_phone.png'

import classes from './OrderSummary.module.css'

const OrderSummary = () => {
    return (
        <div className={classes.OrderSummary}>
            <div className={classes.Container}>
                <Link to='/cart'>
                    <Button className ={classes.backBtn} variant="outlined"><KeyboardBackspaceIcon />Back to cart</Button>
                </Link>
                <Divider className={classes.Divider} />
                <span className={classes.SummaryInfo}>Order Summary</span>
                <Divider className={classes.Divider} />
                <Grid container spacing={3} className={classes.summarySection}>
                    <Grid item xs={12} sm={3}>
                        <img className={classes.Img} src={SamSungImage} alt='cart_item' />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <span><strong className={classes.MobileOnly}>Item: </strong>Samsung mobile</span>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <span><strong className={classes.MobileOnly}>Price: </strong>$49.99</span>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <span><strong className={classes.MobileOnly}>Quantity: </strong>x22</span>
                    </Grid>
                </Grid>
                <div className={classes.Paragraph}>
                    <p>Items: 3</p>
                    <p>Total: $55.97</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
