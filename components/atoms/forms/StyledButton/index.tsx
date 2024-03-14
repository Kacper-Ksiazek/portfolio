// Tools
import { styled } from "@mui/material";
import {StyledButtonColorThemes,type StyledButtonThemeName} from './ComponentColorThemes'
// Types
import type { ButtonBaseProps } from "@mui/material/ButtonBase";
// Material UI Components
import ButtonBase from "@mui/material/ButtonBase";
// Styled components

export interface StyledButtonProps extends ButtonBaseProps {
    color?: never;
    iconButton?: boolean;
    subtleHoverEffect?: boolean;
    componentThemeID?: StyledButtonThemeName;
}

export default styled(ButtonBase, {
    shouldForwardProp: (prop: string) => !["color", "iconButton", "subtleHoverEffect","componentThemeID"].includes(prop),
})<StyledButtonProps>(({ theme, ...props }) => {
    const {background,borderColor,fontColor} = StyledButtonColorThemes.getTheme(props.componentThemeID ?? "TEXT",theme);

    const applySubtleHoverEffect = props.subtleHoverEffect === true || props.color === "MUIFormElement";

    if (props.subtleHoverEffect === true && props.color === "MUIFormElement") {
        console.warn("Redundant usage of **subtleHoverEffect** prop; Following effect had been already obtained due to the **MuiFormElement** color mode");
    }


    return {
        background,
        color: fontColor,
        borderRadius: "3px",
        border: `1px solid ${borderColor ?? background}`,
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
        "&:hover":
            applySubtleHoverEffect === false
                ? {
                      color: background,
                      background: fontColor,
                  }
                : {
                      borderColor: fontColor,
                  },
        "&:focus":{
            borderColor :`${theme.palette.primary.main} !important`
        },
        "&.Mui-disabled": {
            border: `1px solid ${theme.palette.background.disabledElementBackground}`,
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
