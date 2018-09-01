
var email = require('../controllers/email');
var errs = require('restify-errors');

module.exports = function (server) {
    server.post("/sendemail", (req, res) => {
        email.sendEmail(req.body, (err, result) => {
            if (err) return res.send(400, { error: err });
            return res.json({ data: result });
        });
    });
    

}