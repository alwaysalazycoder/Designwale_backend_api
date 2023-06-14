const Feedback = require("../models/connectModel");
const sendEmail = require("../utils/sendEmail");
const adminMail = "website.email.service11@gmail.com";

exports.postFeedbacks = async (req, res, next) => {

    const { name, email, whatsapp_contact, description} = req.body;

    const userFeedback = await Feedback.create({
        name, email, description, whatsapp_contact
    });

    if (!userFeedback) {
        console.log("Error while parsing data from form");
    }
    const message =
    `
    Name : ${name} \n\n 
    Email : ${email} \n\n
    Whatsapp contact number : ${whatsapp_contact} \n\n
    description : ${description} \n\n
                    
    `

    try {
        await sendEmail({
            email: "imintrouble0117@gmail.com",
            subject: `Query for design waale.....`,
            message: message,

        });

        res.status(200).json({
            success: true,
            message: `Email successfully sent to admin}`,
            userFeedback
        })
    }
    catch (err) {
        console.log("Error while sending mail : " + err);
    }

}