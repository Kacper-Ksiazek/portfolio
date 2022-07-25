// Tools
import joi from "joi";
import nodemailer from "nodemailer";
import { InvalidRequestedBody } from "@/utils/api/errors";
import restrictions from "@/utils/restrictions/sendEmailForm";
// Types
import type { Transporter } from "nodemailer";
import type { Restriction } from "@/@types/Restriction";
import type { JoiValidationSchema, Request, ValidatedData } from "./@types";

export default class HandleSendingEmailForm {
    private transporter: Transporter;

    public constructor(private req: Request) {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_ACCOUNT_ADDRESS,
                pass: process.env.EMAIL_ACCOUNT_PASSWORD,
            },
        });
    }

    public async sendEmail() {
        const data = this.validateRequest();

        await new Promise((resolve, reject) => {
            this.transporter.sendMail(
                {
                    from: "demo email",
                    to: "kacper.b.ksiazek@gmail.com",
                    subject: data.subject,
                    text: JSON.stringify(data),
                    html: `
                        <style>
                        
                        </style>
                        <h1 style='margin: 20px 0 0 0; font-size: 32px; color:#3D2645''>There's a new job <span style='color: #DA4167'>opportunity</span> !!!</h1>
                        <p style='color: #000; font-size: 16px; margin: 0'>A new message has been send by: <strong style='color: #DA4167'>${data.author}</strong></p>
                        <h3 style='font-size: 20px; margin: 6px 0; color:#3D2645'>Message: </h3>
                        <p style='color: #000; font-size: 16px; margin: 0'>${data.message}</p>
                        <h3 style='font-size: 20px; margin: 6px 0; color:#3D2645'>Contact: </h3>
                        <ul style='padding-left: 16px; margin: 0'>
                            <li style='font-size:16px; color: #000'>Country: <strong style='color: #DA4167'>${data.contact.country}<strong></li>
                            <li style='font-size:16px; color: #000'>Email address: <strong style='color: #DA4167'>${data.contact.email}<strong></li>
                            <li style='font-size:16px; color: #000'>Website ${data.contact.website}</li>
                            <li style='font-size:16px; color: #000'>Github: ${data.contact.github}</li>
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

    private validateRequest(): ValidatedData {
        const transformIntoJoi = ({ max, min }: Restriction) => joi.string().min(min).max(max);

        const scheme = joi.object({
            author: transformIntoJoi(restrictions.author).required(),
            subject: transformIntoJoi(restrictions.subject).required(),
            message: transformIntoJoi(restrictions.message).required(),
            contact: joi.object({
                country: transformIntoJoi(restrictions.contact.country).required(),
                email: transformIntoJoi(restrictions.contact.country).required().email({ tlds: false }),
                github: transformIntoJoi(restrictions.contact.github).custom((val, helper) => {
                    if (val.slice(0, 19) === restrictions.contact.github.startWith) return val;
                    else {
                        return helper.error("github.invalid");
                    }
                }),
                website: transformIntoJoi(restrictions.contact.website),
            } as JoiValidationSchema["contact"]),
        } as Omit<JoiValidationSchema, "contact">);

        const { error, value } = scheme.validate(this.req.body);

        if (error) {
            throw new InvalidRequestedBody();
        }

        return value as ValidatedData;
    }
}
