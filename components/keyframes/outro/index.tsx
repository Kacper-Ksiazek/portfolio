// Tools
import { keyframes } from "@mui/material";

import { scaleToBottom, scaleToLeft, scaleToRight, scaleToTop } from "./scale";
import { fadeSimpleOUT, fadeToBottom, fadeToTop, fadeToLeft, fadeToRight } from "./fade";

export {
    scaleToBottom, //
    scaleToLeft,
    scaleToRight,
    scaleToTop,
    fadeSimpleOUT,
    fadeToBottom,
    fadeToLeft,
    fadeToRight,
    fadeToTop,
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
