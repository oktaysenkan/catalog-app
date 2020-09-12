import React, { useEffect, useState } from 'react';

import ProductListComponent from '../../components/ProductList';
import http from '../../helpers/http';

const ProductList = () => {
  const [state, setState] = useState({
    products: [],
  });

  useEffect(() => {
    const getProducts = async () => {
      const { data: products } = await http.get('products');

      setState({
        ...state,
        products,
      });
    };

    getProducts();
  }, []);

  return <ProductListComponent products={state.products} />;
};

export default ProductList;
