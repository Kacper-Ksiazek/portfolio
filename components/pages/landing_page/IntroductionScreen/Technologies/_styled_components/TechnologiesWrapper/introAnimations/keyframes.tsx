// Tools
import { keyframes } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";

const singleTechnologyPulse = keyframes({
    "0%,100%": {
        opacity: 0.2,
    },
    "33%,66%": {
        opacity: 0.3,
    },
});

// It has to be done like that...
const singleTechnologyPulse2 = keyframes({
    "0%,100%": {
        opacity: 0.2,
    },
    "33%,66%": {
        opacity: 0.3,
    },
});

export { fadeSimple, singleTechnologyPulse, singleTechnologyPulse2 };
