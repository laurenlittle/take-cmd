import React, { useContext } from 'react';

import CurrentUser from './CurrentUser';
import SignUpAndSignIn from './SignUpAndSignIn';
import { UserContext } from '../providers/UserProvider';

const Authentication = ({ loading }) => {

  const user = useContext(UserContext);

  if (loading) return null;

  return <div>{user ? <CurrentUser {...user} /> : <SignUpAndSignIn />}</div>;
};

export default Authentication;