import React from 'react'

import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Products from './containers/Products/Products'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import ProductDetails from './components/Product/ProductDetails/ProductDetails'
import { Route, Switch } from 'react-router-dom'

import classes from './App.module.css'


const App = () => {
  return (
      <div className={classes.App}>
        <Toolbar />
        
        <Switch>
          <Route exact path='/' component= {Products} />
          <Route path='/cart' component={ Cart } />
          <Route path='/checkout' component={ Checkout } />
          <Route path='/productDetails' component={ ProductDetails } />
        </Switch>
      </div>
  )
}

export default App
