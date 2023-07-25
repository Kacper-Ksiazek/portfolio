// Tools
import { styled } from '@mui/material';
import { ComponentThemes ,shouldForwardProp, type ComponentThemeName} from "../_common_component_color_themes";
// Material UI Components
import Select from "@mui/material/Select";
// Styled components
interface SelectProps{
    componentThemeID?: ComponentThemeName
}

export default styled(Select, {shouldForwardProp})< SelectProps>(({ theme, ...props }) => {
    const {background,fontColor,borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI",theme);

    return ({
        fontSize: "16px",
        color: fontColor,
        background,
        fieldset: {
            borderColor ,
            transition: "border-color .2s",
        },
        "&:hover": {
            fieldset: {
                borderColor:`${fontColor} !important`,
            },
        },
        "@media (max-width:500px)": {
            width: "100%",
        },
        ".MuiSelect-select": {
            padding: "14px 16px",
        },
        svg: {
            color: "inherit !important",
        },
    });

});