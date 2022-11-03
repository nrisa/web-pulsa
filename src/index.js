const express = require('express')
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(cors())
app.use(multer().single('none'))
app.use(bodyParser.json())

// router
const {saldo, riwayat} = require('./routes')

app.use('/saldo/v1', saldo)
app.use('/riwayat/v1', riwayat)

app.listen(port, console.log(`Server running on http://localhost:${port}`))
