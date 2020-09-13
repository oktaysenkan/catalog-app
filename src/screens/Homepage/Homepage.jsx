import { Grid } from '@geist-ui/react';
import React from 'react';

import LeftMenu from '../../components/LeftMenu';
import ProductModal from '../../components/ProductModal/ProductModal';
import ProductList from '../../containers/ProductList';

import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <Grid.Container>
        <LeftMenu />
        <ProductList />
        <ProductModal />
      </Grid.Container>
    </div>
  );
};

export default Homepage;
