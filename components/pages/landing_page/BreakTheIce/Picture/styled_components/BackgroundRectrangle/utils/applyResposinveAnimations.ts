// Tools
import keyframes from "../keyframes";
// Types
import type { Styles } from "@/@types/MUI";
import type { ID } from "../keyframes/@types";

interface Params {
    id: ID;
    duration: number;
    delays: {
        intro: number;
        outro: number;
    };
}

export default function applyResponsiveAnimations(params: Params): Styles {
    const { intro, outro } = keyframes[params.id];
    const { duration, delays } = params;

    return {
        "@media (min-width:1601px)": {
            "&.intro": {
                animation: `${intro._15px} ${duration}s ${delays.intro}s linear both`,
            },
            "&.outro": {
                animation: `${outro._15px} ${duration}s ${delays.outro}s linear both`,
            },
        },
        "@media (max-width:1600px)": {
            "&.intro": {
                animation: `${intro._10px} ${duration}s ${delays.intro}s linear both`,
            },
            "&.outro": {
                animation: `${outro._10px} ${duration}s ${delays.outro}s linear both`,
            },
        },
        "@media (max-width:1200px)": {
            "&.intro": {
                animation: `${intro._8px} ${duration}s ${delays.intro}s linear both`,
            },
            "&.outro": {
                animation: `${outro._8px} ${duration}s ${delays.outro}s linear both`,
            },
        },
        "@media (max-width:1000px)": {
            "&.intro": {
                animation: `${intro._10px} ${duration}s ${delays.intro}s linear both`,
            },
            "&.outro": {
                animation: `${outro._10px} ${duration}s ${delays.outro}s linear both`,
            },
        },
        "@media (max-width:600px)": {
            "&.intro": {
                animation: `${intro._8px} ${duration}s ${delays.intro}s linear both`,
            },
            "&.outro": {
                animation: `${outro._8px} ${duration}s ${delays.outro}s linear both`,
            },
        },
    };
}
