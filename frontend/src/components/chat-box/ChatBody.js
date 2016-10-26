/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/17/16.
 */

import React, {Component, PropTypes} from 'react';

import ChatRow from './ChatRow';

class ChatBody extends Component {
  constructor() {
    super();
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(event) {
    event.preventDefault();
    let data = {
      message: this.refs.messageInput.value
    };
    this.props.submitMessage(data);
    this.refs.messageInput.value = '';
  }

  render() {
    return (
      <div id="demo-chat-body" className="collapse in">
        <div className="nano has-scrollbar" style={{height: '500px'}}>
          <div id="chatArea" className="nano-content pad-all" tabIndex="0">
            <ul className="list-unstyled media-block">
              {this.props.messages.map((message, index) => {
                return <ChatRow key={index} message={message} userId={this.props.userId} nickName={this.props.nickName}/>
              })}
            </ul>
          </div>
          <div className="nano-pane">
            <div className="nano-slider" style={{height: '141px', transform: 'translate(0px, 0px)'}}></div>
          </div>
        </div>

        <div className="panel-footer">
          <form onSubmit={this.submitMessage} style={{marginBottom: 0}}>
            <div className="row">
              <div className="col-xs-10">
                <input ref="messageInput" type="text" style={{height: '50px', fontSize: '15px'}}
                       placeholder="Type a message..."
                       className="form-control chat-input"/>
              </div>
              <div className="col-xs-2">
                <button className="btn btn-primary btn-block" style={{height: '50px', fontSize: '15px'}} type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

ChatBody.propTypes = {
  messages: PropTypes.array,
  nickName: PropTypes.string,
  submitMessage: PropTypes.func
};

export default ChatBody;