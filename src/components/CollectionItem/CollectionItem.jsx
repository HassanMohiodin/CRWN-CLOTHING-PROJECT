import React from 'react';
import { connect } from 'react-redux';

import './collectionItem.styles.scss';

import CustomButton from './../CustomButton/CustomButton';
import { addItemToCart } from './../../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          return addItem(item);
        }}
      >
        {' '}
        ADD TO CART{' '}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItemToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
