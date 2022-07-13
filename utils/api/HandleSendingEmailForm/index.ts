// Tools
import nodemailer from "nodemailer";
import { MethodNotAllowed } from "@/utils/api/errors";

export default class HandleSendingEmailForm {
    public constructor() {
        //
    }

    public async sendEmail() {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_ACCOUNT_ADDRESS,
                pass: process.env.EMAIL_ACCOUNT_PASSWORD,
            },
        });

        const subject = "Email Subject";
        const message = "Email message";
        const sender = "Name surname";

        const contact = {
            website: "https://www.youtube.com/watch?v=X7gQU5Jp53k&list=RDMVbjHfLWIzs&index=11",
            github: "https://github.com/Kacper-Ksiazek/portfolio",
            email: "jebac_gorzen@gmail.com",
            country: "Poland",
        };

        await new Promise((resolve, reject) => {
            transporter.sendMail(
                {
                    from: "demo email",
                    to: "kacper.b.ksiazek@gmail.com",
                    subject,
                    text: message,
                    html: `
                        <style>
                        
                        </style>
                        <h1 style='margin: 20px 0 0 0; font-size: 32px'>There's a new job <span style='color: #DA4167'>opportunity</span> !!!</h1>
                        <p style='color: #000; font-size: 16px; margin: 0'>A new message has been send by: <strong style='color: #DA4167'>${sender}</strong></p>
                        <h3 style='font-size: 20px; margin: 6px 0; color:#3D2645'>Message: </h3>
                        <p style='color: #000; font-size: 16px; margin: 0'>${message}</p>
                        <h3 style='font-size: 20px; margin: 6px 0; color:#3D2645'>Contact: </h3>
                        <ul style='padding-left: 16px; margin: 0'>
                            <li style='font-size:16px; color: #000'>Country: <strong style='color: #DA4167'>${contact.country}<strong></li>
                            <li style='font-size:16px; color: #000'>Email address: <strong style='color: #DA4167'>${contact.email}<strong></li>
                            <li style='font-size:16px; color: #000'>Website ${contact.website}</li>
                            <li style='font-size:16px; color: #000'>Github: ${contact.github}</li>
                        </ul>
                        `,
                    priority: "high",
                    disableUrlAccess: true,
                },
                (err) => {
                    if (err) reject();
                    else resolve(1);
                }
            );
        });
    }
}
