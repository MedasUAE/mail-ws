
var nodemailer = require('nodemailer');
var config = require('../config/config');
function sendEmail(reqBody, next) {
   var mailOptions= {}
         mailOptions = {
            from:config.from, // sender address
            to:config.to, // list of receivers
            subject: reqBody.subject, // Subject line
            html:"Hi,\n You have got message from "+reqBody.fromName+"\n"+
            "Email Id: "+reqBody.fromEmail+"\n"+
            reqBody.message// plain text body
        }; 
  
    var transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: false,
        auth: {
            user: config.username, // sender address
            pass: config.pass
        }
    });
    transporter.sendMail(mailOptions, (err, result) => {
        if (err) return next(err);
        return next(null, "sent mail successfully");
    });
}
exports.sendEmail = sendEmail;