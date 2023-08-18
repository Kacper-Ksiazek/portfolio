// Tools
import { alpha, styled } from "@mui/material";
import { ComponentThemes , type ComponentThemeName} from "../_common_component_color_themes";
// Styled components
interface SelectProps{
    small?: boolean
    componentThemeID?: ComponentThemeName
}

export function shouldForwardProp(propName: string ): boolean {
    return !(["componentThemeID","small"] as (keyof SelectProps)[]).includes(propName as any);
}

export default styled("button", {shouldForwardProp})< SelectProps>(({ theme, ...props }) => {
    const {background,fontColor,borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI",theme);

    const relativeSize = props.small ? "32px" : "42px";

    return ({
        ...theme.mixins.absolute_full,
        zIndex: 1,
        background,
        color: fontColor,
        border: '1px solid',
        borderColor,
        height: relativeSize,
        borderRadius: '3px',
        transition: '.2s border-color',
        fontFamily: '"Noto Sans", sans-serif',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '10px',
        fontSize: '16px',
        ".MuiInputBase-input": {
            height:relativeSize
        },

        "div.icon-wrapper":{
            width: '36px',
            height: '36px',
            ...theme.mixins.flex_center,
            borderRadius: '100%',
            background: 'transparent',
            transition: 'background .2s',
            "&:hover":{
                background: alpha("#fff",.08),
            }
        },
        
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
