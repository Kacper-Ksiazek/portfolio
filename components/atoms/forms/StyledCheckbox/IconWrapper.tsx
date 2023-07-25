// Tools
import { styled } from "@mui/material";

type Size = "small" | "normal";

export const IconWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["size"].includes(prop),
})<{ size: Size }>(({ theme, ...props }) => {
    const size = props.size === "small" ? "20px" : "26px";

    return {
        ...theme.mixins.flex_center,
        border: `1px solid ${theme.palette.background.MUIFormElementsBorder}`,
        marginRight: props.size === "small" ? "6px" : "8px",
        borderRadius: "3px",
        width: size,
        height: size,
        transition: "background .3s, border-color .3s",
        svg: {
            transition: "opacity .3s",
            opacity: theme.palette.mode === "light" ? 1 : 0.23,
            fontSize: props.size === "small" ? "20px" : "24px",
        },
        "&.selected": {
            background: theme.palette.primary.main,
            color: "#fff",
            ...(theme.palette.mode === "light" && { borderColor: theme.palette.primary.main }),
            svg: {
                opacity: 1,
            },
        },
    };
});
