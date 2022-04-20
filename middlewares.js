
const checkBody = (req, res, next) => {
    const { date } = req.params;
    var timestamp = Date.parse(date);
    if (isNaN(timestamp) == false) {
        req.timestamp = new Date(timestamp);
        next();
    }
    else {
        return res.send({ error : "Invalid Date" });
    }
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


