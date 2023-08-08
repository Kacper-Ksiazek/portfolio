// Tools
import { styled } from "@mui/material";
import { ComponentThemes ,shouldForwardProp, type ComponentThemeName} from "../_common_component_color_themes";
// Styled components
interface SelectProps{
    componentThemeID?: ComponentThemeName
}

export default styled("button", {shouldForwardProp})< SelectProps>(({ theme, ...props }) => {
    const {background,fontColor,borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI",theme);

    return ({
        ...theme.mixins.absolute_full,
        zIndex: 1,
        background,
        color: fontColor,
        border: '1px solid',
        borderColor,
        height: '42px',
        borderRadius: '3px',
        transition: '.2s border-color',
        fontFamily: '"Noto Sans", sans-serif',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '16px',
        
        "span.value":{
            transition: 'opacity .3s',
            "&.empty":{
                opacity: .5   
            }
        },

        "&:hover":{
            borderColor: fontColor, 
            cursor: 'pointer'
        },

        "&:disabled":{
           background: theme.palette.background.disabledElementBackground, 
           borderColor: '#000',
           cursor: 'default'
        }
    });
});
