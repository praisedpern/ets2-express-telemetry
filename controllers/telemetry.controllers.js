const { readTelemetry } = require('../models/telemetry.models')

exports.getTelemetry = (req, res, next) => {
    return readTelemetry().then((telemetry) => {
    return res.status(200).send(telemetry)
    })
    .catch(next)
}
