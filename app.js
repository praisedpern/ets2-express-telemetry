const express = require('express')
const app = express()
const apiRouter = require('./routers/api.router')

app.use('/api', apiRouter)

app.all('/', (err, req, res, next) => {
    console.log(err)
    res.status(500).send({msg: 'Internal server error'})
})

module.exports = app