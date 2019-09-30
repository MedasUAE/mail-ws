module.exports = {
    name: "mailAPI",
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    host : process.env.HOST || "",
    emailPort : process.env.EMAILPORT || 465,
    username : process.env.USERNAME || "", 
    pass : process.env.PSW || '',
}