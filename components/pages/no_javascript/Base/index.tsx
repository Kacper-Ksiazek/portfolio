// Tools
import { styled } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { SELECTORS } from "components/pages/http_status_code/css_references";
// Keyframes
import { pulse, strokeIntroAnimation } from "./keyframes";
import { fadeSimple } from "@/components/keyframes/intro";
// Styled components
import HTTPSTatusCodeWrapper from "components/pages/http_status_code/styles_components/MainWrapper";

export default styled(HTTPSTatusCodeWrapper)(({ theme }) => ({
    "div#js-logo": {
        width: "144px",
        height: "144px",
        position: "relative",
        "&::before": {
            content: "''",
            ...theme.mixins.absolute_full,
            background: 'url("/images/technologies/pink/javascript.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(1)",
            animation: `${fadeSimple} .3s .4s linear both`,
        },
        "&::after": {
            content: "''",
            position: "absolute",
            top: "-6px",
            left: "-6px",
            width: "150%",
            height: "8px",
            borderRadius: "2px",
            background: theme.palette.error.main,
            animation: `${strokeIntroAnimation} .24s 1.5s linear both`,
        },
        svg: {
            position: "absolute",
            top: "-12px",
            right: "-36px",
            fontSize: "48px",
            color: theme.palette.error.main,
            animation: `${fadeSimple} .3s 1.6s linear both, ${pulse} 1.4s 2s ease-in-out infinite`,
        },
    },

    [SELECTORS.HTTP_STATUS_CODE_TITLE]: {
        animation: `${fadeSimple} .3s .8s linear both`,
    },

    [SELECTORS.EXPLANATION]: {
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        strong: {
            fontWeight: 500,
        },
        "&>span": {
            textAlign: "left",
            ...repeat(4, (index) => {
                return {
                    animation: `${fadeSimple} .3s ${1.2 + index * 0.2}s linear both`,
                };
            }),
        },
    },

    "@media (max-width:700px)": {
        paddingTop: "96px",
        height: "auto",
    },
}));
