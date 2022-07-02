const router = require('express').Router()
const crypt = require('./service')

router.get('/dencrypted/:id',crypt.decrypt)

router.post("/encrypted", crypt.encrypt)


module.exports = router