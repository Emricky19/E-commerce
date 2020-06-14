import React from 'react'
import { Grid, Button } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { Link } from 'react-router-dom'
import classes from './CartSummary.module.css'

const CartSummary = () => {
    return (
        <div className={classes.CartSummary}>
            <div className={classes.CartsummaryContainer}>
                <Link to ='/'>
                    <Button className ={classes.ContinueButton} variant="outlined"><KeyboardBackspaceIcon />Continue Shopping</Button>
                </Link>
                <hr/>
                <Grid container spacing={3}>
                    <Grid item xs ={12} sm={6} lg={4}>
                        <p><strong>Item(s):</strong> 3</p>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} >
                        <p><strong>Total Price:</strong> $44.97</p>
                    </Grid>
                    <Grid item xs md={12} sm={12} lg={4}>
                        <Link to='/checkout'>
                            <Button className={classes.CheckoutButton}>checkout</Button>
                        </Link> 
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CartSummary
