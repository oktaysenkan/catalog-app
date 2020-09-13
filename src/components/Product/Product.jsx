import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid } from '@geist-ui/react';

const Product = ({ product, onClick }) => {
  return (
    <Grid xs={24} sm={12} md={12} lg={8}>
      <Card hoverable className="product" onClick={onClick}>
        <img alt="product" src={product.imageUrl} />

        <div className="product-content">
          <h4>{product.productName}</h4>
          <p>{product.color}</p>
          <p>${product.price}</p>
          <p>{product.type}</p>
        </div>
      </Card>
    </Grid>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    color: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

Product.defaultProps = {
  onClick: () => {},
};

export default Product;
