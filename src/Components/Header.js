// src/Components/Header.js
import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import './Header.css';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      {user ? <h1>Welcome, {user.username}!</h1> : <h1>Welcome!</h1>}
    </header>
  );
};

export default Header;