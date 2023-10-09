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

const pulse = keyframes({
    "0%": {
        opacity: 0,
    },
    "30%,70%": {
        opacity: 1,
    },
    "100%": {
        opacity: 0,
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
        },
        "&::after": {
            content: "''",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(45deg)",
            width: "150%",
            height: "8px",
            borderRadius: "2px",
            background: theme.palette.error.main,
        },
        svg: {
            position: "absolute",
            top: "-12px",
            right: "-36px",
            fontSize: "48px",
            color: theme.palette.error.main,
            animation: `${pulse} 2s ease-in-out infinite`,
        },
    },

    [SELECTORS.EXPLANATION]: {
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        span: {
            textAlign: "left",
        },
        strong: {
            fontWeight: 500,
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
