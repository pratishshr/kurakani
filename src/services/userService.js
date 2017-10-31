/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 10/19/16.
 */

import * as userDao from '../daos/userDao';

export function create(user) {
  return userDao.create(user);
}
