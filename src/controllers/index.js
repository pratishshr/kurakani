/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/17/16.
 */

import express from 'express';

import messageController from './messageController';

let router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'KuraKani' });
});

router.use('/messages', messageController);

export default router;
