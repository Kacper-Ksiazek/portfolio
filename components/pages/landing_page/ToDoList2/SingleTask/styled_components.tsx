// Tools
import { styled, alpha, keyframes } from "@mui/material";
import { scaleFromBottom } from "@/components/keyframes/intro";
import { SELECTORS, SINGLE_TASK_STAGES } from "../css_references";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimpleOUT, scaleToLeft } from "@/components/keyframes/outro";

const hideSingleTaskWrapper = keyframes({
    from: {
        maxHeight: "100px",
    },
    to: {
        maxHeight: 0,
        margin: 0,
        padding: 0,
        transform: "scaleX(0)",
    },
});

export const Background = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    background: theme.palette.secondary.main,
    zIndex: -1,
    transform: "scaleX(0)",
    transition: "transform .3s",
    transformOrigin: "left",
    "&.active": {
        transform: "scaleX(1)",
    },
}));

export const SingleTaskBase = styled("div")(({ theme }) => ({
    background: theme.palette.background.default,
    width: "720px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "8px 12px",
    borderRadius: "5px",
    position: "relative",
    paddingRight: "40px",
    zIndex: 1,
    backdropFilter: "blur(3px)",
    "&:not(&:nth-of-type(1))": {
        marginTop: "24px",
    },

    [`&.${SINGLE_TASK_STAGES.CHECKED}`]: {
        background: theme.palette.background.lightSectionBackground,
        [SELECTORS.SINGLE_TASK.CHECK_ICON]: {
            svg: {
                opacity: 1,
            },
        },
        [SELECTORS.SINGLE_TASK.DESCRIPTION]: {
            "&::before": {
                transform: "scaleX(1)",
            },
        },
        [SELECTORS.SINGLE_TASK.BACKGROUND]: {
            transform: "scaleX(0)",
        },
        [SELECTORS.SINGLE_TASK.LABEL]: {
            background: "none",
            color: alpha("#fff", 0.3),
            border: "2px solid",
        },
        color: alpha("#fff", 0.3),
    },

    [`&.${SINGLE_TASK_STAGES.DELETING}`]: {
        animation: chainAnimations([
            [scaleToLeft, 0.3, 0.5],
            [hideSingleTaskWrapper, 0.15, 0.1],
        ]),
        [[
            SELECTORS.SINGLE_TASK.DESCRIPTION, //
            SELECTORS.SINGLE_TASK.LABELS_WRAPPER,
            SELECTORS.SINGLE_TASK.CHECK_ICON,
        ].join(", ")]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: theme.palette.background.lightAnimationBar,
                borderRadius: "3px",
                animation: chainAnimations([
                    [scaleFromBottom, 0.2],
                    [scaleToLeft, 0.2, 0.2],
                ]),
            },
            "&>*": {
                animation: `${fadeSimpleOUT} .001s .3s both`,
            },
        },

        [`${SELECTORS.SINGLE_TASK.DESCRIPTION}::before`]: {
            animation: `${fadeSimpleOUT} .001s .3s both`,
        },

        [SELECTORS.SINGLE_TASK.CHECK_ICON]: {
            "&::after": {
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                top: "-2px",
                left: "-2px",
            },
        },
    },
}));

export const Description = styled("h4")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "500",
    cursor: "default",
    userSelect: "none",
    margin: "0 0 6px 0",
    position: "relative",
    transition: "color .3s",
    "&::before": {
        content: "''",
        transform: "scaleX(0)",
        position: "absolute",
        top: "50%",
        width: "100%",
        height: "3px",
        background: theme.palette.primary.main,
        left: 0,
        transition: "transform .3s",
        transformOrigin: "left",
    },
}));
