/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/19/16.
 */

import Message from '../models/Message';

export function fetchAll() {
  return Message.fetchAll({ withRelated: ['user'] });
}

/**
 * Sample Input:
 *  {
 *    message: 'TestName',
 *    user: {
 *      id: 1
 *    }
 *  }
 * @param user
 * @returns {Promise}
 */
export function create(message) {
  return Message.forge(message).save();
}

export function fetchById(id) {
  return Message.forge({ id: id }).fetch({ withRelated: ['user'] });
}
