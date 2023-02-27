// Tools
import { keyframes } from "@mui/material";

import { scaleToBottom, scaleToLeft, scaleToRight, scaleToTop } from "./scale";
// import { fadeToBottom, fadeToLeft, fadeToRight, fadeToTop, fadeSimple } from "./fade";
import { fadeSimpleOUT } from "./fade";

export {
    scaleToBottom, //
    scaleToLeft,
    scaleToRight,
    scaleToTop,
    fadeSimpleOUT,
    // fadeToBottom,
    // fadeToLeft,
    // fadeToRight,
    // fadeToTop,
    // fadeSimple,
};

export const hidePseudoElement = keyframes({
    to: {
        content: "''",
    },
});

export const hideElement = keyframes({
    to: {
        display: "none",
    },
});
