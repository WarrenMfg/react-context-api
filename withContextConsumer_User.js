import React from 'react';
import { ContextConsumer_User } from './Context_User';

export default function withContextConsumer_User(Component) {
  return function() {
    return (
      <ContextConsumer_User>{context => <Component context={context} />}</ContextConsumer_User>
    );
  };
}
