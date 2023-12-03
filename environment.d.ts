export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VERCEL_ENV: string;
            //
            POSTGRES_URL: string;
            POSTGREPOSTGRES_URL: string;
            POSTGRES_URLPOSTGRES_URL: string;
            PPOSTGRES_URL: string;
            PPOSTGRES_URL: string;
            POSTGPOSTGRES_URL: string;
            POSTGPOSTGRES_URL: string;
            //
            EMAIL_ACCOUNT_ADDRESS: string;
            EMAIL_ACCOUNT_PASSWORD: string;
            EMAIL_RECEIVING_MESSAGES: string;
            //
            NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
            RECAPTCHA_SECRET_KEY: string;
            //
            NEXT_PUBLIC_ROOT_URL: string;
            NEXT_PUBLIC_APP_NAME: string;
        }
    }
}
