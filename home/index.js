const express = require('express');
const controller = require('./controller');
const healthRouter = require('./health');
const echoRouter = require('./echo');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(controller.home);

router.use('/health', healthRouter);
router.use('/echo', echoRouter);

module.exports = router;

