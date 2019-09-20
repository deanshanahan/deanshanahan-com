const express = require('express');
const controller = require('./controller');

const router = express.Router({ mergeParams: true });

router.route('/')
  .post(controller.echo);

module.exports = router;
