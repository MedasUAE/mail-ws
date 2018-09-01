module.exports = {
    name: "mailAPI",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    from: process.env.USER || "munquasim3@gmail.com",// sender address
    pass : process.env.DB_PSW || '85----85',
    to : process.env.TO || "munquasim4@gmail.com;munquasim3@gmail.com;talat@medasuae.com",// list of receivers
    service : process.env.SERVICE || 'gmail' 
}