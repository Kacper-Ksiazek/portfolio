// Tools
import { styled } from '@mui/material';
import { ComponentThemes ,shouldForwardProp, type ComponentThemeName} from "../_common_component_color_themes";
// Styled components
interface StyledColorPickerProps{
    componentThemeID?: ComponentThemeName
}

export default styled("div", {shouldForwardProp})<StyledColorPickerProps>(({ theme, ...props }) => {
    const { background, fontColor, borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI", theme);

    return ({
        width: "42px",
        height: "42px",
        background,
        border: `1px solid ${borderColor}`,
        borderRadius: "3px",
        boxSizing: "border-box",
        position: "relative",
        marginLeft: "8px",
        input: {
            ...theme.mixins.absolute_center,
            zIndex: 0,
            padding: 0,
            width: "1px",
            height: "1px",
        },
        cursor: "pointer",
        transition: "all .3s",
        "div.color-indicator": {
            ...theme.mixins.absolute_center,
            width: "calc(100% - 14px)",
            height: "calc(100% - 14px)",
            borderRadius: "2px",
            transition: "background-color .3s",
            zIndex: 1,
        },
        "&:hover":{
            borderColor: fontColor
        },
        "&:focus": {
            borderColor: theme.palette.primary.main,
            outline: `1px solid ${theme.palette.primary.main}`,
        },
        "&.error": {
            borderColor: `${theme.palette.error.main} !important`,
            outline: `1px solid ${theme.palette.error.main} !important`,
        },
    });
});