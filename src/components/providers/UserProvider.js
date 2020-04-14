import React, { useState, useEffect, createContext } from 'react';
import { firestore, auth, createUserProfile } from '../../firebase';

export const UserContext = createContext();

const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  const loadUser = async () => {
    // Subscribe to user changes: fires on login/logout --> returns user obj or null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfile(userAuth);
      console.log(user);
      setCurrentUser(user);
    })
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;