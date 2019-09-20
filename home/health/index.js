const express = require('express');
const controller = require('./controller');

const router = express.Router({ mergeParams: true });

router.route('/')
  .get(controller.health);

module.exports = router;
