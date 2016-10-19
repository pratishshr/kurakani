/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/20/16.
 */

import * as messageDao from '../daos/messageDao';

export function fetchAll() {
  return messageDao.fetchAll().then((response) => {
    return {
      data: response.toJSON()
    };
  });
}

export function create(message) {
  return messageDao.create(message);
}

export function fetchById(id) {
  return messageDao.fetchById(id);
}
