import React from 'react';

import './collectionPreview.styles.scss';
import CollectionItem from './../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((itm, idx) => idx < 4)
            .map((itm) => (
              <CollectionItem key={itm.id} item={itm} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
