import React, { useEffect } from 'react';
import { Grid, Loading, Note } from '@geist-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { getAllProducts, showProductModal } from '../../store/actions/products';

import Product from '../Product/Product';

import './ProductList.scss';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.products.filters);
  const orderBy = useSelector((state) => state.products.orderBy);
  const orderDirection = useSelector((state) => state.products.orderDirection);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProductPress = async (product) => {
    dispatch(showProductModal(product));
  };

  const filteredResult = products.products
    .filter((item) => (filters.type ? filters.type === item.type : true))
    .filter((item) => (filters.color ? filters.color === item.color : true))
    .filter((item) => (filters.price ? filters.price >= item.price : true))
    .filter((item) => (filters.bodySize ? filters.bodySize === item.bodySize : true));

  const orderedResult = filteredResult.sort((a, b) => {
    if (orderBy === 'createdAt') {
      return moment(a.createdAt).unix() - moment(b.createdAt).unix();
    }

    return a[orderBy] - b[orderBy];
  });

  if (orderDirection === 'asc') {
    orderedResult.reverse();
  }

  const Products = () => {
    return (
      <Grid.Container gap={2}>
        {orderedResult.map((item) => (
          <Product key={item.id} product={item} onClick={() => handleProductPress(item)} />
        ))}
      </Grid.Container>
    );
  };

  const NotFound = () => {
    return (
      <Note className="not-found" type="default" filled>
        Your search criteria matches no results.
      </Note>
    );
  };

  return (
    <Grid.Container sm={18} md={18} lg={20} xl={21}>
      <div className="product-list">
        <h1 className="title">Products</h1>

        <div className="products">
          {products.loading ? (
            <Loading size="large" />
          ) : (
            <>{orderedResult.length ? <Products /> : <NotFound />}</>
          )}
        </div>
      </div>
    </Grid.Container>
  );
};

export default ProductList;
