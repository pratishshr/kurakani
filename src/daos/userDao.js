/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/19/16.
 */

import User from '../models/User';

/**
 * Sample Input:
 *  {
 *    nickName: 'TestName'
 *  }
 * @param user
 * @returns {Promise}
 */
export function create(user) {
  return User.forge(user).save();
}
