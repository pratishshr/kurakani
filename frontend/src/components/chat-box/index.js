/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/17/16.
 */

import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import ChatBody from './ChatBody';

class ChatBox extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      messages: []
    };
    this.submitMesssage = this.submitMesssage.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    axios.get(window.location.origin + '/messages').then((response)=> {
      this.setState({messages: response.data.data});
      this.scrollToBottom();
    });
    socket.emit('initialize', {nick_name: this.props.nickName});
    socket.on('initialize', (user) => {
      this.setState({userId: user.id});
    });
    socket.on('send:message', (message) => {
      this.state.messages.push(message);
      this.setState({messages: this.state.messages});
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    let chatArea = document.getElementById('chatArea');
    chatArea.scrollTop = chatArea.scrollHeight;
  }

  submitMesssage(data) {
    let message = {
      message: data.message,
      user: {
        id: this.state.userId
      }
    };
    if (data.message) {
      socket.emit('send:message', message);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-offset-1 col-md-10">
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Chat</h3>
            </div>
            <ChatBody submitMessage={this.submitMesssage} messages={this.state.messages}
                      nickName={this.props.nickName}/>
          </div>
        </div>
      </div>
    )
  }
}

ChatBox.propTypes = {
  nickName: PropTypes.string
};

export default ChatBox;