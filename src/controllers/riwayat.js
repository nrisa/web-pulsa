const model = require('../models/model')
const {validationResult} = require('express-validator')

module.exports.getRiwayat = (req, res) => {
    const sql = `SELECT * FROM riwayat`

    model(sql, res, 'Diambil!')
}

module.exports.postRiwayat = (req, res) => {
    const err = validationResult(req)

    if(!err.isEmpty){
        let Error = new Error("invalid value")
        Error.status(400)
        Error.data = Error.array()
        throw Error
    }

    const sql = `INSERT INTO riwayat(tanggal, jenis, nomer_hp, nominal, provider) VALUES 
    (
        "${req.body.tanggal}",
        "${req.body.jenis}",
        "${req.body.nomer_hp}",
        "${req.body.nominal}",
        "${req.body.provider}"
    )`

    model(sql, res, 'Dipost!')
}
