/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/19/16.
 */

import React, {Component, PropTypes} from 'react';

import Avatar from 'react-avatar';

class ChatMembers extends Component {
  render() {
    return (
      <div className="panel-body" style={{height: '570px', overflow: 'scroll'}}>
        <ul className="list-unstyled media-block">
          {this.props.members.map((member, index)=> {
            return (
              <li className="mar-btm" key={index}>
                <div className="flex">
                  <Avatar name={member.nick_name} size={50} round={true} className="img-circle img-sm"/>
                  <div className="pull-right member-name">
                    {member.nick_name}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

ChatMembers.propTypes = {
  members: PropTypes.array
};

export default ChatMembers