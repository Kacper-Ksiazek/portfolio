// Tools
import { RWD } from "./RWD";
import { styled } from "@mui/material";
import { SELECTORS } from "../css_references";

export default styled("div", {
    shouldForwardProp: (prop) => prop !== "translate",
})<{ transform: number }>(({ theme, ...props }) => {
    return {
        height: "42px",
        display: "flex",
        alignItems: "center",
        background: theme.palette.background.MUIFormElementsBackground,
        border: `1px solid ${theme.palette.background.MUIFormElementsBorder}`,
        userSelect: "none",
        position: "relative",
        borderRadius: "3px",
        fontSize: "18px",

        [SELECTORS.LABEL]: {
            padding: "0 32px",
        },

        "&::before": {
            content: "''",
            ...theme.mixins.absolute_full,
            background: theme.palette.background.paper,
            zIndex: -1,
        },

        [SELECTORS.SINGLE_RELEASE_BUTTON]: {
            position: "relative",
            zIndex: 1,
            height: "100%",
            width: "96px",
            button: {
                background: "transparent",
                border: "none",
                width: "100%",
                height: "100%",
                color: "#fff",
                fontSize: "inherit",
                fontWeight: 500,
                "&:not(&:disabled)": {
                    cursor: "pointer",
                },
            },
        },

        [SELECTORS.CHOICE_INDICATOR]: {
            position: "absolute",
            top: 0,
            right: 0,
            width: "96px",
            height: "100%",
            background: theme.palette.primary.main,
            borderRadius: "3px",
            transition: "transform .3s",
            transform: `translateX(calc(${props.transform * -100}%))`,
        },

        ...(RWD as any),
    };
});
