const ets2Router = require('express').Router()
const telemetryRouter = require('./telemetry.router')

ets2Router.use('/telemetry', telemetryRouter)

module.exports = ets2Router