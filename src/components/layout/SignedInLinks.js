import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">New Project</NavLink>
        <NavLink to="/">Log out</NavLink>
        <NavLink to="/">OK</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
