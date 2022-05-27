const email = {
    "service": "gmail",
    "host": "smtp.gmail.com",
    "auth": {
      "user": process.env.EMAIL,
      "pass": process.env.PASSWORD
    }
}

module.exports = email;