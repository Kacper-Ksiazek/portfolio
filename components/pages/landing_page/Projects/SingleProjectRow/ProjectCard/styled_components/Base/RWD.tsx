import { SxProps } from "@/@types/MUI";

export default {
    "@media (max-width:1400px)": {
        width: "calc(50% + 40px)",
        marginBottom: "32px",
    },
    "@media (max-width:1200px)": {
        width: "calc(50% + 90px)",
    },
    "@media (max-width:1100px)": {
        width: "calc(50% + 140px)",
        marginBottom: "48px",
    },
    "@media (max-width:1000px)": {
        width: "100%",
        marginBottom: "64px",
    },

    "@media (max-width:750px)": {
        maxWidth: "500px",
        "&.even": {
            padding: 0,
            flexDirection: "column-reverse",
        },
        "&.odd": {
            padding: 0,
            flexDirection: "column-reverse",
        },
        ".single-project-text-content-wrapper": {
            width: "100%",
            margin: "0 !important",
            ".MuiTypography-body2, .duration": {
                fontSize: "16px",
                svg: {
                    fontSize: "24px",
                },
            },
        },
        ".single-technology.small": {
            fontSize: "16px",
            padding: "4px 8px",
        },
    },
} as SxProps;
