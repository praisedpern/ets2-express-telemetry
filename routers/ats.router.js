const atsRouter = require('express').Router()
const telemetryRouter = require('./telemetry.router')

atsRouter.use('/telemetry', telemetryRouter)

module.exports = atsRouter
