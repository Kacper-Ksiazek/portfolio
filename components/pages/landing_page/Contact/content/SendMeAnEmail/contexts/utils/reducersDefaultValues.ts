import type { EmailForm, Request } from "../@types";

export const EMPTY_FORM_STATE: EmailForm = {
    author: "",
    country: null,
    email: "",
    github: "",
    message: "",
    subject: "",
    website: "",
};

export const EMPTY_REQUEST_STATE: Request = {
    errorCode: null,
    status: "fillingForm",
};
