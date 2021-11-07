const telemetryRouter = require('express').Router()
const { getTelemetry } = require('../controllers/telemetry.controllers')

telemetryRouter.use('/', getTelemetry)

module.exports = telemetryRouter