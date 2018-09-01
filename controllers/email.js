
var nodemailer = require('nodemailer');
var config = require('../config/config');
function sendEmail(reqBody, next) {
   var mailOptions= {}
         mailOptions = {
            from:config.from, // sender address
            to:config.to, // list of receivers
            subject: reqBody.subject, // Subject line
            html:"Hi Sujit, you got message from "+reqBody.fromName+"\n"+
            "Email Id  "+reqBody.fromEmail+"\n"+
              reqBody.message// plain text body
        }; 
  
    var transporter = nodemailer.createTransport({
        service: config.service,
        auth: {
            user: config.from,// sender address
            pass: config.pass
        }
    });
    transporter.sendMail(mailOptions, (err, result) => {
        if (err) return next(err);
        return next(null, "sent mail successfully");
    });
}
exports.sendEmail = sendEmail;