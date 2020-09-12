import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid } from '@geist-ui/react';

const Product = ({ productName, productDescription, imageUrl }) => {
  return (
    <Grid xs={24} sm={12} md={12} lg={8}>
      <Card hoverable className="product">
        <img alt="product" src={imageUrl} />

        <div className="product-content">
          <h4>{productName}</h4>
          <p>{productDescription}</p>
        </div>
      </Card>
    </Grid>
  );
};

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Product;
