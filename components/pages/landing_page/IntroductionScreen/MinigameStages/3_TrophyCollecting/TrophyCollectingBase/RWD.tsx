// Types
import type { SxProps } from "@mui/material";

export default {
    ["@media (max-height:840px)"]: {
        ".go-back": {
            marginTop: "24px",
        },
    },
    ["@media (max-height:760px)"]: {
        "p.message-to-winner": {
            marginTop: "32px",
        },
        ".podium-place": {
            height: "350px",
            width: "180px",
            ".podium-place-base": {
                borderRadius: "16px 16px 4px 4px",
            },
            "&.gold": {
                width: "240px",
                ".podium-place-base": {
                    height: "56px",
                },
                ".technology-icon": {
                    width: "72px",
                    height: "72px",
                },
                ".trophy-wrapper": {
                    "svg#trophy": {
                        fontSize: "18rem",
                    },
                },
            },
            "&.silver": {
                ".podium-place-base": {
                    height: "48px",
                },
                ".trophy-wrapper svg": {
                    fontSize: "14rem",
                },
            },
            "&.bronze": {
                ".podium-place-base": {
                    height: "40px",
                },
                ".trophy-wrapper svg": {
                    fontSize: "12rem",
                },
            },
        },
    },
    ["@media (max-height:650px)"]: {
        ".go-back": {
            marginTop: "24px",
        },
        ".podium-place": {
            height: "320px",
            width: "180px",
            "&.gold": {
                width: "240px",
                ".podium-place-base": {
                    height: "48px",
                },
                ".technology-icon": {
                    width: "64px",
                    height: "64px",
                },
                ".trophy-wrapper": {
                    "svg#trophy": {
                        fontSize: "16rem",
                    },
                },
            },
            "&.silver": {
                ".podium-place-base": {
                    height: "40px",
                },
                ".trophy-wrapper svg": {
                    fontSize: "12rem",
                },
            },
            "&.bronze": {
                ".podium-place-base": {
                    height: "32px",
                },
                ".trophy-wrapper svg": {
                    fontSize: "10rem",
                },
            },
        },
    },
} as SxProps;
