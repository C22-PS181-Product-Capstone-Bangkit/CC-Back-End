const nodemailer = require("nodemailer");
const email = require("../config/email");

const transport = nodemailer.createTransport(email);

const sendEmail = async (to, subject, html) => {
  const msg = { from: email.from, to, subject, html };
  await transport.sendMail(msg);
};

module.exports = {
  transport,
  sendEmail,
};
