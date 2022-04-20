const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router({ mergeParams : true });
const { checkBody, buildResponse} = require('./middlewares');

//router.use(checkBody);

router.get('/:date',checkBody, buildResponse);

router.get('/', (req, res) => {
    const date = new Date();
    const response = {
        "unix": date.getTime(),
        "utc": date.toUTCString()
    }
    res.send(response);
});

module.exports = router;