// Tools
import { keyframes } from "@mui/material";

export const DescriptionIntro_StageOne = keyframes({
    from: {
        width: "0",
        right: 0,
        left: "auto",
    },
    to: {
        width: "100%",
        right: 0,
        left: "auto",
    },
});
export const DescriptionIntro_StageTwo = keyframes({
    from: {
        height: "100%",
        top: "auto",
        bottom: 0,
    },
    to: {
        height: "10px",
        top: "auto",
        bottom: 0,
    },
});
export const DescriptionIntro_StageThree = keyframes({
    from: {
        left: 0,
        top: "auto",
        bottom: 0,
        right: "auto",
        width: "100%",
    },
    to: {
        width: "0",
        left: 0,
        bottom: 0,
        top: "auto",
        right: "auto",
    },
});
