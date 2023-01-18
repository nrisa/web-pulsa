const db = require('./db_config')

const model = (sql, res, msg) => {
    db.query(sql, (err, result) => {
        if(err) throw err
        res.status(200).json({
            message: `data berhasil ${msg}`,
            data: result
        })
    })
}

module.exports = model