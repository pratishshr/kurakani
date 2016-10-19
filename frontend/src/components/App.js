/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

import Login from './login';
import ChatBox from './chat-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nickName: null
    };
    this.setNickName = this.setNickName.bind(this);
  }

  setNickName(nickName) {
    this.setState({nickName: nickName});
  }

  render() {
    if (!this.state.nickName) {
      return (
        <Login setNickName={this.setNickName}/>
      );
    }
    return (
      <ChatBox nickName={this.state.nickName}/>
    )
  }
}

export default App;
