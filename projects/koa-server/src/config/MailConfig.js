"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(sendInfo) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '', // generated ethereal user
            pass: '', // generated ethereal password
        },
    });

    let url = 'http://localhost:8080/login';

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Validate User Account" <no-reply@infoxchange.com>', // sender address
        to: `${sendInfo.email}`, // list of receivers
        subject: `Hi, ${sendInfo.user} - Verify your account`, // Subject line
        text: `Your invitation code is ${sendInfo.code}. The expiry time is ${sendInfo.expire}`, // plain text body
        html: `
            <div style="border: 1px solid #dcdcdc;color: #676767;width: 600px; margin: 0 auto; padding-bottom: 50px;position: relative;">
            <div style="height: 60px; background: #393d49; line-height: 60px; color: #58a36f; font-size: 18px;padding-left: 10px;">BigFront BBS -- Welcome to BigFront BBS</div>
            <div style="padding: 25px">
              <div>Welcome ${sendInfo.user}! Your reset password link expires in 30 minutes. Please reset your password before ${sendInfo.expire}: </div>
              <a href="${url}" style="padding: 10px 20px; color: #fff; background: #009e94; display: inline-block;margin: 15px 0;">Reset Password</a>
              <div style="padding: 5px; background: #f2f2f2;">If this email is not triggered by yourself, please do not click Reset Password button. Otherwise your account will be bound by other people.</div>
            </div>
            <div style="background: #fafafa; color: #b4b4b4;text-align: center; line-height: 45px; height: 45px; position: absolute; left: 0; bottom: 0;width: 100%;">System email, please do not reply.</div>
        </div>
        `, // html body
    });

    return 'Message sent: ' + info.messageId
}

export default sendMail