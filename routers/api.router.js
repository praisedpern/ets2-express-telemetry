const apiRouter = require('express').Router()
const ets2Router = require('./ets2.router')
const atsRouter = require('./ats.router')

apiRouter.use('/ets2', ets2Router)
apiRouter.use('/ats', atsRouter)

module.exports = apiRouter