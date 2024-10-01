const router = require('express').Router()
const goalRoute = require('./goalRoutes')

router.use('/goals', goalRoute)

module.exports = router