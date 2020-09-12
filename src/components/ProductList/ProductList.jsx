import React from 'react';
import { Card, Grid } from '@geist-ui/react';
import faker from 'faker';

import './ProductList.scss';

const ProductList = () => {
  const mockArray = new Array(10).fill();

  const MockItem = () => {
    return (
      <Grid xs={24} sm={12} md={12} lg={8}>
        <Card hoverable className="product">
          <img alt="product" src={`https://source.unsplash.com/weekly?${faker.random.word()}`} />

          <div className="product-content">
            <h4>{faker.commerce.productName()}</h4>
            <p>{faker.random.words(26)}</p>
          </div>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid.Container sm={18} md={18} lg={20} xl={21}>
      <div className="product-list">
        <h1 className="title">Products</h1>

        <div className="products">
          <Grid.Container gap={2}>
            {mockArray.map(() => (
              <MockItem />
            ))}
          </Grid.Container>
        </div>
      </div>
    </Grid.Container>
  );
};

export default ProductList;
