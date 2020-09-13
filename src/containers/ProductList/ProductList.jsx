import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductListComponent from '../../components/ProductList';
import { getAllProducts, showProductModal } from '../../store/actions/products';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleProductPress = async (product) => {
    dispatch(showProductModal(product));
  };

  return (
    <ProductListComponent
      products={products.products}
      loading={products.loading}
      onClick={handleProductPress}
    />
  );
};

export default ProductList;
