const model = require('../models/model')

module.exports.getSaldo = (req, res) => {
    const sql = `SELECT * FROM saldo`

    model(sql, res, 'Diambil!')
}

module.exports.postSaldo = (req, res) => {
    const sql = `INSERT INTO saldo(saldo) VALUES ("0")`

    model(sql, res, 'Dipost!')
}

module.exports.putSaldo = (req, res) => {
    const sql = `UPDATE saldo SET saldo="${req.body.saldo}" WHERE id="1"`

    model(sql, res, 'Diupdate!')
}