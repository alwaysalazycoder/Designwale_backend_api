const nodeMailer = require('nodemailer');

const sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        // secure: true,
        service: "gmail",
        auth: {
            user: "website.email.service11@gmail.com",
            pass: process.env.SMTP_PASSWORD,
        }
    })

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;