// Tools
import { alpha, styled } from "@mui/material";

interface StyledCheckboxWrapperProps {
    disabled: boolean;
    recentlyClicked: boolean;
}

export const StyledCheckboxWrapper = styled("div", {
    shouldForwardProp: (prop: string) => {
        if ((["recentlyClicked"] as (keyof StyledCheckboxWrapperProps)[]).includes(prop as any)) {
            return false;
        }
        return true;
    },
})<StyledCheckboxWrapperProps>(({ theme, ...props }) => ({
    background: theme.palette.background.MUIFormElementsBackground,
    display: "flex",
    alignItems: "center",
    padding: "0 24px 0 8px",
    borderRadius: "3px",
    border: `1px solid ${theme.palette.background.MUIFormElementsBorder}`,
    boxSizing: "border-box",
    cursor: "pointer",
    userSelect: "none",
    color: theme.palette.text.primary,

    ...(!props.disabled && {
        "&:hover": {
            borderColor: theme.palette.text.primary,
        },
    }),

    ...(props.disabled && {
        cursor: "default",
        border: `1px solid #000`,
        color: alpha("#000", 0.8),
        background:
            theme.palette.mode === "light" //
                ? alpha(theme.palette.text.primary, 0.4)
                : alpha(theme.palette.background.lightAnimationBar, 0.7),

        ".icon-wrapper": {
            borderColor: alpha("#000", 0.8),
            svg: {
                opacity: 0.5,
            },
        },
    }),

    ...(!props.recentlyClicked &&
        !props.disabled && {
            "&:focus": {
                outline: `1px solid ${theme.palette.primary.main} !important`,
                border: `1px solid ${theme.palette.primary.main} !important`,
            },
        }),
}));

type Size = "small" | "normal";

export const IconWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["size"].includes(prop),
})<{ size: Size }>(({ theme, ...props }) => {
    const size = props.size === "small" ? "20px" : "26px";

    return {
        ...theme.mixins.flex_center,
        border: `1px solid ${alpha(theme.palette.text.primary, theme.palette.mode === "light" ? 1 : 0.23)}`,
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
