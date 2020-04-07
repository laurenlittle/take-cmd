import React, { useState } from 'react';
import { signInWithGoogle } from '../../firebase';

const SignIn = () => {

  const initialSignInState = {
    email: '',
    password: ''
  };

  const [userInfo, setUserInfo] = useState(initialSignInState);

  const handleChange = e => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setUserInfo({
      ...userInfo,
      email: '',
      password: ''
    })
  };

  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userInfo.password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
      <button onClick={signInWithGoogle} >Sign In With Google</button>
    </form>
  );
}

export default SignIn;