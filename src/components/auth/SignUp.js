import React, { useState } from 'react';
import { auth, createUserProfile } from '../../firebase';

const SignUp = () => {

  const initialSignUpState = {
    displayName: '',
    email: '',
    password: ''
  };

  const [signUpInfo, setSignUpInfo] = useState(initialSignUpState);

  const { displayName, email, password } = signUpInfo;

  const handleChange = e => {
    const { name, value } = e.target;

    setSignUpInfo({
      ...signUpInfo,
      [name]: value
    })

    //console.log({...signUpInfo}) // see console and fix
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const {
        user
      } = auth.createUserWithEmailAndPassword(email, password);
      // console.log({ displayName }) // value
      createUserProfile(user, { displayName })

    } catch (err) {
      console.error(err)
    }

    setSignUpInfo({
      ...signUpInfo,
      displayName: '',
      email: '',
      password: ''
    })
  };

  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="displayName"
        placeholder="Display Name"
        value={signUpInfo.displayName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={signUpInfo.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={signUpInfo.password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;