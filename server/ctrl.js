const flags = require('./db.json')

module.exports = {
    getFlag: (req, res) => {
        res.status(200).send(flags)
    }
}