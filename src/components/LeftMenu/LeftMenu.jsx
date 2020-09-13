/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Select, ButtonGroup, Button, Grid, Spacer } from '@geist-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  filterBodySize,
  filterColor,
  filterPrice,
  filterType,
  resetFilters,
  setOrderBy,
} from '../../store/actions/products';
import BodySize from '../../enums/body-size';

import './LeftMenu.scss';

const LeftMenu = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const availableColors = [
    {
      value: 1,
      label: 'Red',
      colorCode: 'red',
    },
    {
      value: 2,
      label: 'Blue',
      colorCode: 'blue',
    },
    {
      value: 3,
      label: 'Pink',
      colorCode: 'pink',
    },
    {
      value: 4,
      label: 'Black',
      colorCode: 'black',
    },
    {
      value: 5,
      label: 'Orange',
      colorCode: 'orange',
    },
    {
      value: 6,
      label: 'Violet',
      colorCode: '#7928CA',
    },
  ];

  const availablePrices = [
    {
      label: '$50',
      value: '50',
    },
    {
      label: '$100',
      value: '100',
    },
    {
      label: '$200',
      value: '200',
    },
    {
      label: '$300',
      value: '300',
    },
    {
      label: '$400',
      value: '400',
    },
  ];

  const colorStyle = (colorCode) => {
    return {
      backgroundColor: colorCode,
    };
  };

  const handleProductTypeChange = (value) => {
    dispatch(filterType(+value));
  };

  const handleColorChange = (value) => {
    dispatch(filterColor(+value));
  };

  const handlePriceChange = (value) => {
    dispatch(filterPrice(+value));
  };

  const handleBodySizeChange = (value) => {
    dispatch(filterBodySize(+value));
  };

  const handleOrderByChange = (value) => {
    dispatch(setOrderBy(value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <Grid sm={6} md={6} lg={4} xl={3} alignContent="center">
      <div className="left-menu">
        <Spacer y={3} />

        <div className="section">
          <h6 className="section-title">Type</h6>

          <Select placeholder="Choose one" onChange={handleProductTypeChange}>
            <Select.Option value="1">T-Shirt</Select.Option>
            <Select.Option value="2">Shirt</Select.Option>
            <Select.Option value="3">Jacket</Select.Option>
            <Select.Option value="4">Short</Select.Option>
            <Select.Option value="5">Blazer</Select.Option>
            <Select.Option value="6">Suit</Select.Option>
          </Select>
        </div>

        <div className="section">
          <h6 className="section-title">Body Size</h6>

          <ButtonGroup size="mini">
            <Button onClick={() => handleBodySizeChange(BodySize.XS)}>XS</Button>
            <Button onClick={() => handleBodySizeChange(BodySize.S)}>S</Button>
            <Button onClick={() => handleBodySizeChange(BodySize.M)}>M</Button>
            <Button onClick={() => handleBodySizeChange(BodySize.L)}>L</Button>
            <Button onClick={() => handleBodySizeChange(BodySize.XL)}>XL</Button>
          </ButtonGroup>
        </div>

        <div className="section">
          <h6 className="section-title">Color</h6>

          <div className="colors">
            {availableColors.map((item) => (
              <div
                className="color"
                key={item.value}
                style={colorStyle(item.colorCode)}
                onClick={() => handleColorChange(item.value)}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <h6 className="section-title">Price</h6>

          {availablePrices.map((item) => (
            <div key={item.value} onClick={() => handlePriceChange(item.value)}>
              <p className="price">{item.label}</p>
            </div>
          ))}
        </div>

        <div onClick={handleResetFilters}>
          <h6 className="reset-filters">Reset Filters</h6>
        </div>

        <div className="section">
          <h6 className="section-title">Order By</h6>

          <div className="order-wrapper" onClick={() => handleOrderByChange('createdAt')}>
            <p className="order">Date</p>
          </div>

          <div className="order-wrapper" onClick={() => handleOrderByChange('price')}>
            <p className="order">Price</p>
          </div>
        </div>

        <div className="section row">
          <h6 className="section-title">Basket</h6>

          <div className="order-wrapper">
            <p className="order">{basket.length} Items</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default LeftMenu;
