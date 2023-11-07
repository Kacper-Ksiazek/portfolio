import { SxProps } from "@/@types/MUI";
import { SELECTORS } from "landing_page/Projects/SingleProjectRow/css_references";
import { SELECTORS as TECHNOLOGIES_LIST } from "components/atoms/TechnologiesList/css_references";

export default {
    "@media (max-width:1520px)": {
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
        [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
            width: "100%",
            margin: "0 !important",
            ".MuiTypography-body2, .duration": {
                fontSize: "16px",
                svg: {
                    fontSize: "24px",
                },
            },
        },
        [`${TECHNOLOGIES_LIST.SINGLE_TECHNOLOGY}.small`]: {
            fontSize: "16px",
            padding: "4px 8px",
        },
    },
} as SxProps;
