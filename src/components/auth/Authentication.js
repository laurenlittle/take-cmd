import React, { useEffect } from 'react';

import CurrentUser from './CurrentUser';
import SignUpAndSignIn from './SignUpAndSignIn';

const Authentication = ({ user, loading }) => {
  if (loading) return null;

  return <div>{user ? <CurrentUser {...user} /> : <SignUpAndSignIn />}</div>;
};

export default Authentication;