import React, { Component } from 'react';
import withContextConsumer_User from './withContextConsumer_User';

class Main extends Component {
  state = {
    newUsername: ''
  };

  handleChangeUsername = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { state: { username }, changeUsername } = this.props.context;
    return (
      <main>
        <p className='main'>No new notifications, {username}</p>
        <input
          type='text'
          name='newUsername'
          placeholder='New username'
          onChange={this.handleChangeUsername}
        />
        <button onClick={() => changeUsername(this.state.newUsername)}>Change Username</button>
      </main>
    );
  }
}

export default withContextConsumer_User(Main);
