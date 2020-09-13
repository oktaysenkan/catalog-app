import React, { useEffect } from 'react';
import { Loading, Modal, Spacer, useModal } from '@geist-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { closeProductModal } from '../../store/actions/products';

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

  return (
    <Modal width="35rem" {...bindings} onClose={handleProductModalClose}>
      {showingProduct?.product?.loading ? (
        <>
          <Spacer y={4} />
          <Loading />
          <Spacer y={4} />
        </>
      ) : (
        <>
          <Modal.Title>{showingProduct?.product?.productName}</Modal.Title>
          <Modal.Content>
            <p>This is the width I want.</p>
          </Modal.Content>
        </>
      )}
    </Modal>
  );
};

export default ProductModal;
