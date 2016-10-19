/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import db from '../utils/db';

import './User';
const Message = db.model('Message', {
  tableName: 'messages',
  hasTimestamps: true,
  user: function () {
    return this.belongsTo('User')
  }
});

export default Message;
