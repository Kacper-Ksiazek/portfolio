// Tools
import { styled } from "@mui/material";

export default styled("div", {
    shouldForwardProp: (prop) => prop !== "translate",
})<{ transform: number }>(({ theme, ...props }) => {
    const buttonWidth: string = "96px";

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
        "span.label": {
            padding: "0 32px",
        },
        "&::before": {
            content: "''",
            ...theme.mixins.absolute_full,
            background: theme.palette.background.paper,
            zIndex: -1,
        },
        button: {
            position: "relative",
            background: "transparent",
            border: "none",
            width: buttonWidth,
            color: "#fff",
            zIndex: 1,
            height: "100%",
            fontSize: "inherit",
            fontWeight: 500,
            transition: "background .3s, transform .15s",
            "&:not(&:disabled)": {
                cursor: "pointer",
            },
            "&:nth-of-type(1)": {
                borderRadius: "3px 0 0 3px",
            },
            "&:nth-of-type(2)": {
                borderRadius: "0px 3px 3px 0",
            },
        },
        "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            right: 0,
            width: buttonWidth,
            height: "100%",
            background: theme.palette.primary.main,
            borderRadius: "3px",
            transition: "transform .3s",
            transform: `translateX(calc(${props.transform * -1} * ${buttonWidth}))`,
        },
    };
});
