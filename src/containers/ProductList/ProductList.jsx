import React, { useEffect, useState } from 'react';

import ProductListComponent from '../../components/ProductList';
import http from '../../helpers/http';

const ProductList = () => {
  const [state, setState] = useState({
    products: [],
    loading: true,
  });

  useEffect(() => {
    const getProducts = async () => {
      const { data: products } = await http.get('products');

      setState({
        ...state,
        products,
        loading: false,
      });
    };

    getProducts();
  }, [state]);

  return <ProductListComponent products={state.products} loading={state.loading} />;
};

export default ProductList;
