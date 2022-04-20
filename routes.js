const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router({ mergeParams : true });
const { checkBody, buildResponse} = require('./middlewares');

//router.use(checkBody);

router.get('/:date',checkBody, buildResponse);

module.exports = router;