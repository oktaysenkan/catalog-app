import React from 'react';
import { Select, ButtonGroup, Button, Grid, Spacer } from '@geist-ui/react';

import './LeftMenu.scss';

const LeftMenu = () => {
  const availableColors = [
    {
      label: 'Red',
      colorCode: 'red',
    },
    {
      label: 'Blue',
      colorCode: 'blue',
    },
    {
      label: 'Pink',
      colorCode: 'pink',
    },
    {
      label: 'Black',
      colorCode: 'black',
    },
    {
      label: 'Orange',
      colorCode: 'orange',
    },
    {
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

  return (
    <Grid sm={6} md={6} lg={4} xl={3} alignContent="center">
      <div className="left-menu">
        <Spacer y={3} />

        <div className="section">
          <h6 className="section-title">Type</h6>

          <Select placeholder="Choose one">
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
            <Button>XS</Button>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
          </ButtonGroup>
        </div>

        <div className="section">
          <h6 className="section-title">Color</h6>

          <div className="colors">
            {availableColors.map((item) => (
              <div key={item.label} style={colorStyle(item.colorCode)} className="color" />
            ))}
          </div>
        </div>

        <div className="section">
          <h6 className="section-title">Price</h6>

          {availablePrices.map((item) => (
            <p key={item.value} className="price">
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </Grid>
  );
};

export default LeftMenu;
