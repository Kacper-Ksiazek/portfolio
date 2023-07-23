// Tools
import { styled } from "@mui/material";
// Other components
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function shouldForwardProp(prop: string) {
    return !["size"].includes(prop);
}

export default styled(DatePicker, { shouldForwardProp })<{ size: `${string}px` }>(({ theme, ...props }) => ({
    height: props.size,
    width: "100%",
    fieldset: {
        borderColor: theme.palette.background.MUIFormElementsBorder,
        transition: "border-color .2s",
    },
    "&:hover": {
        fieldset: {
            borderColor: "#fff !important",
        },
    },
    ".MuiOutlinedInput-root": {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        paddingRight: "36px",
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
    },
    svg: {
        fontSize: "20px",
        color: theme.palette.text.MUIFormElementText,
    },
}));
