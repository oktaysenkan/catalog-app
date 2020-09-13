import React, { useEffect } from 'react';
import { Button, Image, Loading, Modal, Spacer, useModal } from '@geist-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import * as changecase from 'change-case';

import { closeProductModal } from '../../store/actions/products';
import Color from '../../enums/color';
import ProductType from '../../enums/product-type';
import BodySize from '../../enums/body-size';

import './ProductModal.scss';

const ProductModal = () => {
  const dispatch = useDispatch();
  const showingProduct = useSelector((state) => state.products.showingProduct);

  const { setVisible, bindings } = useModal();

  useEffect(() => {
    if (showingProduct.hidden) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showingProduct.hidden]);

  const handleProductModalClose = () => {
    setTimeout(() => {
      dispatch(closeProductModal());
    }, 150);
  };

  const colorAsString = changecase.sentenceCase(Color[showingProduct?.product?.color] || '');

  const productTypeAsString = changecase.sentenceCase(
    ProductType[showingProduct?.product?.type] || '',
  );

  const bodySizeAsString = changecase.constantCase(
    BodySize[showingProduct?.product?.bodySize] || '',
  );

  // eslint-disable-next-line consistent-return
  return (
    <Modal className="product-modal" width="35rem" {...bindings} onClose={handleProductModalClose}>
      {showingProduct?.product?.loading ? (
        <>
          <Spacer y={4} />
          <Loading />
          <Spacer y={4} />
        </>
      ) : (
        <>
          <Modal.Title>{showingProduct?.product?.productName}</Modal.Title>
          <Modal.Content className="content">
            <Image src={showingProduct?.product?.imageUrl} />
            <p className="description">{showingProduct?.product?.description}</p>

            <p>Color: {colorAsString}</p>
            <p>Type: {productTypeAsString}</p>
            <p>Body Size: {bodySizeAsString}</p>
            <p>Price: ${showingProduct?.product?.price}</p>
          </Modal.Content>
          <Modal.Action className="actions">
            <Button className="add-basket" type="secondary">
              Add Basket
            </Button>
          </Modal.Action>
        </>
      )}
    </Modal>
  );
};

export default ProductModal;
