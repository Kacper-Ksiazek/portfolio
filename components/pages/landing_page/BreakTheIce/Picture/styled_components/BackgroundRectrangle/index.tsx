// Tools
import { styled } from "@mui/material";
import { forwardRef } from "react";
import { IDS, SELECTORS } from "../css_references";
import { applyResponsiveAnimations } from "./utils";
// Types
import type { ID } from "./keyframes/@types";
// Styled components

const { LEFT_HORIZONTAL, LEFT_VERTICAL, RIGHT_HORIZONTAL, RIGHT_VERTICAL } = SELECTORS;

const LEFT_BOTH: Selector = `${LEFT_HORIZONTAL}, ${LEFT_VERTICAL}`;
const RIGHT_BOTH: Selector = `${RIGHT_HORIZONTAL}, ${RIGHT_VERTICAL}`;
const HORIZONTAL_BOTH: Selector = `${RIGHT_HORIZONTAL}, ${LEFT_HORIZONTAL}`;
const VERTICAL_BOTH: Selector = `${RIGHT_VERTICAL}, ${LEFT_VERTICAL}`;

const Base = styled("span")(({ theme }) => {
    return {
        position: "absolute",
        borderRadius: "3px",

        [LEFT_BOTH]: {
            background: theme.palette.primary.main,
            bottom: "-15px",
            left: "-15px",
        },

        [LEFT_HORIZONTAL]: {
            width: "75%",
            height: "15px",
            ...applyResponsiveAnimations({
                id: "LEFT_HORIZONTAL",
                duration: 0.5,
                delays: {
                    intro: 0.2,
                    outro: 0.4,
                },
            }),
        },

        [LEFT_VERTICAL]: {
            width: "15px",
            height: "65%",
            ...applyResponsiveAnimations({
                id: "LEFT_VERTICAL",
                duration: 0.5,
                delays: {
                    intro: 0.6,
                    outro: 0,
                },
            }),
        },

        [RIGHT_BOTH]: {
            background: theme.palette.secondary.main,
            top: "-15px",
            right: "-15px",
        },

        [RIGHT_HORIZONTAL]: {
            width: "calc(75% - 100px)",
            height: "15px",
            ...applyResponsiveAnimations({
                id: "RIGHT_HORIZONTAL",
                duration: 0.5,
                delays: {
                    intro: 0,
                    outro: 0.6,
                },
            }),
        },

        [RIGHT_VERTICAL]: {
            width: "15px",
            height: "calc(65% - 100px)",
            ...applyResponsiveAnimations({
                id: "RIGHT_VERTICAL",
                duration: 0.5,
                delays: {
                    intro: 0.4,
                    outro: 0.2,
                },
            }),
        },

        // Responsive
        "@media (max-width:1600px)": {
            [LEFT_BOTH]: {
                bottom: "-10px",
                left: "-10px",
            },
            [RIGHT_BOTH]: {
                top: "-10px",
                right: "-10px",
            },
            [HORIZONTAL_BOTH]: {
                height: "10px",
            },
            [VERTICAL_BOTH]: {
                width: "10px",
            },
        },
        "@media (max-width:1220px)": {
            [LEFT_BOTH]: {
                bottom: "-8px",
                left: "-8px",
            },
            [RIGHT_BOTH]: {
                top: "-8px",
                right: "-8px",
            },
            [HORIZONTAL_BOTH]: {
                height: "8px",
            },
            [VERTICAL_BOTH]: {
                width: "8px",
            },
        },
        "@media (max-width:1000px)": {
            [LEFT_BOTH]: {
                bottom: "-10px",
                left: "-10px",
            },
            [RIGHT_BOTH]: {
                top: "-10px",
                right: "-10px",
            },
            [HORIZONTAL_BOTH]: {
                height: "10px",
            },
            [VERTICAL_BOTH]: {
                width: "10px",
            },
        },
        "@media (max-width:600px)": {
            [LEFT_BOTH]: {
                bottom: "-8px",
                left: "-8px",
            },
            [RIGHT_BOTH]: {
                top: "-8px",
                right: "-8px",
            },
            [HORIZONTAL_BOTH]: {
                height: "8px",
            },
            [VERTICAL_BOTH]: {
                width: "8px",
            },
        },
    };
});

const BackgroundRectangle = forwardRef<HTMLSpanElement | null, { id: ID }>((props, ref) => {
    return <Base id={IDS[props.id]} ref={ref} />;
});

BackgroundRectangle.displayName = "BackgroundRectangle";
export default BackgroundRectangle;
