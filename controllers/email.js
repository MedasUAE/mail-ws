var nodemailer = require('nodemailer');
var config = require('../config/config');
const logger = require('./logger');


function sendEmail(reqBody, next) {
    const mailOptions = {
        from: config.from, // "info@theimcentre.com", // sender address
        to: reqBody.to, // list of receivers
        subject: reqBody.subject, // Subject line
        html: reqBody.body
    };

    const transporter = nodemailer.createTransport({
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
    
    logger.info("Sending email to: " + reqBody.to)
    transporter.sendMail(mailOptions, (err, result) => {
        if (err) {
            logger.error(JSON.stringify(err))
            return next(err);
        }
        logger.info("Sent mail successfully to: " + reqBody.to)
        return next(null, "sent mail successfully");
    });
}
exports.sendEmail = sendEmail;