import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@geist-ui/react';

import Product from '../Product/Product';

import './ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <Grid.Container sm={18} md={18} lg={20} xl={21}>
      <div className="product-list">
        <h1 className="title">Products</h1>

        <div className="products">
          <Grid.Container gap={2}>
            {products.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </Grid.Container>
        </div>
      </div>
    </Grid.Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequried,
      productName: PropTypes.string.isRequired,
      color: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ProductList;
