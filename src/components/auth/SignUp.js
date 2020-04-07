import React, { useState } from 'react';

const SignUp = () => {

  const initialSignUpState = {
    displayName: '',
    email: '',
    password: ''
  };

  const [signUpInfo, setSignUpInfo] = useState(initialSignUpState);

  const handleChange = e => {
    const { name, value } = e.target;

    setSignUpInfo({
      ...signUpInfo,
      [name]: value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

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