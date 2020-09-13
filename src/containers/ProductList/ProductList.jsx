import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import ProductListComponent from '../../components/ProductList';
import { getAllProducts, showProductModal } from '../../store/actions/products';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.products.filters);
  const orderBy = useSelector((state) => state.products.orderBy);

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

  return (
    <ProductListComponent
      products={orderedResult}
      loading={products.loading}
      onClick={handleProductPress}
    />
  );
};

export default ProductList;
