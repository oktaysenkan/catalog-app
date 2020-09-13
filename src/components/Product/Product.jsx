import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid } from '@geist-ui/react';
import * as changecase from 'change-case';

import Color from '../../enums/color';
import ProductType from '../../enums/product-type';
import BodySize from '../../enums/body-size';

const Product = ({ product, onClick }) => {
  const colorAsString = changecase.sentenceCase(Color[product.color]);

  const productTypeAsString = changecase.sentenceCase(ProductType[product.type]);

  const bodySizeAsString = changecase.constantCase(BodySize[product.bodySize]);

  return (
    <Grid xs={24} sm={12} md={12} lg={8}>
      <Card hoverable className="product" onClick={onClick}>
        <img alt="product" src={product.imageUrl} />

        <div className="product-content">
          <h4>{product.productName}</h4>
          <p>Color: {colorAsString}</p>
          <p>Type: {productTypeAsString}</p>
          <p>Body Size: {bodySizeAsString}</p>
          <p>Price: ${product.price}</p>
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
    bodySize: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

Product.defaultProps = {
  onClick: () => {},
};

export default Product;
