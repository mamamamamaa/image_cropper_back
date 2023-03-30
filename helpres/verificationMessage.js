const mongoose = require("mongoose");
const { SENDER_EMAIL, BASE_URL } = process.env;

const verificationMessage = (email) => {
  const verificationToken = new mongoose.Types.ObjectId();
  const verifyMessage = {
    to: email,
    from: SENDER_EMAIL,
    subject: "Verification code",
    text: "To verify your account you should click on link bellow",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email</a>`,
  };
  return { verifyMessage, verificationToken };
};

module.exports = verificationMessage;
