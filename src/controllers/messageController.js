/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/18/16.
 */

import express from 'express';

import * as messageService from '../services/messageService';

let router = express.Router();

router.get('/', (req, res, next) => {
  messageService.fetchAll().then((response) => {
    res.json(response);
  }).catch((err) => {
  });
});

export default router;
