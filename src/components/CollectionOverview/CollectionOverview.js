import React from 'react';
import { connect } from 'react-redux';

import './collectionOverview.styles.scss';

import CollectionPreview from './../CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from './../../redux/shop/shopSelector';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherColletionProps }) => (
      <CollectionPreview key={id} {...otherColletionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
