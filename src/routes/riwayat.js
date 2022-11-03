const express = require('express')
const {body} = require("express-validator")
const router = express.Router()

const { getRiwayat,postRiwayat } = require('../controllers/riwayat')

router.get('/data', getRiwayat)
router.post('/add', [
    body('nomer_hp').isLength({min: 10, max: 14}).withMessage("nomer handphone tidak valid")
], postRiwayat)

module.exports = router