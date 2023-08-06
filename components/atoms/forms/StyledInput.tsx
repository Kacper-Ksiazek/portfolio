// Tools
import { styled, alpha } from "@mui/material";
import { ComponentThemes ,shouldForwardProp, type ComponentThemeName} from "./_common_component_color_themes";
// Material UI Components
import TextField from "@mui/material/TextField";
// Styled components

export default styled(TextField, {shouldForwardProp})<{
    componentThemeID?: ComponentThemeName
}>(({ theme ,...props}) => {
    const { background, fontColor, borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI", theme);

    return {
        ".MuiOutlinedInput-root": {
            color: fontColor,
            background,
            fieldset: {
                borderColor,
                transition: "border-color .2s",
            },
        },
        textarea: {
            "&::-webkit-scrollbar": { width: "8px" },
            "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "2px",
            },
        },
        "&:hover": {
            ".MuiOutlinedInput-root": {
                "&:not(&.Mui-focused)":{
                    fieldset: {
                        borderColor: fontColor,
                    },
                },
            },
        },
    };
});
