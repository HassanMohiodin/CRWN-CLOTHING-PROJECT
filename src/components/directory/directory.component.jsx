import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { getDirectorySections } from './../../redux/directory/directroySelector';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...paramsOptions }) => (
      <MenuItem key={id} {...paramsOptions} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: getDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
