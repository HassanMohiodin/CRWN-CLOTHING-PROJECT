import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { getSingleCollection } from './../../redux/shop/shopSelector';
import CollectionItem from '../CollectionItem/CollectionItem';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: getSingleCollection(ownProps.match.params.collection)(state),
});

export default connect(mapStateToProps)(Collection);
