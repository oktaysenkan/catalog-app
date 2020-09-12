import { Grid } from '@geist-ui/react';
import React from 'react';

import LeftMenu from '../../components/LeftMenu';
import ProductList from '../../components/ProductList';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <Grid.Container>
        <LeftMenu />
        <ProductList />
      </Grid.Container>
    </div>
  );
};

export default Homepage;
