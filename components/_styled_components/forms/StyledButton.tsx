// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components
type Color = "text" | "primary" | "secondary" | "error" | "success";

interface StyledButtonProps extends ButtonBaseProps {
    color?: Color;
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
            main: theme.palette.text.primary,
            contrast: "#fff",
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
            border: `1px solid ${theme.palette.text.primary}`,
            background: alpha(theme.palette.text.primary, 0.4),
            color: theme.palette.text.primary,
        },
    };
});
