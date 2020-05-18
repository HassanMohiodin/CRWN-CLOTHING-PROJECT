import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.styles.scss';

import CartIcon from './../CartIcon/CartIcon';
import CartDropdown from './../CartDropdown/CartDropdown';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils';
import { getCurrentUser } from './../../redux/user/userSelector';
import { cartHidden } from './../../redux/cart/cartSelectors';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
  hidden: cartHidden(state),
});

export default connect(mapStateToProps)(Header);
