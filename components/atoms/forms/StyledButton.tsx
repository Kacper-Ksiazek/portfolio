// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
export type Color = "text" | "primary" | "secondary" | "error" | "success";

interface StyledButtonProps extends ButtonBaseProps {
    color?: Color;
    iconButton?: boolean;
}

export default styled(ButtonBase, {
    shouldForwardProp: (prop: string) => !["color"].includes(prop),
})<StyledButtonProps>(({ theme, ...props }) => {
    const possibleColor: Record<Color, { main: string; contrast: string }> = {
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

    const { main: backgroundColor, contrast: fontColor } = possibleColor[props.color ?? "text"];

    return {
        background: backgroundColor,
        color: fontColor,
        borderRadius: "3px",
        border: `1px solid ${backgroundColor}`,
        transition: "all .3s",
        fontSize: "16px",
        padding: "4px 10px",
        fontFamily: "Noto Sans",
        svg: {
            color: "inherit !important",
        },
        "&:not(&:nth-of-type(1))": {
            marginLeft: "10px",
        },
        "&:hover, &:focus": {
            color: backgroundColor,
            background: fontColor,
        },
        "&.Mui-disabled": {
            border: `1px solid #000`,
            background:
                theme.palette.mode === "light" //
                    ? alpha(theme.palette.text.primary, 0.4)
                    : alpha(theme.palette.text.secondary, 0.4),
            color: alpha("#000", 0.8),
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
