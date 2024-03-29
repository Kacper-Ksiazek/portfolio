// Tools
import { alpha, styled } from "@mui/material";
import { ComponentThemes , type ComponentThemeName} from "../_common_component_color_themes";

interface StyledCheckboxBaseProps {
    disabled: boolean;
    recentlyClicked: boolean;

    componentThemeID?: ComponentThemeName
}

export const StyledCheckboxBase = styled("button", {
    shouldForwardProp: (prop: string) => {
        if ((["recentlyClicked","componentThemeID"] as (keyof StyledCheckboxBaseProps)[]).includes(prop as any)) {
            return false;
        }
        return true;
    },
})<StyledCheckboxBaseProps>(({ theme, ...props }) => {
    const { background, fontColor, borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI", theme);

    return ({
        background,
        display: "flex",
        alignItems: "center",
        padding: "0 24px 0 8px",
        borderRadius: "3px",
        border: `1px solid ${borderColor}`,
        boxSizing: "border-box",
        cursor: "pointer",
        userSelect: "none",
        color: fontColor,
        transition: "border-color .2s",
        
        span: {
            fontSize: "16px",
        },

        ...(!props.disabled && {
            "&:hover": {
                borderColor: fontColor,
                ".icon-wrapper": {
                    borderColor: fontColor,
                },
            },
        }),

        ...(props.disabled && {
            cursor: "default",
            border: `1px solid #000`,
            color: alpha("#000", 0.8),
            background: theme.palette.background.disabledElementBackground,
            ".icon-wrapper": {
                borderColor: theme.palette.text.disabled,
                svg: {
                    color: theme.palette.text.disabled,
                    opacity: .5,
                },
            },
        }),

        ...(!props.recentlyClicked &&
            !props.disabled && {
            "&:focus": {
                outline: `1px solid ${theme.palette.primary.main} !important`,
                border: `1px solid ${theme.palette.primary.main} !important`,
                ".icon-wrapper": {
                    outline: `1px solid ${theme.palette.primary.main} !important`,
                    borderColor: theme.palette.primary.main,
                },
            },
        }),
    });
});
