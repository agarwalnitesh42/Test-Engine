var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
function sendMail(){

    var smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'vsvaibhav2@gmail.com',
            pass: '8802494091vishu'
        }
    };
//var transporter = nodemailer.createTransport('smtps://vsvaibhav2@gmail.com:8802494091vishu');
    var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo " <foo@blurdybloop.com>', // sender address
    to: 'vsvaibhav2016@gmail.com,geetanshjain2k1@gmail.com,lakshit.aman@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
}
module.exports=sendMail;