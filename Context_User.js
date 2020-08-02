import React from 'react';

const { Provider, Consumer: ContextConsumer_User } = React.createContext();

class ContextProvider_User extends React.Component {
  state = {
    username: 'Kent'
  };

  changeUsername = newUsername => this.setState({ username: newUsername });

  render() {
    return (
      <Provider value={{ state: this.state, changeUsername: this.changeUsername }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ContextProvider_User, ContextConsumer_User };
