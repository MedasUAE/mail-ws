
var nodemailer = require('nodemailer');
var config = require('../config/config');
function sendEmail(reqBody, next) {
    var mailOptions = {}
    mailOptions = {
        from: config.from, // "info@theimcentre.com", // sender address
        to: reqBody.to, // list of receivers
        subject: reqBody.subject, // Subject line
        html: reqBody.body
    };

    var transporter = nodemailer.createTransport({
        host: config.host,
        port: config.emailPort,
        secure: true,
        requireTLS: true, //Force TLS,
        debug: true,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: config.username, // sender address
            pass: config.pass
        }
    });
    
    transporter.sendMail(mailOptions, (err, result) => {
        if (err) {
            
            return next(err);
        }
        
        return next(null, "sent mail successfully");
    });
}
exports.sendEmail = sendEmail;