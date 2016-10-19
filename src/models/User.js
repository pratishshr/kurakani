/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import db from '../utils/db';

import './Message';
const User = db.model('User', {
  tableName: 'users',
  hasTimestamps: true,
  messages: function () {
    return this.hasMany('Message')
  }
});

export default User;
