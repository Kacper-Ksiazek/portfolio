// Types
import type { Restriction } from "@/@types/Restriction";

export interface SendEmailFormRestrictions {
    subject: Restriction;
    author: Restriction;
    message: Restriction;
    contact: {
        linkedIn: Restriction;
        website: Restriction;
        email: Restriction;
        country: Restriction;
    };
}

export default {
    author: { min: 3, max: 60 },
    subject: { min: 3, max: 60 },
    message: { min: 20, max: 512 },
    contact: {
        country: { min: 3, max: 60 },
        email: { min: 3, max: 60 },
        linkedIn: { min: 22, max: 255, startWith: `https://www.linkedin.com/` },
        website: { min: 6, max: 60 },
    },
} as SendEmailFormRestrictions;
