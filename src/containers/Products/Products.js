import React, { Component } from 'react';

import Product from '../../components/Product/Product'

class Products extends Component {
    state = {
        products: [
            {id: 1, title: 'HeadPhone', price: '$10.00'}
        ]
    }
    render() {
        return (
            <div>
                <Product />
            </div>
        );
    }
}

export default Products;
