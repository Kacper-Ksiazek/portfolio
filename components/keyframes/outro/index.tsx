// Tools
import { keyframes } from "@mui/system";

import { scaleToBottom, scaleToLeft, scaleToRight, scaleToTop } from "./scale";
// import { fadeToBottom, fadeToLeft, fadeToRight, fadeToTop, fadeSimple } from "./fade";

export {
    scaleToBottom, //
    scaleToLeft,
    scaleToRight,
    scaleToTop,
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
