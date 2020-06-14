import React from 'react'

import { Link } from 'react-router-dom'
import SamsungImage from '../../assets/images/samsung_phone.png'
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core'
import classes from './Product.module.css'

const Product = () => {
    return (
        <div className={classes.Product}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card variant="outlined">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5"> 
                                Samsung
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Link to='/productDetails'>
                                <Button className={classes.Button} size="small" color="primary">
                                Learn More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5" >
                                Samsung  
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Button className={classes.Button} size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" width="25%">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5" >
                                Samsung 
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Button className={classes.Button} size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" width="25%">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5" >
                                Samsung 
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Button className={classes.Button} size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" width="25%">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5" >
                                Samsung 
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Button className={classes.Button} size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card variant="outlined" width="25%">
                            <img src={SamsungImage} className={classes.ProductImg} alt="samsung phone" />
                            <CardContent>
                            <Typography gutterBottom variant="h5" >
                                Samsung 
                            </Typography>
                            </CardContent>
                        <hr/>
                        <CardActions>  
                            <Button className={classes.Button} color="primary">
                            Add to cart
                            </Button>
                            <Button className={classes.Button} size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Product
