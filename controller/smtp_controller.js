const nodemailer = require('nodemailer');


exports.sendMail = async (req, res , next) => {

    try {
        const to = req.body.to
        const from = req.body.from;
        const message = req.body.message;
      
const transporter =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.GMAIL_APP_PASS}`
    }
  });

  const mailOptions = {
    from: `${from}`,
    to: `${to}`,
    subject: 'From Blood Line ',
    text:` This mail if form ${from} see the actual  message bellow ....

    ${message}`
  };


  const email =  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
        console.log(message);

       
      res.status(200).json({
        status: 'success',
        message: email,
       
      })
  
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: 'email not sand',
        error: error.message
      })
    }
  
  }