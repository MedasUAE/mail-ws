module.exports = {
    name: "mailAPI",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    from: process.env.USER || "sender@mail.com",// sender address
    to : process.env.TO || "xyz@medasuae.com;abc@medasuae.com",// list of receivers
    service : process.env.SERVICE || 'gmail',
    host : process.env.HOST || "hostaddress",
    emailPort : process.env.EMAILPORT || 587,
    username : process.env.USERNAME || "username", 
    pass : process.env.PSW || '85----85',
}