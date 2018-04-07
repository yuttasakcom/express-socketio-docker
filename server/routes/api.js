const router = require('express').Router()

const LogController = require('../controllers/LogController')

router.post('/logs', LogController.create)

module.exports = router
