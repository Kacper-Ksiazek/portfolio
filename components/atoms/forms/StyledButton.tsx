// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export type Color = "MUIFormElement" | "text" | "primary" | "secondary" | "error" | "success";

interface StyledButtonProps extends ButtonBaseProps {
    color?: Color;
    iconButton?: boolean;
    subtleHoverEffect?: boolean;
}

export default styled(ButtonBase, {
    shouldForwardProp: (prop: string) => !["color", "iconButton", "subtleHoverEffect"].includes(prop),
})<StyledButtonProps>(({ theme, ...props }) => {
    const possibleColor: Record<Color, { main: string; contrast: string; border?: string }> = {
        MUIFormElement: {
            main: theme.palette.background.MUIFormElementsBackground,
            border: theme.palette.background.MUIFormElementsBorder,
            contrast: theme.palette.text.MUIFormElementText,
        },
        error: {
            main: theme.palette.error.main,
            contrast: "#fff",
        },
        primary: {
            main: theme.palette.primary.main,
            contrast: "#fff",
        },
        success: {
            main: theme.palette.success.main,
            contrast: "#fff",
        },
        secondary: {
            main: theme.palette.secondary.main,
            contrast: "#fff",
        },
        text: {
            main: theme.palette.mode == "light" ? theme.palette.text.primary : theme.palette.background.lightSectionBackground,
            contrast: theme.palette.mode == "light" ? theme.palette.text.secondary : "#fff",
        },
    };

    const { main: backgroundColor, contrast: fontColor, border: borderColor } = possibleColor[props.color ?? "text"];

    const applySubtleHoverEffect = props.subtleHoverEffect === true || props.color === "MUIFormElement";

    if (props.subtleHoverEffect === true && props.color === "MUIFormElement") {
        console.warn("Redundant usage of **subtleHoverEffect** prop; Following effect had been already obtained due to the **MuiFormElement** color mode");
    }

    return {
        background: backgroundColor,
        color: fontColor,
        borderRadius: "3px",
        border: `1px solid ${borderColor ?? backgroundColor}`,
        transition: props.color === "MUIFormElement" ? "none" : "all .3s",
        fontSize: "16px",
        padding: "4px 10px",
        fontFamily: "Noto Sans",
        svg: {
            color: "inherit !important",
        },
        "&:not(&:nth-of-type(1))": {
            marginLeft: "10px",
        },
        "&:hover, &:focus":
            applySubtleHoverEffect === false
                ? {
                      color: backgroundColor,
                      background: fontColor,
                  }
                : {
                      borderColor: fontColor,
                  },
        "&.Mui-disabled": {
            border: `1px solid #000`,
            background: theme.palette.background.disabledElementBackground,
            color: theme.palette.text.disabled,
        },
        ...(props.iconButton && {
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
        }),
    };
});
