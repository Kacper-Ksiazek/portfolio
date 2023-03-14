// Tools
import { keyframes } from "@mui/material";

export const timelineConnectionIntro = keyframes({
    from: {
        width: 0,
    },
    to: {
        width: "100%",
    },
});

export const timelineCoreHalfIntro = keyframes({
    from: {
        height: 0,
    },
    to: {
        height: "50%",
    },
});
export const timelineCoreEntireIntro = keyframes({
    from: {
        height: 0,
    },
    to: {
        height: "100%",
    },
});

export const timeline = {
    connection: timelineConnectionIntro,
    coreHalf: timelineCoreHalfIntro,
    coreEntire: timelineCoreEntireIntro,
};
