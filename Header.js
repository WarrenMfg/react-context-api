import React from 'react';
import withContextConsumer_User from './withContextConsumer_User';

function Header({ context: { state: { username } } }) {
  return (
    <header>
      <p>Welcome, {username}</p>
    </header>
  );
}

export default withContextConsumer_User(Header);
