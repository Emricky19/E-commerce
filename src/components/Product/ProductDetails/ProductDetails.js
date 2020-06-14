import React from 'react'
import { Grid, Button} from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

import cx from 'classnames'
import SamSungPhone from '../../../assets/images/samsung_phone.png'
import classes from './ProductDetails.module.css'


const ProductDetails = () => {
    return (
        <div className={classes.ProductDetails}>
            <div className={classes.Container}>
                <Grid container spacing={3}>
                    <Grid item lg={6}>
                        <img className={classes.Img} src={SamSungPhone} alt="Product_image" />
                    </Grid>
                    <Grid item lg={6}>
                        <h2>Item: Samsung mobile</h2>
                        <h4>Price: $16.99</h4>

                        <h6>Some Info About Product</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro ea doloribus nam nemo tempore recusandae mollitia earum eos, ex aspernatur omnis, 
                            quam officia, placeat maxime rem fugiat voluptas at magnam?
                        </p>
                        <Button className={classes.productDetailBtn} variant="outlined" ><KeyboardBackspaceIcon />Back To Products</Button>
                        <Button className={cx(classes.productDetailBtn, classes.addBtn)}  variant="outlined" >Add To Cart</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ProductDetails
