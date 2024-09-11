const router = require('express').Router()
const goalRoute = require('./goalRoutes')

router.use('/goal', goalRoute)

module.exports = router