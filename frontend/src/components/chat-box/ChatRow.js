/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/17/16.
 */

import React, {Component, PropTypes} from 'react';

import Linkify from 'react-linkify';
import Avatar from 'react-avatar';

class ChatRow extends Component {
  render() {
    return (
      (this.props.userId === this.props.message.user.id) ?
        <li className="mar-btm">
          <div className="media-right">
            <Avatar name={this.props.message.user.nick_name} size={50} round={true} className="img-circle img-sm"/>
          </div>
          <div className="media-body pad-hor speech-right">
            <div className="speech">
              <a href="#" className="media-heading">{this.props.message.user.nick_name}</a>
              <p><Linkify properties={{target: '_blank', fontWeight:'bold'}}>{this.props.message.message}</Linkify></p>
            </div>
          </div>
        </li>
        :
        <li className="mar-btm">
          <div className="media-left">
            <Avatar name={this.props.message.user.nick_name} size={50} round={true} className="img-circle img-sm"/>
          </div>
          <div className="media-body pad-hor">
            <div className="speech">
              <a href="#" className="media-heading">{this.props.message.user.nick_name}</a>
              <p><Linkify>{this.props.message.message}</Linkify></p>
            </div>
          </div>
        </li>
    )
  }
}

ChatRow.propTypes = {
  message: PropTypes.object,
  nickName: PropTypes.string
};

export default ChatRow;