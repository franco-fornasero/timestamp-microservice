
const checkBody = (req, res, next) => {
    let { date } = req.params;
    if (!date.includes('-')){
        date = parseInt(date);
    }
    var timestamp = new Date(date);
    if (timestamp == 'Invalid Date') {
        return res.send({ error : "Invalid Date" });
    }
    req.timestamp = timestamp;
    next();
}

const buildResponse = (req, res, next) => {
    const response = {
        "unix": req.timestamp.getTime(),
        "utc": req.timestamp.toUTCString()
    }
    return res.send(response);
}

module.exports = { 
    checkBody,
    buildResponse
};


