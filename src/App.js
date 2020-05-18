import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

import './App.css';

import { setCurrentUser } from './redux/user/user.action';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { getCurrentUser } from './redux/user/userSelector';
import HomePage from './pages/homepage/homepage.component';
import Checkout from './pages/checkout/Checkout';
import ShopPage from './pages/shoppage/ShopPage';
import SignUpSignIn from './pages/SignUpSignIn/SignUpSignIn';
import Header from './components/Header/Header';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpSignIn />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
