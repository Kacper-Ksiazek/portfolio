// Tools
import { styled, keyframes } from "@mui/material";
import formatTextViaBolding from "utils/client/formatTextViaBolding";
import { CSS_REFERENCES, SELECTORS } from "components/pages/http_status_code/css_references";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
// Styled components
import HTTPSTatusCodeWrapper from "components/pages/http_status_code/styles_components/MainWrapper";
import { fadeSimple } from "@/components/keyframes/intro";
import { repeat } from "@/utils/client/styled/repeat";

const pulse = keyframes({
    "0%": {
        opacity: 1,
    },
    "40%,60%": {
        opacity: 0,
    },
    "100%": {
        opacity: 1,
    },
});

const strokeIntroAnimation = keyframes({
    "0%": {
        transformOrigin: "left",
        transform: "rotate(45deg) scaleX(0)",
    },
    "100%": {
        transformOrigin: "left",
        transform: "rotate(45deg) scaleX(1)",
    },
});

const NoJavascriptWrapper = styled(HTTPSTatusCodeWrapper)(({ theme }) => ({
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

const PARAGRAPH_1 = formatTextViaBolding(
    `We've noticed that JavaScript is disabled in your browser. *In order to use this website, you'll need to enable JavaScript*. JavaScript is an essential part of almost every modern web application, because it serves as the engine that powers the interactive features and dynamic content that make the web so useful and engaging.`
);

const PARAGRAPH_2 = formatTextViaBolding(
    `Enabling JavaScript will allow you to fully experience all of the features and functionality of this website, including interactive forms, dynamic content, and real-time updates. *Without JavaScript, you may encounter errors* or missing content, and some features may not work at all.`
);

const PARAGRAPH_3 = formatTextViaBolding(
    `To enable JavaScript, open *your browser's settings and look for "javascript" word*. Alternatively, you can try to use a different browser or incogito card. Once done, you can go back, hit refresh button and enjoy the full experience of my website.`
);

const NoJavascript: FunctionComponent = () => {
    return (
        <NoJavascriptWrapper>
            <div id="js-logo">
                <PriorityHighIcon />
            </div>

            <h1 id={CSS_REFERENCES.HTTP_STATUS_CODE_TITLE}>JAVASCRIPT IS REQUIRED</h1>
            <p id={CSS_REFERENCES.EXPLANATION}>
                <span>{PARAGRAPH_1}</span>
                <span>{PARAGRAPH_2}</span>
                <span>{PARAGRAPH_3}</span>
                <span>Thanks for understanding.</span>
            </p>
        </NoJavascriptWrapper>
    );
};

export default NoJavascript;
