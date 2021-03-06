import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Signup</NavLink>
        <NavLink to="/">Log in</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
