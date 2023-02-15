// Types
import type { NextApiRequest } from "next";

export interface Request extends NextApiRequest {
    body: ValidatedData;
}

export interface JoiValidationSchema {
    author: any;
    subject: any;
    message: any;
    contact: {
        country: any;
        email: any;
        linkedIn: any;
        website: any;
    };
}

export interface ValidatedData {
    author: string;
    subject: string;
    message: string;
    contact: {
        country: string;
        email: string;
        linkedIn?: string;
        website?: string;
    };
}
