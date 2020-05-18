import React from 'react';

import './signUpSignIn.styles.scss';
import SignIn from './../../components/SignIn/SignIn';
import SignUp from './../../components/SignUp/SignUp';

const SignUpSignIn = (props) => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignUpSignIn;
