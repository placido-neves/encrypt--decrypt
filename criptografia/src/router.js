const router = require('express').Router()
const crypt = require('./crypto/crypto')

router.get('/dencrypted/:id',crypt.decrypt)

router.post("/encrypted", crypt.encrypt)


module.exports = router