export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EMAIL_ACCOUNT_ADDRESS: string;
            EMAIL_ACCOUNT_PASSWORD: string;
            EMAIL_RECEIVING_MESSAGES: string;
            //
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
            RECAPTCHA_SECRET_KEY: string;
        }
    }
}
