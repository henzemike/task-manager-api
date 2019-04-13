const sgMail = require('@sendgrid/mail');



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yashuachrist@gmail.com',
    subject: 'Welcome to the App',
    text: `Welcome to the app, ${name}. Let Me know how you are liking the app.`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yashuachrist@gmail.com',
    subject: 'Sorry to see you go',
    text: `We are sorry to see you leaving ${name}, please provide feedback on what we need to improve to keep you and make others happy with the app!`
  });
};


module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
};