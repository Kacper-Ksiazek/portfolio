// Tools
import { styled } from "@mui/material";
import { ComponentThemes , type ComponentThemeName} from "../_common_component_color_themes";
// Other components
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function shouldForwardProp(prop: string) {
    return !["size"].includes(prop);
}

interface StyledDatePickerBaseProps {
    size: `${string}px` 
    disabled?: boolean;
    componentThemeID?: ComponentThemeName
}

export default styled(DatePicker, { shouldForwardProp })<StyledDatePickerBaseProps >(({ theme, ...props }) => {
    const { background, fontColor, borderColor} = ComponentThemes.getTheme(props.componentThemeID ?? "MUI", theme);

    return ({
        height: props.size,
        width: "100%",
        background,
        fieldset: {
            borderColor,
            borderRadius: '3px',
            transition: "border-color .2s",
        },
        "&:hover": {
            fieldset: {
                borderColor: `${ fontColor} !important`,
            },
        },
        ".MuiOutlinedInput-root": {
            paddingLeft: '4px',
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-end",
            paddingRight: "36px",
            background: 'none',
            ".MuiIconButton-edgeEnd": {
                marginRight: "-16px",
                transform: "translateX(-4px)",
            },
        },
        ".MuiSelect-select": {
            fontSize: "16px",
            paddingBottom: "6px !important",
            paddingTop: "6px !important",
        },
        ".MuiInputBase-input": {
            width: "128px",
            height: props.size,
            paddingTop: "0px",
            paddingBottom: "0px",
            color: theme.palette.text.MUIFormElementText,
        },
        input: {
            paddingLeft: "16px",
            cursor: 'pointer',
            userSelect: 'none'
        },
        svg: {
            fontSize: "20px",
            color: theme.palette.text.MUIFormElementText,
        },
    });
});
