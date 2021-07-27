const data = require('./db.json')
const express = require('express')
const path = require('path')
const cors = require('cors')
const ctrl = require('./ctrl.js')

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(cors())


// app.get('/api/flags', ctrl.getFlag)

app.get('/api/flags', ctrl.getFlag)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})






const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Running on ${port}! :)`)
})