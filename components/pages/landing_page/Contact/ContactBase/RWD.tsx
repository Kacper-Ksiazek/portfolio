// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1400px)"]: {
        "#contact-details-wrapper, #send-me-en-email-wrapper": {
            width: "calc(50% - 20px)",
        },
    },
    ["@media (max-width:1150px)"]: {
        "#send-me-en-email-wrapper": {
            width: "calc(60% - 20px)",
        },
        "#contact-details-wrapper": {
            width: "calc(40% - 20px)",
        },
    },
    ["@media (max-width:1000px)"]: {
        flexDirection: "column",
        "#contact-details-wrapper": {
            marginBottom: "64px",
        },
        "#send-me-en-email-wrapper": {
            height: "560px",
        },
        "#contact-details-wrapper, #send-me-en-email-wrapper": {
            width: "100%",
        },
    },
    ["@media (max-width:600px)"]: {
        marginTop: "12px",
        "#send-me-en-email-wrapper": {
            height: "570px",
            padding: "5px",
        },
    },
    ["@media (max-width:400px)"]: {
        "#send-me-en-email-wrapper": {
            h4: {
                fontSize: "28px",
            },
        },
    },
    ["@media (max-width:340px)"]: {
        "#send-me-en-email-wrapper": {
            h4: {
                fontSize: "24px",
            },
        },
    },
} as SxProps;
